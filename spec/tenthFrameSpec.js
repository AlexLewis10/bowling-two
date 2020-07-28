describe('TenthFrame', () => {
  let tenthFrame

  beforeEach(() => {
    tenthFrame = new TenthFrame()
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

    // it('total score cannot be higher than 30', () => {
    //   expect(tenthFrame._isTenthFrameValid(10, 10, 11)).toEqual(false)
    // })
  })
})