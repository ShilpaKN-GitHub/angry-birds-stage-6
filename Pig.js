class Pig extends BaseClass
{
  constructor(x, y)
  {
    super(x, y, 50, 50);
    this.visibility = 255;
    this.image = loadImage("sprites/enemy.png");
  }

  display()
  {
    console.log(this.body.speed);
    if(this.body.speed < 3)
    {
      super.display();
    }
    else
    {
      World.remove(world, this.body);

      var pos = this.body.position;
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      image(this.image, pos.x, pos.y, 50, 50);
      pop();
    }
  }
}