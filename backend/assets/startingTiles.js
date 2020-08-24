const startingTiles = {
  en: {
    6: [{ letter: "e", points: 1 }],
    4: [
      { letter: "a", points: 1 },
      { letter: "i", points: 1 },
    ],
    3: [{ letter: "o", points: 1 }],
    2: [
      { letter: "r", points: 1 },
      { letter: "t", points: 1 },
      { letter: "n", points: 1 },
    ],
    2: [
      { letter: "l", points: 1 },
      { letter: "s", points: 1 },
      { letter: "u", points: 1 },
      { letter: "d", points: 2 },
    ],
    1: [{ letter: "g", points: 2 }],
    1: [
      { letter: "b", points: 2 },
      { letter: "c", points: 2 },
      { letter: "m", points: 2 },
      { letter: "p", points: 2 },
      { letter: "f", points: 4 },
      { letter: "h", points: 4 },
      { letter: "v", points: 4 },
      { letter: "w", points: 4 },
      { letter: "y", points: 4 },
      { letter: "", points: null },
      ,
    ],
  },
  tr: {
    12: [{ letter: "a", points: 1 }],
    8: [{ letter: "e", points: 1 }],
    7: [
      { letter: "i", points: 1 },
      { letter: "k", points: 1 },
      { letter: "l", points: 1 },
    ],
    6: [{ letter: "r", points: 1 }],
    5: [
      { letter: "n", points: 1 },
      { letter: "t", points: 1 },
    ],
    4: [
      { letter: "ı", points: 2 },
      { letter: "m", points: 2 },
    ],
    3: [
      { letter: "o", points: 2 },
      { letter: "s", points: 2 },
      { letter: "u", points: 2 },
    ],
    2: [
      { letter: "ç", points: 2 },
      { letter: "b", points: 2 },
      { letter: "d", points: 3 },
      { letter: "ş", points: 4 },
      { letter: "ü", points: 3 },
      { letter: "c", points: 4 },
      { letter: "y", points: 3 },
      { letter: "", points: null },
      { letter: "z", points: 4 },
    ],
    1: [
      { letter: "ö", points: 7 },
      { letter: "p", points: 5 },
      { letter: "v", points: 7 },
      { letter: "g", points: 5 },
      { letter: "ğ", points: 8 },
      { letter: "h", points: 5 },
      { letter: "f", points: 7 },
      { letter: "j", points: 10 },
    ],
  },
  fr: {
    15: [{ letter: "e", points: 1 }],
    9: [{ letter: "a", points: 1 }],
    8: [{ letter: "i", points: 1 }],
    6: [
      { letter: "n", points: 1 },
      { letter: "o", points: 1 },
      { letter: "r", points: 1 },
      { letter: "s", points: 1 },
      { letter: "t", points: 1 },
      { letter: "u", points: 1 },
    ],
    5: [{ letter: "l", points: 1 }],
    3: [
      { letter: "d", points: 2 },
      { letter: "m", points: 2 },
    ],
    2: [
      { letter: "b", points: 3 },
      { letter: "p", points: 3 },
      { letter: "c", points: 3 },
      { letter: "g", points: 2 },
      { letter: "h", points: 4 },
      { letter: "f", points: 4 },
      { letter: "v", points: 4 },
      { letter: "", points: null },
    ],
    1: [
      { letter: "q", points: 8 },
      { letter: "w", points: 10 },
      { letter: "k", points: 10 },
      { letter: "j", points: 8 },
      { letter: "x", points: 10 },
      { letter: "z", points: 10 },
      { letter: "y", points: 10 },
    ],
  },
  de: {
    15: [{ letter: "e", points: 1 }],
    9: [{ letter: "n", points: 1 }],
    7: [{ letter: "s", points: 1 }],
    6: [
      { letter: "i", points: 1 },
      { letter: "r", points: 1 },
      { letter: "t", points: 1 },
      { letter: "u", points: 1 },
    ],
    5: [{ letter: "a", points: 1 }],
    4: [
      { letter: "d", points: 1 },
      { letter: "h", points: 2 },
      { letter: "m", points: 3 },
    ],
    3: [
      { letter: "g", points: 2 },
      { letter: "l", points: 2 },
      { letter: "o", points: 2 },
    ],
    2: [
      { letter: "b", points: 3 },
      { letter: "c", points: 4 },
      { letter: "f", points: 4 },
      { letter: "k", points: 4 },
    ],
    1: [
      { letter: "w", points: 3 },
      { letter: "z", points: 3 },
      { letter: "p", points: 4 },
      { letter: "ä", points: 6 },
      { letter: "j", points: 6 },
      { letter: "ü", points: 6 },
      { letter: "v", points: 6 },
      { letter: "ö", points: 8 },
      { letter: "x", points: 8 },
      { letter: "q", points: 10 },
      { letter: "y", points: 10 },
    ],
  },
};

module.exports = startingTiles;
