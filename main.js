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
        let selectB = document.querySelector("#selectBrand");
        let selectBText = selectB.options[selectB.selectedIndex].text;
        let selectsM = document.querySelector("#selectModel");
        let selectedMText = selectsM.options[selectsM.selectedIndex].text;
        let selectsC = document.querySelector("#selectColor");
        let selectedCText = selectsC.options[selectsC.selectedIndex].text;

        let newCar = carFactory.createCar(selectBText); // create car
        newCar.model = selectedMText; // Setting Car Model
        newCar.color = selectedCText; // Setting Car Color
        newCar.year = document.querySelector("#c_year").value; // Setting Car Year
        newCar.mphtokph = Utils.getKph(document.querySelector("#c_mph-kph").value); // Setting Car mph to then be converted..
        this.carGarage.push(newCar);
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
        var carData = "";
        for (var i = 0; i < this.carGarage.length; i++) {
            carData += "<tr>";
            carData += "<td>" + this.carGarage[i].name + "</td>";
            carData += "<td>" + this.carGarage[i].model + "</td>";
            carData += "<td>" + this.carGarage[i].color + "</td>";
            carData += "<td>" + this.carGarage[i].year + "</td>";
            carData += "<td>" + Utils.getKph(this.carGarage[i].mphtokph) + "</td>";
            carData += "</tr>";
        }

        var table = document.querySelector("tbody");
        table.innerHTML = carData;
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