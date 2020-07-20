class Frame {
  constructor(roll1 , roll2) {
    this.roll1 = roll1
    this.roll2 = roll2
  }

  frameScore() {
    return this.roll1 + this.roll2
  }

  isStrike() {
    if (this.roll1 === 10 || this.roll2 === 10) {
      return true
    }
    return false
  }
}