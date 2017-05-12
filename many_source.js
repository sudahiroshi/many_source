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
    var fy = 2.0 * Math.PI / 8;
    var r = new Array( this.number );
    var x = new Array( this.number );

    for( var i=0; i<this.number; i++ ) {
      x[i] = -this.number / 2 * this.distance + this.distance / 2 + i * this.distance;
    }

    for( var k=-3; k<9; k+=0.026666666666 ) {
      var dx = 0;
      for( var j=-8; j<=4; j+=0.02666666666 ) {
        //var r
      }
    }
  }
}

window.addEventListener( 'load', function() {

});

/*
とりあえずの試し方
var a = new manysource( document.getElementById('graph0'), 0, 0, 8.6, 0, 6 );
a.calc(0);
*/
