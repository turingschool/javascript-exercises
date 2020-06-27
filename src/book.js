function createTitle(title) {
  return "The " + title;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function calculatePageCount(title) {
  return title.length * 20
}

function writeBook(title, character) {
  return {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title)
  }
}

module.exports = {
  createTitle,
  buildMainCharacter,
  calculatePageCount,
  writeBook
}