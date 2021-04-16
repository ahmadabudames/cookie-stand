"use strict";

// const hours = ['6am ', '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }



// const seattle = {
//     nameOfLocation: 'Seattle',
//     minOfCust: 23,
//     maxOfcust: 65,
//     avgCookieOfSale: 6.3,
//     hourlyOfSales: [],
//     dailyOfSales: [],
//     total: 0,


//     CalcHourlyOfSales: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.hourlyOfSales.push(random(this.minOfCust, this.maxOfcust));
//         }
//         console.log(this.hourlyOfSales);
//     },
//     CalcDailyOfSales: function () {
//         for (let i = 0; i < this.hourlyOfSales.length; i++) {
//             this.dailyOfSales.push(Math.floor(this.hourlyOfSales[i] * this.avgCookieOfSale));

//             this.total += this.dailyOfSales[i];
//         }
//         console.log(this.dailyOfSales);
//     },

//     render: function () {
//         let content = document.getElementById('content');

//         let nameElement = document.createElement('h2');
//         content.appendChild(nameElement);
//         nameElement.textContent = this.nameOfLocation;
//         let ulElement = document.createElement('ul');
//         content.appendChild(ulElement);
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `${hours[i]}:${this.dailyOfSales[i]}cookies`
//         }

//         let totalli = document.createElement('li');
//         ulElement.appendChild(totalli);
//         totalli.textContent = `total:${this.total}cookies`
//     }

// }
// seattle.CalcHourlyOfSales();
// seattle.CalcDailyOfSales();
// seattle.render();


// const tokyo = {
//     nameOfLocation: 'tokyo',
//     minOfCust: 3,
//     maxOfcust: 24,
//     avgCookieOfSale: 1.2,
//     hourlyOfSales: [],
//     dailyOfSales: [],
//     total: 0,


//     CalcHourlyOfSales: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.hourlyOfSales.push(random(this.minOfCust, this.maxOfcust));
//         }
//         console.log(this.hourlyOfSales);
//     },
//     CalcDailyOfSales: function () {
//         for (let i = 0; i < this.hourlyOfSales.length; i++) {
//             this.dailyOfSales.push(Math.floor(this.hourlyOfSales[i] * this.avgCookieOfSale));

//             this.total += this.dailyOfSales[i];
//         }
//         console.log(this.dailyOfSales);
//     },

//     render: function () {
//         let content = document.getElementById('content');

//         let nameElement = document.createElement('h2');
//         content.appendChild(nameElement);
//         nameElement.textContent = this.nameOfLocation;
//         let ulElement = document.createElement('ul');
//         content.appendChild(ulElement);
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `${hours[i]}:${this.dailyOfSales[i]}cookies`
//         }

//         let totalli = document.createElement('li');
//         ulElement.appendChild(totalli);
//         totalli.textContent = `total:${this.total}cookies`
//     }

// }
// tokyo.CalcHourlyOfSales();
// tokyo.CalcDailyOfSales();
// tokyo.render();



// const dubai = {
//     nameOfLocation: 'dubai',
//     minOfCust: 11,
//     maxOfcust: 38,
//     avgCookieOfSale: 3.7,
//     hourlyOfSales: [],
//     dailyOfSales: [],
//     total: 0,


//     CalcHourlyOfSales: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.hourlyOfSales.push(random(this.minOfCust, this.maxOfcust));
//         }
//         console.log(this.hourlyOfSales);
//     },
//     CalcDailyOfSales: function () {
//         for (let i = 0; i < this.hourlyOfSales.length; i++) {
//             this.dailyOfSales.push(Math.floor(this.hourlyOfSales[i] * this.avgCookieOfSale));

//             this.total += this.dailyOfSales[i];
//         }
//         console.log(this.dailyOfSales);
//     },

//     render: function () {
//         let content = document.getElementById('content');

//         let nameElement = document.createElement('h2');
//         content.appendChild(nameElement);
//         nameElement.textContent = this.nameOfLocation;
//         let ulElement = document.createElement('ul');
//         content.appendChild(ulElement);
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `${hours[i]}:${this.dailyOfSales[i]}cookies`
//         }

//         let totalli = document.createElement('li');
//         ulElement.appendChild(totalli);
//         totalli.textContent = `total:${this.total}cookies`
//     }

// }
// dubai.CalcHourlyOfSales();
// dubai.CalcDailyOfSales();
// dubai.render();



// const paris = {
//     nameOfLocation: 'paris',
//     minOfCust: 20,
//     maxOfcust: 38,
//     avgCookieOfSale: 2.3,
//     hourlyOfSales: [],
//     dailyOfSales: [],
//     total: 0,


//     CalcHourlyOfSales: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.hourlyOfSales.push(random(this.minOfCust, this.maxOfcust));
//         }
//         console.log(this.hourlyOfSales);
//     },
//     CalcDailyOfSales: function () {
//         for (let i = 0; i < this.hourlyOfSales.length; i++) {
//             this.dailyOfSales.push(Math.floor(this.hourlyOfSales[i] * this.avgCookieOfSale));

//             this.total += this.dailyOfSales[i];
//         }
//         console.log(this.dailyOfSales);
//     },

//     render: function () {
//         let content = document.getElementById('content');

//         let nameElement = document.createElement('h2');
//         content.appendChild(nameElement);
//         nameElement.textContent = this.nameOfLocation;
//         let ulElement = document.createElement('ul');
//         content.appendChild(ulElement);
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `${hours[i]}:${this.dailyOfSales[i]}cookies`
//         }

//         let totalli = document.createElement('li');
//         ulElement.appendChild(totalli);
//         totalli.textContent = `total:${this.total}cookies`
//     }

