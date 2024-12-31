const slider = document.getElementById('slider');
const rangeNum = document.getElementById('range_num');
const titleProgres = document.getElementById('title_pr');

const progresOne = document.getElementById('one');
const progresTwo = document.getElementById('two');
const progresThree = document.getElementById('three');
const progresFour = document.getElementById('four');

const allPr = [
    progresOne,
    progresTwo,
    progresThree,
    progresFour
]

function progresse () {
    return  allPr.forEach(item => {
        item.classList = '';
        item.classList.add('progress');
    });
}

slider.addEventListener('input', () => {
    //get value of range input
    const sliderValue = Number(slider.value);
    //display the value on the screen
    rangeNum.innerText = sliderValue;
    //changing the color of the slider
    const max = slider.max;
    const partSl = (sliderValue / max) * 100;
    slider.style.background = `linear-gradient(to right, #A4FFAF ${partSl}%, #fff ${partSl}%)`;
    
    //adding colored cells on the progress bar
    if(sliderValue === 0) {
        titleProgres.textContent = '';
        progresse();
    }else if(sliderValue < 6) {
        titleProgres.textContent = 'to weak!';
        progresse();
        progresOne.classList.add('red');
    } else if(sliderValue > 5 && sliderValue < 11) {
        titleProgres.textContent = 'weak';
        progresse();
        progresOne.classList.add('orange');
        progresTwo.classList.add('orange');
    } else if(sliderValue > 10 && sliderValue < 16)  {
        titleProgres.textContent = 'medium';
       progresse();
        progresOne.classList.add('yellow');
        progresTwo.classList.add('yellow');
        progresThree.classList.add('yellow');
    } else{
        titleProgres.textContent = 'strong';
        progresOne.classList.add('green');
        progresTwo.classList.add('green');
        progresThree.classList.add('green');
        progresFour.classList.add('green');
    }

})
