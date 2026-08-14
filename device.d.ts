/**
 * Retro Arcade N3 audio pins
 */

declare namespace pins {

    /**
     * Audio output P0
     */
    //% fixedInstance
    //% shim=pxt::getPinCfg(CFG_PIN_AUDIO_P0)
    const AUDIO_P0: AnalogOutPin

    /**
     * Audio output P1
     */
    //% fixedInstance
    //% shim=pxt::getPinCfg(CFG_PIN_AUDIO_P1)
    const AUDIO_P1: AnalogOutPin

    /**
     * Audio output P2
     */
    //% fixedInstance
    //% shim=pxt::getPinCfg(CFG_PIN_AUDIO_P2)
    const AUDIO_P2: AnalogOutPin
}
