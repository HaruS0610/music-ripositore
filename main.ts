//% color="#9B59B6" icon="\uf028" block="外付けスピーカー"
namespace ExternalSpeaker {

    //% block="音楽の出力ピンを %pin に設定"
    //% pin.defl=AnalogPin.P0
    //% weight=100
    export function setMusicPin(pin: AnalogPin): void {
        pins.setAudioPin(pin)
        pins.setAudioPinEnabled(true)
    }
}
