// https://min-api.cryptocompare.com/data/histoday
// e=CCCAGG
// fsym=BTC
// tsym=USD
// limit=6000
// aggregate=30

class Historical {

  constructor (symbols) {
    this.symbols = symbols
  }

  convert (to) {
    this.to = to
    return this
  }

  async since (date) {

    const
      { symbols: symbol, to } = this

    console.warn ('Getting history since date', date, symbol, to)
  }
}
