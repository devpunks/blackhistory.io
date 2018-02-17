Element `line-chart`

(class extends HTMLElement {

  async onconnect (data, to = 'USD') {

    data = await
      (new Historical (this.symbol))
      .convert (to)
      .since (this.since)

    this.context.labels
      = data.map (record => this.label (record.time))

    this.context.values
      = data.map (record => record.close)

    new Chart
      ( this.canvas, this.serialize () )
  }

  label (date, MONTHS) {
    MONTHS = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'
    ]

    return `${MONTHS [date.getMonth ()]} ${date.getFullYear ()}`
  }

  serialize () {
    const
      { type, options, labels, datasets }
        = this

    , data
        = { labels, datasets }

    return { type, data, options }
  }

  get options () {
    return {
      hover:
        { mode: 'x' }
    , tooltips: {
        mode: 'x'
      , intersect: false
      }
    , scales:
        { yAxes:
            [ { ticks:
                { beginAtZero: true } } ] }
    }
  }

  get type ()
    { return 'line' }

  get symbol ()
    { return this.getAttribute `symbol` || 'BTC' }

  get since ()
    { return new Date (this.getAttribute `since`) }

  get canvas ()
    { return this.select `canvas` }

  get labels ()
    { return this.context.labels }

  get values ()
    { return this.context.values }

  get datasets () {
    return [ {
      label: this.symbol

    , data: this.values

    // http://www.chartjs.org/docs/latest/charts/line.html

    , lineTension: 0

    , pointRadius: 1

    , pointHoverRadius: 20

    , borderJoinStyle: 'miter'

    , borderWidth:
        this.getAttribute `border`

    , borderColor:
        [ 'rgba(250,250,250, 0.7)' ]

    , backgroundColor:
        [ 'rgba(255, 255, 255, 0.1)' ]
    } ]
  }
})
