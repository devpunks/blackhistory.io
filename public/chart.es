var
  ctx =
    document.querySelector
      `canvas`.getContext('2d')


new Chart (ctx, {

  type: 'line'

, options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

, data: {
    labels:
      [2013, 2014, 2015, 2016, 2017, 2018]

  , datasets: [
      {
        borderWidth: 2

      , label: 'BTC - Bitcoin'

      , data: [12, 19, 3, 5, 2, 3]

      , backgroundColor:
          [ 'rgba(255, 99, 132, 0.2)' ]

      , borderColor:
          [ 'rgba(255,99,132,1)' ]
      }
    ]
  }
})
