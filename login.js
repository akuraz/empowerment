const form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault ()

    const username = form.username.value
    const password = form.password.value
    
    const authenticated = authentication(username,password)

    if(authenticated)
    {window.location = "https://nickelodeonuniverse.com/wp-content/uploads/Spongebob.png"
    }else{
        alert("wrong")
    }
})

// funtion for checking username and password

function authentication(username, password){
    if( username === "Wilbur" && password === "12345"){return true
    }else{
        return false
    }
}