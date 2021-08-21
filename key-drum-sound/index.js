var keyElement1 = document.getElementById('container1')
var keyElement2 = document.getElementById('container2')
var keyElement3 = document.getElementById('container3')
var keyElement4 = document.getElementById('container4')
var keyElement5 = document.getElementById('container5')
var keyElement6 = document.getElementById('container6')
var keyElement7 = document.getElementById('container7')
var keyElement8 = document.getElementById('container8')
var keyElement9 = document.getElementById('container9')

document.body.addEventListener('keydown', function (e) {
    var keycode = e.key
    if(keycode == 'A' || keycode == 'a') {
        console.log("Keydown for => " + keycode);
        keyElement1.style.borderColor = "orange"
        var mainHeading = document.querySelector('#container1 h1')
        var mainDesc = document.querySelector('#container1 h3')
        var mainAudio = document.querySelector('#container1 audio')
        mainHeading.style.fontSize = "35px"
        mainDesc.style.fontSize = "20px"
        mainAudio.play();
    } 
    else if(keycode == 'S' || keycode == 's') {
        console.log("Keydown for => " + keycode);
        keyElement2.style.borderColor = "orange"
        var mainHeading = document.querySelector('#container2 h1')
        var mainDesc = document.querySelector('#container2 h3')
        var mainAudio = document.querySelector('#container2 audio')
        mainHeading.style.fontSize = "35px"
        mainDesc.style.fontSize = "20px"
        mainAudio.play();
    } 
    else if(keycode == 'D' || keycode == 'd') {
        console.log("Keydown for => " + keycode);
        keyElement3.style.borderColor = "orange"
        var mainHeading = document.querySelector('#container3 h1')
        var mainDesc = document.querySelector('#container3 h3')
        var mainAudio = document.querySelector('#container3 audio')
        mainHeading.style.fontSize = "35px"
        mainDesc.style.fontSize = "20px"
        mainAudio.play();
    } 
    else if(keycode == 'F' || keycode == 'f') {
        console.log("Keydown for => " + keycode);
        keyElement4.style.borderColor = "orange"
        var mainHeading = document.querySelector('#container4 h1')
        var mainDesc = document.querySelector('#container4 h3')
        var mainAudio = document.querySelector('#container4 audio')
        mainHeading.style.fontSize = "35px"
        mainDesc.style.fontSize = "20px"
        mainAudio.play();
    } 
    else if(keycode == 'G' || keycode == 'g') {
        console.log("Keydown for => " + keycode);
        keyElement5.style.borderColor = "orange"
        var mainHeading = document.querySelector('#container5 h1')
        var mainDesc = document.querySelector('#container5 h3')
        var mainAudio = document.querySelector('#container5 audio')
        mainHeading.style.fontSize = "35px"
        mainDesc.style.fontSize = "20px"
        mainAudio.play();
    } 
    else if(keycode == 'H' || keycode == 'h') {
        console.log("Keydown for => " + keycode);
        keyElement6.style.borderColor = "orange"
        var mainHeading = document.querySelector('#container6 h1')
        var mainDesc = document.querySelector('#container6 h3')
        var mainAudio = document.querySelector('#container6 audio')
        mainHeading.style.fontSize = "35px"
        mainDesc.style.fontSize = "20px"
        mainAudio.play();
    } 
    else if(keycode == 'J' || keycode == 'j') {
        console.log("Keydown for => " + keycode);
        keyElement7.style.borderColor = "orange"
        var mainHeading = document.querySelector('#container7 h1')
        var mainDesc = document.querySelector('#container7 h3')
        var mainAudio = document.querySelector('#container7 audio')
        mainHeading.style.fontSize = "35px"
        mainDesc.style.fontSize = "20px"
        mainAudio.play();
    } 
    else if(keycode == 'K' || keycode == 'k') {
        console.log("Keydown for => " + keycode);
        keyElement8.style.borderColor = "orange"
        var mainHeading = document.querySelector('#container8 h1')
        var mainDesc = document.querySelector('#container8 h3')
        var mainAudio = document.querySelector('#container8 audio')
        mainHeading.style.fontSize = "35px"
        mainDesc.style.fontSize = "20px"
        mainAudio.play();
    } 
    else if(keycode == 'L' || keycode == 'l') {
        console.log("Keydown for => " + keycode);
        keyElement9.style.borderColor = "orange"
        var mainHeading = document.querySelector('#container9 h1')
        var mainDesc = document.querySelector('#container9 h3')
        var mainAudio = document.querySelector('#container9 audio')
        mainHeading.style.fontSize = "35px"
        mainDesc.style.fontSize = "20px"
        mainAudio.play();
    } 
})


