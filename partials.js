function setFavicons(favImg){
  let headTitle = document.querySelector('head');
  let setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel','shortcut icon');
  setFavicon.setAttribute('href',favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons('https://sites.google.com/site/sklplfiles/files/sklico.png');


/*fetch("/partials/head.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("head").innerHTML = data;
});


fetch("/partials/header.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("header").innerHTML = data;
});

fetch("/partials/footer.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("footer").innerHTML = data;
});

fetch("/partials/right.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("aside").innerHTML = data;
});*/
$("header").load("/partials/header.html")
$("head").load("/partials/head.html")
$("footer").load("/partials/footer.html")
importScripts('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
