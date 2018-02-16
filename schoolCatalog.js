class SchoolCatalog{
  constructor(title, item){
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

class School{
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name() {
    return this._name;
  }
  
  get level() {
    return this._level;
  }
  
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  
  set numberOfStudents(newNumberOfStudents){
    if (typeof newNumberOfStudents === "number"){
      this._numberOfStudents = newNumberOfStudents
    } else {return "Invalid input"}
  }
  
  description() {
    return `${this._name} educates ${this._numberOfStudents}, typically between the ages of ${this._level}.` 
  }
  
  static pickSubstituteTeacher(substituteTeachers){
    let genNum = Math.floor(Math.random() * substituteTeachers.length)
    return substituteTeachers[genNum];
  }
}

class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }  
  
  get pickupPolicy(){
    return this._pickupPolicy;
  }
  
}

class MiddleSchool extends School{
  constructor(name, numberOfStudents, subjectSpeciality){
    super(name, 'middle', numberOfStudents);
    this._subjectSpeciality = subjectSpeciality;
  }  
  
  get subjectSpeciality(){
    return this._subjectSpeciality;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams(){
    return this._sportsTeams;
  }
}

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

let lorraineHansbury = new PrimarySchool ("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.")
lorraineHansbury.description()
let stPatricks = new PrimarySchool ("St Patricks", 225, "Each student and their parent, guardian, or a family member over the age of 13 need to sign a form when picking up.")
stPatricks.description()

let mountStMarys = new MiddleSchool("Mount St Marys", 435, "I.T.")
let corpusChristi = new MiddleSchool("Corpus Christi", 324, "English")

let alSmith = new HighSchool("AL E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
let notreDame = new HighSchool("Notre Damn", 680, ['Football', 'Rugby', 'Rounders', 'Netball']);

let mySchoolCatalog = new SchoolCatalog("My School Catalog")
mySchoolCatalog.addItem(lorraineHansbury)
mySchoolCatalog.addItem(stPatricks)
mySchoolCatalog.addItem(mountStMarys)
mySchoolCatalog.addItem(corpusChristi)
mySchoolCatalog.addItem(alSmith)
mySchoolCatalog.addItem(notreDame)

console.log(mySchoolCatalog.items)
