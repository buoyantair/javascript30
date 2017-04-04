var audioElements = document.getElementsByTagName("audio");
var drumElements = document.getElementsByClassName('key');

window.addEventListener("keypress", function(event){
    switch (event.keyCode) {
        default:
            for(var i =0; i < audioElements.length; i++){
                if(audioElements[i].dataset.key == event.keyCode){
                    var audioElm = audioElements[i];
                    var drumElm = drumElements[i];
                    
                    audioElm.currentTime = 0;
                    audioElm.play();
                    drumElm.classList.add('playing');
                    setTimeout(function(){
                       drumElm.classList.remove('playing'); 
                    }, 100)
                }
            }
    }
})