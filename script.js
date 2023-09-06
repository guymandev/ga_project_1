const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const resumeSection = document.getElementById('resume');
const projectsSection = document.getElementById('projects');
const linksSection = document.getElementById('links');

const navMenu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');

// const menuList = ['home','about','resume','projects','links'];

/* menuLinks.forEach(function(link) {
    console.log(link.innerText);
}); */

// console.log(homeSection.id);

navMenu.addEventListener('click', function(event) {
    event.preventDefault();
    const link = event.target;
    if (link.tagName !== 'A') return;

    console.log(link.innerText);
    console.log(link.innerText.toLowerCase());    
    // console.log(link.tagName);

    /* menuLinks.forEach(function(link) {
        if (link.innerText.toLowerCase() === )

    }); */

});