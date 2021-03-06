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

    it('scorecard uses the tenthFrame class after 9 frames', () => {
      for (let i = 0; i < 9; i++) {
        scorecard.addNewFrame(3, 4)
      }
      let tenthFrameInstance = scorecard.tenthFrame
      const spy = spyOn(tenthFrameInstance, '_getFrameResult')
      scorecard.addNewFrame(2, 3)
    
      expect(spy).toHaveBeenCalled()
    })

    it('adds the frame array to the frameHistory', () => {
      scorecard.addNewFrame(2, 3)

      expect(scorecard.frameHistory).toEqual([[5, false, false]])
    })

    it('adds the tenth frame array to the game history', () => {
      const frameHistory = [
        [7, false, false],
        [7, false, false],
        [7, false, false],
        [7, false, false],
        [7, false, false],
        [7, false, false],
        [7, false, false],
        [7, false, false],
        [7, false, false],
        [5]
      ]
      
      for (let i = 0; i < 9; i++) {
        scorecard.addNewFrame(3, 4)
      }
      scorecard.addNewFrame(2, 3)

      expect(scorecard.frameHistory).toEqual(frameHistory)
    })

    it('returns a message to the user if frameScore is invalid', () => {
      const errorMessage = 'Invalid score, please enter new frame'

      expect(scorecard.addNewFrame(5, 6)).toEqual(errorMessage);
    })
  })

  describe('Frame score is added to score history', () => {
    it('score is added to the gameScore array', () => {
      scorecard._handleFrameResult([5, false, false])

      expect(scorecard.gameScore).toEqual([5])
    })
  })

  describe('Spare in a frame', () => {
    it('sets the spare state to true', () => {
      scorecard._handleFrameResult([10, false, true])

      expect(scorecard.spare).toEqual(true)
    })

    it('if there is no spare, sets spare state to false', () => {
      scorecard._handleFrameResult([10, false, false])

      expect(scorecard.spare).toEqual(false)
    })
  })

  describe('Strike in a frame', () => {
    it('if there is no strike, sets the strike state to false', () => {
      scorecard._handleFrameResult([10, false, false])

      expect(scorecard.strike).toEqual(false)
    })

    it('if there is a strike, sets the strike state to true', () => {
      scorecard._handleFrameResult([10, true, false])

      expect(scorecard.strike).toEqual(true)
    })
  })

  describe('Increases the frame number', () => {
    it('increments the frame number by one after each frame', () => {
      scorecard.addNewFrame(2, 1)

      expect(scorecard.frameNumber).toEqual(1)
    }) 
  })

  describe('Updates previous frame score', () => {
    it('following a spare', () => {
      scorecard.addNewFrame(5, 5)
      scorecard.addNewFrame(2, 3)

      expect(scorecard.gameScore).toEqual([12, 5])
    })

    it('following a strike', () => {
      scorecard.addNewFrame(10, 0)
      scorecard.addNewFrame(5, 4)

      expect(scorecard.gameScore).toEqual([19, 9])
    })

    it('following multiple strikes', () => {
      scorecard.addNewFrame(10, 0)
      scorecard.addNewFrame(10, 0)
      scorecard.addNewFrame(2, 3)

      expect(scorecard.gameScore).toEqual([22, 15, 5])
    })

    it('following multiple strikes, scoring returns to normal', () => {
      scorecard.addNewFrame(10, 0)
      scorecard.addNewFrame(10, 0)
      scorecard.addNewFrame(2, 3)
      scorecard.addNewFrame(5, 4)

      expect(scorecard.gameScore).toEqual([22, 15, 5, 9])
    })
  })

  describe('Gets the final score', () => {
    it('following a normal game', () => {
      for (let i = 0; i < 10; i++) {
        scorecard.addNewFrame(3, 4)
      }

      expect(scorecard.getFinalScore()).toEqual('Well done. You scored 70')
    })

    it('following a gutter game', () => {
      for (let i = 0; i < 10; i++) {
        scorecard.addNewFrame(0, 0)
      }

      expect(scorecard.getFinalScore()).toEqual('Gutter Game. You scored 0')
    })


    it('following a perfect game', () => {
      for (let i = 0; i < 9; i++) {
        scorecard.addNewFrame(10, 0)
      }
      scorecard.addNewFrame(10, 10, 10)

      expect(scorecard.getFinalScore()).toEqual('Perfect Game. You scored 300')
    })
  })
})
