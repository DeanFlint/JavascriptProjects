/*
As a frequent diner, you love trying out new restaurants and experimenting with different foods. 

However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you'll use JavaScript to randomly create a three-course meal based on what is available on a menu. 

We'll keep running it until we're satisfied with the generated meal!
 */

const menu = {
  
  _courses: {
  	_appetizers: [],
    _mains: [],
    _desserts: [],  
    get appetizers(){
      return this._appetizers
    	},
    get mains(){
      return this._mains
    	},
    get desserts(){
      return this._desserts
    	},  
    set appetizers(appertizerIn){
      this._appetizers.push(appetizerIn); 
    	},
    set mains(mainsIn){
      this._mains.push(mainsIn); 
    	},
    set desserts(dessertsIn){
      this._desserts.push(dessertsIn); 
    	}
  }, //end of _courses
  
  get course(){
    	return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
   	}      
  }, //end of get course
  
  addDishToCourse: function(courseName, dishName, dishPrice) {
    
    const dish = {
      name: dishName,
      price: dishPrice      
    	};
    
    return this._courses[courseName].push(dish);  
    
  }, //end of addDishToCourse
  
  getRandomDishFromCourse: function(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
  	return dishes[randomIndex];
  }, // end of getRandomDishFromCourse
  
   generateRandomMeal: function() {
     const appetizers = this.getRandomDishFromCourse('appetizers');
     const mains = this.getRandomDishFromCourse('mains');
     const desserts = this.getRandomDishFromCourse('desserts');
     const totalPrice = appetizers.price + mains.price + desserts.price;
   		
     return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}. The price is ${totalPrice}.`;
   }
  
}; //end of menu

menu.addDishToCourse('appetizers', 'app1', 1.00);
menu.addDishToCourse('appetizers', 'app2', 2.00);
menu.addDishToCourse('appetizers', 'app3', 3.00);
menu.addDishToCourse('mains', 'main1', 1.00);
menu.addDishToCourse('mains', 'main2', 2.00);
menu.addDishToCourse('mains', 'main3', 3.00);
menu.addDishToCourse('desserts', 'des1', 1.00);
menu.addDishToCourse('desserts', 'des2', 2.00);
menu.addDishToCourse('desserts', 'des3', 3.00);

let meal = menu.generateRandomMeal();
console.log(meal);