const compColors = require('complementary-colors');

interface RGBObj {
  r: number;
  g: number;
  b: number;
}

type ColorCodeList = Array<string>;

const hexFormat = (hex: string): string => {
  return hex.length === 1 ? `0${hex}` : hex;
};

const rgbToHex = ({ r, g, b }: RGBObj): string => {
  const rHex = r.toString(16);
  const gHex = g.toString(16);
  const bHex = b.toString(16);

  return `#${hexFormat(rHex)}${hexFormat(gHex)}${hexFormat(bHex)}`;
};

const isValidColorCode = (colorCode: string): boolean => {
  const regColorCode3Len = /^#[0-9A-Fa-f]{3}$/;
  const regColorCode6Len = /^#[0-9A-Fa-f]{6}$/;

  return regColorCode3Len.test(colorCode) || regColorCode6Len.test(colorCode);
};

const isValidCodeDigits = (code: string): boolean => {
  return code.length === 6;
};

const getColorCodeList = (colorCode: string): ColorCodeList => {
  const myColor: any = new compColors(colorCode);
  const colorCodeList: ColorCodeList = [];

  for (const color of myColor.triad()) {
    colorCodeList.push(rgbToHex(color));
  }

  return colorCodeList;
};

export const getColors = (colorCode: string): ColorCodeList => {
  if (!isValidColorCode(colorCode)) return [];

  return getColorCodeList(colorCode);
};

export const getRandomColors = (): ColorCodeList => {
  // HACK: Sometimes the output is a five-digit code
  let randomColorCode: string;
  do {
    randomColorCode = Math.floor(Math.random() * 16777215).toString(16);
  } while (!isValidCodeDigits(randomColorCode));

  return getColorCodeList(`#${randomColorCode}`);
};
