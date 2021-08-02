import LocationService from '../LocalizationService'

describe('LocalizationService', () => {
  test('Should return latitude & longitude from current location', async () => {
    const position = await LocationService.getCurrentPosition()
    expect(position).toEqual({
      latitude: 0,
      longitude: 0,
    })
  })
})
