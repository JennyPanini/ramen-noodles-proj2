filterObjects("all");


function filterObjects(c) {
    var x, i;
    x = document.getElementsByClassName("box");
    if (c =="all") c="";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element,name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i< arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element,name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i< arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add a submit event listener to the search form
navbarSearch.addEventListener("submit", function(e) {
    // Get the value of the search input
    var query = this.elements["q"].value;
  
    // If the query is empty, prevent the form submission
    if (query === "") {
      e.preventDefault();
      alert("Please enter a keyword to search");
    }
  });
  
  