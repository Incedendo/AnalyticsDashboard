import Base from './Base';
import Home from './components/Home';
import LayoutUser from './LayoutUser';
import CardModal from './components/Header/CardModal';

export default [
  {
    component: Base,
    routes: [
          { path: '/Registrations',
            component: CardModal,
            name: '',
          },
          { path: '/Enrollments',
            component: CardModal,
            name: '',
          },
          { path: '/UniqueUserLogin',
            component: CardModal,
            name: '',
          },
          { path: '/ContributionChanges',
            component: CardModal,
            name: '',
          },
          { path: '/BounceRate',
            component: CardModal,
            name: '',
          },
          { path: '/RetirementIncomeCalcUsage',
            component: CardModal,
            name: '',
          },
          { path: '/TopPages',
            component: CardModal,
            name: '',
          },
          { path: '/VisitsbyDeviceType',
            component: CardModal,
            name: '',
          },

    ]
  },
]
