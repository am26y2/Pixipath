var vw = window.innerWidth;
var vh = window.innerHeight;

var app = new PIXI.Application(vw, vh, {
  view: document.getElementById("stage"),
  antialias: true,
});

var graphics = new PIXI.Graphics()
  // .lineStyle(2, 0xaaaaaa, 1)
  .moveTo(0, 500)
  .lineTo(vw-vw/20, vh-vh/5)
  // .arcTo(350, 200, 450, 900, 100)
  // .lineTo(200, 500)
  .lineTo(vw-vw/20, random(0,vh-vh/5))
  // .bezierCurveTo(700, 100, 700, 400, 100, 100);

var points = graphics.graphicsData[0].shape.points;
var values = [];

for (var i = 0; i < points.length; i += 2) {
  if(i%2==0){
  values.push({ x: points[i], y: points[i + 1] });
  }else{
    values.push({ x: points[i], y: points[i + 1] });
  }

}

var sprite = PIXI.Sprite.fromImage(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/dog.png?v=1"
);
sprite.rotation+=1;
sprite.position.copy(values[0]);
sprite.anchor.set(0.5);
sprite.pivot.set(0.5);
sprite.scale.set(0.5);
graphics.lineStyle();

TweenMax.to(sprite, 3, {
  bezier: {
    values: values,
    curviness: 0,
  },
  // repeat: -1,
  // yoyo: true,
  
});

app.stage.addChild(sprite, graphics);
function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}