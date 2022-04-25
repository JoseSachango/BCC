// Create your HTML Page via DOM Methods here!

var $h1 = document.createElement("h1")
$h1.innerHTML = "Hello World"
$h1.style.textAlign = "center"
var $h2 = document.createElement("h2")
$h2.innerHTML = "This is an h2 element"
$h2.style.textAlign = "center"
var $img = document.createElement("img")
$img.setAttribute("src","https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
$img.style.display = "block"
$img.style.margin = "0 auto"





document.body.appendChild($h1)
document.body.appendChild($h2)
document.body.appendChild($img)


