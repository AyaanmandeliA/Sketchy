function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
}
function setup() {
    canvas = createCanvas(301, 301);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}
function draw() {
    strokeWeight(10);
    stroke("red");
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function clearcanvvasss() {
    background("white");
}

function classifyCanvas() {
    classifier.classify(canvas, gotResults);
}
function gotResults(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result);
        document.getElementById("label").innerHTML = "Label: " + result[0].label;
        document.getElementById("confidence").innerHTML = "Confidence: " + Math.round(result[0].confidence * 100) + "%";
        utterthis=new SpeechSynthesisUtterance(result[0].label);
        synth.speak(utterthis);
    }
}
