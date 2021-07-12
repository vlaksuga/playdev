/* Event Listeners */
let fbBox = document.querySelector('.fbBox');
let fb_toggle = document.querySelector('.fbBox .toggle .btn');
let fb_write = document.querySelector('.fbBox .new');
let fb_top = document.querySelector('.fbBox .top');
let close_btn = document.querySelector('.closeBtn');
let slide_panel = document.querySelector('.slidePanel');

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
    const canvas = document.getElementById('mycvs');
    const tabview = document.getElementById('tabview');


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

    /* polygon.js */
    if(canvas) {
        var ctx = canvas.getContext('2d');
        const numberOfDepth = 5;
        const numberOfSides = 5;
        const borderColor = "grey";
        const statsColor = "hsla(180, 50%, 80%, 80%)";
        const Xcenter = 450;
        const Ycenter = 450;
        const sizeGrowth = 60;
        const statsLabel = ["", "출석","재산","대표발의","범죄","의정"]
        var stats = [0,8,7,8,6,4]
        
        /* DRAW POLYGON */
        for (var i = 1; i <= numberOfDepth+1; i++) {
            let size = i*sizeGrowth;
            ctx.beginPath();
            ctx.font = "30px 'Noto Sans Kr'";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.moveTo (Xcenter +  size * Math.sin(0), Ycenter +  size *  Math.cos(0));
            if(i==numberOfDepth+1) {
                for (var ii = 1; ii <= numberOfSides; ii++) { 
                    ctx.lineTo(Xcenter + size * Math.sin(ii * 2 * Math.PI / numberOfSides), Ycenter + size * Math.cos(ii * 2 * Math.PI / numberOfSides));
                    ctx.fillText(statsLabel[ii], Xcenter + size * Math.sin(ii * 2 * Math.PI / numberOfSides), Ycenter + size * Math.cos(ii * 2 * Math.PI / numberOfSides));                             
                }
                ctx.closePath();
            } else {
                for (var ii = 1; ii <= numberOfSides; ii++) { 
                    ctx.lineTo(Xcenter + size * Math.sin(ii * 2 * Math.PI / numberOfSides), Ycenter + size * Math.cos(ii * 2 * Math.PI / numberOfSides));
                    ctx.fillText(i*2, Xcenter + size * Math.sin(ii * 2 * Math.PI / numberOfSides), Ycenter + size * Math.cos(ii * 2 * Math.PI / numberOfSides));                             
                }
                ctx.strokeStyle = borderColor;
                ctx.lineWidth = i*0.6;
                ctx.stroke();
            }                      
        }

        /* DRAW STATS */
        ctx.beginPath();               
        ctx.moveTo (Xcenter +  stats[j]/2*sizeGrowth * Math.sin(0), Ycenter +  stats[j]/2*sizeGrowth *  Math.cos(0));                    
        for (var j = 1; j <= numberOfSides; j++) {                           
            let size2 = stats[j]/2*sizeGrowth;      
            ctx.lineTo (Xcenter + size2 * Math.sin(j * 2 * Math.PI / numberOfSides), Ycenter + size2 * Math.cos(j * 2 * Math.PI / numberOfSides));        
        }        
        ctx.fillStyle = statsColor;
        ctx.fill();            
    }
    
    /* tabview.js */
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

    /* mapper.js */
    if('content' in document.createElement('template')) {
        var t = document.querySelector('#teki');
        var place = document.querySelector('ul.list');
        var dummydata = [
            {"memberpkey": 1, "membername":"강기윤", "dname":"경남 창원시 성산구"},
            {"memberpkey": 2, "membername":"강대식", "dname":"대구 동구을"},
            {"memberpkey": 3, "membername":"강득구", "dname":"경남 창원시 성산구"},
            {"memberpkey": 4, "membername":"강민국", "dname":"경남 창원시 성산구"}]
        for (i=0;i<5;i++) {
            var clone = document.importNode(t.content, true);

            mname = clone.querySelector('.name');
            mname.innerText = dummydata[i].membername;

            img = clone.querySelector('img');
            img.src = `../img/member/member_${dummydata[i].memberpkey}.jpg`;

            dname = clone.querySelector('.district');
            dname.innerText = dummydata[i].dname;

            place.appendChild(clone);
        };
    }
}

