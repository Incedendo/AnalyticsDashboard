import Base from './Base';
import Home from './components/Home';
import CardModal from './components/CardDetailView/CardModal';
import NotFound from './components/NotFound';

export default [
  {
    component: Base,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
        name: "Home"
      },
      { path: '/:title',
        component: CardModal,
        name: 'Detail Card View'
      },
      {
        component: NotFound,
        name: 'Not Found'
      },
    ]
  },
]
