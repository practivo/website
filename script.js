const content = document.querySelector(".content");
const proof = document.querySelector(".proof");
const pitch = document.querySelector(".pitch");
const uxWriting = document.querySelector(".uxwriting");
const contentBox = document.querySelector(".content-box");
const proofBox = document.querySelector(".proof-box");
const pitchBox = document.querySelector(".pitch-box");
const uxBox = document.querySelector(".ux-box");
const choiceButton = document.querySelectorAll('.choice');
const choiceFirst = document.querySelectorAll('.first');
const choiceSecond = document.querySelectorAll('.second');
const choiceThird = document.querySelectorAll('.third');
const choiceFourth = document.querySelectorAll('.fourth');
const contentVar = document.querySelector('.contentwriting');
const proofVar = document.querySelector('.proofreading');
const pitchVar = document.querySelector('.pitchdeck');
const uxVar = document.querySelector('.ux');
const wordsVar = document.querySelector('.words');
const pagesVar = document.querySelector('.pages');
const slidesVar = document.querySelector('.slides');
const screensVar = document.querySelector('.screens');
const longTerm = document.getElementById('long-term');
const shortTerm = document.getElementById('short-term');
const oneDay = document.querySelector('.one-day');
const oneWeek = document.querySelector('.one-week');
const twoWeeks = document.querySelector('.two-weeks');
const na = document.querySelector('.na');
const projectTime = document.getElementsByName('project-time');
const closeButton = document.querySelector('.close-cont');
const contactCont = document.querySelector('.contact-part3');
const closeButton2 = document.querySelector('.close2');
const contactCont2 = document.querySelector('.contact-part4');

const link = document.querySelector(".link");
const copyAlert = document.querySelector(".alert3");
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".open-modal");
const closeModalBtn = document.querySelector("#close-modal");
const linkCon = document.querySelector(".link-con");


closeModalBtn.addEventListener("click", closeModal);
openModalBtn.addEventListener("click", openModal);


function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  modal.style.display = "block";
}

linkCon.addEventListener("click", () => {
  navigator.clipboard.writeText(link.textContent);
  showAlert();
});

function showAlert() {
  copyAlert.style.display = "block";
  setTimeout(function () {
    copyAlert.style.display = "none";
  }, 1000);
}



  

content.addEventListener("click", () => {
    content.classList.add("x");
    proof.classList.remove("x");
    pitch.classList.remove("x");
    uxWriting.classList.remove("x");
    contentBox.classList.add("x");
    proofBox.classList.remove("x");
    pitchBox.classList.remove("x");
    uxBox.classList.remove("x");
});

proof.addEventListener("click", () => {
    content.classList.remove("x");
    proof.classList.add("x");
    pitch.classList.remove("x");
    uxWriting.classList.remove("x");
    contentBox.classList.remove("x");
    proofBox.classList.add("x");
    pitchBox.classList.remove("x");
    uxBox.classList.remove("x");
});

pitch.addEventListener("click", () => {
    content.classList.remove("x");
    proof.classList.remove("x");
    pitch.classList.add("x");
    uxWriting.classList.remove("x");
    contentBox.classList.remove("x");
    proofBox.classList.remove("x");
    pitchBox.classList.add("x");
    uxBox.classList.remove("x");
});

uxWriting.addEventListener("click", () => {
    content.classList.remove("x");
    proof.classList.remove("x");
    pitch.classList.remove("x");
    uxWriting.classList.add("x");
    contentBox.classList.remove("x");
    proofBox.classList.remove("x");
    pitchBox.classList.remove("x");
    uxBox.classList.add("x");
});

choiceFirst.forEach(first => {
    first.addEventListener("click", () => {
        choiceFirst.forEach(first => first.classList.remove('active'));
        first.classList.add('active');
    });
});

choiceSecond.forEach(second => {
    second.addEventListener("click", () => {
        choiceSecond.forEach(second => second.classList.remove('active'));
        second.classList.add('active');
    });
});

choiceThird.forEach(third => {
    third.addEventListener("click", () => {
        choiceThird.forEach(third => third.classList.remove('active'));
        third.classList.add('active');
    });
});

choiceFourth.forEach(fourth => {
    fourth.addEventListener("click", () => {
        choiceFourth.forEach(fourth => fourth.classList.remove('active'));
        fourth.classList.add('active');
    });
});

contentVar.addEventListener("click", () => {
    wordsVar.classList.add("active");
    pagesVar.classList.remove("active");
    slidesVar.classList.remove("active");
    screensVar.classList.remove("active");
});

proofVar.addEventListener("click", () => {
    wordsVar.classList.remove("active");
    pagesVar.classList.add("active");
    slidesVar.classList.remove("active");
    screensVar.classList.remove("active");
});

pitchVar.addEventListener("click", () => {
    wordsVar.classList.remove("active");
    pagesVar.classList.remove("active");
    slidesVar.classList.add("active");
    screensVar.classList.remove("active");
});

uxVar.addEventListener("click", () => {
    wordsVar.classList.remove("active");
    pagesVar.classList.remove("active");
    slidesVar.classList.remove("active");
    screensVar.classList.add("active");
});

longTerm.addEventListener('click', () => {
    oneDay.classList.add('disabled');
    oneWeek.classList.add('disabled');
    twoWeeks.classList.add('disabled');
    na.classList.add('disabled'); 
});

shortTerm.addEventListener('click', () => {
    oneDay.classList.remove('disabled');
    oneWeek.classList.remove('disabled');
    twoWeeks.classList.remove('disabled');
    na.classList.remove('disabled');
});

// closeButton.addEventListener('click', () => {
//     contactCont.classList.remove('active');
// });         

closeButton2.addEventListener('click', () => {
    contactCont2.classList.remove('active');
}); 








const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else {        document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);









