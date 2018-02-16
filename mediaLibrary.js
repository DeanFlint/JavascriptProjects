class Catalog{  
  constructor(title){
    this._title = title;
    this._items = [];
  } 
  
  get title(){
    return this._title;
  }
  
  get items(){
    return this._items;
  }
  
  addItem(item){
  	this._items.push(item)
  } 
}


class Media{
  constructor(title){ // properties without a default
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
    this._averageRating = 0;
  }
  
  get title(){
    return this.title;
  }
  
  get isCheckout(){
    return this.isCheckedOut;
  }
  
  get ratings(){
    return this.ratings;
  }
  
  get averageRating(){
    return this.averageRating;
  }
    
  toggleCheckOutStatus(){
    if (this._isCheckedOut === true){
      return this._isCheckedOut = false
    } else {return this._isCheckedOut = true}
  }
      
  getAverageRatings(){
    let accu = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    this._averageRating =  Math.floor(accu / this._ratings.length);
    return this._averageRating
  }
  
  addRating(rating){
    if (rating > 0 && rating < 6) {
      return this._ratings.push(rating);
    } else { console.log("Rating needs to be between 1 and 5")}    
  }
}


class Book extends Media{
  constructor(title, author, pages){
    super (title);
    this._author = author;
    this._pages = pages;
  }
  
  get author(){
    return this.author;
  }
  
  get pages(){
    return this.pages;
  }     
}


class Movie extends Media{
  constructor(title, director, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  get director(){
    return this.director;
  }
  
  get runTime(){
    return this.runTime;
  }  
}


class CD extends Media{
  constructor(title, artist, songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  
  get artist(){
    return this.artist;
  }
  
  get songs(){
    return this._songs;
  }
  
  shuffleSongs(){
    let currentIndex = this._songs.length, tempValue, randIndex;    
    // While there remain elements to shuffle...  
    while (0 !== currentIndex){         
      // Pick a remaining element...
      randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;      
      // And swap it with the current element
      tempValue = this._songs[currentIndex];
      this._songs[currentIndex] = this._songs[randIndex];
      this._songs[randIndex] = tempValue
      }    
    return this._songs;
  }  
}

/* Books */
const hOE = new Book ('A Short History of Nearly Everything', 'Bill Bryson', 544)
const harryPotter = new Book ('Harry Potter', 'JK Rowling', 650)
const lOTR = new Book ('Lord of the Rings', 'Tolkien', 801)
hOE.toggleCheckOutStatus()
hOE.addRating(4)
hOE.addRating(5)
hOE.getAverageRatings()
harryPotter.addRating(2)
harryPotter.addRating(4)
harryPotter.addRating(5)
harryPotter.addRating(2)
harryPotter.getAverageRatings()
lOTR.addRating(4)
lOTR.addRating(5)
lOTR.addRating(2)
lOTR.getAverageRatings()


/* Movies */
const jurassic = new Movie('Jurassic Park', 'Steven Spielberg', 123)
const logan = new Movie('Logan', 'James Mangold', 109)
const gOTG = new Movie('Guardians of the Galaxy', 'James Gunn', 117)
jurassic.toggleCheckOutStatus()

jurassic.addRating(2)
jurassic.addRating(1)
jurassic.addRating(4)
jurassic.getAverageRatings()
logan.addRating(4)
logan.addRating(5)
logan.addRating(2)
logan.addRating(4)
logan.getAverageRatings()
gOTG.addRating(5)
gOTG.addRating(2)
gOTG.addRating(4)
gOTG.addRating(5)
gOTG.addRating(2)
gOTG.getAverageRatings()

/* CD */
const arcMon = new CD("AM", "Arctic Monkeys", ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"]);
const fTP = new CD("Supermodel", "Foster the People", ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"]);
const passenger = new CD("All The Little Lights", "Passenger", ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"]);
arcMon.addRating(4)
arcMon.addRating(5)
arcMon.getAverageRatings()
fTP.addRating(2)
fTP.addRating(4)
fTP.getAverageRatings()
passenger.addRating(5)
passenger.addRating(2)
passenger.getAverageRatings()
arcMon.shuffleSongs();
fTP.shuffleSongs();


/* Catalog */
let catalog = new Catalog("My Catalog");
catalog.addItem(hOE);
catalog.addItem(harryPotter);
catalog.addItem(lOTR);
catalog.addItem(jurassic);
catalog.addItem(logan);
catalog.addItem(gOTG);
catalog.addItem(arcMon);
catalog.addItem(fTP);
catalog.addItem(passenger);
console.log(catalog.items)
