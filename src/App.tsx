import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './Routes/routes';
import AuthLayout from './layouts/AuthLayout';
function App() {
    const appRouter= createBrowserRouter( routes.map(route => ({
            ...route,
            element: route.path === '/watch/:id' ? route.element :<AuthLayout>{route.element}</AuthLayout>
        })));
  return (
    <RouterProvider router={appRouter}/>
  );
}
export default App;
