Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 99
});
camera= document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>'
    });
};
console.log('ml5 version :', ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/7GR6m_zQ6/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
};
function speak(){
    var synth = window.speechSynthesis;
    speakdata1="The first prediction is"+prediction_1;
    speakdata2="And the second prediction is"+prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
};