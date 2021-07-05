/* Event Listeners */
let fbBox = document.querySelector('.fbBox');
let fb_toggle = document.querySelector('.fbBox .toggle .btn');
let fb_write = document.querySelector('.fbBox .new');
let fb_top = document.querySelector('.fbBox .top')

if(fb_toggle){
    fb_toggle.addEventListener('click', () => {
        if (fbBox.classList.contains("active")) {
            fbBox.classList.remove("active");
        } else {
            fbBox.classList.add("active");
        }
    })
}

if(fb_write){
    fb_write.addEventListener('click', () => {
        location.href = 'writepost.html';
    })
}

if(fb_top) {
    fb_top.addEventListener('click', () => {
        window.scrollTo(0,0);
    })
}



/* ON LOAD */
window.onload = function() {

    const head = document.querySelector('section.head .container');
    const board = document.querySelectorAll('section.board .container ul li');

    if (head) { window.setTimeout(function(){ head.style.left = '0px'; }, 500); }
    if (board) {
        for(let i=0; i<board.length; i++) {
            window.setTimeout(() => { board[i].style.opacity = '1'; }, i*50 + 1000);
        }
    }
}

