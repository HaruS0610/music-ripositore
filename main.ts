/**
 * External Speaker
 */
//% color="#9B59B6" icon="\uf028" block="外付けスピーカー"
namespace ExternalSpeaker {

    /**
     * P0に音声を出力
     */
    //% block="音楽の出力を P0 にする"
    //% weight=100
    export function setP0(): void {
        pins.setAudioPin(AnalogPin.P0)
        pins.setAudioPinEnabled(true)
    }

    /**
     * P1に音声を出力
     */
    //% block="音楽の出力を P1 にする"
    //% weight=90
    export function setP1(): void {
        pins.setAudioPin(AnalogPin.P1)
        pins.setAudioPinEnabled(true)
    }

    /**
     * P2に音声を出力
     */
    //% block="音楽の出力を P2 にする"
    //% weight=80
    export function setP2(): void {
        pins.setAudioPin(AnalogPin.P2)
        pins.setAudioPinEnabled(true)
    }
}
