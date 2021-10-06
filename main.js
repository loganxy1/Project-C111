Webcam.set({
    height: 300,
    width: 300,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="captured_image">';
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/h9m0BRszp/model.json', modelLoaded);

function modelLoaded(){
    console.log("model is working");
}

prediction1 = "";
prediction2 = "";

function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediciton is "+prediction1;
    speak_data2 = "and the second prediciton is "+prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}