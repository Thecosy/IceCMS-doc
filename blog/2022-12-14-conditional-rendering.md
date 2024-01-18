---
title: How to use Conditional Rendering in React
description: We'll implement Conditional Rendering in React and the various ways to use it in your React applications.
slug: react-conditional-rendering
authors: deborah_emeni
tags: [react]
image: https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/social.png
hide_table_of_contents: false
---



## Introduction
One of the essential features in modern React applications is the dynamic rendering of User Interface (UI) components with JSX based on user interactions, which cause certain events to be triggered and specific actions to be performed. These events are typically defined in functional components while building the application and are carried out by "**Conditional Rendering**."

Developers can use React to define a number of distinct functional components that are only rendered when a specific condition is passed. This is a useful feature that has provided several benefits in a variety of areas, including user personalization, defining authentication roles, and implementing Authorization.

In this article, you'll learn about Conditional Rendering in React and the various ways to use it in your React applications.

Steps we'll cover:

- [What is Conditional Rendering in React?](#what-is-conditional-rendering-in-react)
- [Demo: Methods of Conditional Rendering in React](#demo-methods-of-conditional-rendering-in-react)
- [Using If-else](#using-if-else)
- [Rendering nothing with null](#rendering-nothing-with-null)
- [Conditional rendering with switch statements](#conditional-rendering-with-switch-statements)
- [Using ternary operators](#using-ternary-operators)
- [Using Logical AND (\&\&) and OR (||) operators (Short Circuit Evaluation)](#using-logical-and--and-or--operators-short-circuit-evaluation)
- [Using IIFEs (Immediately Invoked Function Expressions)](#using-iifes-immediately-invoked-function-expressions)
- [Use cases of conditional rendering](#use-cases-of-conditional-rendering)

## What is Conditional Rendering in React?

When developing applications, you must consider the experience of your application's users. You may want to show or deliver certain functionalities to your users based on their interaction with your application. In other words, depending on the state of your application, you may want your users to have access to specific content or functionalities built into your app. All of these are made possible by conditional rendering.

In React, creating and rendering functional components in JSX is the order of the day, hence conditional rendering is the most feasible way of providing an easy user flow or customer experience based on certain events in your application.

*Next, you’ll learn various common and useful methods of conditional rendering.*

## Demo: Methods of Conditional Rendering in React

React provides users with a much more functional approach to development, along with the advantages of using only Javascript. This section will demonstrate how to perform conditional rendering in React in a variety of ways. You'll be writing and testing code in the [codesandbox](https://codesandbox.io/) environment.

To begin, create a new React application on your [codesandbox](https://codesandbox.io/).





## Using If-else

Conditional rendering in React works similarly to the if-else statement in JavaScript, and each functional component returns a JSX value (which stands for JavaScript XML) that is rendered.
The following example shows how to render JSX conditionally using the `if-else` syntax. You can accomplish this by using a variable or encapsulating the changing JSX in a wrapping function that is added to the return statement.

*The code example is available on* [*codesandbox*](https://codesandbox.io/s/using-if-else-for-conditional-rendering-6506hl)*.*

First, you'll create two components: a **HeaderComponent.js** file that contains the JSX that will be rendered when the user logs in, as shown below:

```tsx
export default function HeaderComponent(props) {
  return (
    <>
      <h1> Welcome {props.username}! </h1>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </>
  );
}
```

Create a **NotLoggedIn.js** file to house the JSX that will be rendered when the user is not logged in, as shown below:

```tsx
    export default function NotLoggedIn(props) {
     return <h2> No User Found </h2>;
    }
```

Then, import the two components into the **app.js** file and add an `if-else` condition before the `return` statement that will assign either of the components to the `{template}` depending on whether the `isLoggedIn` state is **true** or **false**:

```tsx
import HeaderComponent from "./HeaderComponent";
import NotLoggedIn from "./NotLoggedIn";
import React from "react";

import "./styles.css";

export default function App() {
  const [isloggedIn, setIsLoggedIn] = React.useState(false);
  let template;
  if (isloggedIn) {
    template = <HeaderComponent username="Debby" />;
  } else {
    template = <NotLoggedIn />;
  }
  return <div className="App">{template}</div>;
}
```

When a user logs in, the state is set to **true**, and the **welcome message** from the `HeaderComponent` is displayed to the user as follows:


<img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/screen-1.png"  alt="conditional rendering react" />

<br />


If the user is not logged in, the state is set to **false**, and the following **message** is displayed from the `NotloggedIn` component:


<img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/screen-2.png"  alt="conditional rendering react" />

<br />


## Rendering nothing with null

On occasion, you may want to limit the contents or pages that are rendered to your users based on their preferences, time, location, demography, and other interests in order to improve your application's user experience or personalization. In such a case, you would not want to bore or stress your users with irrelevant content.

When rendering JSX, conditional rendering in React gives you the option of not rendering a specific piece of content or anything to your users. A good example is the [Paypal business site](https://www.paypal.com/us/business), where users are unable to access certain PayPal businesses because the template is not being rendered.

To implement such functionality in React, use 'null' as the rendered template. Using 'null' will result in nothing being rendered and will also prevent errors due to no template being returned.
As an example, suppose you have a "food ordering" application that only renders a page to edit orders for specific users with permission rights, while users with none are rendered nothing.

Create another react application on codesandbox or clone the code example [here](https://codesandbox.io/s/rendering-nothing-with-nulll-bg5ks9?file=/src/App.js).

Then, create an **EditComponent.js** file that will contain a welcome message and a button interface for editing food orders:

```tsx
export default function HeaderComponent(props) {
  return (
    <>
      <h1> Welcome {props.username}! </h1>
      <button style={{ padding: "10px", background: "green", color: "white" }}>
        {" "}
        Edit{" "}
      </button>
    </>
  );
}
```

Import the `EditComponent` into the **App.js** file and add a state `isHasPermission` to check if the user has the permission to edit. Then, add a condition that checks if the user has editing permission and returns the `EditComponent` or `null` depending on whether the state is **true** or **false**:

```tsx
import EditComponent from "./EditComponent";
import React from "react";

import "./styles.css";

export default function App() {
  const [isHasPermission, setIsHasPermission] = React.useState(true);
  let template;
  if (isHasPermission) {
    template = <EditComponent username="Debby" />;
  } else {
    template = null;
  }
  return (
    <div className="App">
      <div>
        <ul>
          <li> Food </li>
          <li> Rice </li>
          <li> Goat </li>
          <li> Food </li>
        </ul>
      </div>
      {template}
    </div>
  );
}
```

 If the user has permission, the state is set to **true** and the `EditComponent` is rendered as follows:



<img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/screen-3.png"  alt="conditional rendering react" />

<br />


If the user has no permission, the state is set to **false** and `null` is rendered as the `template`:




<img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/screen-4.png"  alt="conditional rendering react" />

<br />

## Conditional rendering with switch statements

There are times when you may want to show a different UI to users based on the state of the application, such as the user's value. The [JavaScript Switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) is ideal for this functionality.

Switch statements are not part of the JSX syntax, and so they cannot be used directly within React. You can, however, use the Switch statements in a subcomponent before using the component in the main component.

In the following example, you will use Switch statements to render different content based on a specific case. You will create an input that takes the user's value and renders the components the user requests.

What is rendered to the user is determined by what the user enters as the case. Type the following code into your **app.js** file:

```tsx
import "./styles.css";
import { useState } from "react";

function SwitchComponent(props) {
  switch (props.route) {
    case "home":
      return <h1> You are Home </h1>;
    case "about-us":
      return <h1> Check Us Out </h1>;
    case "learn":
      return <h1> Come and Learn the mind blowing stuffs </h1>;
    default:
      return null;
  }
}

export default function App() {
  const [path, setPath] = useState("");
  return (
    <div className="App">
      <input onChange={(e) => setPath(e.target.value)} />
      <h1>Hello CodeSandbox</h1>
      <SwitchComponent route={path} />
    </div>
  );
}
```

The component will render based on what the users enter as follows:



<img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/screen-5.png"  alt="conditional rendering react" />

<br />


## Using ternary operators

The ternary operator is synonymous with the 'if-else' operator. The only difference between the ternary operator and the 'if-else' statement is in the implementation, as JSX supports the use of ternary operators. That is, ternary operators can be easily added to the template to be rendered
You can use the ternary operators to seamlessly render your components within the JSX syntax based on a specific condition.

*The sample code can be found* [*here*](https://codesandbox.io/s/using-ternary-operators-for-conditional-rendering-qqfn3l?file=/src/App.js)*.*

Consider the following example, which renders different content based on the client's existence or state in the application:

```ts
import "./styles.css";

export default function App() {
  const isExistingClient = false;
  return (
    <div className="App">
      {isExistingClient ? (
        <>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </>
      ) : (
        <>
          <h1> Hi!, New User </h1>
          <h3> Welcome to our palace </h3>
        </>
      )}
    </div>
  );
}
```

## Using Logical AND (&&) and OR (||) operators (Short Circuit Evaluation)

Short-circuiting is how JavaScript handles logical expression evaluation, but the logical && and || operators work slightly differently in React. When the left-hand expression returns **false**, the right-hand expression is evaluated and returns **true**. If the left-hand expression is false, the evaluation of the second expression will be returned.

For example, suppose you have a store application; when the store is open, it should return true and render a specific message to users; when the store is closed, it should return false and render nothing. Also, when the AND (&&) operator is true or open, the right-hand-side expression is evaluated or rendered; if it is not true, it is rendered null.

See the code example [here](https://codesandbox.io/s/using-logical-and-and-or-for-conditional-rendering-kuseun).

```ts
import "./styles.css";

export default function App() {
  const isOpen = true;
  const isAvailable = false;
  return (
    <div className="App">
      {isOpen && (
        <>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </>
      )}

      {isAvailable || (
        <>
          <h2> Sorry I am not available </h2>
          <button> Make Available </button>
        </>
      )}
    </div>
  );
}
  ```

## Using IIFEs (Immediately Invoked Function Expressions)

IIFEs are self-invoking functions (functions that call themselves immediately after they have been created). They allow you to use your `if...else` and `switch` statements within the JSX you are returning. This opens up the possibility of using the previously mentioned `switch` or `if-else` method in the JSX.

In the following example, you have a state called `isLoggedIn,` and the content is rendered based on whether the user is logged in or not. In addition, based on the `isLoggedIn` state, an input field is rendered or a welcome user message is displayed.
The code example can be found on [codesanbox](https://codesandbox.io/s/using-iifes-s4bm0n?file=/src/App.js).

```ts
import "./styles.css";

export default function App() {
  const isLoggedIn = false;
  const user = "Debby";

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {(() => {
        if (isLoggedIn) {
          return <h1> Welcome {user} </h1>;
        } else {
          return (
            <>
              <label style={{ textAlign: "left !important" }}>Username: </label>
              <br />
              <input />
            </>
          );
        }
      })()}
    </div>
  );
}
```

The result is shown below:


<img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/screen-6.png"  alt="conditional rendering react" />

<br />


*Next, you’ll see some use cases of conditional rendering.*

## Use cases of conditional rendering

Conditional rendering has so many use cases. To list a few:

- **Authentication**: Typically, authentication usually requires access to a user's view of a specific resource. You can derive from the understanding of conditional rendering and previous examples in this article that it can be used to authenticate users for your application.


- **Personalization**: Giving customers a personalized experience is what personalization entails. To accomplish this, many templates must be customized based on the personalization conditions specified.


- **Authorization**: When developing applications, you may need to hide certain actions or information from the user. This is possible by using the null method, as previously mentioned. Depending on the user's role, you can hide or render certain features.

## Conclusion

In this article, you covered what Conditional Rendering is in React, as well as several methods of Conditional Rendering in React, such as using `if...else`, rendering nothing with `null`, conditional rendering with `switch` statements, using ternary operators, using logical AND (&&) and OR (||) operators (Short Circuit Evaluation), and Using IIFEs. You also learned about some conditional rendering use cases.
