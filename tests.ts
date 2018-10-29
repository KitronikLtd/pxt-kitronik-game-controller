//Test file for the Kitronik :GAME Controller MakeCode package
//On start, music output pin is changed from the default of Pin 0 to Pin 2 (the :GAME Controller on-board buzzer signal pin).
//When the particular Joypad direction buttons are pressed, an arrow will be displayed on the micro:bit screen pointing in the direction of the button.
//The ‘forever’ loop uses blocks which output ‘True’ or ‘False’ to check whether particular buttons on the Controller have been pressed, and then uses an ‘if else’ statement to trigger different outputs. 
//When Fire 1 is pressed, the buzzer will play a short tune, and when Fire 2 is pressed, the motor will vibrate for 250ms. 

Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showArrow(ArrowNames.East)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showArrow(ArrowNames.North)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showArrow(ArrowNames.South)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showArrow(ArrowNames.West)
})
Kitronik_Game_Controller.setBuzzerPin()
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire1)) {
        music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    } else if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire2)) {
        Kitronik_Game_Controller.runMotor(250)
    }
})