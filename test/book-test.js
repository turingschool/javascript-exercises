var assert = require('chai').assert;
var createTitle = require('../src/book.js').createTitle;
var buildMainCharacter = require('../src/book.js').buildMainCharacter;
var calculatePageCount = require('../src/book.js').calculatePageCount;
var writeBook = require('../src/book.js').writeBook;


describe('book.js', function() {
  it('should have a function called createTitle', function() {
    assert.isFunction(createTitle);
  })

  it('createTitle should take in a title and return a modified title', function() {
    var bookIdea = createTitle("Storm's Awakening");

    assert.equal(bookIdea, "The Storm's Awakening");
  })

  it('createTitle should be able to create many modified titles', function() {
      var sushiTitle = createTitle("Dancing Sushi");
      var dragonTitle = createTitle("Dragon in the Summer");
      var ghostTitle = createTitle("Teenage Ghoul");

      assert.equal(sushiTitle, "The Dancing Sushi");
      assert.equal(dragonTitle, "The Dragon in the Summer");
      assert.equal(ghostTitle, "The Teenage Ghoul");
  })

  it('buildMainCharacter should be a function (make sure to add the function you create in book.js to the module.exports)', function() {
    assert.isFunction(buildMainCharacter);
  })

  it('buildMainCharacter should make a character object', function() {
    var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");

    assert.equal(ghoulCharacter.name, "Vassya");
    assert.equal(ghoulCharacter.age, 16);
    assert.equal(ghoulCharacter.pronouns, "she/her");
  })

  it('calculatePageCount should be a function (make sure to add the function you create in book.js to the module.exports)', function() {
    assert.isFunction(calculatePageCount);
  })

  it('calculatePageCount should add 20 pages per letter in the title', function() {
    var ghoulTitle = createTitle("Teenage Ghoul");
    var ghoulPageCount = calculatePageCount(ghoulTitle);

    assert.equal(ghoulPageCount, 340);
  })

  it('writeBook should be a function', function() {
    assert.isFunction(writeBook);
  })

  it('writeBook should return a book object', function() {
    var ghoulTitle = createTitle("Teenage Ghoul");
    var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");
    var ghoulBook = writeBook(ghoulTitle, ghoulCharacter);

    assert.equal(ghoulBook.title, ghoulTitle);
    assert.equal(ghoulBook.mainCharacter, ghoulCharacter);
    assert.equal(ghoulBook.pageCount, 340);
  })

  it('writeBook should return a different book object', function() {
    var dragonTitle = createTitle("The Dragon in the Summer");
    var ghoulCharacter = buildMainCharacter("Dana", 25, "they/them");
    var ghoulBook = writeBook(dragonTitle, ghoulCharacter);

    assert.equal(ghoulBook.title, dragonTitle);
    assert.equal(ghoulBook.mainCharacter, ghoulCharacter);
    assert.equal(ghoulBook.pageCount, 560);
  })
})
