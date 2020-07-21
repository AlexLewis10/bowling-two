describe('Frame', () => {

  let frame

  beforeEach(() => {
    frame = new Frame()
  })


  describe('Returns information for the frame', () => {
    it('returns an array with score, spare and strike', () => {
      expect(frame.addNewFrame(4, 5)).toEqual([9, false, false])
    })

    it('returns user message if the input is invalid', () => {
      expect(frame.addNewFrame(8, 8)).toEqual('Invalid score, please enter new frame')
    })
  })

  describe('Player scores 3, 3', () => {
    it('returns 6', () => {
      expect(frame.frameScore(3, 3)).toEqual(6)
    })
  })

  describe('Player scores a strike', () => {
    it('returns true if they score a strike on their first roll', () => {
      expect(frame.isStrike(10, 0)).toEqual(true)
    })

    it('returns false if they do not score a strike', () => {
      expect(frame.isStrike(4, 5)).toEqual(false)
    })
  })

  describe('Player scores a spare', () => {
    it('returns true if they score a spare', () => {
      expect(frame.isSpare(5, 5)).toEqual(true)
    })

    it('returns false if they do not score a spare', () => {
      expect(frame.isSpare(2, 3)).toEqual(false)
    })
  })

  describe('Player cannot score more than 10', () => {
    it('returns true if score is equal or less than 10', () => {
      expect(frame.isValidScore(2, 7)).toEqual(true)
    })

    it('returns false if score is more than 10', () => {
      expect(frame.isValidScore(5, 6)).toEqual(false)
    })
  })
})
