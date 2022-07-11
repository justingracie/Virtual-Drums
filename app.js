console.log("hello world")
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    console.log(audio)
})

window.onload = function(){
    sliderKick = document.querySelector(".slider-kick input");
    sliderKick.oninput = function(){
        progressBar = document.querySelector(".slider-kick progress");
        progressBar.value = sliderKick.value;
        sliderKickValue = document.querySelector(".sliderKickValue");
        sliderKickValue.innerHTML = sliderKick.value;

    }
}