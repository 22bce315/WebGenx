import { lazy, Suspense, useEffect, useContext } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import DashboardLayout from 'src/layouts/dashboard';
import { curr_context } from '../contexts/Central';


export const Demo = lazy(() => import('src/pages/Demo'));
//add_new_page_here 


 function Router() {
  const now_context = useContext(curr_context);
  const { user, isAuthenticated, isLoading } = useAuth0();



  useEffect(() => {
    now_context.set_google_user(user);
  }, [user, now_context]);

  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <Demo /> ,  index: true },
       //add_new_link_here 
      ],
    }
  ]);

  return routes;
}

export {Router}