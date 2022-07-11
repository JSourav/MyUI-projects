// SEARCHBAR SECTION
// JavaScript code
function search_character() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('content');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}

// alert("Enter password ?")

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}


// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



//Go to top button
var mybutton = document.getElementById("topBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// FETCH DATA FROM API


let apiData;
async function getApiData() {

  let url = "https://api.jikan.moe/v4/anime";
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  let response = await fetch(url);

  if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    apiData = await response.json();

  } else {
    alert("HTTP-Error: " + response.status);
  }
  //console.log(apiData.data);

  let apiJson;
  for (let x in apiData.data) {
    console.log(apiData.data[x].title);
    let para = document.createElement('p');
    para.innerHTML = `<h3> ${apiData.data[x].title} </h3> <h4> ${apiData.data[x].rating} </h3> <img src='${apiData.data[x].images.jpg.small_image_url}'>`;
    document.body.append(para);

  }

}

getApiData();















