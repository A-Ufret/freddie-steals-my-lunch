sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Chicken.setPosition(randint(0, 360), randint(0, 360))
})
let Chicken: Sprite = null
scene.setBackgroundColor(13)
let Freddie = sprites.create(assets.image`Freddie`, SpriteKind.Player)
controller.moveSprite(Freddie)
Chicken = sprites.create(img`
    . . . . . . b b b . . . . . . . 
    . . . . b b 4 4 4 b . . . . . . 
    . . . 4 4 4 4 d d d 4 . . . . . 
    . . 4 4 4 4 4 4 4 4 4 b . . . . 
    . 2 4 4 4 4 4 4 4 4 4 b e . . . 
    2 b b 4 4 4 4 4 4 4 4 b e . . . 
    2 b 4 4 4 4 4 4 4 4 4 4 b . . . 
    2 b 4 4 4 4 4 4 4 4 4 4 4 . . . 
    2 2 b 4 4 b b 4 4 4 4 4 b . . . 
    . 2 b b b b 4 b b 4 4 4 b e . . 
    . . e e e b b b b 4 b 4 4 e . . 
    . . . . e e e 2 b b 4 b b e . . 
    . . . . . . . 2 2 b b b b c . . 
    . . . . . . . . . . e e c d b . 
    . . . . . . . . . . . . . c 1 1 
    . . . . . . . . . . . . . . 1 d 
    `, SpriteKind.Food)
