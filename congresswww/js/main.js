/* Event Listeners */
let fbBox = document.querySelector('.fbBox');
let fb_toggle = document.querySelector('.fbBox .toggle .btn');
let fb_write = document.querySelector('.fbBox .new');
let fb_top = document.querySelector('.fbBox .top');
let close_btn = document.querySelector('.closeBtn');
let slide_panel = document.querySelector('.slidePanel');
let tabview = document.getElementById('tabview');


if(fb_toggle){
    fb_toggle.addEventListener('click', () => {
        fbBox.classList.toggle("active");
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

    const member = document.querySelector('section.member');
    const board = document.querySelectorAll('section.board .container ul li');


    /* animation.js */
    if (member) { 
        window.setTimeout(function(){ member.style.left = '0px'; }, 500);
        member.addEventListener('click', () => {
            if(slide_panel) {
                slide_panel.style.right = '0px';
                if(close_btn) {
                    close_btn.addEventListener('click', () => {
                        slide_panel.style.right = '-320px';
                    })
                }
                
            }
        })
     }

    if (board) {
        for(let i=0; i<board.length; i++) {
            window.setTimeout(() => { board[i].style.opacity = '1'; }, i*50 + 1000);
        }
    }

    
    
    /* tabview.js */
    
    
}

if(tabview) {
    const tabBox = document.querySelector('#tabview .tabBox');
    const contentBox = document.querySelector('#tabview .contentBox');
    const activeNav = document.querySelector('.activeNav');

    let tabs = Array.from(tabBox.children);
    let conts = Array.from(contentBox.children);
    let tabCount = tabBox.childElementCount;
    let navWidth = 100 / tabCount;

    /* set bar init width */
    activeNav.style.width =  `${navWidth}%`

    /* add listener */
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(e => {e.classList.remove('active')});
            conts.forEach(c => {c.style.display = 'none'});
            tab.classList.add('active');
            let index = Array.from(tab.parentElement.children).indexOf(tab);
            activeNav.style.transform = `translate3d(${navWidth*index}vw,0,0)`;
            conts[index].style.display = 'block';
        })
    });
}



