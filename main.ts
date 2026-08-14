/**
 * micro:bit Retro Arcade
 * External Speaker
 */
//% color="#8E44AD" icon="\uf028" block="Retro Arcade スピーカー"
namespace RetroArcadeSpeaker {

    /**
     * P0を音声出力に設定
     */
    //% block="音声出力を P0 に設定"
    //% weight=100
    export function setP0(): void {
        pins.setAudioPin(AnalogPin.P0)
        pins.setAudioPinEnabled(true)
    }

    /**
     * P1を音声出力に設定
     */
    //% block="音声出力を P1 に設定"
    //% weight=90
    export function setP1(): void {
        pins.setAudioPin(AnalogPin.P1)
        pins.setAudioPinEnabled(true)
    }

    /**
     * P2を音声出力に設定
     */
    //% block="音声出力を P2 に設定"
    //% weight=80
    export function setP2(): void {
        pins.setAudioPin(AnalogPin.P2)
        pins.setAudioPinEnabled(true)
    }

    /**
     * 音声出力を有効にする
     */
    //% block="音声出力を有効にする"
    //% weight=70
    export function enable(): void {
        pins.setAudioPinEnabled(true)
    }

    /**
     * 音声出力を無効にする
     */
    //% block="音声出力を無効にする"
    //% weight=60
    export function disable(): void {
        pins.setAudioPinEnabled(false)
    }

    /**
     * P0からテスト音を鳴らす
     */
    //% block="P0からテスト音を鳴らす"
    //% weight=50
    export function testP0(): void {
        pins.setAudioPin(AnalogPin.P0)
        pins.setAudioPinEnabled(true)
        music.playTone(523, 300)
    }

    /**
     * P1からテスト音を鳴らす
     */
    //% block="P1からテスト音を鳴らす"
    //% weight=40
    export function testP1(): void {
        pins.setAudioPin(AnalogPin.P1)
        pins.setAudioPinEnabled(true)
        music.playTone(523, 300)
    }

    /**
     * P2からテスト音を鳴らす
     */
    //% block="P2からテスト音を鳴らす"
    //% weight=30
    export function testP2(): void {
        pins.setAudioPin(AnalogPin.P2)
        pins.setAudioPinEnabled(true)
        music.playTone(523, 300)
    }
}
