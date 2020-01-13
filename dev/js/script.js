'use strict';

let videoBtn = document.querySelector('.youtube-block__btn');
let video = document.querySelector('.youtube-video');

videoBtn.addEventListener('click', function(event){
    event.preventDefault();
    videoBtn.style.display = 'none';
    video.style.display='block';
});