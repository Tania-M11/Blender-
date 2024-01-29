let blender = document.getElementById("blender");
let soundButtonBlender = document.getElementById("blender-btn-sound")
let soundBlender = document.getElementById("blender-sound")
let stateBlender = "off";


//Function to control the status of blender off/on according
//that changes the image using the active class
function controlBlender(){
    if(stateBlender === "off"){
        stateBlender = "on"
        makeBlenderSound()
        blender.classList.add("active")
        // console.log("i am on")
    }else {
        stateBlender = "off"
        makeBlenderSound()
        blender.classList.remove("active")
        // console.log("I am off")
    }
}

//sound function
function makeBlenderSound(){
   if(soundBlender.paused){
    soundButtonBlender.play()
    soundBlender.play()
   } else{
    soundButtonBlender.play()
    soundBlender.pause()
    //empezará desde el segundo 2, para eso
    soundBlender.currentTime = 0;  /* Reinicia el audio al segundo 0 */
   }
}