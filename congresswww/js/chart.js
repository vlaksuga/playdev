/* polygon.js */
const canvas = document.getElementById('mycvs');

window.onload = function() {
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
        var stats = [0,4,8,9,6,4]
        
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
}
