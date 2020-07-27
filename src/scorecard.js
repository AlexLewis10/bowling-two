const MAX_NORMAL_FRAMES = 9
const SPARE = 2
const STRIKE = 1 
const SCORE = 0

class Scorecard {
  constructor(
    frame = new Frame()
  ) {
    this.frame = frame
    this.frameHistory = []
    this.spare = false
    this.strike = false
    this.gameScore = []
    this.frameNumber = 0
  }
  
  addNewFrame(roll1, roll2) { 
    const frameResult = this.frame.getFrameResult(roll1, roll2)
    if (this.frameHistory.length === MAX_NORMAL_FRAMES) {
      return 'Max number of normal frames'
    } 
    return this.handleFrameResult(frameResult, roll1, roll2)
  }
  
  handleFrameResult(frameResult, roll1, roll2) {
    if (Array.isArray(frameResult)) {
      if (this.spare) {
        console.log(this.frameNumber)
        this.gameScore[(this.frameNumber - 1)] += roll1
      } 
      this._incrementFrameNumber()
      //if strike is true add roll1 && roll2 to previous frame score.
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
    strike ? this.strike = true : this.strike = false
  }
}

