class Scorecard {
  constructor(
    frame = new Frame()
  ) {
    this.frame = frame
    this.gameScore = []
  }

  addFrameScore(roll1, roll2) {
    if (this.gameScore.length === 9) {
      return 'Max number of normal frames'
    }
    const frameResult = this.frame.addNewFrame(roll1, roll2)
    if (Array.isArray(frameResult)) {
      return this.gameScore.push(frameResult)
    }
    return frameResult
  }
}