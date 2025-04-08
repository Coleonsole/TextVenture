function right () {
    adventure.addToTextlog("Axel looks right and sees a nice field")
    adventure.addImageToTextLog(img`
        ......cc66......
        .....c6576c.....
        ....c677576c....
        ....cc677666....
        ...cc6c6667cc...
        ..6c666777cc6c..
        ..c76666766776..
        ..c6777777776c..
        ..cc67777776cc..
        .c67cc76676676c.
        .c777666667777c.
        .c6777777777766.
        .cc7767776776666
        c676cc6766666776
        c777766666677776
        cc7777777777776c
        .c676777677767c.
        ..cc667666766c..
        ...ccc6c66ccc...
        .....cccccc.....
        .......ee.......
        ......eeee......
        .....eeeeee.....
        .......ee.......
        `)
    adventure.addToTextlog("He spies a tree that looks just perfect for a nap...")
    adventure.addToTextlog("Press (a) for a cat nap or press (b) to push onward")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        Right_Nap()
    } else {
        Right_Awake()
    }
}
function Left_tavern_corner () {
    adventure.addToTextlog("Axel sits down and time starts to pass")
    music.stopAllSounds()
    music.play(music.stringPlayable("C D G D C D G D ", 100), music.PlaybackMode.InBackground)
    adventure.addToTextlog("...")
    adventure.addToTextlog("...")
    adventure.addToTextlog("...")
    _2()
}
function Left_Tavern_Stool_Bet () {
    adventure.addToTextlog("Axel goes and bets 2 coins")
    adventure.changeScoreOverride(adventure.Currency.Coins, -2)
    if (randint(0, 10) < 5) {
        Left_Tavern_Stool_Bet_Fail()
    } else {
        Left_Tavern_Stool_Bet_Success()
    }
}
function Left_Tavern_Stool_Arm_wrestle () {
    adventure.addToTextlog("Axel puts his arm up on the table and gets ready for his opponent")
    if (randint(0, 10) < 5) {
        adventure.addToTextlog("The opponent Goliath absolutely destroys him ")
        adventure.addToTextlog("Axel feels bad and falls asleep due to lack of rest")
        _2()
    } else {
        adventure.addToTextlog("Good news for Axel")
        adventure.addToTextlog("His opponent is a flimsy dragonborn and he easily wins")
        adventure.addToTextlog("Unfortunately he falls asleep due to lack of rest")
        _2()
    }
}
function left () {
    adventure.addToTextlog("Axel looks left and spies a small town in the distance")
    adventure.addToTextlog("He walks into town and sees a well kept tavern Press (a) to enter the tavern or press (b) to explore town")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        Left_Tavern()
    } else {
        Left_Explore()
    }
}
function Left_Explore () {
    adventure.addToTextlog("Axel walks around town for a bit ")
    music.stopAllSounds()
    music.play(music.stringPlayable("C D G D C D G D ", 100), music.PlaybackMode.InBackground)
    adventure.addToTextlog("...")
    adventure.addToTextlog("...")
    adventure.addToTextlog("...")
    adventure.addToTextlog("8:48pm")
    music.play(music.createSong(assets.song`Monsta`), music.PlaybackMode.LoopingInBackground)
    adventure.addImageToTextLog(img`
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f e d d b b d d e f f 
        f f f e 4 4 4 4 e f f f 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        `)
    adventure.addToTextlog("A shady merchant appears")
    Chap1Joke = 1
    adventure.addToTextlog("His face is hidden in shadow")
    adventure.addToTextlog("\"buy my drinks\" he says")
    adventure.addToTextlog("Press (a) to buy one or press (b) to throw something at him")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.changeScoreOverride(adventure.Currency.Coins, -1)
        adventure.addToTextlog("Axel drinks")
        adventure.addToTextlog("The merchant runs off")
        adventure.addToTextlog("Axel feels woozy and falls down asleep")
        _2()
    } else {
        adventure.addToTextlog("Axel throws a stone at him")
        adventure.addImageToTextLog(img`
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            f f f 2 f f f f 2 f f f 
            f f 2 2 2 f f 2 2 2 f f 
            f f f 2 f f f f 2 f f f 
            f f f f f f f f f f f f 
            f f e d d b b d d e f f 
            f f f e 4 4 4 4 e f f f 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            `)
        adventure.addToTextlog("\"WHAT?!\"")
        adventure.addToTextlog("Do you think that's acceptable\"")
        adventure.addToTextlog("\"DO YOU THINK THATS ACCEPTABLE?!\"")
        _2()
    }
}
function _2 () {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Wii Zard`), music.PlaybackMode.LoopingInBackground)
    Friendlevel = 0
    adventure.addToTextlog("Chapter 2- The Wizard's Apprentice")
    adventure.addImageToTextLog(img`
        . . . . . . . c . . . . . . . . 
        . . . . . . c c c . . . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . c c c c c c c . . . . . 
        . . . c c c c c c c c c . . . . 
        . . c c c c c c c c c c c . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d 5 d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d 5 d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d e e e d d d . . . . 
        . . . d d d f e e d d d . . . . 
        . . . d d d e e e d d d . . . . 
        `)
    adventure.addToTextlog("\"Axel?\"")
    adventure.addToTextlog("\"Axel, wake up...\"")
    adventure.addToTextlog("A young woman and a wizard stand over Axel, who is lying on his back, saved")
    adventure.addImageToTextLog(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `)
    adventure.addToTextlog("\"Hello, I'm Rose.\"")
    adventure.addToTextlog("Press (a) to shake her hand or press (b) to not")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        Friendlevel += 10
        adventure.addToTextlog("\"Pleased to meet you,\" says Axel kindly")
    } else {
        Friendlevel += -10
        adventure.addToTextlog("Axel does not shake her hand")
    }
    adventure.addImageToTextLog(img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 c . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . . f f b f e e f b f f . . . 
        . . . f f 1 f b b f 1 f f . . . 
        . . . e f b b b b b b f e . . . 
        . . . e e e e e e e e e e . . . 
        . . e b c b 5 b b 5 b f b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `)
    adventure.addToTextlog("\"Good day to you,\" says the eccentric wizard.")
    adventure.addToTextlog("\"My name is Wi Zard\"")
    if (Friendlevel == -10) {
        adventure.addToTextlog("\"I can see shaking hands is not your thing.\"")
    } else {
        adventure.addToTextlog("He shakes Axel's hand firmly")
    }
    adventure.addToTextlog("\"I hear you are on a journey\"")
    if (Chap1Joke == 1) {
        adventure.addToTextlog("\"How do you know?\" asked Axel")
        adventure.addToTextlog("\"An old friend\"")
        adventure.addImageToTextLog(img`
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            f f e d d b b d d e f f 
            f f f e 4 4 4 4 e f f f 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            `)
    } else {
        adventure.addToTextlog("\"That's right\" said Axel")
    }
    adventure.addToTextlog("\"Anyway, Rose, my apprentice wants to start exploring.\"")
    adventure.addToTextlog("\"So I thought maybe a fellow adventurer could show her the ropes.\"")
    Pleeeeease_Axel()
}
function Right_enemies () {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Monsta`), music.PlaybackMode.LoopingInBackground)
    adventure.addImageToTextLog(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ....7.fd11111111df......
        ...7..fd11111111df......
        ...7..fd11111111df......
        ...7..fddd1111dddff.....
        ...77.fbdbfddfbdbfcf....
        ...777fcdcf11fcdcfbf....
        ....77fffbdb1bdffcf.....
        ....fcb1bcffffff........
        ....f1c1c1ffffff........
        ....fdfdfdfffff.........
        .....f.f.f..............
        ........................
        ........................
        ........................
        `)
    adventure.addToTextlog("Enemies surround Axel and steal all his coins.")
    adventure.changeScoreOverride(adventure.Currency.Coins, -10)
    adventure.addToTextlog("He has 2 options (a) flight or (b) fight")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addImageToTextLog(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f f f 4 4 f f f e f f . 
            . f e e f 1 f d d f 1 f e e f . 
            . . f e f f f d d f f f e f . . 
            . . . f e e 4 f f 4 e e f . . . 
            . . e 4 f 2 2 f f 2 2 f 4 e . . 
            . . 4 d f 2 2 f f 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        adventure.addToTextlog("Axel legs it until an arrow hits him in the back")
        adventure.addToTextlog("Everything goes black...")
        _2()
    } else {
        adventure.addImageToTextLog(img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `)
        adventure.addToTextlog("Axel raises his sword to fight but something sharp hits his back")
        adventure.addToTextlog("Everything goes black...")
        _2()
    }
}
function Pleeeeeeeeeeeeeeeeeeeeease_Axel () {
    adventure.addToTextlog("Press (a) to let Rose join your party or press (b) to deny")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("\"Yay! Thanks Axel\"")
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        game.splash("Rose joined Axel's party")
        adventure.addImageToTextLog(img`
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . 1 2 2 1 . . . . . . 
            . . . . c c 1 2 2 1 c c . . . . 
            . . c c b c 1 2 2 1 c c c c . . 
            . c b b 5 b 1 1 1 1 b 5 b b c . 
            . c b 5 5 b 1 2 2 1 b 5 5 b c . 
            . . c 5 5 5 1 2 2 1 5 5 5 c . . 
            . . . f 5 5 1 1 1 1 5 5 f . . . 
            . . . f f b f e e f b f f . . . 
            . . . f f 1 f b b f 1 f f . . . 
            . . . e f b b b b b b f e . . . 
            . . . e e e e e e e e e e . . . 
            . . e b c b 5 b b 5 b f b e . . 
            . . e e f 5 5 5 5 5 5 f e e . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `)
        adventure.addToTextlog("\"Oh my,\" said Wi")
        adventure.addToTextlog("\"Let me get you Patched up\"")
        adventure.addToTextlog("\"...bit of this...")
        adventure.addToTextlog("...bit of that...")
        adventure.addToTextlog("Done!\"")
        adventure.addToTextlog("Axel feels raring to go")
        adventure.addToTextlog("Press (a) to leave")
        pauseUntil(() => controller.A.isPressed())
        Exit()
    } else {
        adventure.addToTextlog("Rose looks sad, Axel fells an urge to reconsider")
        Pleeeeeeeeeeeeeeeeeeeeease_Axel()
    }
}
function Pleeeeease_Axel () {
    adventure.addImageToTextLog(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `)
    adventure.addToTextlog("\"That's a great idea, Wi\"")
    Pleeeeeeeeeeeeeeeeeeeeease_Axel()
}
function Right_Awake () {
    adventure.addToTextlog("Axel pushes on through the day")
    adventure.addToTextlog("He sets up camp for the night")
    music.play(music.stringPlayable("C D G D C D G D ", 100), music.PlaybackMode.InBackground)
    adventure.addToTextlog("…")
    adventure.addToTextlog("…")
    adventure.addToTextlog("…")
    adventure.addToTextlog("7:57am")
    Right_enemies()
}
function Left_Tavern_Stool () {
    adventure.addImageToTextLog(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `)
    adventure.addToTextlog("He sits down on the stool and orders a pint of mead")
    adventure.changeScoreOverride(adventure.Currency.Coins, -2)
    adventure.addToTextlog("that cost 2 coins")
    adventure.addToTextlog("...")
    adventure.addToTextlog("Axel spies an arm wrestling competition ")
    adventure.addToTextlog("There is also a betting station")
    adventure.addToTextlog("press (a) to bet or press (b) to arm wrestle")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        Left_Tavern_Stool_Bet()
    } else {
        Left_Tavern_Stool_Arm_wrestle()
    }
}
function Left_Tavern_Stool_Bet_Fail () {
    adventure.addToTextlog("The bet failed")
    adventure.addToTextlog("Axel gets angry")
    adventure.addToTextlog("He flips a table and the bartender tries to stop him")
    adventure.addToTextlog("...")
    adventure.addToTextlog("Axel prepared for a dust up")
    adventure.addToTextlog("Axel reaches for a punch")
    adventure.addToTextlog("But it missed")
    adventure.addToTextlog("The bartender punches Axel")
    adventure.addToTextlog("Crit-Hit")
    adventure.addToTextlog("Axel falls to the ground, out like a light")
    _2()
}
function Left_Tavern_Stool_Bet_Success () {
    adventure.changeScoreOverride(adventure.Currency.Coins, 4)
    adventure.addToTextlog("\"YES!!!\"")
    adventure.addToTextlog("\"I WIN\"")
    adventure.addToTextlog("Axel screamed")
    adventure.addToTextlog("He then fell down asleep")
    _2()
}
function Exit () {
    adventure.addImageToTextLog(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
    adventure.addToTextlog("Axel turns to leave")
    adventure.addToTextlog("Rose not far behind")
    adventure.addImageToTextLog(img`
        . . . . . f 1 2 2 1 f . . . . . 
        . . . . f 5 1 2 2 1 5 f . . . . 
        . . . f e 4 1 2 2 1 4 e f . . . 
        . . f b 3 e 1 1 1 1 e 3 b f . . 
        . . f 3 3 3 1 2 2 1 3 3 3 f . . 
        . f 3 3 e b 1 2 2 1 b e 3 3 f . 
        . f 3 3 f f 1 1 1 1 f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `)
    adventure.addToTextlog("\"Oh, Axel!\" said Rose")
    adventure.addToTextlog("\"Did I tell you I'm a bard?\"")
    adventure.addToTextlog("She runs off for a second")
    adventure.addToTextlog("Rose returns")
    adventure.addImageToTextLog(img`
        . . . . . f f 6 6 f f . . . . . 
        . . . . f 9 6 9 9 6 9 f . . . . 
        . . . f 8 6 9 9 9 9 6 8 f . . . 
        . . f b 3 8 6 6 6 6 8 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f f f f f f f f b b f 
        . f e e f e e e e f f f f e f . 
        . . e 4 f e e f e e e e f e . . 
        . . e f f e e e e f f f f e . . 
        . . . f f f f f f f d f f . . . 
        . . . . . f f b b f f . . . . . 
        `)
    adventure.addToTextlog("She is carrying a ukulele")
    adventure.addToTextlog("She strums it kind of tunelessly")
    adventure.addImageToTextLog(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . 1 1 1 1 . . . . 
        . . . . 1 . . . 1 . . 1 . . . . 
        . 1 1 1 1 . . . 1 . . 1 . . . . 
        . 1 . . 1 . . . 1 1 1 1 . . . . 
        . 1 . . 1 . . . . . . . . . . . 
        . 1 1 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    adventure.addToTextlog("\"How was my playing!\" Rose asks")
    adventure.addToTextlog("Press (a) to say it was good or press (b) to say it was bad")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        Friendlevel += 10
        adventure.addToTextlog("\"It was good!\" said Axel")
    } else {
        adventure.addToTextlog("\"I think it could use a bit of work...\" said Axel.")
        adventure.addToTextlog("\"Oh...\"")
    }
    music.play(music.stringPlayable("C5 G F G - B A G ", 190), music.PlaybackMode.UntilDone)
    adventure.addToTextlog("They set off")
    adventure.addToTextlog("12:33")
    adventure.addToTextlog("")
}
function Right_Nap () {
    adventure.addToTextlog("Axel decides a nap is a good idea and quickly falls asleep")
    music.stopAllSounds()
    music.play(music.stringPlayable("C D G D C D G D ", 100), music.PlaybackMode.InBackground)
    adventure.addToTextlog("…")
    adventure.addToTextlog("…")
    adventure.addToTextlog("…")
    adventure.addToTextlog("7:57pm")
    Right_enemies()
}
function Left_Tavern () {
    music.stopAllSounds()
    adventure.addImageToTextLog(img`
        . . . . . b e e e e b . . . . . 
        . . . . . b e e e e b . . . . . 
        . . . . . b e e e e b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . . b c c b . . . . . . 
        . . . . b b b c c b b b . . . . 
        . . . . b c c c c c c b . . . . 
        . . . . b c c c c c c b . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d f f d d f d d . . . . 
        . . . . d f d f d f f d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . b c c c c c c b . . . . 
        . . . . b c c c c c c b . . . . 
        . . . . b c c c c c c b . . . . 
        . . . . b b b b b b b b . . . . 
        `)
    music.play(music.createSong(assets.song`Tavern`), music.PlaybackMode.LoopingInBackground)
    adventure.addToTextlog("He enter the tavern")
    adventure.addToTextlog("There is an empty seat in the corner and a free stool at the bar")
    adventure.addToTextlog("Press (a) to sit in the corner or press (b) to take the spot at the bar")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        Left_tavern_corner()
    } else {
        Left_Tavern_Stool()
    }
}
function _1 () {
    music.play(music.stringPlayable("C5 G F G - B - B ", 190), music.PlaybackMode.LoopingInBackground)
    adventure.addToTextlog("Chapter 1- Prologue")
    adventure.addImageToTextLog(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    adventure.setScoreOverride(adventure.Currency.Coins, 10)
    adventure.changeLogColors(1, 9)
    adventure.addToTextlog("9:54am")
    adventure.addToTextlog("Behold Axel, a simple traveller...")
    adventure.addToTextlog("He is as ordinary as can be")
    adventure.addToTextlog("He comes to a fork in his path")
    adventure.addImageToTextLog(img`
        .eeee..............eeee.
        eeddee............eeddee
        edbbde............edbbde
        edbbdeeeeeeeeeeeeeedbbde
        feddeebbbbbbbbbbbbfeddee
        feeeefbbbbbbbbbbbbfeeeef
        feeeefeebbbbbbbbeefeeeef
        eeddeffeeeeeeeeeeffeddee
        edbbdeffeeeeeeeeffedbbde
        edbbdebbbbbbbbbbbbedbbde
        feddeebbbbbbbbbbbbfeddee
        feeeefeebbbbbbbbeefeeeef
        feeeeffeeeeeeeeeeffeeeef
        eeddeeffeeeeeeeeffeeddee
        edbbdebbbbbbbbbbbbedbbde
        edbbdebbbbbbbbbbbbedbbde
        feddeeeebbbbbbbbeefeddee
        feeeeffeeeeeeeeeeffeeeef
        feeeefffeeeeeeeefffeeeef
        eeddeebbbbbbbbbbbbeeddee
        edbbdebbbbbbbbbbbbedbbde
        edbbdeeebbbbbbbbeeedbbde
        feddeefeeeeeeeeeeffeddee
        feeeefffeeeeeeeefffeeeef
        feeeefbbbbbbbbbbbbfeeeef
        eeddeebbbbbbbbbbbbeeddee
        edbbdeeebbbbbbbbeeedbbde
        edbbdefeeeeeeeeeefedbbde
        feddeeffeeeeeeeefffeddee
        feeeefbbbbbbbbbbbbfeeeef
        feeeefbbbbbbbbbbbbfeeeef
        eeddeeeebbbbbbbbeeeeddee
        edbbdefeeeeeeeeeefedbbde
        edbbdeffeeeeeeeeffedbbde
        feddeebbbbbbbbbbbbfeddee
        feeeefbbbbbbbbbbbbfeeeef
        fbeeefeebbbbbbbbeefbeeef
        fbbffffeeeeeeeeeeffbbfff
        febbbefffffffffffffebbbe
        feefff666666666666feefff
        feeeef666666666666feeeef
        eeeeef............eeeeef
        .eeff..............eeff.
        `)
    adventure.addToTextlog("Press (a) to go left or press (b) to go right")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        left()
    } else {
        right()
    }
}
let Friendlevel = 0
let Chap1Joke = 0
game.splash("Welcome to TextVenture")
game.splash("A Coleonsole original")
game.splash("Here, you meet Axel")
game.splash("His story is up to you")
_1()
