"use strict";

document.body.style.margin = "1em 2em 1em 2em";

var numValueIsValid = function numValueIsValid(val, min, max) {
  return !isNaN(val) && parseInt(val) >= parseInt(min) && parseInt(val) <= parseInt(max);
};

var generateBox = function generateBox() {
  var boxElementStyle = document.getElementById("mybox").style;
  var boxColor = document.getElementById("boxcolor").value;
  var boxWidth = document.getElementById("boxwidth").value;
  var boxWidthMin = document.getElementById("boxwidth").min;
  var boxWidthMax = document.getElementById("boxwidth").max;
  var isValidWidth = numValueIsValid(boxWidth, boxWidthMin, boxWidthMax);
  var boxHeight = document.getElementById("boxheight").value;
  var boxHeightMin = document.getElementById("boxheight").min;
  var boxHeightMax = document.getElementById("boxheight").max;
  var isValidHeight = numValueIsValid(boxHeight, boxHeightMin, boxHeightMax);

  if (isValidWidth && isValidHeight) {
    document.getElementById("mybox-label").hidden = false;
    boxElementStyle.width = "".concat(boxWidth, "px");
    boxElementStyle.height = "".concat(boxHeight, "px");
    boxElementStyle.backgroundColor = "".concat(boxColor);
    document.getElementById("mybox-image-label").hidden = false;
    createImage();
  }
};

var createImage = function createImage() {
  html2canvas(document.getElementById("mybox")).then(function (canvas) {
    var myboxImage = document.getElementById("mybox-image");
    myboxImage.hasChildNodes() ? myboxImage.removeChild(myboxImage.firstChild) : null;
    myboxImage.appendChild(canvas);
  });
};
