
const text = document.querySelector(".ptext");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "hello";
    }, 0);
    setTimeout(() => {
        text.textContent = "bonjour";
    }, 300);
    setTimeout(() => {
        text.textContent = "hola";
    }, 500);
    setTimeout(() => {
        text.textContent = "नमस्ते";
    }, 700);
    setTimeout(() => {
        text.textContent = "Hii";
    }, 900);
    setTimeout(() => {
        text.textContent = "Konnichiwa";
    }, 1100);
    setTimeout(() => {
        text.textContent = "ola";
    }, 1300);
    setTimeout(() => {
        text.textContent = "ciao";
    }, 1500);
    function counter () {
        var count = setInterval(function() {
            if(text.textContent == "ciao") {
                clearInterval(count);
                $('.ptext').addClass('hide');
                $('.preloader').addClass('active')
            }
        },60)
    }
    counter();
}
textLoad();
setInterval(textLoad, 20000);