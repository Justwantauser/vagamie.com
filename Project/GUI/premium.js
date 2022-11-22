 
var logo = document.getElementById('log')
var button = document.getElementById('actualbtn')
var topbar = document.getElementById('top')
var middle = document.getElementById('middle')
var bottom = document.getElementById('bottom')
var bar = document.getElementById('bar')
var light_themeB = document.getElementById('lightM')
var dark_themeB = document.getElementById('darkM')
var sideM = document.getElementById('sideM')
var trust = true
var menue = document.getElementById('sideM')
var cover_icon = document.getElementById('premiumid_cover')
var backeff = document.getElementById('backtarget')
var premiumB = document.getElementById('premium')

function menueC(){
    if (button.click && trust == true){
        sideM.style.visibility = 'visible'
 
        
        topbar.style.left = '0'
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
        sideM.style.visibility = 'hidden'
        backeff.style.visibility = 'hidden'
        trust = true
        


        
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
        logo.style.visibility = 'visible'
        sideM.style.visibility = 'hidden'
        backeff.style.visibility = 'hidden'
        trust = true
        

        topbar.style.width = '40px'
        topbar.style.left = '0'
        
        middle.style.left = '0'
        middle.style.width = '40px'
        
        bottom.style.left = '0'
        bottom.style.width = '40px'


    }
   })
window.addEventListener("mouseup", function(event){
    if (event.target === backeff){
        menue.style.visibility = 'hidden'
        logo.style.visibility = 'visible'
        backeff.style.visibility = 'hidden'
        trust = true

        topbar.style.width = '40px'
        topbar.style.left = '0'
        
        middle.style.left = '0'
        middle.style.width = '40px'
        
        bottom.style.left = '0'
        bottom.style.width = '40px'


    }
})








function searched(){
    let searchC = document.getElementById('searchI')
    var result = document.getElementById('searchbar').value;
    if(result === "sandell"){
        window.location = ('index.html')
    }
}

function changepage(){
    var searchb = document.getElementById("searchbar")
    var x = document.getElementById("searchbar").value
    if(x === "dog"){
        window.location = ('index.html')

    }
}

function ddL(){
    var dataL = document.getElementById('op1').value
    var x = document.getElementById("searchbar").value
    if (x === "v"){
        dataL = "Vagamie"
    
    }
}

function profiles(){
    var sure = document.getElementById('sure')
    var userN = document.getElementById('gloos').innerHTML
    var loginN = document.getElementById('userN')
    sure.addEventListener('click', function(){
        userN = "sasf"
    })
}



// sends to premium page


function premiumpage(){
    if(premiumB.click){
        window.location = ('premium.html')
    }
}

function changewindow(){
    if(cover_icon.click){
        window.location = 'premium.html'
    }
}


// local storage

function location_changed(){
    if(logo.click){
        window.location = 'main.html'
    }
}
