import React from "react";

export type NotificationSettings = {
    productUpdates: boolean;
    orderUpdates: boolean;
    ticketUpdates: boolean;
    securityAlerts: boolean;
};

export type PersonalToken = {
    id: string;
    name: string;
    value: string;
    createdAt: string;
    lastUsedAt: string;
};

export type LoginDevice = {
    id: string;
    name: string;
    ip: string;
    location: string;
    lastActiveAt: string;
    current?: boolean;
};

export type AccountStats = {
    orders: number;
    licenses: number;
    tickets: number;
    referrals: number;
};

export type AccountSectionItem = {
    id: string;
    title: string;
    meta: string;
    detail: string;
};

export type AccountSections = {
    messages: AccountSectionItem[];
    orders: AccountSectionItem[];
    coupons: AccountSectionItem[];
    licenses: AccountSectionItem[];
    tickets: AccountSectionItem[];
    invoices: AccountSectionItem[];
    referrals: AccountSectionItem[];
    market: AccountSectionItem[];
    storeOrders: AccountSectionItem[];
    groupBuy: AccountSectionItem[];
};

export type AccountSession = {
    id: string;
    displayName: string;
    username: string;
    email: string;
    emailVerified: boolean;
    phone: string;
    phoneVerified: boolean;
    role: string;
    description: string;
    registeredAt: string;
    provider: string;
    notifications: NotificationSettings;
    tokens: PersonalToken[];
    devices: LoginDevice[];
    stats: AccountStats;
    sections: AccountSections;
};

type PasswordLoginInput = {
    identifier: string;
    password: string;
};

type PasswordRegisterInput = {
    displayName: string;
    email: string;
    password: string;
};

type PhoneLoginInput = {
    phone: string;
    code: string;
};

type OAuthLoginInput = {
    provider: string;
};

type ProfileUpdateInput = {
    displayName: string;
    email: string;
    description: string;
};

type PhoneCodeResult = {
    message: string;
    devCode?: string;
};

type AccountSessionContextValue = {
    session: AccountSession | null;
    loading: boolean;
    error: string;
    refreshSession: () => Promise<AccountSession | null>;
    loginWithPassword: (input: PasswordLoginInput) => Promise<AccountSession>;
    registerWithPassword: (
        input: PasswordRegisterInput,
    ) => Promise<AccountSession>;
    requestPhoneCode: (phone: string) => Promise<PhoneCodeResult>;
    loginWithPhone: (input: PhoneLoginInput) => Promise<AccountSession>;
    loginWithProvider: (input: OAuthLoginInput) => Promise<AccountSession>;
    logout: () => Promise<void>;
    updateProfile: (input: ProfileUpdateInput) => Promise<AccountSession>;
    updateNotifications: (
        input: Partial<NotificationSettings>,
    ) => Promise<AccountSession>;
    createToken: (name?: string) => Promise<AccountSession>;
    signOutOtherDevices: () => Promise<AccountSession>;
};

declare global {
    interface Window {
        __ICECMS_AUTH_API_BASE__?: string;
    }
}

const AccountSessionContext =
    React.createContext<AccountSessionContextValue | null>(null);

const getApiBase = () => {
    if (typeof window === "undefined") {
        return process.env.NODE_ENV === "development"
            ? "http://localhost:3001/api"
            : "/api";
    }

    if (window.__ICECMS_AUTH_API_BASE__) {
        return window.__ICECMS_AUTH_API_BASE__;
    }

    const { hostname, port } = window.location;

    if (hostname === "localhost" || hostname === "127.0.0.1") {
        return `http://${hostname}:3001/api`;
    }

    return "/api";
};

const request = async <T,>(
    path: string,
    init: RequestInit = {},
): Promise<T> => {
    const headers = new Headers(init.headers || {});
    const isJsonBody =
        init.body !== undefined &&
        !(init.body instanceof FormData) &&
        !headers.has("Content-Type");

    if (isJsonBody) {
        headers.set("Content-Type", "application/json");
    }

    const response = await fetch(`${getApiBase()}${path}`, {
        ...init,
        headers,
        credentials: "include",
    });

    const contentType = response.headers.get("content-type") || "";
    const data = contentType.includes("application/json")
        ? await response.json()
        : null;

    if (!response.ok) {
        throw new Error(data?.message || "请求失败");
    }

    return data as T;
};

