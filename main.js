var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition();

function startbtn(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content=="take my selfie"){
        console.log("taking selfie---");
    speakcomputer();
    }
   
}
function speakcomputer(){
    var synth = window.speechSynthesis;
    //speak_data=document.getElementById("textbox").value;
    speak_data="takeing your selfie in five seconds";
    
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
{
    take_my_selfie();
    save();
},5000);

}

var camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
    
});




function take_my_selfie(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='selfie_taken' src='"+ data_uri +"'>";
});
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_taken").src;
    link.href = image;
    link.click();

}
