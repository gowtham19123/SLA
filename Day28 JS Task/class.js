// let sum = (a,b) => console.log(a+b);
// sum(2,3);


class Movie {
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }

  getInfo() {
    return `${this.title} was released in ${this.year}.`;
  }
}

const myMovie = new Movie("Inception", 2010);
console.log(myMovie.getInfo());
