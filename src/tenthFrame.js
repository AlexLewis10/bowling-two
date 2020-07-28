const MAX_TOTAL_SCORE = 30
const MIN_FOR_THIRD_ROLL = 10
const MAX_ROLL_SCORE = 10

class TenthFrame extends Frame {
  constructor() {
    super()
  }
 
  _getFrameResult(roll1, roll2, roll3) {
    if (this._isTenthFrameValid(roll1, roll2, roll3) === false) {
      return 'Invalid score, please enter new frame'
    }
    return [this._frameScore(roll1, roll2, roll3)]
  }

  _frameScore(roll1, roll2, roll3=0) {
    return roll1 + roll2 + roll3
  }

  _isTenthFrameValid(roll1, roll2, roll3=0) {
    if (this._frameScore(roll1, roll2, roll3) > MAX_TOTAL_SCORE) {
      return false
    }
    if ((roll1 + roll2) < MIN_FOR_THIRD_ROLL && roll3 > 0) {
      return false
    }
    if (roll1 || roll2 || roll3 > MAX_ROLL_SCORE) {
      return false
    }
  }
}
