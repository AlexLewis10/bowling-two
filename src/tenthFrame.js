class TenthFrame extends Frame {
  constructor() {
    super()
  }
 
  _getFrameResult(roll1, roll2, roll3) {
    return this._frameScore(roll1, roll2, roll3)
  }

  _frameScore(roll1, roll2, roll3) {
    return roll1 + roll2 + roll3
  }

}
