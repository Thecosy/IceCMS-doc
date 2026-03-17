import React, { FC } from "react";

import { CommunityStatsProvider } from "../context/CommunityStats";
import { AccountSessionProvider } from "../hooks/use-account-session";

const Root: FC = ({ children }) => {
    return (
        <CommunityStatsProvider>
            <AccountSessionProvider>{children}</AccountSessionProvider>
        </CommunityStatsProvider>
    );
};

export default Root;
