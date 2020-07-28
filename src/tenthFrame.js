class TenthFrame extends Frame {
  constructor() {
    super()
  }
 
  _getFrameResult(roll1, roll2, roll3) {
    
  }

  _frameScore(roll1, roll2, roll3) {
    return roll1 + roll2 + roll3
  }

  _isTenthFrameValid(roll1, roll2, roll3) {
    if (roll1 + roll2 < 10) {
      return false
    }
  }



}
