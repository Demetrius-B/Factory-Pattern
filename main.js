/* jshint esversion: 6 */
// Demetrius Berkeley | Assignment 4 - Factory

window.addEventListener("load", e => {
    let assignment = Assignment.getInstance(); // Singleton is instantiated after the page loads.
});


class Assignment { // A Singleton
    constructor() {
        this.carGarage = [];

        document.querySelector("#createBtn").addEventListener("click", this.setupCar.bind(this));
        document.querySelector("#displayBtn").addEventListener("click", this.showData.bind(this));
        document.querySelector("#selectBrand").addEventListener("change", this.addModels.bind(this));
    }

    setupCar() {
        let brandOption = document.querySelector("#selectBrand").selectedIndex;
        let selectsM = document.querySelector("#selectModel");
        let selectedMText = selectsM.options[selectsM.selectedIndex].text;
        let selectsC = document.querySelector("#selectColor");
        let selectedCText = selectsC.options[selectsC.selectedIndex].text;

        if (brandOption == 1) {
            let l_car = "Lamborghini";
            let newCar = carFactory.createCar(l_car); // create car
            newCar.model = selectedMText; // Setting Car Model
            newCar.color = selectedCText; // Setting Car Color
            newCar.year = document.querySelector("#c_year").value; // Setting Car Year
            newCar.mphtokph = Utils.getKph(document.querySelector("#c_mph-kph").value); // Setting Car mph to then be converted..
            this.carGarage.push(newCar);
        } else if (brandOption == 2) {
            let f_car = "Ferrari";
            let newCar = carFactory.createCar(f_car);
            newCar.model = selectedMText; // Setting Car Model
            newCar.color = selectedCText; // Setting Car Color
            newCar.year = document.querySelector("#c_year").value; // Setting Car Year
            newCar.mphtokph = Utils.getKph(document.querySelector("#c_mph-kph").value); // Setting Car mph to then be converted..
            this.carGarage.push(newCar);
        } else if (brandOption == 3) {
            let r_car = "Rolls-Royce";
            let newCar = carFactory.createCar(r_car);
            newCar.model = selectedMText; // Setting Car Model
            newCar.color = selectedCText; // Setting Car Color
            newCar.year = document.querySelector("#c_year").value; // Setting Car Year
            newCar.mphtokph = Utils.getKph(document.querySelector("#c_mph-kph").value); // Setting Car mph to then be converted..
            this.carGarage.push(newCar);
        }
    }

    addModels() {
        let brandOption = document.querySelector("#selectBrand").selectedIndex;
        let carModel = "<option disabled selected hidden>Choose a model</option>";

        if (brandOption == 1) {
            carModel += "<option>Gallardo LP 570-4</option>";
            carModel += "<option>Aventador J</option>";
            carModel += "<option>Veneno Roadster</option>";
            carModel += "<option>Murcielago Lp 670 Super Veloce</option>";
        } else if (brandOption == 2) {
            carModel += "<option>488 Spider</option>";
            carModel += "<option>458 Spider</option>";
            carModel += "<option>LaFerrari</option>";
            carModel += "<option>F12 TDF</option>";
        } else if (brandOption == 3) {
            carModel += "<option>Phantom</option>";
            carModel += "<option>Wraith Black Badge</option>";
            carModel += "<option>Ghost</option>";
            carModel += "<option>Dawn</option>";
        }
        document.querySelector("#selectModel").innerHTML = carModel;
    }

    showData() {
        this.carGarage.forEach(function(e) {
            var carResults = document.querySelector("tbody");
            carResults.insertAdjacentHTML('afterbegin',
                "<tr><td>" + e["name"] + "</td><td>" + e["model"] + "</td><td>" + e["color"] + "</td><td>" + e["year"] + "</td><td>" + e["mphtokph"] + "</td></tr>");
        }, this);
    }

    static getInstance() {
        if (!Assignment._instance) {
            Assignment._instance = new Assignment();
            return Assignment._instance;
        } else {
            throw "Whoah, you can only create one instance of Assignment";
        }
    }
}