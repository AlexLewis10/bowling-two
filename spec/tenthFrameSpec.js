describe('TenthFrame', () => {
  let tenthFrame

  beforeEach(() => {
    tenthFrame = new TenthFrame()
  })

  describe('Returns the frame score', () => {
    it('returns the score from the frame', () => {
      expect(tenthFrame._getFrameResult(3, 2, 0)).toEqual([5])
    })

    it('returns an error message if the score is invalid', () => {
      const errorMessage = 'Invalid score, please enter new frame'

      expect(tenthFrame._getFrameResult(11, 10, 0)).toEqual(errorMessage)
    })
  })

  describe('Calculates the frame score', () => {
    it('returns the frame score for the 10th frame', () => {
      expect(tenthFrame._frameScore(5, 5, 3)).toEqual(13)
    })
  })

  describe('Checks that the frame score is valid', () => {
    it('cannot have roll3 if roll1 plus roll2 is less than 10', () => {
      expect(tenthFrame._isTenthFrameValid(2, 3, 4)).toEqual(false)
    })

    it('total score cannot be higher than 30', () => {
      expect(tenthFrame._isTenthFrameValid(10, 10, 11)).toEqual(false)
    })

    it('no single roll can be higher than 10', () => {
      expect(tenthFrame._isTenthFrameValid(11, 0, 0)).toEqual(false)
    })
  })
})