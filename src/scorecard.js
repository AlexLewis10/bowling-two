const MAX_NORMAL_FRAMES = 9

class Scorecard {
  constructor(
    frame = new Frame()
  ) {
    this.frame = frame
    this.gameScore = []
  }
  //addFrameScore
  addNewFrame(roll1, roll2) { // addNewFrame
    const frameResult = this.frame.getFrameResult(roll1, roll2)
    if (this.gameScore.length === MAX_NORMAL_FRAMES) {
      return 'Max number of normal frames'
    } 
    return this.handleFrameResult(frameResult)
  }
  //getFrameResult
  handleFrameResult(frameResult) {
    if (Array.isArray(frameResult)) {
      return this.addToGameScore(frameResult)
    }
    return frameResult
  }

  addToGameScore(frameResult) {
    return this.gameScore.push(frameResult)
  }
}

