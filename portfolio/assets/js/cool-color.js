var counter = 0

function coolColors() {
    counter++;
    var state = document.body
    if (counter % 2  ==0) {
        state.style.background = 'rgb(255, 255, 255)'
        console.log("white");
    } else {
        state.style.background = 'rgb(255, 0 , 0)'
        console.log("red");
    }
}