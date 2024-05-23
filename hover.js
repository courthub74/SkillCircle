// Query the back circle and hr 
    // and the logo and the words

let circle_one = document.getElementById('circle_one');
let circle_two = document.getElementById('circle_two');
let circle_three = document.getElementById('circle_three');

let line_one = document.getElementById('line_one');
let line_two = document.getElementById('line_two');
let line_three = document.getElementById('line_three');

let python_logo = document.getElementById('python');
let python_logo_two = document.getElementById('python_two');
let python_logo_three = document.getElementById('python_three');

let python_description = document.getElementById('python_description');
let python_description_two = document.getElementById('python_description_two');
let python_description_three = document.getElementById('python_description_three');

// For Mobiles

circle_one.addEventListener('pointerdown', () => {
    circle_one.classList.add('hover');
    line_one.classList.add('hover');
    python_logo.classList.add('hover');
    python_description.classList.add('hover');
    // Function with a timer to change it back
    function circle_back() {
        circle_one.classList.remove('hover');
        line_one.classList.remove('hover');
        python_logo.classList.remove('hover');
        python_description.classList.remove('hover');
    }
    setTimeout(circle_back, 3000);
});

circle_two.addEventListener('pointerdown', () => {
    circle_two.classList.add('hover');
    line_two.classList.add('hover');
    // Function with a timer to change it back
    function circle_back_two() {
        circle_two.classList.remove('hover');
        line_two.classList.remove('hover');
    }
    setTimeout(circle_back_two, 3000);
});

circle_three.addEventListener('pointerdown', () => {
    circle_three.classList.add('hover');
    line_three.classList.add('hover');
    // Function with a timer to change it back
    function circle_back_three() {
        circle_three.classList.remove('hover');
        line_three.classList.remove('hover');
    }
    setTimeout(circle_back_three, 3000);
});

// For Desktops

// For any screen larger than the average tablet
let widthMatch = window.matchMedia("(min-width: 1180px)");

if(widthMatch.matches) {

    // add event listener to each circle

    circle_one.addEventListener('mouseover', () => {
        circle_one.classList.add('hover');
        line_one.classList.add('hover');
        python_logo.classList.add('hover');
        python_description.classList.add('hover');
    });
    
    circle_one.addEventListener('mouseout', () => {
        circle_one.classList.remove('hover');
        line_one.classList.remove('hover');
        python_logo.classList.remove('hover');
        python_description.classList.remove('hover');
    });
    
    
    circle_two.addEventListener('mouseover', () => {
        circle_two.classList.add('hover');
        line_two.classList.add('hover');
        python_logo_two.classList.add('hover');
        python_description_two.classList.add('hover');
    });
    
    circle_two.addEventListener('mouseout', () => {
        circle_two.classList.remove('hover');
        line_two.classList.remove('hover');
        python_logo_two.classList.remove('hover');
        python_description_two.classList.remove('hover');
    });
    
    
    circle_three.addEventListener('mouseover', () => {
        circle_three.classList.add('hover');
        line_three.classList.add('hover');
        python_logo_three.classList.add('hover');
        python_description_three.classList.add('hover');
    });
    
    circle_three.addEventListener('mouseout', () => {
        circle_three.classList.remove('hover');
        line_three.classList.remove('hover');
        python_logo_three.classList.remove('hover');
        python_description_three.classList.remove('hover');
    });
}