document.body.addEventListener('keyup', function (e) {
    var keycode = e.key
    if(keycode == 'A' || keycode == 'a') {
        console.log("Keyup for => " + keycode );
        keyElement1.style.borderColor = "white"
        var mainHeading = document.querySelector('#container1 h1')
        var mainDesc = document.querySelector('#container1 h3')
        var mainAudio = document.querySelector('#container1 audio')
        mainHeading.style.fontSize = "2em"
        mainDesc.style.fontSize = "1.17em"
    }
    else if(keycode == 'S' || keycode == 's') {
        console.log("Keydown for => " + keycode);
        keyElement2.style.borderColor = "white"
        var mainHeading = document.querySelector('#container2 h1')
        var mainDesc = document.querySelector('#container2 h3')
        var mainAudio = document.querySelector('#container2 audio')
        mainHeading.style.fontSize = "2em"
        mainDesc.style.fontSize = "1.17em"
    } 
    else if(keycode == 'D' || keycode == 'd') {
        console.log("Keydown for => " + keycode);
        keyElement3.style.borderColor = "white"
        var mainHeading = document.querySelector('#container3 h1')
        var mainDesc = document.querySelector('#container3 h3')
        var mainAudio = document.querySelector('#container3 audio')
        mainHeading.style.fontSize = "2em"
        mainDesc.style.fontSize = "1.17em"
    } 
    else if(keycode == 'F' || keycode == 'f') {
        console.log("Keydown for => " + keycode);
        keyElement4.style.borderColor = "white"
        var mainHeading = document.querySelector('#container4 h1')
        var mainDesc = document.querySelector('#container4 h3')
        var mainAudio = document.querySelector('#container4 audio')
        mainHeading.style.fontSize = "2em"
        mainDesc.style.fontSize = "1.17em"
    } 
    else if(keycode == 'G' || keycode == 'g') {
        console.log("Keydown for => " + keycode);
        keyElement5.style.borderColor = "white"
        var mainHeading = document.querySelector('#container5 h1')
        var mainDesc = document.querySelector('#container5 h3')
        var mainAudio = document.querySelector('#container5 audio')
        mainHeading.style.fontSize = "2em"
        mainDesc.style.fontSize = "1.17em"
    } 
    else if(keycode == 'H' || keycode == 'h') {
        console.log("Keydown for => " + keycode);
        keyElement6.style.borderColor = "white"
        var mainHeading = document.querySelector('#container6 h1')
        var mainDesc = document.querySelector('#container6 h3')
        var mainAudio = document.querySelector('#container6 audio')
        mainHeading.style.fontSize = "2em"
        mainDesc.style.fontSize = "1.17em"
    } 
    else if(keycode == 'J' || keycode == 'j') {
        console.log("Keydown for => " + keycode);
        keyElement7.style.borderColor = "white"
        var mainHeading = document.querySelector('#container7 h1')
        var mainDesc = document.querySelector('#container7 h3')
        var mainAudio = document.querySelector('#container7 audio')
        mainHeading.style.fontSize = "2em"
        mainDesc.style.fontSize = "1.17em"
    } 
    else if(keycode == 'K' || keycode == 'k') {
        console.log("Keydown for => " + keycode);
        keyElement8.style.borderColor = "white"
        var mainHeading = document.querySelector('#container8 h1')
        var mainDesc = document.querySelector('#container8 h3')
        var mainAudio = document.querySelector('#container8 audio')
        mainHeading.style.fontSize = "2em"
        mainDesc.style.fontSize = "1.17em"
    } 
    else if(keycode == 'L' || keycode == 'l') {
        console.log("Keydown for => " + keycode);
        keyElement9.style.borderColor = "white"
        var mainHeading = document.querySelector('#container9 h1')
        var mainDesc = document.querySelector('#container9 h3')
        var mainAudio = document.querySelector('#container9 audio')
        mainHeading.style.fontSize = "2em"
        mainDesc.style.fontSize = "1.17em"
    } 
})
