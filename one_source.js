  /**
   * calc
   * 音場を計算するメソッド
   *
   */
  var theta = 0;
  function calc() {
    var canvas = document.getElementById('graph0');
    var ctx = canvas.getContext( "2d" );
    var number = 1;
    var distance = 0;
    ctx.beginPath();
    ctx.clearRect(0,0,450,450);
    ctx.stroke();
    var imageData = ctx.createImageData( 450, 450 );
    var pixelData = imageData.data;

    var d = 0;
    //var th = 2.0 * Math.PI / 8.6 * 10. / 180. * Math.PI
    var th = 2.0 * Math.PI / 8.6;
    var fy = 2.0 * Math.PI / 8;
    var r = new Array( number );
    var x = new Array( number );

    for( var i=0; i<number; i++ ) {
      x[i] = ( -number / 2 * distance + distance / 2 + i * distance ) / 80.0;;
    }

    var dy = 0;
    for( var k=-3; k<9; k+=0.026666666666 ) {
      var dx = 0;
      for( var j=-8; j<=4; j+=0.02666666666 ) {
        var amp = 0;
        for( var n=0; n<r.length; n++ ) {
          var ra = Math.sqrt( k * k + (j - x[n]) * (j - x[n]));
          amp += Math.sin( Math.PI * 2.0 / th * ra - Math.PI * 2.0 / 360 * theta );
        }
        var cw = Math.floor( 127 + 126.0 * amp / 2.0 );
        if( cw<0 || 255<cw ) console.log( "？？？" );
        pixelData[ dy * 450 * 4 + dx * 4 + 0 ] = 0;	//R
        pixelData[ dy * 450 * 4 + dx * 4 + 1 ] = cw;	//G
        pixelData[ dy * 450 * 4 + dx * 4 + 2 ] = cw;	//B
        pixelData[ dy * 450 * 4 + dx * 4 + 3 ] = 255;	//a
        dx++;
      }
      dy++;
    }
    ctx.putImageData( imageData, 0, 0 );
    console.log( theta );
    theta += 4.5;
    requestAnimationFrame( calc );
  }

window.addEventListener( 'load', function() {
  calc();
});

/*
とりあえずの試し方
var a = new manysource( document.getElementById('graph0'), 0, 0, 8.6, 0, 6 );
a.calc(0);
*/
