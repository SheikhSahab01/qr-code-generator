let qrContentInput = document.getElementById("qr-content");
let qrGenerationForm =
    document.getElementById("qr-generation-form");
let qrCode;

var widthrange = document.getElementById("widthrange");
var widthvalue = document.getElementById("widthvalue");
var heightvalue = document.getElementById("heightvalue");
var heightrange = document.getElementById("heightrange");

var primarycolour = document.getElementById("primarycolour");
var secondarycolour = document.getElementById("secondarycolour");
var bgcolour = document.getElementById("bgcolour");

var primarycolourvalue = document.getElementById("primarycolourvalue");
var secondarycolourvalue = document.getElementById("secondarycolourvalue");
var bgcolourvalue = document.getElementById("bgcolourvalue");



widthrange.addEventListener("input", function () {
    widthvalue.innerHTML = widthrange.value;
});

heightrange.addEventListener("input", function () {
    heightvalue.innerHTML = heightrange.value
});

primarycolour.addEventListener("input", function () {
    primarycolourvalue.innerHTML = primarycolour.value;
});

secondarycolour.addEventListener("input", function () {
    secondarycolourvalue.innerHTML = secondarycolour.value;
});

bgcolour.addEventListener("input", function () {
    bgcolourvalue.innerHTML = bgcolour.value;
});


function generateQrCode(qrContent) {
    return new QRCode("qr-code", {
        text: qrContent,
        width: `${widthrange.value}`,
        height: `${heightrange.value}`,
        colorDark: `${primarycolour.value}`,
        colorLight: `${secondarycolour.value}`,
        correctLevel: QRCode.CorrectLevel.H,
    });
}

document.querySelector('.btn').addEventListener("click", function (e) {
    let qrContent = qrContentInput.value;
    if (qrContentInput.value.length == 0) {
        document.querySelector(".cred").style.opacity = 1;
    } else if (qrCode == null) {
        document.querySelector('.flip-card-inner').style.transform = `rotateY(180deg)`;
        document.querySelector('.align-items-center').style.backgroundColor = bgcolour.value;
        qrCode = generateQrCode(qrContent);
    } else {
        qrCode.makeCode(qrContent);
    }

});

document.querySelector(".btn2").addEventListener("click", function () {
    document.querySelector('.flip-card-inner').style.transform = `rotateY(0deg)`;
    window.location.reload();
});