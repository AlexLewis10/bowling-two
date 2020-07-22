## Bowling Scorecard - In progress



  addFrameScore(roll1, roll2) {
    const frameResult = this.frame.addNewFrame(roll1, roll2)
    if (this.gameScore.length === MAX_NORMAL_FRAMES) {
      return 'Max number of normal frames'
    } 
    //update round number
    if (Array.isArray(frameResult)) {
    //was last round a spare or a strike?
    //if spare, add roll1 to last round score. .updateForSpare(roll1)
    //if strike, add roll1 and roll2 to last round score unless there is another strike
        // in which case just add 10 .updateForStrike(roll1, roll2)
    //update spare and strike state
      return this.addToGameScore(frameResult)
    }
    return frameResult
  }