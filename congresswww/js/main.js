
/* ON LOAD */
window.onload = function() {
    var head = document.querySelector('section.head .container');
    var board = document.querySelectorAll('section.board .container ul li')
    console.log('window loaded');
    console.log(board.length);
    window.setTimeout(function(){ head.style.left = '0px'; }, 500);
    for(let i=0; i<board.length;i++) {
        window.setTimeout(function(){
            board[i].style.opacity = '1';
        }, i*50 + 1000)
        console.log(i);
    }
}