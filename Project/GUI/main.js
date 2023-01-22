 
var logo = document.getElementById('log')
var cover_icon = document.getElementById('premiumid_cover')
var button = document.getElementById('actualbtn')
var topbar = document.getElementById('top')
var middle = document.getElementById('middle')
var bottom = document.getElementById('bottom')
var toggler = document.getElementById('toggler')
var bar = document.getElementById('bar')
var light_themeB = document.getElementById('lightM')
var dark_themeB = document.getElementById('darkM')
var sideM = document.getElementById('sideM')
var miniside = document.getElementById('miniSideM')
var trust = true
var side_pfp = document.getElementById('side-user-btn')
var settingsB = document.getElementById('settingsB')
var signoutB = document.getElementById('signout-btn')
var menue = document.getElementById('sideM')
var backeff = document.getElementById('backtarget')
var premiumB = document.getElementById('premium')


//slick moves
const track = document.querySelector('.carousel_track-con')
const slides = Array.from(track.children);
const nextbutton = document.querySelector('.carosoul_button--right');
const prevButton =  document.querySelector('.carosoul_button--left');
const dotsNav = document.querySelector('.carouselnav')
const dot = Array.from(dotsNav.children)
const the_slideContainer = document.querySelector('.carousel_track-container')
const slide_width = slides[0].getBoundingClientRect().width;
console.log(slide_width)


var noti = document.getElementById('noti_icon')
var noti_background = document.querySelector('.actual_noti')
var noti_components = document.getElementById('notiHEADER')

var undatedot = document.getElementById('update_dot')
function menueC(){
    if (button.click && trust == true){
        sideM.style.visibility = 'visible'
        miniside.style.visibility = 'hidden'
        miniside.style.transition = 'none'
        settingsB.style.transition = 'none'
        side_pfp.style.transition = 'none'
        toggler.style.visibility = 'hidden'
        signoutB.style.transition = 'none'
        
        topbar.style.left = '0'
        toggler.style.transition = 'none'
        topbar.style.width = '50px'

        
        middle.style.left = '0'
        middle.style.width = '40px'
        
        bottom.style.left = '0'
        bottom.style.width = '30px'

        
        bar.style.left = '5px'


        logo.style.visibility = 'hidden'
        backeff.style.visibility = 'visible'
        trust = false
    }
    else if (button.click && trust === false){
        logo.style.visibility = 'visible'
        miniside.style.visibility = 'visible'
        sideM.style.visibility = 'hidden'
        backeff.style.visibility = 'hidden'
        miniside.style.transition = 'ease all .5s '
        settingsB.style.transition = 'ease all .5s '
        side_pfp.style.transition = 'ease all .5s '
        signoutB.style.transition = 'ease all .5s '
        trust = true
        
        toggler.style.visibility = 'visible'


        
        topbar.style.width = '40px'
        topbar.style.left = '0'
        
        middle.style.left = '0'
        middle.style.width = '40px'
        
        bottom.style.left = '0'
        bottom.style.width = '40px'

    }
  
}
window.addEventListener('keydown', function(e){
    if (e.key == 'Escape' && trust === false){
        miniside.style.visibility = 'visible'
        logo.style.visibility = 'visible'
        sideM.style.visibility = 'hidden'
        backeff.style.visibility = 'hidden'
        miniside.style.transition = 'ease all .5s '
        settingsB.style.transition = 'ease all .5s '
        side_pfp.style.transition = 'ease all .5s '
        signoutB.style.transition = 'ease all .5s '
        trust = true
        

        topbar.style.width = '40px'
        topbar.style.left = '0'
        
        middle.style.left = '0'
        middle.style.width = '40px'
        
        bottom.style.left = '0'
        bottom.style.width = '40px'

        toggler.style.visibility = 'visible'

    }
   })
window.addEventListener("mouseup", function(event){
    if (event.target === backeff){
        menue.style.visibility = 'hidden'
        miniside.style.visibility = 'visible'
        logo.style.visibility = 'visible'
        backeff.style.visibility = 'hidden'
        miniside.style.transition = 'ease all .5s '
        settingsB.style.transition = 'ease all .5s '
        side_pfp.style.transition = 'ease all .5s '
        signoutB.style.transition = 'ease all .5s '
        trust = true

        topbar.style.width = '40px'
        topbar.style.left = '0'
        
        middle.style.left = '0'
        middle.style.width = '40px'
        
        bottom.style.left = '0'
        bottom.style.width = '40px'

        toggler.style.visibility = 'visible'

    }
})



light_themeB.addEventListener('click', function(){
    toggler.style.transition = '.3s ease-out'
    toggler.style.top = '2px'
})
dark_themeB.addEventListener('click', function(){
    toggler.style.transition = '.3s ease-in '
    toggler.style.top = '83px'
})




//sends to other page

function premiumpage(){
    if(premiumB.click){
        window.location = ('premium.html')
    }
}



// local storage

function theme_data(){
    if(light_themeB.click){
        localStorage.setItem("theme", "light")
    }
  
} 

function dark_theme_data(){
    if (dark_themeB.click){

        localStorage.setItem("theme", "dark")

    }
}

if (localStorage.getItem("theme") == "dark"){
    toggler.style.top = '83px'
}

