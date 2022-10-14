const qr = document.querySelector('.qrCode');
const url = document.querySelector('#url');

let qrCode = new QRCode(qr, {
  text: "http://jindo.dev.naver.com/collie",
  width: 200,
  height: 200,
  colorDark : "#000000",
  colorLight : "#ffffff",
  correctLevel : QRCode.CorrectLevel.H
});

document.querySelector('.url-form').addEventListener('submit', (e) => {
  e.preventDefault();

  if (!url.value)
  {
    alert('Pls add a url to generate a qr code');
  }
  else
  {
    try
    {
      new URL(url.value);

      generateQrCode(url.value);
    }
    catch (error)
    {
      alert('Not a valid url');
    }
    url.value = '';
  }
})

document.querySelector('.download-btn').addEventListener('click', () => {
  html2canvas(qr)
    .then((canvas) => {
      const url = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.setAttribute('download', 'qr-code');
      link.setAttribute('href', url);
      link.click();
    })
});

const generateQrCode = (url) =>
{
  qrCode.clear();
  qrCode.makeCode(url);
}

