const MAX_NORMAL_FRAMES = 9
const SPARE = 2
const STRIKE = 1 
const SCORE = 0

class Scorecard {
  constructor(
    frame = new Frame(),
    tenthFrame = new TenthFrame()
  ) {
    this.frame = frame
    this.frameHistory = []
    this.spare = false
    this.strike = false
    this.gameScore = []
    this.frameNumber = 0
    this.multiStrike = false
  }
  
  addNewFrame(roll1, roll2) { 
    const frameResult = this.frame.getFrameResult(roll1, roll2)
    if (this.frameHistory.length === MAX_NORMAL_FRAMES) {
      const tenthFrameResult = this.tenthFrame.getFrameResult(roll1, roll2, roll3)
      return tenthFrameResult
    } 
    return this.handleFrameResult(frameResult, roll1, roll2)
  }
  
  handleFrameResult(frameResult, roll1, roll2) {
    if (Array.isArray(frameResult)) {
      this._updatePreviousFrame(roll1, roll2)
      this._incrementFrameNumber()
      this.addToFrameHistory(frameResult)
      this._addToGameScore(frameResult[SCORE])
      this._isSpare(frameResult[SPARE])
      this._isStrike(frameResult[STRIKE])
    }
    return frameResult
  }
  
  addToFrameHistory(frameResult) {
    return this.frameHistory.push(frameResult)
  }
  
  _updatePreviousFrame(roll1, roll2) {
    const previousFrame = this.frameNumber - 1
    if (this.spare) {
      this.gameScore[previousFrame] += roll1
    } 
    if (this.strike) {
      this.gameScore[previousFrame] += (roll1 + roll2)
    }
    if (this.multiStrike) {
      this.gameScore[this.frameNumber - 2] += roll1
    }
  }
  
  _incrementFrameNumber() {
    this.frameNumber++
  }

  _addToGameScore(score) {
    this.gameScore.push(score)
  }

  _isSpare(spare) {
    spare ? this.spare = true : this.spare = false
  }

  _isStrike(strike) {
    (this.strike && strike) ? this.multiStrike = true : this.multiStrike = false
    strike ? this.strike = true : this.strike = false
  }
}

