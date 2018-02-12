Element `line-chart`

(class extends HTMLElement {

  get options () {

    return {
      scales:
        { yAxes: [ { ticks: { beginAtZero: true } } ] }
    }
  }

  initialize () {
    console.log ('initializing', this.canvas)
  }

  get type ()
    { return 'line' }

  get canvas ()
    { return this.select `canvas` }

  get labels ()
    { return [ 2013, 2014, 2015, 2016, 2017, 2018 ] }
})


var
  ctx =
    document.querySelector
      `canvas`.getContext `2d`

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
      [ 2013, 2014, 2015, 2016, 2017, 2018 ]

  , datasets: [
      {
        borderWidth: 2

      , label: 'BTC - Bitcoin'

      , data: [ 13.56, 757, 314, 430, 997, 8367 ]

      , backgroundColor:
          [ 'rgba(255, 255, 255, 0.1)' ]
        //[ 'rgba(255, 99, 132, 0.2)' ]

      , borderColor:
          [ 'rgba(250,250,250, 0.7)' ]
        //[ 'rgba(255,99,132,1)' ]
      }
    ]
  }
})
