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
})