/**
 * Blocks for driving the Kitronik :GAME Controller
 */
//% weight=100 color=#00A654 icon="\uf11b" block=":GAME Controller"
//% groups='["Inputs", "Feedback"]'
namespace Kitronik_Game_Controller {
	/**
	*:GAME Controller Standard Buttons
	*/
	export enum ControllerButtons {
	    Up,
	    Down,
	    Left,
	    Right,
	    Fire1,
	    Fire2
	}

    /**
    *:GAME Controller Button Pins
    */
    export enum ControllerButtonPins {
        //% block="Joypad Up (P8)"
        Up = DAL.MICROBIT_ID_IO_P8,
        //% block="Joypad Down (P14)"
        Down = DAL.MICROBIT_ID_IO_P14,
        //% block="Joypad Left (P12)"
        Left = DAL.MICROBIT_ID_IO_P12,
        //% block="Joypad Right (P13)"
        Right = DAL.MICROBIT_ID_IO_P13,
        //% block="Fire 1 (P15)"
        Fire1 = DAL.MICROBIT_ID_IO_P15,
        //% block="Fire 2 (P16)"
        Fire2 = DAL.MICROBIT_ID_IO_P16
    }

    /**
    *:GAME Controller Button Events
    */
    export enum ControllerButtonEvents {
        //% block="down"
        Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
        //% block="up"
        Up = DAL.MICROBIT_BUTTON_EVT_UP,
        //% block="click"
        Click = DAL.MICROBIT_BUTTON_EVT_CLICK
    }

    /**
     *
     */
    //% shim=Kitronik_Game_Controller::init
    function init(): void {
        return;
    }

    /**
     * Run vibration motor for a particular length of time
     * @param run_time is the length of time the motor will run in ms, eg: 100
     */
    //% group=Feedback
    //% blockId="kitronik_controller_run_motor" block="Run motor for %run_time|ms" icon="\uf080"
    //% weight=92 blockGap=8
    export function runMotor(run_time: number): void {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(run_time)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }

    /**
     * Setup micro:bit to play music through :GAME Controller buzzer
     */
    //% group=Feedback
    //% blockId="kitronik_controller_buzzer_setup" block="set pitch pin to buzzer" icon="\uf080"
    //% weight=91 blockGap=8
    export function setBuzzerPin(): void {
        pins.analogSetPitchPin(AnalogPin.P2)
    }

    /**
     * Determines if a :GAME Controller button is pressed
     * @param button press to be checked
     */
    //% group=Inputs
    //% blockId="kitronik_controller_ispressed" block="button %button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=95 blockGap=8
    export function buttonIsPressed(button: ControllerButtonPins): boolean {
        const pin = <DigitalPin><number>button;
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(pin) == 0;
    }

    /**
     * Do something when one of the :GAME Controller Buttons is pressed
     * @param button press to be checked
     * @param event happening on the button, eg: click
     */
    //% group=Inputs
    //% blockId="kitronik_controller_button_press_on_event" block="on button %button|press %event"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=93 blockGap=8
    export function onButtonPress(button: ControllerButtonPins, event: ControllerButtonEvents, handler: Action) {
        init();
        control.onEvent(<number>button, <number>event, handler);
    }
} 