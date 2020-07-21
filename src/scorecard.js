class Scorecard {
  constructor(
    frame = new Frame()
  ) {
    this.frame = frame
    this.gameScore = []
  }

  addFrameScore(roll1, roll2) {
    return this.gameScore.push(this.frame.addNewFrame(roll1, roll2))
  }
}