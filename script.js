// script.js
function openmenu() {
    var sideMenu = document.getElementById("sidemenu");
    sideMenu.classList.add("open");
}

function closemenu() {
    var sideMenu = document.getElementById("sidemenu");
    sideMenu.classList.remove("open");
}


    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

   
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwaeFdG8mlNLmdx6kcfDe4bQx4puCvFcB72FzK3YowkHxaA4gIwNi6-mT5T7kvbx6n_/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent succesfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
  


    window.addEventListener("error", function (event) {
        var errorMessage = "An error occurred on the page:\n\n";
        errorMessage += "Message: " + event.message + "\n";
        errorMessage += "URL: " + event.filename + "\n";
        errorMessage += "Line: " + event.lineno + "\n";
        alert(errorMessage);
    });

// tarkoituksellinen error, poista // ja error handler antaa nettisivulle ilmoituksen häiriöstä.

    
//console.log(undefinedVariable);

