import $ from "jquery";

//let onMobile = false;
$("#submitSuccess").hide();

viewportInit();
window.onresize = viewportResize;

function viewportInit()
{
    let tdEmail = document.getElementById("tdEmail");
    let btnSend = document.getElementById("btnSend");
    let tdSend = document.getElementById("tdSend");
    const table = document.getElementsByTagName("table")[0];

    if(window.visualViewport.width <= 640)
    {
        //onMobile = true;                     
        if(btnSend.classList.contains("form-control") === false) btnSend.classList.add("form-control");
        tdSend.setAttribute("colspan", "2");

        let trEmailMobile = table.insertRow(1);
        trEmailMobile.id = "trEmailMobile";
        trEmailMobile.appendChild(tdEmail);
    }
    else
    {
        if(btnSend.classList.contains("form-control")) btnSend.classList.remove("form-control");

        //table.rows[0].insertCell(tdEmail);
        let trEmailMobile = document.getElementById("trEmailMobile");
        if(trEmailMobile != null && table.contains(trEmailMobile)) trEmailMobile.removeChild();
    }
}

function viewportResize()
{
    let tdEmail = document.getElementById("tdEmail");
    let btnSend = document.getElementById("btnSend");
    let tdSend = document.getElementById("tdSend");
    const table = document.getElementsByTagName("table")[0];

    if(window.visualViewport.width < 640)
    {
        //onMobile = true;                     
        if(btnSend.classList.contains("form-control") === false) btnSend.classList.add("form-control");
        tdSend.setAttribute("colspan", "2");

        if(document.getElementById("trEmailMobile") === null)
        {
            let trEmailMobile = table.insertRow(1);
            trEmailMobile.id = "trEmailMobile";
            trEmailMobile.appendChild(tdEmail);
        }
    }
    else
    {
        if(btnSend.classList.contains("form-control")) btnSend.classList.remove("form-control");

        table.rows[0].appendChild(tdEmail);
        let trEmailMobile = document.getElementById("trEmailMobile");
        if(trEmailMobile != null && table.contains(trEmailMobile)) trEmailMobile.remove();
    }
}

var form = document.getElementById("contactForm");
form.onsubmit = formSubmit;

/**
 * @param{Event} e
*/
async function formSubmit(e) 
{
    e.preventDefault();
    let name = document.getElementById("contactName");
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMessage");

    if(isValid(name, 100) && isValidEmail(email) && isValid(message, 1000))
    {
        const formData = new FormData(document.getElementById("contactForm"));

        const response = await fetch("/",
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData,
        });

        if(response.ok)
        {
            $("#divForm").hide();
            $("#submitSuccess").show();
        }
    }
}

/**
* @param{HTMLElement} elem
* @param{number} maxLength
*/
function isValid(elem, maxLength)
{
    let validName = false;
    if(elem.value.length < 2 || elem.value.length > maxLength) 
    {
        elem.style.borderColor = 'red'; 
        elem.style.borderWidth = '2px';
    } 
    else 
    {
        elem.style.borderColor = 'green'; 
        elem.style.borderWidth = '2px';
        validName = true;
    }
    return validName;
}

/**
* @param{string} email
*/
function isValidEmail(email)
{            
    let validEmail = false;
    let indexOfAt = 0;
    let indexOfDot = 0;

    if(email.includes('@')) indexOfAt = email.search('@');
    if(email.includes('.')) indexOfDot = email.indexOf('.');
    if(indexOfDot > indexOfAt + 1) validEmail = true;
    if(validEmail)
    {
        document.getElementById("contactEmail").style.borderColor = "green";
        document.getElementById("contactEmail").style.borderWidth = "2px";
    }
    else
    {
        document.getElementById("contactEmail").style.borderColor = "red";
        document.getElementById("contactEmail").style.borderWidth = "2px";
    }
    return validEmail;
}