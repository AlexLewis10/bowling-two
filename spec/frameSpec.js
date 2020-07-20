describe('Frame', () => {
  let frame

  beforeEach(() => {
    frame = new Frame()
  })

  describe('Player scores 3, 3', () => {
    it('returns 6', () => {
      expect(frame.frameScore()).toEqual(6)
    })
  })
})
