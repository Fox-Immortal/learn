// import mkdir from 'fs';
// // var path = document.getElementById("path");
// // var file_name = path.innerText();
// // console.log(file_name);
// mkdir("import", {
//     recursive: true
// }, (err) => {
//     if (err) throw err;
// });

var ifrm1 = document.createElement("iframe");
ifrm1.setAttribute("src", "https://www.youtube.com/embed/irAJuT0TrqQ");
ifrm1.setAttribute("width", "420");
ifrm1.setAttribute("height", "315");
ifrm1.setAttribute("allowFullScreen", "");
var ifrm2 = document.createElement("iframe");
ifrm2.setAttribute("src", "https://www.youtube.com/embed/xu3BljsP5Qk");
ifrm2.setAttribute("width", "420");
ifrm2.setAttribute("height", "315");
ifrm2.setAttribute("allowFullScreen", "");
var ele = document.getElementById("marker");
ele.appendChild(ifrm1);
ele.appendChild(ifrm2);