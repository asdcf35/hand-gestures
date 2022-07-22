Webcam.set({width: 300, height: 300, image_format: 'png', png_quality: 90});
camera = document.getElementById('camera');

Webcam.attach('#camera');

function takePicture() {
    Webcam.snap(function (data_uri) {
        document.getElementById('result').innerHTML = `<img id="captured_image" src="${data_uri}"/>`;
    });
}
console.log(`ml5 version: ${ml5.version}`);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SDNDHJlFr/model.json', modelLoaded);

function modelLoaded() {
    console.log("%cModel Loaded", "color:green;font-size:4rem;");
}

function speak() {
    let synth = window.SpeechSynthesis;
    speak_data_1 = `The first prediction is ${prediction_1}`
    speak_data_2 = `The second prediction is ${prediction_1}`
    let utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
