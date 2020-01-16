// Your code goes here
const grabNav = document.querySelector(".main-navigation");
grabNav.addEventListener('mouseover', () => {
    grabNav.style.backgroundColor = "#fffdda"
    console.log(grabNav)
});

////////////////////////////////////////

const grabintroPic = document.querySelector("img");
grabintroPic.addEventListener('mouseenter', () =>{
    grabintroPic.style.transform="scale(1.5)";
    grabintroPic.style.transition = "tranform 0.3s"
});
grabintroPic.addEventListener('mouseleave', () => {
    grabintroPic.style.transform = "scale(1)"
    console.log(grabintroPic)
})
/////////////////////////////////////////////////
const grabBody = document.querySelector('body');
grabBody.addEventListener('scroll', () => {
    grabBody.scroll(500,1000);
});
/////////////////////////////////////////////////

const letsGoBox = document.querySelector('.text-content');
letsGoBox.addEventListener('mouseover', () => {
    letsGoBox.style.color = "hotpink"
    console.log(letsGoBox)
});
/////////////////////////////////////////////////

const grabTitle = document.querySelector('.img-content');
grabTitle.addEventListener('dblclick', () => {
    grabTitle.style.transform = "scale(0.5)"
    grabTitle.style.transitionm = "transform 0.5s"
    console.log(grabTitle)
});

///////////////////////////////////////////////////

const grablogo = document.querySelector('.logo-heading');
grablogo.addEventListener('dblclick', () => {
grablogo.style.color = "yellow"
console.log(grablogo)
});

document.querySelector('body');
fullscreen.addEventListener('fullscreenchange', (event) => {
    if (document.fullscreenElement) {
        console.log(`Enable: ${document.fullscreenEnabled.classname('home')} enter full screen`);

    }else{
        console.log('leaveing full screen')
    }
})
///////////////////////////////////

document.querySelectorAll('.btn').forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.backgroundColor = "#707070"
        element.style.color = "white"
    })
});


const grabFooter = document.querySelector('.footer');
grabFooter.addEventListener('dblclick', () => {
    grabFooter.style.backgroundColor = "#fffdda"
    grabFooter.style.color = "yellow"
    console.log(grabFooter)
} )


document.querySelectorAll('.text-content').forEach(element => {
    element.addEventListener('mouseover', () => {
element.style.backgroundColor = "blue"
element.style.border = "solid 4px yellow"
element.style.padding = "3%"

    })
});

//////////////////////////////

document.querySelectorAll('.nav-link').forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
    })
})
