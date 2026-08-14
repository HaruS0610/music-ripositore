/**
 * 外付けスピーカー
 */
//% color="#9B59B6" icon="\uf028" block="外付けスピーカー"
namespace ExternalSpeaker {

    /**
     * 音楽の出力ピンを設定
     * @param pin 音楽を出力するピン
     */
    //% block="音楽の出力ピンを %pin に設定"
    //% pin.defl=AnalogPin.P0
    //% weight=100
    //% group="スピーカー"
    export function setMusicPin(pin: AnalogPin): void {
        pins.setAudioPin(pin)
        pins.setAudioPinEnabled(true)
    }

    /**
     * 外付けスピーカーを有効にする
     */
    //% block="外付けスピーカーを有効にする"
    //% weight=90
    //% group="スピーカー"
    export function enable(): void {
        pins.setAudioPinEnabled(true)
    }

    /**
     * 外付けスピーカーを無効にする
     */
    //% block="外付けスピーカーを無効にする"
    //% weight=80
    //% group="スピーカー"
    export function disable(): void {
        pins.setAudioPinEnabled(false)
    }

    /**
     * 音楽出力ピンを取得
     */
    //% block="音楽の出力ピン"
    //% weight=70
    //% group="スピーカー"
    export function musicPin(): AnalogPin {
        return pins.getAudioPin()
    }
}
