# pxt-kitronik-game-controller

Custom blocks for www.kitronik.co.uk/5644 :GAME Controller for micro:bit. 
See website for example code.

## Buttons
There are two different ways to trigger events when pressing the :GAME Controller buttons.

One uses blocks which return 'True' or 'False' values - these can be inserted in 'if else' statements as shown below:

```blocks
if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire1)) {
    <<Event 1>>
} else if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire2)) {
    <<Event 2>>
}
```

The other is a stand-alone block which triggers an event when the condition is met:

```blocks
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    <<Event 3>>
})
```

## For music
To use the micro:bit music functions, use the block below to set the output to the onboard buzzer.

```blocks 
Kitronik_Game_Controller.setBuzzerPin()
```
## Vibration Feedback
For haptic feedback use:

```blocks
Kitronik_Game_Controller.runMotor(250)
```

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

## License

MIT
