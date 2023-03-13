/**
 * Create a class Book
 */
class Book {
  constructor(title, author, language, numOfPages, date) {
    this.title = title;
    this.author = author;
    this.language = language;
    this.numOfPages = numOfPages;
    this.date = date;
  }
  setTitle(title) {
    this.title = title;
  }
  setAuthor(author) {
    this.author = author;
  }
  setLanguage(language) {
    this.language = language;
  }
  setNumOfPages(num) {
    this.numOfPages = num;
  }
  setDate() {
    this.date = new Date(this.date).getTime;
  }
}

export default Book;
