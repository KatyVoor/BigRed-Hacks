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

    var centerX = 0;
    var centerY = 0;
    var radius = minorAxis;
    ctx.save()

    ctx.translate(c.width / 2, c.height / 2);

    // scale context vertically
    ctx.scale(minorAxis/majorAxis, 1);

    // draw circle which will be stretched into an oval
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

    // restore to original state
    ctx.restore();

    ctx.stroke();
}
