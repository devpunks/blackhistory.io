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

  onidle () {
    console.warn (this.serialize ())
    new Chart ( this.canvas, this.serialize () )
  }

  serialize () {

    const
      { type, options, sets }
        = this

    return { type, options, data: sets }
  }

  get header ()
    { return 'BTC - Bitcoin' }

  get type ()
    { return 'line' }

  get canvas ()
    { return this.select `canvas` }

  get labels ()
    { return [ 2013, 2014, 2015, 2016, 2017, 2018 ] }

  get values ()
    { return [ 13.56, 757, 314, 430, 997, 8367 ] }

  get sets () {
    return [ {
      borderWidth: 2

    , label: this.label

    , data: this.values

    , backgroundColor:
        [ 'rgba(255, 255, 255, 0.1)' ]

    , borderColor:
        [ 'rgba(250,250,250, 0.7)' ]
    } ]
  }
})
