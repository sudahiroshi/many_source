let theta = 0;

function calc() {
  let canvas = document.getElementById('graph0');
  let ctx = canvas.getContext( "2d" );

  let lambda = 8.6; // 波長は8.6mm （音で言えば40kHz）
  let c_size = 512; // canvasのサイズ
  let w_number = 16; // フィールド内の波の数

  ctx.clearRect( 0, 0, 512, 512);

  let imageData = ctx.createImageData( 512, 512 );
  let pixelData = imageData.data;

  let k = 2.0 * Math.PI / lambda;
  let m_size = ( lambda * w_number ) / c_size; // 1ピクセルのサイズ

  for( let y=0; y<c_size; y++ ) {
    for( let x=0; x<c_size; x++ ) {
      let px = c_size / 2.0 - x;
      let py = c_size / 2.0 - y;
      let r = Math.sqrt( ( px * m_size * px * m_size ) + ( py * m_size * py * m_size ) );
      let amp = Math.sin( - k * r + Math.PI * 2.0 / 360.0 * theta );
      let wh = Math.floor( 127 + 126.0 * amp );
      if( wh<0 || 255<wh ) console.log( "？？？" );
      pixelData[ y * c_size * 4 + x * 4 + 0 ] = 0;	//R
      pixelData[ y * c_size * 4 + x * 4 + 1 ] = wh;	//G
      pixelData[ y * c_size * 4 + x * 4 + 2 ] = wh;	//B
      pixelData[ y * c_size * 4 + x * 4 + 3 ] = 255;	//a
    }
  }
  ctx.putImageData( imageData, 0, 0 );

  theta += 4.5; // 1フレームで位相を4.5°進める
  requestAnimationFrame( calc );
}

window.addEventListener( 'load', function() {
  calc();
});
