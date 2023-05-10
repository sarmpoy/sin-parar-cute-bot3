basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 10) {
        cuteBot.moveTime(cuteBot.Direction.backward, 50, 2)
        cuteBot.motors(100, 25)
        basic.pause(100)
        cuteBot.motors(50, 50)
    } else {
        cuteBot.motors(50, 50)
    }
})
