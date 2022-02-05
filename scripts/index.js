let count = 0;
let images = [];
let time = 2000;

images[0] =
  "https://uidesign.gbtcdn.com/GB/image/7746/1190x420_it.jpg?imbypass=true";
images[1] =
  "https://uidesign.gbtcdn.com/GB/image/7778/1190x420_it.jpg?imbypass=true";
images[2] =
  "https://uidesign.gbtcdn.com/GB/image/7678/en-1190x420.jpg?imbypass=true";
images[3] =
  "https://uidesign.gbtcdn.com/GB/image/7611/1190x420_en.jpg?imbypass=true";

function slidingShows() {
  document.silde.src = images[count];
  if (count < images.length - 1) {
    count++;
  } else {
    count = 0;
  }
  setTimeout("slidingShows()", time);
}
window.onload = slidingShows;

fetch("./db.json")
  .then(function (res) {
    return res.json();
  })
  .then((res) => {
    console.log(res.products);
    showData(res.products);
  });
// Login

let d = JSON.parse(localStorage.getItem("user-data"));
console.log(d);
let nameShow = document.getElementById("name");
if (d) {
  nameShow.textContent = d.email;
  nameShow.style.fontSize = "10px";
}

function showData(ele) {
  // console.log(ele);

  ele.forEach((element) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = element.img;

    let name = document.createElement("p");
    name.textContent = element.name;

    name.addEventListener("click", () => {
      showItem(element);
    });

    let price = document.createElement("p");
    price.setAttribute("class", "price");
    price.textContent = "$" + element.price;

    div.append(img, name, price);
    data.append(div);
  });
}

function showItem(get) {
  if (localStorage.getItem("items") === null) {
    localStorage.setItem("items", JSON.stringify(" "));
  }

  let storage = JSON.stringify(get);
  localStorage.setItem("items", storage);
  window.location.href = "itemshow.html";
}



  
