///////////////////////////////////////////PRE-LOADER/////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  // Hide the preloader
  document.querySelector(".preloader").style.display = "none";
});
////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('scroll', function() {
  var header = document.getElementById('navbar');
  if (window.scrollY > 0) {
      header.classList.add('scroll');
  } else {
      header.classList.remove('scroll');
  }
});
/////////////////////////////////////////////ARROW UP///////////////////////////////////////////////////////
window.addEventListener('scroll', function() {
  var scrollToTop = document.getElementById('scrollToTop');
  if (window.scrollY > 100) { // Change 100 to the desired scroll position where the arrow appears
      scrollToTop.style.display = 'block';
  } else {
      scrollToTop.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
// /////////////////////////////////////////////////////////////////////////////////////////////////

var typed = new Typed(".job" , {
    strings: ["Frontend Developer" , "Sr.Travel Consultant" , "Sales Representative"],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1200,
    loop: true,
    cursorChar: '_',
  });

  // -----------------------------------------------

  // brogress bar percentage for communication:-

  let circularProgress = document.querySelector(".circular-progress"),
       progressValue = document.querySelector(".progress-value");



  let progressStartValue = 0,
      progressEndValue = 100,
      speed = 30;
      


  let progress = setInterval(() => {
    progressStartValue++

    progressValue.textContent =`${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7E30E1 ${progressStartValue*3.6}deg,  #F3F8FF 0deg)`


    if(progressStartValue == progressEndValue){
      clearInterval(progress)
    }

  }, speed)  

    // brogress bar percentage for teamwork:-

    let circularProgressTeamwork = document.querySelector(".circular-progress-teamwork"),
        progressValueTeamwork = document.querySelector(".progress-value-teamwork");



let progressTeamworkStartValue = 0,
    progressTeamworkEndValue = 80,
    speedTeamwork = 30;
   


let progressTeamwork = setInterval(() => {
  progressTeamworkStartValue++

  progressValueTeamwork.textContent =`${progressTeamworkStartValue}%`
 circularProgressTeamwork.style.background = `conic-gradient(#7E30E1 ${progressTeamworkStartValue*3.6}deg,  #F3F8FF 0deg)`


 if(progressTeamworkStartValue == progressTeamworkEndValue){
   clearInterval(progressTeamwork)
 }

}, speed)  

    // brogress bar percentage for multitasking:-


let circularProgressMultitasking = document.querySelector(".circular-progress-multitasking"),
        progressValueMultitasking = document.querySelector(".progress-value-multitasking");



let progressMultitaskingStartValue = 0,
    progressMultitaskingEndValue = 90,
    speedMultitasking = 30;
   


let progressMultitasking = setInterval(() => {
  progressMultitaskingStartValue++

  progressValueMultitasking.textContent =`${progressMultitaskingStartValue}%`
  circularProgressMultitasking.style.background = `conic-gradient(#7E30E1 ${progressMultitaskingStartValue*3.6}deg,  #F3F8FF 0deg)`


 if(progressMultitaskingStartValue == progressMultitaskingEndValue){
   clearInterval(progressMultitasking)
 }

}, speed)

//    // brogress bar percentage for Problem Solving:-


let circularProgressProblemsolving = document.querySelector(".circular-progress-problemsolving"),
        progressValueProblemsolving = document.querySelector(".progress-value-problemsolving");



let progressProblemsolvingStartValue = 0,
    progressProblemsolvingEndValue = 85,
    speedProblemsolving = 30;
   


let progressProblemsolving = setInterval(() => {
  progressProblemsolvingStartValue++

  progressValueProblemsolving.textContent =`${progressProblemsolvingStartValue}%`
  circularProgressProblemsolving.style.background = `conic-gradient(#7E30E1 ${progressProblemsolvingStartValue*3.6}deg,  #F3F8FF 0deg)`


 if(progressProblemsolvingStartValue == progressProblemsolvingEndValue){
   clearInterval(progressProblemsolving)
 }

}, speed)

////////////////////////////////////////AOS////////////////////////////////////////////////////////
AOS.init({ 
  once: true,
});
//////////////////////////////////////Scroll section active link//////////////////////////////////
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header ul li a')

window.onscroll = () => {
  sections.forEach (sec =>{
     let top = window.scrollY;
     let offset = sec.offsetTop - 150;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id')

     if (top >= offset  && top < offset + height){

      navLinks.forEach.apply(links => {
        links.classList.remove('active');
        document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
      })
     }
  })
}
//-----------------------------------------------------------------------------------------
// JavaScript to toggle the menu when the icon is clicked
//for responsive mobile max-width 568px

document.querySelector('.menu-icon').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action of the link
  document.querySelector('.list1').classList.toggle('expanded');
});
