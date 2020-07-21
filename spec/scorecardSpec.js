describe('Scorecard', () => {
  let scorecard

  beforeEach(() => {
    scorecard = new Scorecard()
  })

  describe('Scorecard uses the frame class', () => {
    it ('calls frame class with addNewFrame', () => {
      let frameInstance = scorecard.frame
      const spy = spyOn(frameInstance, 'addNewFrame')
      scorecard.addFrameScore()
    
      expect(spy).toHaveBeenCalled()
    })
  })
})





