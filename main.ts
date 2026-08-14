/**
 * External Speaker
 */
//% color="#9B59B6" icon="\uf028" block="外付けスピーカー"
namespace ExternalSpeaker {

    /**
     * 音楽の出力ピンを設定する
     */
    //% block="音楽の出力ピンを %pin に設定"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.tooltips="true"
    //% weight=100
    export function setMusicPin(pin: AnalogPin): void {
        pins.setAudioPin(pin)
        pins.setAudioPinEnabled(true)
    }

    /**
     * 外付けスピーカーを有効にする
     */
    //% block="外付けスピーカーを有効にする"
    //% weight=90
    export function enable(): void {
        pins.setAudioPinEnabled(true)
    }

    /**
     * 外付けスピーカーを無効にする
     */
    //% block="外付けスピーカーを無効にする"
    //% weight=80
    export function disable(): void {
        pins.setAudioPinEnabled(false)
    }

    /**
     * 音楽の出力ピンをP0に設定
     */
    //% block="音楽の出力を P0 にする"
    //% weight=70
    export function setP0(): void {
        pins.setAudioPin(AnalogPin.P0)
        pins.setAudioPinEnabled(true)
    }

    /**
     * 音楽の出力をP1に設定
     */
    //% block="音楽の出力を P1 にする"
    //% weight=60
    export function setP1(): void {
        pins.setAudioPin(AnalogPin.P1)
        pins.setAudioPinEnabled(true)
    }

    /**
     * 音楽の出力をP2に設定
     */
    //% block="音楽の出力を P2 にする"
    //% weight=50
    export function setP2(): void {
        pins.setAudioPin(AnalogPin.P2)
        pins.setAudioPinEnabled(true)
    }
}
