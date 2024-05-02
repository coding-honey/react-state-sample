import { useAuth } from 'components/AuthProvider';
import { G_MENU } from 'constants/constant';
import Login from 'pages/auth/Login';
import Logout from 'pages/auth/Logout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from 'routes/ProtectedRoute';
import NonProtectedRoute from 'routes/NonProtectedRoute';
import NoState1 from 'pages/states/NoState1';
import NoState2 from 'pages/states/NoState2';
import UseState from 'pages/states/UseState';
import UseStateObject from 'pages/states/UseStateObject';

const Routes = () => {
  const { token } = useAuth();

  // 전체 공개용 Routes
  const routesForPublic = [
    {
      path: G_MENU.home.url,
      element: <NonProtectedRoute />,
    },
    {
      path: G_MENU.login.url,
      element: <Login />,
    },
  ];

  // 로그인 사용자용 Routes
  const routesForAuthenticatedOnly = [
    {
      path: G_MENU.home.url,
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: G_MENU.noState1.url,
          element: <NoState1 />,
        },
        {
          path: G_MENU.noState2.url,
          element: <NoState2 />,
        },
        {
          path: G_MENU.useState.url,
          element: <UseState />,
        },
        {
          path: G_MENU.useStateObject.url,
          element: <UseStateObject />,
        },
        {
          path: G_MENU.logout.url,
          element: <Logout />,
        },
      ],
    },
  ];

  // 미로그인 사용자용 Routes
  const routesForNotAuthenticatedOnly = [{}];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    // ...(!token ? routesForNotAuthenticatedOnly : []),
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
