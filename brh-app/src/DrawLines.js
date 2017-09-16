import React from 'react';

const DrawLines = {
  drawHead(rectangleWidth, rectangleLeft, eyeLeftTopY, eyeRightTopY, noseTipY) {
  	var minorAxis = rectangleWidth / 2;
  	var majorAxis = (((eyeRightTopY + eyeLeftTopY) / 2) - noseTipY) * 2;
  	var centerX = rectangleLeft + minorAxis;
  	var centerY = (eyeRightTopY + eyeLeftTopY) / 2


  }

}
