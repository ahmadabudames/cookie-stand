"use strict";

let hours = ['6am ', '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avgCookieOfSale: 6.3,
    hourlyOfSales: [],
    dailyOfSales: 0,



    randomOfCust: function () {
        let result = seattle.max - seattle.min;
        let random = Math.random() * result + seattle.min;
        return Math.floor(this.random);
    },

   
    },


seattle.hourlyDailySales();



