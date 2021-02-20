//colour picker from https://github.com/Simonwep/pickr
const pickr = new Pickr({
    el: '.color-picker',
    theme: 'nano', // or 'monolith', or 'nano'
    showAlways: true,
    useAsButton: true,
    position: 'right',

    swatches: [
        '#0066B3',
        '#808285',
        '#2C2D8B',
        '#A82014',
        '#E65925',
        '#5A422F',
        '#19553C',
        '#793721',
        '#B7BEC5',
        '#EFB736',
        '#93ABAF',
        '#A43E8B ',
        '#D2223E',
        '#FFF200',
        '#A43E8B',
    ],


    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: false,
            save: false
        }
    }
});

let colourStorage

pickr.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    // console.log(rgbaColor);
    colourStorage = rgbaColor;
})

//Selects svg element and fills it with the colour picker's colour
function targetTest (e){
    var clickedItem = e.target
    // if(clickedItem.hasAttribute("path")){
        clickedItem.style.fill=colourStorage;
    // }
}

document.addEventListener("click", targetTest, false);

//changes the svg based on clicked img
function changeSvg (e){
    let svgTarget = e.target
    if(svgTarget.classList.contains("target-prot")){ // only works with the image gallery class
        console.log(svgTarget.getAttribute("src"));
        loadSvg("#svg",svgTarget.getAttribute("src"));
    }

}

document.addEventListener("click", changeSvg, false);

//loads in the svg file for inline HTML
function loadSvg(selector, url) {
    let target = document.querySelector(selector);
    // Request the SVG file
      let ajax = new XMLHttpRequest();
      ajax.open("GET", url, true);
      ajax.send();
  
      // Append the SVG to the target
      ajax.onload = function() {
        target.innerHTML = ajax.responseText;
        target.classList.add(".outline");
        document.querySelector("svg").setAttribute("height","100%");
      }
  }
