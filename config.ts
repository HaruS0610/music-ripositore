namespace config {

    /*
     * Retro Arcade / micro:bit N3
     *
     * 外部音声出力用ピン
     *
     * P0 = DAL.P0
     * P1 = DAL.P1
     * P2 = DAL.P2
     */

    export const PIN_AUDIO_P0 = DAL.P0
    export const PIN_AUDIO_P1 = DAL.P1
    export const PIN_AUDIO_P2 = DAL.P2

    /*
     * 標準音声出力
     *
     * Retro ArcadeではP0を初期音声出力として使用。
     */
    export const PIN_SPEAKER = PIN_AUDIO_P0
}
