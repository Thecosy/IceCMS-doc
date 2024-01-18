---
title: Using React Hot Toast as a Notification Provider for CRUD apps
description: We'll introduce create a custom notification provider using the react-hot-toast library.
slug: react-hot-toast
authors: david_omotayo
tags: [react, refine]
image: https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-06-react-hot-toast/social.png
hide_table_of_contents: false
---

## Introduction

Building data-intensive enterprise web applications entails coalescing numerous features that have proven to be cumbersome to develop.

An effective notification system ensures proper feedback for changes throughout your application, effortlessly improving the user experience, which has become a hallmark for modern applications.

Javascript libraries like React simplify the difficulty of building data-intensive web applications with their innovative architecture and developer-friendly syntax in an ever-evolving ecosystem. There's only so much React can do to provide a foolproof solution for building these kinds of applications. This is where frameworks like refine come into play.

Using a modular design, [refine](https://github.com/Thecosy/IceCMS) leverages the best of what the React ecosystem has to offer, ranging from design systems to state management and notification libraries, to create a multipurpose React toolkit. This toolkit not only makes building enterprise-grade applications like admin panels, dashboards, and B2B applications a breeze but also provides built-in notification providers for centralized notification management.

In this article, we'll introduce refine and explore how to set up a refine application and create a custom notification provider using the [react-hot-toast](https://react-hot-toast.com/) library.

Steps we'll cover:

- [What is react-hot-toast](#what-is-react-hot-toast)
- [What is refine](#what-is-refine)
- [Set up a refine app](#set-up-a-refine-app)
- [What is refine notification provider](#what-is-refine-notification-provider)
- [Create custom notification provider with react-hot-toast](#create-custom-notification-provider-with-react-hot-toast)
  - [Install react-hot-toast](#install-react-hot-toast)
  - [Set up a notification provider](#set-up-a-notification-provider)
  - [Integrating react-hot-toast](#integrating-react-hot-toast)
  - [Positioning your toast notifications](#positioning-your-toast-notifications)
- [Dismissing React Hot Toast Notifications](#dismissing-react-hot-toast-notifications)

## What is react-hot-toast

 <div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-06-react-hot-toast/hot-toast.png"  alt="react-hot-toast" />
</div>

<br/>

[React-hot-toast](https://react-hot-toast.com/) is a lightweight and open-source notification library for React. Like other React toast libraries, this library is designed to mimic push notifications popularized by native operating systems, such as iOS and Android, in web applications.

The library provides a simple API for creating and displaying various types of notifications, including success, error, and loading messages in React or React-based frameworks like refine. With minimal setup requirements, you can easily incorporate a toast notification into your application using a component-based approach facilitated by the `<Toaster />` component and the `toast()` function.

The `<Toaster />` component and the `toast()` function are the primary building blocks of the react-hot-toast library. The `<Toaster/>` component creates a DOM element for rendering toast notifications and accepts several props and options that can be used to customize the appearance and behavior of the notifications. Below is the basic structure of the `<Toaster />` component:

```tsx
<Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: "",
    duration: 5000,
    style: {
      background: "#363636",
      color: "#fff",
    },
  }}
/>
```

The `toast()` function triggers a notification anywhere in your application. It accepts the toast message and an optional configuration object, also known as `ToastOptions`, as its second argument.

This object is used to configure and customize the appearance and type of the toast notification. If a configuration object is provided, it will overwrite the `toastOptions` object property on the `<Toaster/>` component.

The following example demonstrates how to invoke a toast notification with similar `toastoptions` as the previous example with the `<Toaster/>` component.

```tsx
toast("Hello World", {
  className: "",
  duration: 799,
  style: {
    background: "#363636",
    color: "#fff",
  },
});
```

Alternatively, the `toast` function offers the option to chain methods that invoke specific notification types, such as success, error, loading, and custom.

```tsx
Success;
toast.success("Successfully created!");

Error;
toast.error("This is an error!");

Loading;
toast.loading("Waiting...");

Custom;
toast.custom(<div>Hello World</div>);
```

Refer to the [react-hot-toast documentation](https://react-hot-toast.com/docs/toast) to learn more about the `toast` function.

## What is refine

[refine](https://github.com/Thecosy/IceCMS) is an open-source, React-based framework that facilitates the development of enterprise web applications, such as admin panels, dashboards, and B2B applications. It is a feature-rich library that prioritizes simplicity by eliminating repetitive tasks for CRUD, routing, internalization, and networking.

refine is innately agnostic, which allows for the seamless integration of the highlighted features with widely used design systems, data fetching, state management, and complex form management libraries such as Material Design, Ant Design, React Query, React Hook Form, and more.

Additionally, refine's loosely coupled design allows for the seamless integration of various backend architectures, ranging from a simple REST API to complex headless CMSs and databases, including:

- Supabase
- AppWrite
- Strapi
- Airtable
- Hasura

The [documentation](https://refine.dev/docs/) provides detailed information about refine and its architecture. You can start there to learn more about the refine framework. However, in the section below, we will explore how to set up a refine application from scratch.

## Set up a refine app

The [refine app Scaffolder](https://refine.dev/#playground) is an efficient tool that allows you to create refine app seamlessly in your browser.

You can choose the libraries and frameworks you want to work with, and the tool will generate a boilerplate code for you.
Once you have completed these steps, you will be able to follow the on-screen instructions to create a refine application tailored to your preference.

For this tutorial, we will use the following configurations:

- React platform: Vite
- UI framework: Headless
- Backend: REST API
- Authentication Provider: No Auth

After creating your project, give it a title or use the default title, and then build and download the Gzipped compressed file to your local computer.

Next, extract the downloaded compressed file using a zip file extractor and open the project in an IDE of your choice. Finally, run the following commands to install the project dependencies and start the development server.

```
// Install dependencies
npm install

// Start development server
npm run dev
```

Upon successfully starting the development server, navigate to [http://localhost:5173](http://localhost:5173) on your browser of choice. Your project should render as shown in the image below.

 <div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-06-react-hot-toast/initial-app.png"  alt="react-hot-toast" />
</div>

<br/>

## What is refine notification provider

The [refine notification provider](https://refine.dev/docs/api-reference/core/providers/notification-provider/) is a feature that enables the display of notifications to users within a refine application. The primary purpose of the notification provider is to centralize the management of notifications, making it easy to display different types of notifications, such as “**success**”, “**error**”, and “**progress**”, to users from different parts of the application.

To understand how the notification provider works, we first need to comprehend how it interacts with the application. For every design system you choose to use in your refine application, whether it's Ant Design, Material Design, Mantine, or Chakra UI, refine provides a built-in notification provider that is passed as a prop to the refine component.

```tsx
import { notificationProvider } from "@refinedev/antd";

return (
  <Refine
    //...
    notificationProvider={notificationProvider}
  />
);
```

The code above uses refine's built-in notification provider for Ant Design. When a notification is triggered, refine will use the notification provider to invoke the Ant Design notification object and display notifications in the application. The same goes for the highlighted design systems.

 <div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-06-react-hot-toast/w-refine-provider.png"  alt="react-hot-toast" />
</div>

<br/>

The notification provider is an object with `open` and `close` methods, which refine uses to show and hide notifications.

```tsx
const notificationProvider = {
  open: () => {},
  close: () => {},
};
```

**The** `**open**` **and** `**close**` **methods**
The `open` method is invoked when refine needs to send a notification and provide feedback on users' actions in the application.

The method takes an object argument with several properties that are used to set the `message`, `description`, `type`, and a unique `key` for the notification. The predefined abstract type below illustrates the properties available to the `open` method.

```tsx
interface OpenNotificationParams {
  key?: string;
  message: string;
  type: "success" | "error" | "progress";
  description?: string;
  cancelMutation?: () => void;
  undoableTimeout?: number;
}
```

The `key`, `message`, and `type` properties are the only required properties of the group; the rest are optional. The `message` and `type` properties accept the respective notification message and type from refine, while the `key` property accepts a unique ID that helps refine identify active notifications and prevents it from displaying duplicate notifications.

```tsx
export const notificationProvider = {
      open: ({ key, message, type, undoableTimeout, cancelMutation }) => {
       ...
      },
   };
```

Unlike the `open` method, the `close` method only takes a `key` argument, which contains the unique ID of the active notification.

```tsx
export const notificationProvider = {
      ...
      close: (key: any) => toast.dismiss(key),
    };
```

The `close` method uses this unique ID to terminate or dismiss the toast notification when the set duration has elapsed.

**The** `**useNotification**` **hook**
The [`useNotification`](https://refine.dev/docs/api-reference/core/hooks/useNotification/) hook is a special function that allows you to manually invoke notifications anywhere in a refine application. It exports the `open` and `close` methods from the notification provider, which allows you to show and hide notifications from any component.

```tsx
const { open, close } = useNotification();

// Open notification
open({
  type: "success",
  message: "Success",
  description: "This is a success message",
});

// close notification
close("notification-key");
```

To learn more about the `useNottification` hook, please refer to the [documentation](https://refine.dev/docs/api-reference/core/hooks/useNotification/#basic-usage) page.

We'll see the `open` and `close` methods in action in the next section, as we explore how to create a custom notification provider Using the react-hot-toast library.

## Create custom notification provider with react-hot-toast

The notification provider is not included in your refine application by default, depending on your project's configuration. It is only set up in projects configured to use a select design system. Therefore, headless projects without a design system, such as the project we created earlier, use refine's default notification provider, which does not add notification functionality to your application.

However, refine provides the option to create custom notification providers with the React toast library of your choice. Using the notification provider object as a single source of truth, you can create a notification provider with any toast library in the React ecosystem. In this section, we will demonstrate how you can create one with the react-hot-toast library.

### Install react-hot-toast

As a first step, open your IDE's command-line tool or use the built-in one on your machine, and `cd` to your project's directory. Next, run the following command to install the react-hot-toast library as a dependency for your refine application:

```
npm install react-hot-toast
```

### Set up a notification provider

To set up a custom notification provider, we'll begin by creating a dedicated file to house all of our notification provider's logic.

Inside the `src` directory, create a new folder and name it `providers`. You can choose any name you prefer, but it's recommended to use providers to maintain a coherent file structure.

Next, create a new file inside the newly created providers directory and name it `NotificationProvider.tsx`. Then, add the following code:

```tsx
import React from "react";
import { NotificationProvider } from "@refinedev/core";

export const notificationProvider: NotificationProvider = {
  open: ({ key, message, type }) => {},
  close: (key: any) => {},
};
```

In the code above, we export a `notificationProvider` object with the `open` and `close` methods defined. Then we use the built-in `NotificationProvider` method type from refine's core to validate the object's structure and add type safety to the methods.

This is what the `NotificationProvider` object type looks like under the hood:

```tsx
interface NotificationProvider {
  open: (params: OpenNotificationParams) => void;
  close: (key: string) => void;
}
```

We have created a base for our notification provider. Next, we will examine how to integrate the react-hot-toast library into the provider.

### Integrating react-hot-toast

As previously explained, the `toast` function invokes a toast notification when called. Therefore, we can declare it inside the `open` and `close` methods and pass it the necessary arguments from each methods.

This way, when refine calls the `open` method, the toast method will be triggered, and a toast will be displayed on the screen. Similarly, when the notification time elapses, the `close` method is called, and the notification is removed.

Now, return to your code and update it with the following:

```tsx
import React from "react";
import { NotificationProvider } from "@refinedev/core";
import toast from "react-hot-toast";

export const notificationProvider: NotificationProvider = {
  open: ({ key, message, type }) => {
    switch (type) {
      case "success":
        toast.success(message, {
          id: key,
          position: "top-right",
        });
        break;
      case "error":
        toast.error(message, {
          id: key,
          position: "top-right",
        });
      default:
        break;
    }
  },

  close: (key: any) => {
    toast.dismiss(key);
  },
};
```

Here, we import the `toast` function from react-hot-toast and declare it inside the `open` and `close` methods, with the `message` and `key` arguments passed to it.

Since the `toast` function's toast options don't include a `type` property that we can pass the `type` argument from the `open` method to, we use a `switch` statement to check the type of notification being invoked by refine and chain the appropriate method to the `toast` function.

In the `close` method, however, we chain a dismiss method to the toast function and pass it the key argument. This method uses the key to identify active toast notifications and terminates them when the `close` method is called.

After completing the steps above, your `NotificationProvider.tsx` file should look as follows:

```tsx
import React from "react";
import { NotificationProvider } from "@refinedev/core";
import toast from "react-hot-toast";

export const notificationProvider: NotificationProvider = {
  open: ({ key, message, type }) => {
    switch (type) {
      case "success":
        toast.success(message, {
          id: key,
          position: "top-right",
        });
        break;
      case "error":
        toast.error(message, {
          id: key,
          position: "top-right",
        });
      default:
        break;
    }
  },
  close: (key: any) => {
    toast.dismiss(key);
  },
};
```

To complete the setup, we'll add the newly created `notificationProvider` object and the `<Toaster/>` component from react-hot-toast to the refine context via the `notificationProvider` prop and the route `element` on the `<Refine>` component.

To do this, open the `App.tsx` file and make the following modifications:

```tsx
...
    import { Toaster } from "react-hot-toast";
    import { notificationProvider } from "./providers/notificationProvider";


    function App() {
      ...
      return (
        <BrowserRouter>
            <Refine
              ...
              notificationProvider={notificationProvider}
              i18nProvider={i18nProvider}
              ...
            >
              <Routes>
                <Route
                  element={
                    <Layout>
                      <Outlet />
                      <Toaster />
                    </Layout>
                  }
                >
                ...
                </Route>
              </Routes>
              <UnsavedChangesNotifier />
            </Refine>
        </BrowserRouter>
      );
    }
```

Congratulations! You have successfully created a custom notification provider for your refine application. You can now preview your notification by editing or creating a record on the dashboard.

**Success notification**

 <div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-06-react-hot-toast/success-min.gif"  alt="react-hot-toast" />
</div>

<br/>

### Positioning your toast notifications

React Hot Toast lets you easily pick where you want the toasts to show up on the screen. It has six ready-to-use spots, but you can also set your own spot using the 'position' setting.

```tsx
toast.success("Successfully logged in", {
  position: "top-left",
  style: {
    background: "green",
    color: "#fff",
  },
});

toast.success("Successfully logged in", {
  position: "top-center",
  style: {
    background: "green",
    color: "#fff",
  },
});

toast.success("Successfully logged in", {
  position: "top-right",
  style: {
    background: "green",
    color: "#fff",
  },
});

toast.success("Successfully logged in", {
  position: "bottom-left",
  style: {
    background: "green",
    color: "#fff",
  },
});

toast.success("Successfully logged in", {
  position: "bottom-center",
  style: {
    background: "green",
    color: "#fff",
  },
});

toast.success("Successfully logged in", {
  position: "bottom-right",
  style: {
    background: "green",
    color: "#fff",
  },
});
```

 <div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-06-react-hot-toast/location-min.gif"  alt="react-hot-toast" />
</div>

<br/>

## Dismissing React Hot Toast Notifications

We can make toast notifications go away by setting a time or using the 'dismiss' button. To use this button, you need the toast's special ID or the toast itself. You usually get the toast when you show the notification. To get rid of one toast, use the 'dismiss' function with its ID. To get rid of all toasts, just use the function without any ID.

## Conclusion

As demonstrated in the article, refine abstracts the overhead complexity involved in building system-wide customizable notification systems in React applications. Given its robust functionalities and the highly customizable nature of the react-hot-toast library, you can improve on what’s covered in this tutorial, or better yet, use any of the design systems with their built-in notification systems.

## Live CodeSandbox Example

<CodeSandboxExample path="blog-react-hot-toast" />
