describe('Frame', () => {

  describe('Player scores 3, 3', () => {
    it('returns 6', () => {
      const frame = new Frame(3, 3)

      expect(frame.frameScore()).toEqual(6)
    })
  })

  describe('Player scores a strike on their first roll', () => {
    it('returns a strike', () => {
      const frame = new Frame(10, 0)

      expect(frame.isStrike()).toEqual(true)
    })
  })
})
