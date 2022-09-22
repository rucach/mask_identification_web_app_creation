function setup(){
    canvas = createCanvas(600, 600);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/E2GEXM4hT/model.json", modelLoaded);
}

function modelLoaded(){
    console.log("model_loaded");
}

function draw(){
    image(video, 0, 0, 500, 500);
    classifier.classify(video, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    } else{
        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(0) * 100;
    }
}