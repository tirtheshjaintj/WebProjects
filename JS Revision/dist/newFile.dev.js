"use strict";

setTimeout(function () {
  var container = doc.getElementsByClassName("container");

  var _loop = function _loop(i) {
    if (i % 2 == 0) {
      container[i].style = "padding:10px;background-color:red";
    } else {
      container[i].style = "padding:10px;background-color:green";
    }

    container[i].addEventListener("click", function () {
      container[i].classList.remove("border");
    });
    container[i].addEventListener("mouseover", function () {
      container[i].classList.add("border");
    });
    var createElement = doc.createElement("p");
    creat;
    container[i].appendChild;
  };

  for (var i = 0; i < container.length; i++) {
    _loop(i);
  }
}, 1000);