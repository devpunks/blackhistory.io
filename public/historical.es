// https://min-api.cryptocompare.com/data/histoday
// e=CCCAGG exchanges
// fsym=BTC from
// tsym=USD to
// limit=2000 max
// aggregate=30 points

class Historical {

  constructor (symbols)
    { this.symbols = symbols }

  convert (to) {
    this.to = to
    return this
  }

  async since ( date, seconds = (date.getTime () / 1000) ) {
    console.warn ('since', +date)

    const url = `${this.endpoint}` //&toTs=${seconds}`

    return await
      fetch (url)
      .then (this.collect)
  }

  collect (response, data) {
    data = response.Data.map
    (record => { record.time = new Date (record.time * 1000); return record })

    return data
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
