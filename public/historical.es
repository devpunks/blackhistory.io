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
    return await
      fetch   (this.endpoint)
      .then (response => response.json ())
  }

  get endpoint () {
    const
      limit = 6000
    , aggregate = 30

    return `https://min-api.cryptocompare.com/data/histoday?fsym=${this.symbols}&tsym=${this.to}&limit=${limit}&aggregate=${aggregate}&e=CCCAGG`
  }
}
