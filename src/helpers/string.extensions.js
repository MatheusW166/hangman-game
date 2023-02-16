function getLetterBase(letter) {
  const lower = letter.toLowerCase();
  const charVariations = ["aáàãäâ", "eéèëê", "iíìïî", "oóòõöô", "uúùüû", "cç"];
  for (let variations of charVariations) {
    if (variations.includes(lower)) {
      return variations[0];
    }
  }
  return "";
}

Object.assign(String.prototype, {
  compareLettersBr(letter) {
    const letterBase = getLetterBase(letter);
    const thisBase = getLetterBase(this);
    return letterBase === thisBase;
  },
});

export {};
