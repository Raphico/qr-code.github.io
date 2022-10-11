
new QRCode(document.querySelector(".qr-code"), {
  text: "http://jindo.dev.naver.com/collie",
  width: 200,
  height: 200,
  colorDark : "#000000",
  colorLight : "#ffffff",
  correctLevel : QRCode.CorrectLevel.H
});