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
    console.warn ('since', date)

    return await
      fetch   (`${this.endpoint}&toTs=${date.getTime ()/1000}`)
      .then (response => response.json ())
      .then (this.whatever)
  }

  whatever (response) {
    console.log (response.Data)

    return response
  }

  get endpoint () {
    const
      limit = 2000
    , aggregate = 30 // 30 = month

    return `https://min-api.cryptocompare.com/data/histoday?fsym=${this.symbols}&tsym=${this.to}&limit=${limit}&aggregate=${aggregate}&e=CCCAGG`
  }
}
