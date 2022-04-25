var img0 = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
var img1 = "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq"
var img2 = "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1100&format=jpeg&auto=webp"
var img3 = "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"

var array = [img0,img1,img2,img3]

var prevbtn = document.getElementsByClassName("prev")
var nextbtn = document.getElementsByClassName("next")
var carobox = document.getElementsByClassName("carouselbox")
var carobox1 = document.getElementById("cb")
var imgtag = document.createElement("img")
imgtag.setAttribute("src",img0)

document.body.appendChild(imgtag)
console.log(carobox)
console.log(document.body)
console.log(prevbtn)
console.log(carobox1)

