Object.assign(String.prototype, {
  getLetterBase() {
    const lower = this.toLowerCase();
    const charVariations = [
      "aáàãäâ",
      "eéèëê",
      "iíìïî",
      "oóòõöô",
      "uúùüû",
      "cç",
    ];
    for (let variations of charVariations) {
      if (variations.includes(lower)) {
        return variations[0];
      }
    }
    return lower;
  },
});

Object.assign(String.prototype, {
  getStringBase() {
    return this.split("")
      .map((c) => c.getLetterBase())
      .join("");
  },
});

Object.assign(String.prototype, {
  countOcurrence(str) {
    return (this.match(new RegExp(str, "gi")) || []).length;
  },
});

Object.assign(String.prototype, {
  isEqual(str) {
    return this.getStringBase() === str.getStringBase();
  },
});

export {};
