import Base from './Base';
import Home from './components/Home';
import CardModal from './components/CardDetailView/CardModal';
import NotFound from './components/NotFound';

export default [
  {
    component: Base,
    routes: [
          { path: '/:title',
            component: CardModal,
            name: '',
          },
          {
            component: NotFound,
          },
    ]
  },
]
