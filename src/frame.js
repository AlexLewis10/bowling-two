class Frame {

  addNewFrame(roll1, roll2) {
    if (!this.isValidScore(roll1, roll2)) {
      return 'Invalid score, please enter new frame'
    }
    return [
      this.frameScore(roll1, roll2), 
      this.isStrike(roll1), 
      this.isSpare(roll1, roll2)]
  }

  frameScore(roll1, roll2) {
    return roll1 + roll2
  }

  isStrike(roll1) {
    const strike = roll1 === 10 ? true : false
    return strike
  }

  isSpare(roll1, roll2) {
    const spare = roll1 + roll2 === 10 ? true : false
    return spare
  }

  isValidScore(roll1, roll2) {
    const isValid = roll1 + roll2 <= 10 ? true : false
    return isValid
  }
}

