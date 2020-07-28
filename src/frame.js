class Frame {

  getFrameResult(roll1, roll2) {
    if (!this._isValidScore(roll1, roll2)) {
      return 'Invalid score, please enter new frame'
    }
    return [
      this._frameScore(roll1, roll2), 
      this._isStrike(roll1), 
      this._isSpare(roll1, roll2)]
  }

  _frameScore(roll1, roll2) {
    return roll1 + roll2
  }

  _isStrike(roll1) {
    const strike = roll1 === 10 ? true : false
    return strike
  }

  _isSpare(roll1, roll2) {
    const spare = (roll1 + roll2 === 10 && roll2 != 0) ? true : false
    return spare
  }

  _isValidScore(roll1, roll2) {
    const isValid = roll1 + roll2 <= 10 ? true : false
    return isValid
  }
}

