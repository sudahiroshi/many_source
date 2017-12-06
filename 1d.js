var theta = 0;

function calc() {
  let canvas = document.getElementById( 'graph0' );
  let ctx = canvas.getContext( "2d" );

  let lambda = 8.6; // 波長は8.6mm （音で言えば40kHz）
  let c_size = 512; // canvasのサイズ
  let w_number = 4; // フィールド内の波の数

  ctx.clearRect( 0, 0, 512, 512 );

  let k = 2.0 * Math.PI / lambda;

  ctx.beginPath();
  ctx.moveTo( 0, 200 );
  for( var x=0; x<c_size; x++ ) {
    let r = x * ( lambda * w_number ) / c_size;
    let amp = Math.sin( - k * r + Math.PI * 2.0 / 360.0 * theta );
    ctx.lineTo( x, 100 * amp + 200 );
  }
  ctx.stroke();

  theta += 4.5; // 1フレームで位相を4.5°進める
  requestAnimationFrame( calc );
}

window.addEventListener( 'load', function() {
  calc();
});
