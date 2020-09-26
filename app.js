const line = document.querySelector('.line-longer')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')

const menuBtn = document.querySelector('.burger-box')
const menu = document.querySelector('.menu')

const addBtn = document.querySelector('.add')

const galleryItems = document.querySelectorAll('.item');

const testText = document.querySelector('.test-text')
const testName = document.querySelector('.test-name')
const ms = 6000;
const reviews = [
    {
        id: 1,
        name: "Michael Cohen",
        review: "Barbers are of high quality, they will definetly make you feel more confident!"
    },
    {
        id: 2,
        name: "Bernard Bergen",
        review: "Service quality was very high, will recomment to my friends."
    }, 
    {
        id: 3, 
        name: "Fernando Fresch",
        review: "The best place, sad I found it in my late 30's. Can't wait to come back!"
    }
]

let counter = 0;

function removeClasses() {
    testText.classList.remove('test-active')
    testName.classList.remove('test-active')
}
setInterval(removeClasses, 1000)

function slideShow() {

testName.classList.add('test-active')
testText.classList.add('test-active')
    if(counter == 3) {
        counter = 0;
    }
    const getText = reviews[counter].review;
    const getName = reviews[counter].name;
   
testText.innerHTML = getText;
testName.innerHTML = getName;
counter++;

}

setInterval(slideShow, ms)

var superToggle = function(element1, class0, el2) {
    element1.classList.toggle(`${class0}`);
    el2.classList.toggle(`${class0}`);
  }

menuBtn.addEventListener('click', () => {
    superToggle(line1, 'hamburger', line2)
    line.classList.toggle('active_line')
line1.classList.toggle('active_line1')
line2.classList.toggle('active_line2')
menu.classList.toggle('active_menu')
})

addBtn.addEventListener('click', (e) => {
    addBtn.classList.toggle('activeBtn')
    
    if(!e.target.classList.contains('activeBtn')) {
        addBtn.innerHTML = 'Show Less -'

        addMore();
    } else {
        addBtn.innerHTML = 'Show More +'
        showLess()
    }
})



galleryItems.forEach((item, i) => {
    if(i < 5) {
        item.style.display = "block"
    } else {
        item.style.display = "none"
    }
})
function addMore() {
    galleryItems.forEach((item,i) => {
        if(i < galleryItems.length) {
            item.classList.add('activeElement')
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
}
function showLess() {
    galleryItems.forEach((item, i) => {
        if(i < 5) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
}

