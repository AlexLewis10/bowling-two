const MAX_NORMAL_FRAMES = 9
const SPARE = 2
const STRIKE = 1 

class Scorecard {
  constructor(
    frame = new Frame()
  ) {
    this.frame = frame
    this.gameScore = []
    this.spare = false
    this.strike = false
  }
  
  addNewFrame(roll1, roll2) { 
    const frameResult = this.frame.getFrameResult(roll1, roll2)
    if (this.gameScore.length === MAX_NORMAL_FRAMES) {
      return 'Max number of normal frames'
    } 
    return this.handleFrameResult(frameResult)
  }
  
  handleFrameResult(frameResult) {
    if (Array.isArray(frameResult)) {
      this._isSpare(frameResult[SPARE])
      this._isStrike(frameResult[STRIKE])
      return this.addToGameScore(frameResult)
    }
    return frameResult
  }

  addToGameScore(frameResult) {
    return this.gameScore.push(frameResult)
  }

  _isSpare(spare) {
    spare ? this.spare = true : this.spare = false
  }

  _isStrike(strike) {
    strike ? this.strike = true : this.strike = false
  }
}

