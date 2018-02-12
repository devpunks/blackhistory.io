Element `line-chart`

(class extends HTMLElement {

  async initialize () {
    console.warn
      (await Historical.since (new Date))

    this.context.labels
      = [ 2013, 2014, 2015, 2016, 2017, 2018 ]

    this.context.values
      = [ 13.56, 757, 314, 430, 997, 8367 ]
  }

  async hydrate () { }

  onidle () {
    console.warn (this.serialize ())
    // how often will we rerender this component?
    // We are always creating a new chart.
    new Chart ( this.canvas, this.serialize () )
  }

  serialize () {
    const
      { type, options, labels, datasets }
        = this

    , data
        = { labels, datasets }

    return { type, options, data }
  }

  get options () {
    return {
      scales:
        { yAxes:
            [ { ticks: { beginAtZero: true } } ] }
    }
  }

  get type ()
    { return 'line' }

  get header ()
    { return 'BTC - Bitcoin' }

  get canvas ()
    { return this.select `canvas` }

  get labels ()
    { return this.context.labels }

  get values ()
    { return this.context.values }

  get datasets () {
    return [ {
      label: this.header

    , data: this.values

    , backgroundColor:
        [ 'rgba(255, 255, 255, 0.1)' ]

    , borderColor:
        [ 'rgba(250,250,250, 0.7)' ]

    , borderWidth:
        this.getAttribute `border`
    } ]
  }
})
