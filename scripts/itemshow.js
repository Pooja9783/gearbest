

let d = JSON.parse(localStorage.getItem("user-data"));
console.log(d);
let nameShow = document.getElementById('name');
if(d){
  nameShow.textContent = d.email;
  nameShow.style.fontSize = '20px'
}


// Login-End










let data = JSON.parse(localStorage.getItem("items"));
// console.log(data);
let item = document.getElementById('data');

let main = document.createElement('div');
main.setAttribute("class", "imgDiv");
let div = document.createElement('div');
div.setAttribute('class', 'div');

let img = document.createElement('img');
img.src = data.img;

let name = document.createElement('p');
name.textContent = data.name;


let s = document.createElement('div');
s.setAttribute('class', 's')
let short = document.createElement('p');
short.textContent = data.shortdes;

let brand = document.createElement('h6');
brand.textContent = data.brand

let p = document.createElement('div');
p.setAttribute('class', 'p');
let pri = document.createElement('p')
pri.textContent = "Price:"
let price = document.createElement('b');
price.textContent =  "$" + data.price;

main.append(img);


let ship = document.createElement('div');
ship.setAttribute('class', 'ship');
let shipp = document.createElement('b')
shipp.textContent = "Shipment:"
let shipment = document.createElement('p');
shipment.textContent = data.shipment;

let pack = document.createElement('div');
pack.setAttribute('class', 'pack');
let packk = document.createElement('b')
packk.textContent = "Pack up:"
let packup = document.createElement('h4');
packup.textContent = data.packup;

let ship_from = document.createElement('div');
ship_from.setAttribute('class', 'ship_from');
let shi = document.createElement('b')
shi.textContent = "Ships from:"
let shipfrom = document.createElement('h5');
shipfrom.textContent = data.shipfrom;

let but= document.createElement('div');
but.setAttribute('class', 'button');
let btn= document.createElement('button');
btn.textContent = "Add to Cart"

let buy = document.createElement('button');
buy.textContent = " Buy Now";



s.append(short,brand);
p.append(pri, price);
ship.append( shipp, shipment);
pack.append(packk, packup );
ship_from.append(shi, shipfrom);
but.append(btn, buy)
div.append( name,s, p,ship, ship_from, but);
item.append(main, div);


let span2 = document.getElementById('span2')
let counter = 0;
btn.addEventListener('click', ()=>{
span2.innerHTML = counter++
if(counter >=1){
    span2.innerHTML = 1;
}

itemAdd(data);
});




function itemAdd(data){
  localStorage.setItem("Product", JSON.stringify(data));
}

