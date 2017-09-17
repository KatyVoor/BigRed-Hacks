import React from 'react';

const DrawLines = {
  drawHead(rectangleWidth, rectangleLeft, eyeLeftTopY, eyeRightTopY, noseTipY) {

        <canvas id="myCanvas" width="600" height="600" style="border:1px solid #d3d3d3;">

    var minorAxis = rectangleWidth / 2;
  	var majorAxis = (((eyeRightTopY + eyeLeftTopY) / 2) - noseTipY) * 2;
  	//var centerX = rectangleLeft + minorAxis;
  	//var centerY = (eyeRightTopY + eyeLeftTopY) / 2


    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    var centerX = 0;
    var centerY = 0;
    var radius = minorAxis;
    ctx.save();

    ctx.translate(300,300);

    ctx.scale(1, majorAxis/minorAxis);

    // draw circle which will be stretched into an oval
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    con1.beginPath();

    // restore to original state
    ctx.restore();


    ctx.stroke();
    //horizontal line
    //context.beginPath();
    //context.moveTo(,0);
  //  context.lineTo(350,300);
  //  context.stroke();
}
