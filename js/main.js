var elBody = document.querySelector("body")
var elBtn = document.querySelector(".site-header__btn")
var elfooter = document.querySelector(".customer-footer")
var elcustomer = document.querySelector(".product-section")
var elbusines = document.querySelector(".busines-section")

elBtn.addEventListener("click", function() {
    elBody.classList.toggle("dark")
    elfooter.classList.toggle("dark")
    elcustomer.classList.toggle("dark")
    elbusines.classList.toggle("dark")
})
