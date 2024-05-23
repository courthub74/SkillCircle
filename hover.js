// Query the back circle and hr

let circle_one = document.getElementById('circle_one');
let circle_two = document.getElementById('circle_two');
let circle_three = document.getElementById('circle_three');

let line_one = document.getElementById('line_one');
let line_two = document.getElementById('line_two');
let line_three = document.getElementById('line_three');

// For Mobiles

circle_one.addEventListener('pointerdown', () => {
    circle_one.classList.add('hover');
    line_one.classList.add('hover');
    // Function with a timer to change it back
    function circle_back() {
        circle_one.classList.remove('hover');
        line_one.classList.remove('hover');
    }
    setTimeout(circle_back, 3000);
});

// For Desktops

// For any screen larger than the average tablet
let widthMatch = window.matchMedia("(min-width: 1180px)");

if(widthMatch.matches) {

    // add event listener to each circle

    circle_one.addEventListener('mouseover', () => {
        circle_one.classList.add('hover');
        line_one.classList.add('hover');
    });
    
    circle_one.addEventListener('mouseout', () => {
        circle_one.classList.remove('hover');
        line_one.classList.remove('hover');
    });
    
    
    circle_two.addEventListener('mouseover', () => {
        circle_two.classList.add('hover');
        line_two.classList.add('hover');
    });
    
    circle_two.addEventListener('mouseout', () => {
        circle_two.classList.remove('hover');
        line_two.classList.remove('hover');
    });
    
    
    circle_three.addEventListener('mouseover', () => {
        circle_three.classList.add('hover');
        line_three.classList.add('hover');
    });
    
    circle_three.addEventListener('mouseout', () => {
        circle_three.classList.remove('hover');
        line_three.classList.remove('hover');
    });
}



