import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './Home/Home';
import Layout from '../components/LayOuts/Layout';
import { lazy, Suspense } from 'react';
import Search from './Search/Search.tsx';
import Tips from './Tips/Tips.tsx';
import Ingredients from './Ingredients/Ingredients.tsx';

const About = lazy(() => import('./About/About.tsx'));
const Recipes = lazy(() => import('./Recipes/Recipes'));
const Recipe = lazy(() => import('./Recipe/Recipe'));
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: '',

        element: <Home />,
      },
      {
        path: 'about',

        element: (
          <Suspense fallback={<>Loading</>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'recipes',
        element: (
          <Suspense fallback={<>Loading</>}>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            path: '',
            element: <Recipes />,
          },

          {
            path: ':id',
            element: <Recipe />,
          },
        ],
      },
      {
        path: 'techniques',
        element: (
          <Suspense fallback={<>Loading</>}>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            path: '',
            element: <Tips />,
          },

          // {
          //   path: ':id',
          //   element: <Recipe />,
          // },
        ],
      },
      {
        path: 'ingredients',
        element: (
          <Suspense fallback={<>Loading</>}>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            path: '',
            element: <Ingredients />,
          },

          // {
          //   path: ':id',
          //   element: <Recipe />,
          // },
        ],
      },
      {
        path: 'search?',
        element: <Search />,
      },
    ],
  },
]);

export default router;
