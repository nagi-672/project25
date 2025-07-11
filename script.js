const name = "J Nagi Reddy";
const nameElement = document.getElementById("animatedName");

function animateName(){
    nameElement.innerHTML = "";
[...name].forEach((char, i)=> {
    setTimeout(() => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        span.style.transition="opacity 0.3s ease";
        nameElement.appendChild(span);

        setTimeout(() => {
            span.style.opacity="1";
        }, 50);
    },i * 150);
});
  setTimeout(animateName,name.length *150+1500);
}
animateName();

setTimeout(() => {
    const splash = document.getElementById('splash');
    const portfolio = document.getElementById('portfolio');

    splash.style.opacity = '0';
    setTimeout(() =>{
        splash.style.display = 'none';
        portfolio.style.display = 'block';
    }, 1000);
}, 2500);

//hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const cross = document.getElementById("cross");

hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('show');
});
cross.addEventListener('click',() =>{
  navLinks.classList.remove("show");
})

const navItems = navLinks.querySelectorAll("a");
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});


document.addEventListener("click", (event) => {
  const isClickInsideMenu = navLinks.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);
  
  if (!isClickInsideMenu && !isClickOnHamburger) {
    navLinks.classList.remove("show");
  }
});