function changewindow(){
    if(cover_icon.click){
        window.location = 'premium.html'
    }
}
// all about carousel



//arrange the slides next to another
// slides[0].style.left = slide_size * 0 + 'px'
 //slides[1].style.left = slide_size * 1 + 'px'
 //slides[2].style.left = slide_size * 2 + 'px'

//setting the position of the slides
const setSlidePosition = (slide, index) => {
    slide.style.left = slide_width * index + 'px';
};
slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove("slide_current")
    targetSlide.classList.add('slide_current')
}

const updatedot = (currentdot,targetDot) =>{
    currentdot.classList.remove('current_one');
    targetDot.classList.add('current_one');
    

}

const hideshowArrow = (targetIndex, slides, prevButton, nextbutton ) =>{
    if(targetIndex === 0){
        prevButton.classList.add('isHidden')
        nextbutton.classList.remove('isHidden')
    }else if (targetIndex === slides.length - 1){
        prevButton.classList.remove('isHidden')
        nextbutton.classList.add('isHidden')

    }else{
        prevButton.classList.remove('isHidden')
        nextbutton.classList.remove('isHidden')
    }

}

prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.slide_current')
    const previouslide = currentSlide.previousElementSibling  //move to prevoiuse slide
    moveToSlide(track, currentSlide, previouslide)
    const previndext = slides.findIndex(i => i === previouslide)
    const currentdot = dotsNav.querySelector('.current_one')
    const prevdot = currentdot.previousElementSibling;
    updatedot(currentdot,prevdot)
    hideshowArrow(previndext, slides, prevButton, nextbutton )

})

//going to the next slide

nextbutton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.slide_current')
    const nextSlide = currentSlide.nextElementSibling  //move to next slide
    const currentdot = dotsNav.querySelector('.current_one')
    const nextdot = currentdot.nextElementSibling;
    const nextindext = slides.findIndex(i => i === nextSlide)

    moveToSlide(track, currentSlide, nextSlide)
    updatedot(currentdot,nextdot)

    hideshowArrow(nextindext, slides, prevButton, nextbutton )


})



dotsNav.addEventListener('click', e =>{
    const targetDot = e.target.closest('button');

    if(!targetDot) return;
    const currentSlide = track.querySelector('.slide_current')
    const currentdot = document.querySelector('.current_one')
    const targetIndex = dot.findIndex(i => i === targetDot)
    const targetslide = slides[targetIndex]
    console.log(targetIndex)
    moveToSlide(track, currentSlide, targetslide)
    updatedot(currentdot,targetDot)

 
    hideshowArrow(targetIndex, slides, prevButton, nextbutton )
   
})

//moving side buttons on hover

the_slideContainer.addEventListener('mouseover', e=>{
    prevButton.style.left = '-58px'
    nextbutton.style.right = '-58px'
    dotsNav.style.margin = '16px'
})
the_slideContainer.addEventListener('mouseleave', e=>{
    prevButton.style.left = '-40px'
    nextbutton.style.right = '-40px'
    dotsNav.style.margin = '7px'

})


var noti_confirm = true


function notification(){
    
    if(noti.click && noti_confirm == true){
        noti_background.style.visibility = 'visible'
        noti_confirm = false
        undatedot.style.visibility = "hidden"
        console.log("opening")
        window.addEventListener('mouseup', e =>{
            if(e.target != noti && e.target != noti_background && e.target != noti_components ){
                noti_background.style.visibility = 'hidden'
                noti_confirm = true
                console.log("closing with !target")
                window.removeEventListener('mouseup', e)

            }
        })

    }
    else if( noti.click && noti_confirm == false){
        noti_background.style.visibility = 'hidden'
        noti_confirm = true
        console.log("closing")

    }
    
    
}

// disable zooming

document.addEventListener("wheel", function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });


/*window.addEventListener('mouseup', e =>{
    
    
    if(noti.click && noti_confirm === true){
        noti_background.style.opacity = 1
        noti_confirm = false
        undatedot.style.visibility = "hidden"
        console.log("its open")
    
    }
    
    else if( noti.click && noti_confirm == false){
        noti_background.style.opacity = 0
        noti_confirm = true
        console.log("its closed")
    
    }
    
    else if(e.target != noti){
        noti_background.style.opacity = 0
        noti_confirm = true
    }
    

    

})
*/







// making changes on screen size 



//track.addEventListener('mousemove', ()=>{
//    const track = document.querySelector('.carousel_track-con')
//    const currentSlide = track.querySelector('.slide_current')
//    const nextSlide = currentSlide.nextElementSibling  //move to next slide
//    const currentdot = dotsNav.querySelector('.current_one')
//    const nextdot = currentdot.nextElementSibling;
    //const previndext = slides.findIndex(i => i === previouslide)
//    const nextindext = slides.findIndex(i => i === nextSlide)
//    window.addEventListener('keyup', e =>{    
//        if(e.key === 'ArrowRight'){
  //          moveToSlide(track, currentSlide, nextSlide)
    //        updatedot(currentdot,nextdot)
        
      //      hideshowArrow(nextindext, slides, prevButton, nextbutton )  
        //}

    //})
//})




