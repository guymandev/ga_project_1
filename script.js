// const homeSection = document.getElementById('home');
// const aboutSection = document.getElementById('about');
// const resumeSection = document.getElementById('resume');
// const projectsSection = document.getElementById('projects');
// const linksSection = document.getElementById('links');

const navMenu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');
const allSections = document.querySelectorAll('#main section');

// const menuList = ['home','about','resume','projects','links'];

/* menuLinks.forEach(function(link) {
    console.log(link.innerText);
}); */

// console.log(homeSection.id);

/* allSections.forEach(function(section) {
    console.log(section.id);
}); */

navMenu.addEventListener('click', function(event) {
    event.preventDefault();
    const clickedLink = event.target;
    if (clickedLink.tagName !== 'A') return;

    // console.log(link.innerText);
    // console.log(clickedLink.innerText.toLowerCase());
    
    if (clickedLink.innerText.toLowerCase() !== 'contact') {

        allSections.forEach(function(section) {
            if (section.id === clickedLink.innerText.toLowerCase()) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            };
            console.log(section.id);
        });

        const docSection = document.getElementById(clickedLink.innerText.toLowerCase());
        console.log(docSection.id);
    };



    menuLinks.forEach(function(link) {
        // if (link.innerText.toLowerCase() === )

    });

});