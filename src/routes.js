import Base from './Base';
import LayoutCreator from './LayoutCreator';
import LayoutUser from './LayoutUser';
import Home from './Home';
import About from './About';
import AddContent from './AddContent';
import NotFound from './NotFound';

export default [
  { component: Base,
    routes: [
      {
        path: '/create',
        component: LayoutCreator,
        routes: [
          { path: '/create/',
            exact: true,
            component: Home,
          },
          { path: '/create/add-content',
            exact: true,
            component: AddContent,
          },
          {
            component: NotFound,
          },
        ]
      },
      {
        component: LayoutUser,
        routes: [
          { path: '/',
            exact: true,
            component: Home,
          },
          { path: '/stories',
            component: About,
          },
          {
            path: '/about',
            component: About,
            name: 'About',
          },
          {
            component: NotFound,
          },
        ]
      },
    ]
  },
]
