const assert = require('chai').assert.equal;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Balinese breed', () => {
    assert("Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.", breedDetails("Balinese"))
    // console.log(breedDetails);
  });

  it('returns breed details for the Bombay breed', () => {
    assert("The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.", breedDetails("Bombay"))
    // console.log(breedDetails);
  });

  it('returns undefined for a breed that has no details', () => {
    assert(undefined, breedDetails("Siamese"))
    // console.log(breedDetails);
  });
});
