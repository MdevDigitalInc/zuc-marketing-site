/*
    w3 custom <select> code - Modified by AW - 20180924
*/

var x, i, j, selElmnt, a, b, c;

// Look for any elements with the class "zuc-select-container"

x = document.getElementsByClassName("zuc-select-container");

for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  
  /*for each element, create a new DIV that will act as the selected item:*/

  a = document.createElement("DIV");
  a.setAttribute("class", "zuc-select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  /*for each element, create a new DIV that will contain the option list:*/

  b = document.createElement("DIV");
  b.setAttribute("class", "zuc-select-items zuc-select-hide");
  for (j = 1; j < selElmnt.length; j++) {

    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/

    c = document.createElement("DIV");
    c.setAttribute("class", "zuc-select-option");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {

        /*when an item is clicked, update the original select box,
        and the selected item:*/

        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("zuc-same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "zuc-same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {

      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/

      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("zuc-select-hide");
      this.classList.toggle("zuc-select-arrow-active");
  });
}

// closeAllSelect : close all <select> boxes in the doc except class="zuc-select-selected"

function closeAllSelect(elmnt) {

  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("zuc-select-items");
  y = document.getElementsByClassName("zuc-select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("zuc-select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("zuc-select-hide");
    }
  }
}

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
