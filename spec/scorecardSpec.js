describe('Scorecard', () => {
  let scorecard

  beforeEach(() => {
    scorecard = new Scorecard()
  })

  describe('AddNewScore adds score to the scorecard', () => {
    it ('calls frame class with addNewFrame', () => {
      let frameInstance = scorecard.frame
      const spy = spyOn(frameInstance, 'getFrameResult')
      scorecard.addNewFrame()
    
      expect(spy).toHaveBeenCalled()
    })

    it('adds the frame array to the gameScore', () => {
      scorecard.addNewFrame(2, 3)

      expect(scorecard.gameScore).toEqual([[5, false, false]])
    })

    it('returns a message to the user if frameScore is invalid', () => {
      const errorMessage = 'Invalid score, please enter new frame'

      expect(scorecard.addNewFrame(5, 6)).toEqual(errorMessage);
    })

    it('can add a maximum of 9 standard frames to the gameScore array', () => {
      for (let i = 0; i < 9; i++) {
        scorecard.addNewFrame(3, 4)
      }

      expect(scorecard.addNewFrame(2, 1)).toEqual('Max number of normal frames')
    })
  })

  describe('A frame that resulted in a spare', () => {
    it('sets the spare state to true', () => {
      scorecard.handleFrameResult([9, false, true])

      expect(scorecard.spare).toEqual(true)
    })
  })
})
