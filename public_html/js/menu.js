


function menumobile(){
    var header = document.querySelector('header');
    var button = document.querySelector('.header__burger');

    button.addEventListener('click', () =>{
        console.log('click');
        header.classList.toggle('show__menu');
    })

    
}
menumobile();


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


  