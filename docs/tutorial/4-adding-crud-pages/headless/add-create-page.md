---
id: add-create-page
title: 4. Adding Create Page
tutorial:
  order: 0
  prev: tutorial/adding-crud-pages/{preferredUI}/add-show-page
  next: tutorial/adding-crud-pages/{preferredUI}/add-delete-feature
---

import SharedComponents from "../../../partials/tutorial/headless-layout.md";

<SharedComponents />

## Creating Create Page

First, we need to create our file, named `create.tsx`, under the `src/pages/blog-posts` folder. We will then copy the create page code generated by Inferencer and paste it into the file; for this, follow these steps:

1. Navigate to <a href="http://localhost:3000/blog-posts" rel="noopener noreferrer nofollow">localhost:3000/blog-posts</a> in your browser.

2. Click the "Create" button in the top right corner of the table to open the create page.

3. On the create page, click on the "Show Code" button in the bottom right corner of the page.

4. You can see the create page code generated by Inferencer. Copy it by clicking on the "Copy" button.

5. Paste the code into the newly created `create.tsx` file.

You can see an example create page generated by Inferencer below:

```tsx live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create
setInitialRoutes(["/blog-posts/create"]);

import { Refine } from "@refinedev/core";
import { HeadlessInferencer } from "@refinedev/inferencer/headless";
import routerBindings, { NavigateToResource, UnsavedChangesNotifier } from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";

import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Refine
        routerProvider={routerBindings}
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        resources={[
          {
            name: "blog_posts",
            list: "/blog-posts",
            show: "/blog-posts/show/:id",
            create: "/blog-posts/create",
            edit: "/blog-posts/edit/:id",
          },
        ]}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
        }}
      >
        <Routes>
          <Route
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<NavigateToResource resource="blog_posts" />} />

            <Route path="/blog-posts">
              <Route index element={<HeadlessInferencer />} />
              <Route path="show/:id" element={<HeadlessInferencer />} />
              <Route path="edit/:id" element={<HeadlessInferencer />} />
              <Route path="create" element={<HeadlessInferencer />} />
            </Route>

            <Route path="*" element={<div>Error!</div>} />
          </Route>
        </Routes>

        <UnsavedChangesNotifier />
      </Refine>
    </BrowserRouter>
  );
};

render(<App />);
```

## Understanding the Create Component

### Hooks and Components in Create Page

- The `useForm` hook is imported from `@refinedev/react-hook-form`, which combines the features of `useForm` hook from both **React Hook Form** and `@refinedev/core`. When used in the create page, it sends the form data to `dataProvider`'s `create` method when the form is submitted. It also offers `saveButtonProps` for the form's submit button.

  > For more information, refer to the [`useForm` documentation](/docs/packages/list-of-packages) and the [**React Hook Form** documentation&#8594](https://react-hook-form.com/)

- The `useNavigation` hook is used for navigating between pages. In this case, we are using it to navigate to the `list` pages when the user clicks on the "Blog Posts List" buttons.

  > For more information, refer to the [`useNavigation` documentation &#8594](/docs/routing/hooks/use-navigation)

### Handling Relationships

In the create page, we may need to select a record from another resource.

For example, if we need to select a category from the `categories` resource to assign the blog post to the category, we can use the `useSelect` hook provided by Refine. This hook fetches the data by passing the params to the `dataProvider`'s `getList` method and then returns the `options` to be used in the `<select/>` component.

In the auto-generated create page code, Inferencer used the `useSelect` hook to select a category from the `categories` resource like below:

```tsx
const { options: categoryOptions } = useSelect({
  resource: "categories",
});
```

> For more information, refer to the [`useSelect` documentation&#8594](/docs/data/hooks/use-select)

## Adding the Create Page to the App

Now that we have created the create page, we can add it to the `App.tsx` file:

1. Open `src/App.tsx` file on your editor.

2. Import the created `BlogPostCreate` component.

3. Replace the `HeadlessInferencer` component with the `BlogPostCreate` component.

```tsx title="src/App.tsx"
import { Refine } from "@refinedev/core";
import routerBindings, { NavigateToResource, UnsavedChangesNotifier } from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import { BlogPostEdit } from "pages/blog-posts/edit";
import { BlogPostList } from "pages/blog-posts/list";
import { BlogPostShow } from "pages/blog-posts/show";
// highlight-next-line
import { BlogPostCreate } from "pages/blog-posts/create";

import { Layout } from "components/layout";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Refine
        routerProvider={routerBindings}
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        resources={[
          {
            name: "blog_posts",
            list: "/blog-posts",
            show: "/blog-posts/show/:id",
            // highlight-next-line
            create: "/blog-posts/create",
            edit: "/blog-posts/edit/:id",
          },
        ]}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
        }}
      >
        <Routes>
          <Route
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<NavigateToResource resource="blog_posts" />} />

            <Route path="blog-posts">
              <Route index element={<BlogPostList />} />
              <Route path="show/:id" element={<BlogPostShow />} />
              <Route path="edit/:id" element={<BlogPostEdit />} />
              {/* highlight-next-line */}
              <Route path="create" element={<BlogPostCreate />} />
            </Route>

            <Route path="*" element={<div>Error!</div>} />
          </Route>
        </Routes>
        <UnsavedChangesNotifier />
      </Refine>
    </BrowserRouter>
  );
};
export default App;
```

Now, we can see the create page in the browser at <a href="http://localhost:3000/blog-posts/create" rel="noopener noreferrer nofollow">localhost:3000/blog-posts/create</a>

<br/>

<Checklist>

<ChecklistItem id="add-create-page-headless">
I have added the create page to the app.
</ChecklistItem>
<ChecklistItem id="add-create-page-headless-2">
I understood the create page components and hooks.
</ChecklistItem>
<ChecklistItem id="add-create-page-headless-3">
I understood the relationship handling.
</ChecklistItem>

</Checklist>