class Scorecard {
  constructor(
    frame = new Frame()
  ) {
    this.frame = frame
  }

  addFrameScore() {
    return this.frame.addNewFrame()
  }
}