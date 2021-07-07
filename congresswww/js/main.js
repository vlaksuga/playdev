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
    const canvas = document.getElementById('mycvs');

    if (head) { window.setTimeout(function(){ head.style.left = '0px'; }, 500); }
    if (board) {
        for(let i=0; i<board.length; i++) {
            window.setTimeout(() => { board[i].style.opacity = '1'; }, i*50 + 1000);
        }
    }

    if(canvas) {
        var ctx = canvas.getContext('2d');
        const numberOfDepth = 5;
        const numberOfSides = 5;
        const bgColor = "grey";
        const statsColor = "rgba(0,0,150,0.3)";
        const Xcenter = 150;
        const Ycenter = 150;
        const sizeGrowth = 20;
        const statsLabel = ["", "A","B","C","D","E"]
        var stats = [0,8,7,8,6,4]
        
        /* DRAW POLYGON */
        for (var i = 1; i <= numberOfDepth; i++) {            
            ctx.beginPath();
            let size = i*sizeGrowth;
            ctx.moveTo (Xcenter +  size * Math.sin(0), Ycenter +  size *  Math.cos(0));            
            for (var ii = 1; ii <= numberOfSides; ii++) {
                ctx.lineTo(Xcenter + size * Math.sin(ii * 2 * Math.PI / numberOfSides), Ycenter + size * Math.cos(ii * 2 * Math.PI / numberOfSides));
                ctx.fillText(i*2, Xcenter + size * Math.sin(ii * 2 * Math.PI / numberOfSides), Ycenter + size * Math.cos(ii * 2 * Math.PI / numberOfSides));                                
            }

            ctx.strokeStyle = bgColor;
            ctx.lineWidth = i*0.2;            
            ctx.stroke();            
        }

        /* DRAW STATS */
        ctx.beginPath();               
        ctx.moveTo (Xcenter +  stats[j]/2*sizeGrowth * Math.sin(0), Ycenter +  stats[j]/2*sizeGrowth *  Math.cos(0));                    
        for (var j = 1; j <= numberOfSides; j++) {                           
            let size2 = stats[j]/2*sizeGrowth;      
            ctx.lineTo (Xcenter + size2 * Math.sin(j * 2 * Math.PI / numberOfSides), Ycenter + size2 * Math.cos(j * 2 * Math.PI / numberOfSides));        
        }        
        ctx.fillStyle = statsColor;
        ctx.lineWidth = 2;
        ctx.fill();            
    }
    
}

