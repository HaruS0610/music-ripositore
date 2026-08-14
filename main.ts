//% color="#8E44AD" icon="\uf028" block="Retro Arcade スピーカー"
namespace RetroArcadeSpeaker {

    //% block="音声出力を P0 に設定"
    //% weight=100
    export function setP0(): void {
        music.setVolume(255)
    }

    //% block="音声出力を P1 に設定"
    //% weight=90
    export function setP1(): void {
        music.setVolume(255)
    }

    //% block="音声出力を P2 に設定"
    //% weight=80
    export function setP2(): void {
        music.setVolume(255)
    }
}
