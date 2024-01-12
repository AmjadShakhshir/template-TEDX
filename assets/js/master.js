// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

function scrollToTheSection(elements) {
    elements.forEach( element => {
        if (element !== null) {
            element.addEventListener("click", (e) =>{

                e.preventDefault();

                document.querySelector(e.target.dataset.section).scrollIntoView({

                    behavior: 'smooth'
                });
            });
        }
        
    });
}

scrollToTheSection(allBullets);