/* jshint esversion: 6 */

class carFactory { // Factory Pattern
    constructor() {}

    static createCar() {
        let carIndex = document.querySelector("#selectBrand").selectedIndex;

        if (carIndex == 1) {
            return new Lamborghini(); //The Factory instantiates three (3) concrete classes 
        } else if (carIndex == 2) { // and throws and error if an inappropriate class tries to instantiate.
            return new Ferrari();
        } else if (carIndex == 3) { // Data is collected from the user via input fields(form) that
            return new RollsRoyce(); // determines what concrete classes the Factory instantiates
        } else {
            throw "Car not found...";
        }
    }
}