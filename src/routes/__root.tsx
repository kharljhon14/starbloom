import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Providers from '../providers/providers';
import MainLayout from '../layouts/main-layout';

export const Route = createRootRoute({
  component: () => (
    <>
      <Providers>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </Providers>
      <TanStackRouterDevtools />
    </>
  )
});
