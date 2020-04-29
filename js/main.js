//function for smooth scrolling

    const makeNavLinkSmooth = () => {
        const navLinks = document.querySelectorAll('.navbar__link');

        for(let n in navLinks){
            if(navLinks.hasOwnPropert(n)){
                navLink[n].addEventListener('click', e => {
                e.preventDefault();
                document.quersySelector(navLinks[n].hash)
                .scrollIntoView({
                behavior: "smooth"
                });
            }):
        }
    }
}

//for scrollspy change the active links as we scroll
const spyScrollong = () => {
    const sections = document.querySelectorAll('.main__const')

    window.onscroll = () => {
        const scrollPostion = document.documentElement.scrollTop || document.body.scrollTop;

        for(let s in section){
            if(section.hasOwnProperty(s)) && section[s].offsertTop <= scrollPosition)
                const Id = sections[s].id;
                document.querySelector('.navbar__link--active') .classList.remove('navbar__link--active');
               

                document.querySelector('a[href*=$(id').parentNode.classList.add('navabar__link--active');
        }
    }
}


//function call for makeNavLinksSmooth
makeNavLinkSmooth();

//function call for scrollspy
spyScrolling();