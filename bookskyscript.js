
var startidvar = document.getElementById("startid")
startidvar.addEventListener("click", function () {
    closebuttonvar.style.display = "inline-block"
    overlayvar.style.display = "block"
    popupboxclassvar.style.display = "block"
    addbuttonvar.style.display = "inline-block"



})
var closebuttonvar = document.getElementById("closebuttonid")
var addbuttonvar = document.getElementById("addbuttonid")
var overlayvar = document.querySelector(".overlay")
var popupboxclassvar = document.querySelector(".popupboxclass")
closebuttonvar.addEventListener("click", function () {
    closebuttonvar.style.display = "none"
    overlayvar.style.display = "none"
    popupboxclassvar.style.display = "none"

})
var addbuttonvar = document.getElementById("addbuttonid")
addbuttonvar.addEventListener("click", function () {
    var newdivvar = document.createElement("div")
    var newdivh1var = document.createElement("h1")
    var newdivh3var = document.createElement("h3")
    var newdivpvar = document.createElement("p")
    var newdivbuttonvar = document.createElement("button")
    var booktitlevar = document.getElementById("booktitleid").value
    var bookauthorvar = document.getElementById("bookauthorid").value
    var shortdescriptionvar = document.getElementById("shortdescriptionid").value
    var sectionvar = document.getElementById("sectionid")



    console.log(newdivvar)
    sectionvar.append(newdivvar)
    newdivvar.append(newdivh1var)
    newdivvar.append(newdivh3var)
    newdivvar.append(newdivpvar)
    newdivvar.append(newdivbuttonvar)
    newdivbuttonvar.textContent = "delete"
    newdivh1var.textContent = booktitlevar
    newdivh3var.textContent = bookauthorvar
    newdivpvar.textContent = shortdescriptionvar





    newdivvar.setAttribute("class", "newdivclass")
    newdivh1var.setAttribute("class", "newdivh1class")
    newdivh3var.setAttribute("class", "newdivh3class")
    newdivpvar.setAttribute("class", "newdivpclass")
    newdivbuttonvar.setAttribute("class", "newdivbuttonclass")

    var booktitlevarclear = document.getElementById("booktitleid")
    var bookauthorvarclear = document.getElementById("bookauthorid")
    var shortdescriptionvar = document.getElementById("shortdescriptionid")
    booktitlevarclear.value = ""
    bookauthorvarclear.value = ""
    shortdescriptionvar.value = ""


    closebuttonvar.style.display = "none"
    overlayvar.style.display = "none"
    popupboxclassvar.style.display = "none"






    newdivbuttonvar.addEventListener("click", function () {

        newdivvar.remove()



    })

})




