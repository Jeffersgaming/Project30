class Stone{
    constructor(x, y, width, height){
        var_options ={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/stone.png");
        World.add(world, this.body);

    }

}