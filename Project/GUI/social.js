const track = document.querySelector('.carousel_track-con')
const slides = Array.from(track.children);
const nextbutton = document.querySelector('.carosoul_button--right');
const prevButton =  document.querySelector('.carosoul_button--left');
const dotsNav = document.querySelector('.carouselnav')
const dot = Array.from(dotsNav.children)
const slide_width = slides[0].getBoundingClientRect().width;

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


