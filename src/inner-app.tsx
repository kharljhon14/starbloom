import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  context: {
    user: undefined! // This will be set after we wrap the app in an AuthProvider
  }
});
export default function InnerApp() {
  return <RouterProvider router={router} />;
}
