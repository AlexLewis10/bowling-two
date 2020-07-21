describe('Frame', () => {

  describe('Player scores 3, 3', () => {
    it('returns 6', () => {
      const frame = new Frame(3, 3)

      expect(frame.frameScore()).toEqual(6)
    })
  })

  describe('Player scores a strike', () => {
    it('returns true if they score a strike on their first roll', () => {
      const frame = new Frame(10, 0)

      expect(frame.isStrike()).toEqual(true)
    })

    it('returns false if they do not score a strike', () => {
      const frame = new Frame(4, 5)

      expect(frame.isStrike()).toEqual(false)
    })
  })

  describe('Player scores a spare', () => {
    it('returns true if they score a spare', () => {
      const frame = new Frame(5, 5)

      expect(frame.isSpare()).toEqual(true)
    })

    it('returns false if they do not score a spare', () => {
      const frame = new Frame(3, 3)

      expect(frame.isSpare()).toEqual(false)
    })
  })
})
