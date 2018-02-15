class Historical {

  constructor (symbols)
    { this.symbols = symbols }

  convert (to) {
    this.to = to
    return this
  }

  async since ( date, seconds = (date.getTime () / 1000) ) {
    const
      url = `${this.endpoint}` //&toTs=${seconds}`

    return await
      fetch (url)
      .then (this.collect.bind (date))
  }

  async collect (response, json) {
    const
      timestamp = record =>
        (record.time = new Date (record.time * 1000))
        && record

    return (await response.json ())
      .Data
      .filter (record => (record.time * 1000) >= +this)
      .map (timestamp)
  }

  get endpoint () {
    const
      aggregate = 30 // 30 = month
    , limit     = 2000
    , endpoint  = 'https://min-api.cryptocompare.com/data/histoday'

    , query = [
        `e=CCCAGG`
      , `limit=${limit}`
      , `tsym=${this.to}`
      , `fsym=${this.symbols}`
      , `aggregate=${aggregate}`
    ].join `&`

    return `${endpoint}?${query}`
  }
}
