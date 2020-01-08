_api = 'https://chotaapi.herokuapp.com/api/link/';
let short = ""; let url = ""; let final = "https://chota.ml/#";
ajad("GET", "ping/it", {}, function(obj){});

short = window.location.href.split('#', 2)[1];
if(short)
{
    window.location.href = "https://chotaapi.herokuapp.com/api/link/"+short; 
}

let urlInput = document.getElementById("url-input");
let getUrlBtn = document.getElementById("get-url-btn");
let shortA = document.getElementById("short-a");
let copyBtn = document.getElementById("copy-btn");
let spinSpan = document.getElementById("spin-span");
let outputDiv = document.getElementById("output-div");
let db = document.getElementById("db");


getUrlBtn.addEventListener("mousedown", createShortUrl);
copyBtn.addEventListener("mousedown", copyShortUrl);

function isValidURL(myUrl) {
    var res = myUrl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
};


function createShortUrl()
{
    url = urlInput.value;
    if(!isValidURL(url))
    {
        alert("Not a valid url");
        return;
    }

    outputDiv.classList.add("hide");
    spinSpan.classList.remove("hide");
    
    ajad("POST", "", {url: url}, function(res){

        short = final + res.obj.id;
        shortA.innerText = short;
        db.value = short;
        spinSpan.classList.add("hide");
        outputDiv.classList.remove("hide");
    })
}


function copyShortUrl()
{
    console.log("Yo");
    db.classList.remove("hide");
    db.select();
    db.setSelectionRange(0, 99999);
    document.execCommand("copy");
    db.classList.add("hide");
}
