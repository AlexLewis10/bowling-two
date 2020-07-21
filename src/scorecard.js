class Scorecard {
  constructor(
    frame = new Frame()
  ) {
    this.frame = frame
    this.gameScore = []
  }

  addFrameScore(roll1, roll2) {
    const frameResult = this.frame.addNewFrame(roll1, roll2)
    if (this.gameScore.length === 9) {
      return 'Max number of normal frames'
    } 
    if (Array.isArray(frameResult)) {
      return this.addToGameScore(frameResult)
    }
    return frameResult
  }

  addToGameScore(frameResult) {
    return this.gameScore.push(frameResult)
  }
}

