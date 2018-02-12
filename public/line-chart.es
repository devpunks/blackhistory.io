Element `line-chart`

(class extends HTMLElement {

  initialize () { }

  onidle () {
    console.warn (this.serialize ())
    new Chart ( this.canvas, this.serialize () )
  }

  serialize () {

    const
      { type, options, sets }
        = this

    , data =
        { labels: this.labels, datasets: sets }

    return { type, options, data }
  }

  get options () {

    return {
      scales:
        { yAxes:
            [ { ticks: { beginAtZero: true } } ] }
    }
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
      label: this.header

    , data: this.values

    , backgroundColor:
        [ 'rgba(255, 255, 255, 0.1)' ]

    , borderColor:
        [ 'rgba(250,250,250, 0.7)' ]

    , borderWidth: this.getAttribute `border`
    } ]
  }
})
