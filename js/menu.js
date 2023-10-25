

// MENU MOBILE
function menumobile(){
    var header = document.querySelector('header');
    var button = document.querySelector('.header__burger');

    button.addEventListener('click', () =>{
        console.log('click');
        header.classList.toggle('show__menu');
    })

    
}
menumobile();


// THEME
var themeToggleBtn = document.getElementById("themeToggle");
var themeIcon = document.getElementById("themeIcon");

themeToggleBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark__theme");

if (document.body.classList.contains("dark__theme")) {
    themeIcon.classList.remove("fa-moon-o");
    themeIcon.classList.add("fa-sun-o");
} else {
    themeIcon.classList.remove("fa-sun-o");
    themeIcon.classList.add("fa-moon-o");

}

});

// FILTRE PORTFOLIO 

function tabFilters(){
    const tabs = document.querySelectorAll('.portfolio__filters a');
    const cards = document.querySelectorAll('#portfolio .card');

    const resetActiveLinks = () => {
        tabs.forEach(elem => {
            elem.classList.remove('active');
        })
    }
    const show__projects = (elem) => {
        console.log(elem)
        cards.forEach(projet => {
            console.log(projet);
            let filter = projet.getAttribute('data-category');
            if(elem==='all'){
                projet.parentNode.classList.remove('hide');
                return
            }
            if(filter !== elem){
                projet.parentNode.classList.add('hide');
            }else {
                projet.parentNode.classList.remove('hide');
            }
        });
    }

    tabs.forEach(elem => {
        elem.addEventListener('click',(event)=> {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            show__projects(filter)
            resetActiveLinks();
            elem.classList.add('active');
        })
    })


}

tabFilters();

function scroll__link(){

$(document).ready(function() {
  $(".scroll-link").on("click", function(event) {
    event.preventDefault(); 

    var target = $(this).attr("href");
    var targetPosition = $(target).offset().top;

    $("html, body").animate(
      {
        scrollTop: targetPosition
      },
      1000 
    );
  });
});
}
scroll__link();


  