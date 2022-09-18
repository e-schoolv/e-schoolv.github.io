function progress (){
    var el = document.getElementById("progress__line"),
    width = 1,
    id = setInterval(progressStatus,100);
    function progressStatus () {
       if (width >= 100) {
        clearInterval(id);
        window.location.href = 'index.html';
       } else{
        width++;
        el.style.width = width + '%';
        el.innerHTML = width * 1 + '%';
       }
    }
    }
    progress();