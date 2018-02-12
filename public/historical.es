// https://min-api.cryptocompare.com/data/histoday
// e=CCCAGG
// fsym=BTC
// tsym=USD
// limit=6000
// aggregate=30

class Historical {

  constructor (symbols)
    { this.symbols = symbols }

  convert (to) {
    this.to = to
    return this
  }

  async since (date) {
    console.warn (date)

    return await
      fetch   (`${this.endpoint}&toTs=${date.getTime ()/1000}`)
      .then (response => response.json ())
  }

  get endpoint () {
    const
      limit = 2000
    , aggregate = 30 // 30 = month

    return `https://min-api.cryptocompare.com/data/histoday?fsym=${this.symbols}&tsym=${this.to}&limit=${limit}&aggregate=${aggregate}&e=CCCAGG`
  }
}
