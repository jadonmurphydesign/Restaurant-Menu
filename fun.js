const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    
    
    get appetizers() {
      return this._courses.appetizers
    },
  
    
    get mains() {
      return this._courses.mains
    },
  
    
    get desserts() {
      return this._courses.desserts
    },
  
    set appetizers(appetizers){
      this._courses = appetizers;
    },
    
    set mains(mains) {
      this._courses.mains = mains;
    },
    
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
    
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    
    
    //Function for later callback to add items to the menu
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        dish: dishName,
        price: dishPrice,
      };
      
      return this._courses[courseName].push(dish)
    },
    
    //Randomly Select a dish from the menu
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    

    //Select a dish from each course, and add up the price
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + desserts.price;
      const decimalForTip = totalPrice * .2;
      return `Your meal is ${appetizer.dish}, ${main.dish}, ${desserts.dish}. Your total price will be ${totalPrice}. A 20% tip  will be ${decimalForTip}.`; 
    },


  
};
  
menu.addDishToCourse('appetizers', 'Oysters', 24.99);
menu.addDishToCourse('appetizers', 'Garlic Bread', 10.99);
menu.addDishToCourse('appetizers', 'Shrimp Scampi', 11.99);
menu.addDishToCourse('mains', 'Smoked Salmon', 22.99);
menu.addDishToCourse('mains', 'T-Bone Steak', 29.99);
menu.addDishToCourse('mains', 'Fettucini', 19.99);
menu.addDishToCourse('desserts', 'Mousse', 13.99);
menu.addDishToCourse('desserts', 'Chocolate Cake', 10.99);
menu.addDishToCourse('desserts', 'Ice Cream', 9.99);
  
let meal = menu.generateRandomMeal();
// Should return the meal, price, tip and price after tip  
console.log(meal)
  
  
  