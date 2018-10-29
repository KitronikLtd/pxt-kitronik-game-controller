#include "pxt.h"
using namespace pxt;

/**
 * Blocks for driving the Kitronik :GAME Controller
 */
//% color=#00A654 weight=100
namespace Kitronik_Game_Controller {

    bool initialized = false;

    //%
    void init() {
        if (initialized) return;
        //This function sets all the buttons on the :GAME Controller to actually appear as buttons on the micro:bit
        #define ALLOC_PIN_BUTTON(id) new MicroBitButton(getPin(id)->name, id, MICROBIT_BUTTON_ALL_EVENTS, PullUp);
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P8)
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P12)
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P13)
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P14)
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P15)
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P16)
        #undef ALLOC_PIN_BUTTON

        initialized = true;
    }
}