export const AccountSessionProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [session, setSession] = React.useState<AccountSession | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState("");

    const applySession = React.useCallback((nextSession: AccountSession | null) => {
        setSession(nextSession);
        return nextSession;
    }, []);

    const refreshSession = React.useCallback(async () => {
        try {
            const result = await request<{ session: AccountSession | null }>(
                "/auth/session",
            );
            setError("");
            return applySession(result.session);
        } catch (requestError: any) {
            setError(requestError?.message || "无法获取会话");
            return applySession(null);
        } finally {
            setLoading(false);
        }
    }, [applySession]);

    React.useEffect(() => {
        void refreshSession();
    }, [refreshSession]);

    const wrapSessionMutation = React.useCallback(
        async <T extends { session: AccountSession }>(promise: Promise<T>) => {
            const result = await promise;
            setError("");
            return applySession(result.session) as AccountSession;
        },
        [applySession],
    );

    const loginWithPassword = React.useCallback(
        async (input: PasswordLoginInput) =>
            wrapSessionMutation(
                request("/auth/login", {
                    method: "POST",
                    body: JSON.stringify(input),
                }),
            ),
        [wrapSessionMutation],
    );

    const registerWithPassword = React.useCallback(
        async (input: PasswordRegisterInput) =>
            wrapSessionMutation(
                request("/auth/register", {
                    method: "POST",
                    body: JSON.stringify(input),
                }),
            ),
        [wrapSessionMutation],
    );

    const requestPhoneCode = React.useCallback(async (phone: string) => {
        const result = await request<PhoneCodeResult>("/auth/request-phone-code", {
            method: "POST",
            body: JSON.stringify({ phone }),
        });

        setError("");
        return result;
    }, []);

    const loginWithPhone = React.useCallback(
        async (input: PhoneLoginInput) =>
            wrapSessionMutation(
                request("/auth/login-phone", {
                    method: "POST",
                    body: JSON.stringify(input),
                }),
            ),
        [wrapSessionMutation],
    );

    const loginWithProvider = React.useCallback(
        async (input: OAuthLoginInput) =>
            wrapSessionMutation(
                request("/auth/oauth/demo", {
                    method: "POST",
                    body: JSON.stringify(input),
                }),
            ),
        [wrapSessionMutation],
    );

    const logout = React.useCallback(async () => {
        await request("/auth/logout", {
            method: "POST",
        });
        setError("");
        applySession(null);
    }, [applySession]);

    const updateProfile = React.useCallback(
        async (input: ProfileUpdateInput) =>
            wrapSessionMutation(
                request("/account/profile", {
                    method: "PATCH",
                    body: JSON.stringify(input),
                }),
            ),
        [wrapSessionMutation],
    );

    const updateNotifications = React.useCallback(
        async (input: Partial<NotificationSettings>) =>
            wrapSessionMutation(
                request("/account/notifications", {
                    method: "PATCH",
                    body: JSON.stringify(input),
                }),
            ),
        [wrapSessionMutation],
    );

    const createToken = React.useCallback(
        async (name?: string) =>
            wrapSessionMutation(
                request("/account/tokens", {
                    method: "POST",
                    body: JSON.stringify({ name }),
                }),
            ),
        [wrapSessionMutation],
    );

    const signOutOtherDevices = React.useCallback(
        async () =>
            wrapSessionMutation(
                request("/account/devices/signout-others", {
                    method: "POST",
                }),
            ),
        [wrapSessionMutation],
    );

    const value = React.useMemo<AccountSessionContextValue>(
        () => ({
            session,
            loading,
            error,
            refreshSession,
            loginWithPassword,
            registerWithPassword,
            requestPhoneCode,
            loginWithPhone,
            loginWithProvider,
            logout,
            updateProfile,
            updateNotifications,
            createToken,
            signOutOtherDevices,
        }),
        [
            createToken,
            error,
            loading,
            loginWithPassword,
            loginWithPhone,
            loginWithProvider,
            logout,
            refreshSession,
            registerWithPassword,
            requestPhoneCode,
            session,
            signOutOtherDevices,
            updateNotifications,
            updateProfile,
        ],
    );

    return React.createElement(
        AccountSessionContext.Provider,
        { value },
        children,
    );
};

export const useAccountSession = () => {
    const context = React.useContext(AccountSessionContext);

    if (!context) {
        throw new Error("useAccountSession must be used within AccountSessionProvider");
    }

    return context;
};
