import { checkCityName } from './nameChecker'

test('Valid city name', () => {
    const name = 'Salt Lake City';
    expect(checkCityName(name)).toBe(true);
});

test('Invalid city name', () => {
    const name = 'San-';
    expect(checkCityName(name)).toBe(false);
})