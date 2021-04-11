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


const hours = ['6am ', '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


let Cookies=[];
function NameOfCookies(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;

    this.total=0;
    this.cookiesPiarHour = [];
    this.main();
    Cookies.push(this);


};


NameOfCookies.prototype.main = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesPiarHour.push(getRandomInt(this.min, this.max));
        this.cookiesPiarHour.push( this.avg );
        console.log(this.cookiesPiarHour);
      
    }
}
 
    //create the table
const content = document.getElementById('content');
var table = document.createElement('table');
content.appendChild(table);






let seattle = new NameOfCookies('Seattle', 23, 65, 6.3);
let tokyo = new NameOfCookies('tokyo', 3, 24, 1.2);
let dubai = new NameOfCookies('dubai', 1, 38, 3.7);
let paris = new NameOfCookies('paris', 20, 38, 2.3);
let lima = new NameOfCookies('lima', 2, 16, 4.6);
// console.log('hello00000');



function mkHeader(){
   

   let rowOfhead=document.createElement('tr');
   table.appendChild(rowOfhead);

   
   let Th1=document.createElement('th');
   rowOfhead.appendChild(Th1);
   Th1.textContent='location';

   for (let i = 0; i < hours.length; i++) {
       let hoursHeader=document.createElement('th');
       rowOfhead.appendChild(hoursHeader);
       hoursHeader.textContent=hours[i];




       
   }
 
   let th2=document.createElement('th');
   rowOfhead.appendChild(th2);
   th2.textContent='daily location total';

}
   NameOfCookies.prototype.tableRender=function(){
       let rowOfStore=document.createElement('tr');
       table.appendChild(rowOfStore);

       let locationTd=document.createElement('td');
       rowOfStore.appendChild(locationTd);
       locationTd.textContent=this.location;


       for (let i = 0; i < hours.length; i++) {
          let tdOfCookies=document.createElement('td');
          rowOfStore.appendChild(tdOfCookies);
          tdOfCookies.textContent=this.cookiesPiarHour[i];

           this.total=Math.floor(this.total+this.cookiesPiarHour[i]);
           

       }
       let tdOfTotal=document.createElement('td');
       rowOfStore.appendChild(tdOfTotal);
       tdOfTotal.textContent=this.total;

   }
   


mkHeader();
for (let i = 0; i < Cookies.length; i++) {
// Cookies[i].cookiesPiarHour();
Cookies[i].tableRender();
    
}
function mkFooter(){
    let rowOfFooter=document.createElement('tr');
    table.appendChild(rowOfFooter);
    
    let firstOfTh=document.createElement('th');
    rowOfFooter.appendChild(firstOfTh);
    firstOfTh.textContent='totals';

   let totalOfHour;
   let Mtotal=0;
   
   for (let i = 0; i < hours.length; i++) {
     totalOfHour=0;
     for (let y = 0; y < Cookies.length; y++) {
         
         totalOfHour+=Cookies[y].cookiesPiarHour[i];
         Mtotal+=Cookies[y].cookiesPiarHour[i];  
         
     }
       let thOfFooter=document.createElement('th');
       rowOfFooter.appendChild(thOfFooter);
       console.log(totalOfHour);
       thOfFooter.textContent=totalOfHour;
   }
   let thOfTotal=document.createElement('th');
   rowOfFooter.appendChild(thOfTotal);
//    thOfTotal.textContent=Mtotal;

}
mkFooter();


let salmon= document.getElementById('salmon');


salmon.addEventListener('submit',submitter);

function submitter(event) {
    
    event.preventDefault();
    console.log(event);


let location=event.target.locationField.value;
console.log(location);

  let min=event.target.minField.value;
  console.log(min);

  let max=event.target.maxField.value;
  console.log(max);

  let avg=event.target.avgField.value;
  console.log(avg);




}