"use strict";

setTimeout(function() {
    document.querySelector("#profile-pic").setAttribute("src", "img/image1.jpg");
}, 2000)

setTimeout(function() {
    document.querySelector('#profile-name').innerHTML ="Abdul Joe";
}, 4000)


setTimeout(function() {
   let changeProfile = document.querySelector('#profile-desc');
   changeProfile.classList.add("desc-text-style");
}, 6000)



setInterval(function() {
    const profileCard = document.querySelector('#profile-card');
    profileCard.classList.toggle('.black-bg');
}, 2000)