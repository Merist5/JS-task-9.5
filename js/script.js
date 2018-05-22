
function showButtonTxt() {
    var buttons = document.getElementsByClassName('button').length;

    for (var i = 0; i < buttons; i++) {
        alert(document.getElementsByClassName('button').textContent);
    }
}

var delayedShow = setTimeout(showButtonTxt, 1000);