// }
// paris.CalcHourlyOfSales();
// paris.CalcDailyOfSales();
// paris.render();




// const lima = {
//     nameOfLocation: 'lima',
//     minOfCust: 2,
//     maxOfcust: 16,
//     avgCookieOfSale: 4.6,
//     hourlyOfSales: [],
//     dailyOfSales: [],
//     total: 0,


//     CalcHourlyOfSales: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.hourlyOfSales.push(random(this.minOfCust, this.maxOfcust));
//         }
//         console.log(this.hourlyOfSales);
//     },
//     CalcDailyOfSales: function () {
//         for (let i = 0; i < this.hourlyOfSales.length; i++) {
//             this.dailyOfSales.push(Math.floor(this.hourlyOfSales[i] * this.avgCookieOfSale));

//             this.total += this.dailyOfSales[i];
//         }
//         console.log(this.dailyOfSales);
//     },

//     render: function () {
//         let content = document.getElementById('content');

//         let nameElement = document.createElement('h2');
//         content.appendChild(nameElement);
//         nameElement.textContent = this.nameOfLocation;
//         let ulElement = document.createElement('ul');
//         content.appendChild(ulElement);
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `${hours[i]}:${this.dailyOfSales[i]}cookies`
//         }

//         let totalli = document.createElement('li');
//         ulElement.appendChild(totalli);
//         totalli.textContent = `total:${this.total}cookies`
//     }

// }
// lima.CalcHourlyOfSales();
// lima.CalcDailyOfSales();
// lima.render();


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let stores = [];


function randomnumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function Cookie(name, min, max, avg) {
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.name = name;

    this.total = 0;
   
    this.cookiesperhour = [];

    stores.push(this);

}



Cookie.prototype.calcCustomerPerHour = function () {
    return randomnumber(this.min, this.max);
}


Cookie.prototype.calcookiesperhour = function () {
    for (let i = 0; i < hours.length; i++) {
        
        this.cookiesperhour.push(Math.floor(this.calcCustomerPerHour() * this.avg));
        this.total += this.cookiesperhour[i];
      
    }
}

const Seattle = new Cookie('Seattle', 23, 65, 6.3);


const Tokyo = new Cookie('Tokyo', 3, 24, 1.2);


const Dubai = new Cookie('Dubai', 11, 38, 3.7);


const Paris = new Cookie('Paris', 20, 38, 2.3);

const Lima = new Cookie('Lima', 2, 16, 4.6);


console.log('stores', stores);




let parent = document.getElementById('parent');

let table = document.createElement('table');

parent.appendChild(table);




function makingHeader() {
    
    let headingrow = document.createElement('tr');
    
    table.appendChild(headingrow);


    let firstTh = document.createElement('th');
    headingrow.appendChild(firstTh);
    firstTh.textContent = 'Name';

    for (let i = 0; i < hours.length; i++) {
       
        let hoursTh = document.createElement('th');
      
        headingrow.appendChild(hoursTh);
        
        hoursTh.textContent = hours[i];

    }

    let finalTh = document.createElement('th');
    headingrow.appendChild(finalTh);
    finalTh.textContent = "Daily Location Total";


}








Cookie.prototype.render = function () {
  
    let storeRow = document.createElement('tr');
  
    table.appendChild(storeRow);

   
    let nameTd = document.createElement('td');
   
    storeRow.appendChild(nameTd);
   
    nameTd.textContent = this.name;


    for (let i = 0; i < hours.length; i++) {
       
        let cookiesTd = document.createElement('td');
        
        storeRow.appendChild(cookiesTd);
        
        cookiesTd.textContent = this.cookiesperhour[i];
    }

  
    let totalTd = document.createElement('td');
    // append total to the store row
    storeRow.appendChild(totalTd);
   
    totalTd.textContent = this.total;

}




function makingFooter() {
  
    let footerRow = document.createElement('tr');

    
    table.appendChild(footerRow);

  

    let firstTh = document.createElement('th');

    
    footerRow.appendChild(firstTh);

  
    firstTh.textContent = 'Totals';

    let totalForEachHour;
    let megaTotal = 0;
    
    for (let i = 0; i < hours.length; i++) {
        totalForEachHour = 0;
        for (let j = 0; j < stores.length; j++) {
           
            totalForEachHour += stores[j].cookiesperhour[i];
            megaTotal += stores[j].cookiesperhour[i];

        }
        console.log(totalForEachHour);
      
        let footerTh = document.createElement('th');

      
        footerRow.appendChild(footerTh);

    
        footerTh.textContent = totalForEachHour;

    }


    let totalTh = document.createElement('th');

   
    footerRow.appendChild(totalTh);

   
    totalTh.textContent = megaTotal;





}

let form = document.getElementById('form');
console.log(form);

form.addEventListener('submit', newstore);


function newstore(event) {
   
    event.preventDefault();
    console.log(event);
    // to show the data that enter in consol
    let newplace = event.target.StoreCountery.value;
    console.log(newplace);
    let min = parseInt(event.target.MinCustmerPerHour.value);
    console.log(min);
    let max = parseInt(event.target.MixCustmerPerHour.value);
    console.log(max);
    let avg = parseFloat(event.target.AvgSallesPerHour.value);
    console.log(avg);


    const addedstore = new Cookie(newplace, min, max, avg);
    console.log(addedstore);

    
   
    table.textContent = " ";
    
    makingHeader();

     for (let i = 0; i < stores.length; i++) {
     stores[i].calcookiesperhour();
     stores[i].render();

    }
     makingFooter();

}

makingHeader();

for (let i = 0; i < stores.length; i++) {
    stores[i].calcookiesperhour();
    stores[i].render();
 

}
makingFooter();