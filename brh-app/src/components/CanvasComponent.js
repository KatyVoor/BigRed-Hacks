import React from 'react';



  class CanvasComponent extends React.Component {
    drawLines({points}, c) {
      console.log('in draw lines', points, c)
      const { rectangleWidth, rectangleLeft, eyeLeftTopY, eyeRightTopY, noseTipY } = points;
    	var minorAxis = rectangleWidth / 2;
    	var majorAxis = (((eyeRightTopY + eyeLeftTopY) / 2) - noseTipY) * 2;
    	//var centerX = rectangleLeft + minorAxis;
    	//var centerY = (eyeRightTopY + eyeLeftTopY) / 2


      // <canvas id="myCanvas" width="1000" height="600" style="border:1px solid #d3d3d3;">
      // </canvas>
      //
      // var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      //var con1 = c.getContext("2d"); //horizontal
      //var con2 = c.getContext("2d"); //vertical

      ctx.fillStyle = "#9ea7b8";
      ctx.fill();

      var centerX = 0;
      var centerY = 0;
      var radius = minorAxis;
      //ctx.save()

      ctx.translate(minorAxis, majorAxis);
    //  con1.translate(minorAxis*2,majorAxis);
      //con2.translate(minorAxis, majorAxis*2);
      // scale context vertically
      //ctx.scale((minorAxis*2)/(majorAxis*2), 1);
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      // draw circle which will be stretched into an oval
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      //con1.beginPath();
      //con1.lineTo(0-(minorAxis*2), 0);
      //con2.lineTo(0, 0-(majorAxis*2));
      // restore to original state
      // ctx.restore();
      // con1.restore();
      // con2.restore();

      ctx.stroke();
      //con1.stroke();
      //con2.stroke();
    }
    // nextProps will contain the points that you'll use to draw the shapes
    componentWillReceiveProps(nextProps) {
      // pass the newest props and the canvas ref to the draw lines function
      this.drawLines(nextProps, this.refs.canvas);
    }

  render() {
    return (
      <canvas ref="canvas" width="500" height="300" />
    )
  }
}

export default CanvasComponent;
