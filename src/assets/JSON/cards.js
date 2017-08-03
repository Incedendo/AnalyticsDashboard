export default {
    cards: [
    {
      title: 'Registrations',
      graph: false,
      numGraph: true,
      listCard: false,
      graphType: 'compare',
      data: ['Registrations']
    },
    {
      title: 'Enrollments',
      graph: true,
      numGraph: false,
      listCard: false,
      graphType: 'line',
      data: ['Enrollments', 'Suspicious Enrollments']

    },
    {
      title: 'Unique User Login',
      graph: false,
      numGraph: true,
      listCard: false,
      graphType: 'compare',
      data: ['Unique User Login']
    },
    {
      title: 'Contribution Changes',
      graph: true,
      numGraph: false,
      listCard: false,
      graphType: 'line',
      data: ['Contribution Changes']
    },
    {
      title: 'Bounce Rate',
      graph: false,
      numGraph: false,
      listCard: true,
      graphType: 'list',
      data: ['Top Active Pages']
    },
    {
      title: 'Retirement Income Calc Usage',
      graph: true,
      numGraph: false,
      listCard: false,
      graphType: 'bar',
      data: ['Retirement Income Calc Usage']
    },
    {
      title: 'Top Pages',
      graph: false,
      numGraph: false,
      listCard: true,
      graphType: 'list',
      data: ['Top Pages']
    },
    {
      title: 'Visits by Device Type',
      graph: false,
      numGraph: false,
      listCard: true,
      graphType: 'pie',
      data: ['Visits by Device Type']
    },
  ]
}
