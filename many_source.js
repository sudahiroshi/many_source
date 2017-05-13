class manysource {
  constructor( canvas, base, freq, distance, delay, number ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext( "2d" );

    this.base = base;
    this.freq = freq;
    this.distance = distance;
    this.delay = delay;
    this.number = number;

    this.timer1 = new vbTimer();
    this.timer1.interval = 100;
    this.timer1.timer = () => {

    }
  }

  /**
   * calc
   * 音場を計算するメソッド
   *
   */
  calc( theta ) {
    var imageData = this.ctx.createImageData( 450, 450 );
    var pixelData = imageData.data;

    var d = 0;
    var th = 2.0 * Math.PI / 8.6 * 10. / 180. * Math.PI
    var fy = 2.0 * Math.PI / 8;
    var r = new Array( this.number );
    var x = new Array( this.number );

    for( var i=0; i<this.number; i++ ) {
      x[i] = -this.number / 2 * this.distance + this.distance / 2 + i * this.distance;
    }

    var dy = 0;
    for( var k=-3; k<9; k+=0.026666666666 ) {
      var dx = 0;
      for( var j=-8; j<=4; j+=0.02666666666 ) {
        var amp = 0;
        for( var n=0; n<r.length; n++ ) {
          var ra = Math.sqrt( k * k + (j - x[n]) * (j - x[n]));
          amp += Math.sin( Math.PI * 2.0 / th * ra - Math.PI * 2.0 / 360 * theta ) / ( 1 + ra / 10.0 );
        }
        var cw = Math.floor( 127 + 126 * amp / r.length );
        if( cw<0 || 255<cw ) console.log( "？？？" );
        pixelData[ dy * 450 * 4 + dx * 4 + 0 ] = 0;	//R
        pixelData[ dy * 450 * 4 + dx * 4 + 1 ] = cw;	//G
        pixelData[ dy * 450 * 4 + dx * 4 + 2 ] = cw;	//B
        pixelData[ dy * 450 * 4 + dx * 4 + 3 ] = 255;	//a
        dx++;
      }
      dy++;
    }
    this.ctx.putImageData( imageData, 0, 0 );
  }
}

window.addEventListener( 'load', function() {

});

/*
とりあえずの試し方
var a = new manysource( document.getElementById('graph0'), 0, 0, 8.6, 0, 6 );
a.calc(0);
*/
