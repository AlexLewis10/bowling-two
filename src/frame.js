class Frame {
  constructor(roll1 , roll2) {
    this.roll1 = roll1
    this.roll2 = roll2
  }

  frameScore() {
    return this.roll1 + this.roll2
  }

  isStrike() {
    const strike = this.roll1 === 10 ? true : false
    return strike
  }

  isSpare() {
    const spare = this.roll1 + this.roll2 === 10? true : false
    return spare
  }
}