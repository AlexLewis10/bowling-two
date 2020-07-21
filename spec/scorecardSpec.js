describe('Scorecard', () => {
  let scorecard

  beforeEach(() => {
    scorecard = new Scorecard()
  })

  describe('AddNewScore adds score to the scorecard', () => {
    it ('calls frame class with addNewFrame', () => {
      let frameInstance = scorecard.frame
      const spy = spyOn(frameInstance, 'addNewFrame')
      scorecard.addFrameScore()
    
      expect(spy).toHaveBeenCalled()
    })

    it('adds the frame array to the gameScore', () => {
      scorecard.addFrameScore(2, 3)

      expect(scorecard.gameScore).toEqual([[5, false, false]])
    })
  })
})





