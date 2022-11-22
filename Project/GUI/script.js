

var formz = document.getElementById('LGform')
formz.addEventListener("submit", (eve) => {
    eve.preventDefault();
    console.log("Submitted")
})


document.getElementById('valid').style.opacity = '0'
async function secure(){
    let un = document.querySelector('#userN').value
    let pw = document.querySelector('#passW').value
    let valid = document.getElementById('valid')
    valid.innerText = await eel.validation(valid)()
    eel.login(un,pw)()
    if (valid.innerText == "isstrue"){
        console.log("you're getting moved")
        document.location = "main.html"
    }else{
        console.log("not enough info")
    }
};

var logins = true;

function reveal(){
    
    document.getElementById("passW").focus()
    if (logins){
        document.getElementById("passW").type = 'text'
        logins = false;
    }
    else{
        document.getElementById("passW").type = 'password'
        logins = true;
    }
    
 
    
}



    var eyeI = document.getElementById("openedeye")
    var passWV = document.getElementById("passW")
    passWV.addEventListener("input", function(){
        if (passWV.value !== ""){
            eyeI.style.visibility = 'visible'
        }
        else{
            eyeI.style.visibility = 'hidden'
            passWV.type = 'password'
            logins = true
        }
    }) 


