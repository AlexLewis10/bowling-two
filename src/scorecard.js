class Scorecard {
  constructor(
    frame = new Frame()
  ) {
    this.frame = frame
    this.gameScore = []
  }

  addFrameScore(roll1, roll2) {
    const frameResult = this.frame.addNewFrame(roll1, roll2)
    if (Array.isArray(frameResult)) {
      return this.gameScore.push(frameResult)
    }
    return frameResult
  }
}