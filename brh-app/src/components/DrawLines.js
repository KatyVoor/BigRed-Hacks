import React from 'react';

const DrawLines = {
  drawHead(rectangleWidth, rectangleLeft, eyeLeftTopY, eyeRightTopY, noseTipY) {
  	var minorAxis = rectangleWidth / 2;
  	var majorAxis = (((eyeRightTopY + eyeLeftTopY) / 2) - noseTipY) * 2;
  	//var centerX = rectangleLeft + minorAxis;
  	//var centerY = (eyeRightTopY + eyeLeftTopY) / 2


    <canvas id="myCanvas" width="1000" height="600" style="border:1px solid #d3d3d3;">
    </canvas>

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var con1 = c.getContext("2d"); //horizontal
    var con2 = c.getContext("2d"); //vertical

    var centerX = 0;
    var centerY = 0;
    var radius = minorAxis;
    ctx.save()

    ctx.translate(minorAxis, majorAxis;
    con1.translate(minorAxis*2,majorAxis);
    con2.translate(minorAxis, majorAxis*2);
    // scale context vertically
    ctx.scale((minorAxis*2)/(majorAxis*2), 1);

    // draw circle which will be stretched into an oval
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    con1.beginPath();
    con1.lineTo(0-(minorAxis*2), 0);
    con2.lineTo(0, 0-(majorAxis*2));
    // restore to original state
    ctx.restore();
    con1.restore();
    con2.restore();

    ctx.stroke();
    con1.stroke();
    con2.stroke();
}
