let opDienblad = false;
let drankje;
let tolerantie = 500;

basic.forever(function () {
    basic.showString("3-2-1 GO!");
    drankje = game.createSprite(2,2);
    opDienblad=true;
    while (opDienblad) {
        if (input.acceleration(Dimension.X) > tolerantie) {
            if (drankje.get(LedSpriteProperty.X)<4) {
                drankje.change(LedSpriteProperty.X, 1)
            } else {
                opDienblad=false;
            }
        }
        if (input.acceleration(Dimension.X) < -tolerantie) {
            if (drankje.get(LedSpriteProperty.X)>0) {
                drankje.change(LedSpriteProperty.X, -1)
            } else {
                opDienblad=false;
            }
        }
        if (input.acceleration(Dimension.Y) > tolerantie) {
            if (drankje.get(LedSpriteProperty.Y) < 4 ) {
                drankje.change(LedSpriteProperty.Y, 1)
            } else {
                opDienblad=false;
            }
        }
        if (input.acceleration(Dimension.Y) < -tolerantie) {
            if (drankje.get(LedSpriteProperty.Y)>0) {
                drankje.change(LedSpriteProperty.Y, -1)
            } else {
                opDienblad=false;
            }
        }
        basic.pause(250);
        basic.clearScreen();
        basic.pause(50);
    }
    drankje.delete();
    basic.showString("GAME OVER");
    basic.pause(500);
})
