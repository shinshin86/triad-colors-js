const { getColors, getRandomColors } = require('./dist');

const regColorCode6Len = /^#[0-9A-Fa-f]{6}$/;

describe('triad-color-js', () => {
  describe('getColors', () => {
    describe('Success case of get color code list', () => {
      test('#123', () => {
        const colorHexList = getColors('#123');
        expect(colorHexList).toHaveLength(3);

        for (const colorHex of colorHexList) {
          expect(regColorCode6Len.test(colorHex)).toBeTruthy();
        }
      });

      test('#123456', () => {
        const colorHexList = getColors('#123456');
        expect(colorHexList).toHaveLength(3);

        for (const colorHex of colorHexList) {
          expect(regColorCode6Len.test(colorHex)).toBeTruthy();
        }
      });

      test('#abc', () => {
        const colorHexList = getColors('#abc');
        expect(colorHexList).toHaveLength(3);

        for (const colorHex of colorHexList) {
          expect(regColorCode6Len.test(colorHex)).toBeTruthy();
        }
      });

      test('#abcdef', () => {
        const colorHexList = getColors('#abcdef');
        expect(colorHexList).toHaveLength(3);

        for (const colorHex of colorHexList) {
          expect(regColorCode6Len.test(colorHex)).toBeTruthy();
        }
      });

      test('#ABC', () => {
        const colorHexList = getColors('#ABC');
        expect(colorHexList).toHaveLength(3);

        for (const colorHex of colorHexList) {
          expect(regColorCode6Len.test(colorHex)).toBeTruthy();
        }
      });

      test('#ABCDEF', () => {
        const colorHexList = getColors('#ABCDEF');
        expect(colorHexList).toHaveLength(3);

        for (const colorHex of colorHexList) {
          expect(regColorCode6Len.test(colorHex)).toBeTruthy();
        }
      });

      test('#1Ab', () => {
        const colorHexList = getColors('#1Ab');
        expect(colorHexList).toHaveLength(3);

        for (const colorHex of colorHexList) {
          expect(regColorCode6Len.test(colorHex)).toBeTruthy();
        }
      });

      test('#1AbBd2', () => {
        const colorHexList = getColors('#1AbBd2');
        expect(colorHexList).toHaveLength(3);

        for (const colorHex of colorHexList) {
          expect(regColorCode6Len.test(colorHex)).toBeTruthy();
        }
      });
    });

    describe('Failure case of get color code list', () => {
      test('#ggg', () => {
        const colorHexList = getColors('#ggg');
        expect(colorHexList).toHaveLength(0);
      });

      test('#1', () => {
        const colorHexList = getColors('#1');
        expect(colorHexList).toHaveLength(0);
      });

      test('#12', () => {
        const colorHexList = getColors('#12');
        expect(colorHexList).toHaveLength(0);
      });

      test('#1234', () => {
        const colorHexList = getColors('#1234');
        expect(colorHexList).toHaveLength(0);
      });

      test('#12345', () => {
        const colorHexList = getColors('#12345');
        expect(colorHexList).toHaveLength(0);
      });

      test('123', () => {
        const colorHexList = getColors('123');
        expect(colorHexList).toHaveLength(0);
      });

      test('#123ang', () => {
        const colorHexList = getColors('#123ang');
        expect(colorHexList).toHaveLength(0);
      });

      test('', () => {
        const colorHexList = getColors('');
        expect(colorHexList).toHaveLength(0);
      });

      test('#', () => {
        const colorHexList = getColors('#');
        expect(colorHexList).toHaveLength(0);
      });
    });
  });

  describe('getRandomColors', () => {
    describe('Success case of get random color code list', () => {
      test('Call function. (No arguments are needed.)', () => {
        const colorHexList = getRandomColors();
        expect(colorHexList).toHaveLength(3);

        for (const colorHex of colorHexList) {
          expect(regColorCode6Len.test(colorHex)).toBeTruthy();
        }
      });

      test('If you pass in an argument, there is no error. Passed parameter is not referenced.', () => {
        const colorHexList = getRandomColors('#123456');
        expect(colorHexList).toHaveLength(3);

        for (const colorHex of colorHexList) {
          expect(regColorCode6Len.test(colorHex)).toBeTruthy();
        }
      });
    });
  });
});
