document.body.style.margin = "1em 2em 1em 2em";
        
const numValueIsValid = (val, min, max) => {
    return !isNaN(val) &&  (parseInt(val) >= parseInt(min)) && (parseInt(val) <= parseInt(max))
}

const generateBox = () => {
    let boxElementStyle = document.getElementById("mybox").style;
    let boxColor = document.getElementById("boxcolor").value;
    
    let boxWidth = document.getElementById("boxwidth").value;
    let boxWidthMin = document.getElementById("boxwidth").min;
    let boxWidthMax = document.getElementById("boxwidth").max;
    const isValidWidth = numValueIsValid(boxWidth, boxWidthMin, boxWidthMax);

    let boxHeight = document.getElementById("boxheight").value;
    let boxHeightMin = document.getElementById("boxheight").min;
    let boxHeightMax = document.getElementById("boxheight").max;
    const isValidHeight = numValueIsValid(boxHeight, boxHeightMin, boxHeightMax);


    if(isValidWidth && isValidHeight){
        document.getElementById("mybox-label").hidden = false;
        boxElementStyle.width = `${boxWidth}px`;
        boxElementStyle.height = `${boxHeight}px`;
        boxElementStyle.backgroundColor = `${boxColor}`;

        document.getElementById("mybox-image-label").hidden = false;
        createImage();
    }
    
}

const createImage = () => {
    html2canvas(document.getElementById("mybox")).then(function(canvas) {
        let myboxImage = document.getElementById("mybox-image");
        myboxImage.hasChildNodes() ? myboxImage.removeChild(myboxImage.firstChild): null;
        myboxImage.appendChild(canvas);
    });
}