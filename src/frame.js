class Frame {

  frameScore(roll1, roll2) {
    return roll1 + roll2
  }

  isStrike(roll1, roll2) {
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

