const copyConfirm = document.querySelector('.copied');
const copyButton = document.querySelector('.to__copy');
const password = document.querySelector('.password');
const slider = document.getElementById('slider');
const rangeNum = document.getElementById('range_num');
const titleProgres = document.getElementById('title_pr');
const allCheckBoxs = document.querySelectorAll('input[type="checkbox"]')
const progresOne = document.getElementById('one');
const progresTwo = document.getElementById('two');
const progresThree = document.getElementById('three');
const progresFour = document.getElementById('four');
const button = document.querySelector('.button');

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(password.textContent)
        .then(() => {
            copyConfirm.textContent = 'copied';
        })
        .catch(error => {
            copyConfirm.textContent = 'error';
        })
})

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
    slider.style.background = `linear-gradient(to right, #A4FFAF ${partSl}%, #18171F ${partSl}%)`;
    
    //adding colored cells on the progress bar
    if(sliderValue === 0) {
        titleProgres.textContent = '';
        progresse();
    }else if(sliderValue < 6) {
        titleProgres.textContent = 'to weak!';
        progresse();
        progresOne.classList.add('red');
    } else if(sliderValue > 5 && sliderValue < 10) {
        titleProgres.textContent = 'weak';
        progresse();
        progresOne.classList.add('orange');
        progresTwo.classList.add('orange');
    } else if(sliderValue > 9 && sliderValue < 16)  {
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


    button.addEventListener('click', () => {
        copyConfirm.textContent = '';
        password.classList.remove('placeholder');
        
        let result = '';
        if (![...allCheckBoxs].some(item => item.checked)) {
            result = 'Use checkbox';
            return password.textContent = result;
        }
        for(let i = 0; result.length < sliderValue; i++) {
            for (let j = 0; j < allCheckBoxs.length; j++) {
                let item = allCheckBoxs[j];

            if(item.checked && item.dataset.check === "up") {
                result += randomUppercase();
            }
            if(item.checked && item.dataset.check === "low") {
                result += randomLowercase();
            }
            if(item.checked && item.dataset.check === "numb") {
                result += randomNumbers();
            }
            if(item.checked && item.dataset.check === "symb") {
                result += randomSymbol();
            }
            if(result.length >= sliderValue) {
                break;
            }
        }
        }
        password.textContent = result;
    })
})

function randomUppercase() {
    const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomNum = Math.floor(Math.random() * lettersUpper.length);
     return lettersUpper[randomNum];
}

function randomLowercase() {
    const letterLower = "abcdefghijklmnopqrstuvwxyz";
    const randomNum = Math.floor(Math.random() * letterLower.length);
    return letterLower[randomNum];
}

function randomNumbers() {
    return Math.floor(Math.random() * 10);
}

function randomSymbol() {
    const symbol = "!@#$&*_";
    const randomNum = Math.floor(Math.random() * symbol.length);
    return symbol[randomNum];
}