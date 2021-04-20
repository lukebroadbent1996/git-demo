document.addEventListener("keydown", ()=>{
    document.getElementById("mainHeader").innerHTML = event.key;
    document.getElementById("key").innerHTML = event.key;
    document.getElementById("code").innerHTML = event.code;
    document.getElementById("which").innerHTML = event.which;
})