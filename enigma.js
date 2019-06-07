// Main script 

export default class Enigma {
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    rotors = null
    ukw = null
    steckerbrett = null
    etw = null

    constructor(rotors, ukw, steckerbrett, etw) {
        this.rotors = rotors
        this.ukw = ukw
        this.steckerbrett = steckerbrett
        this.etw = etw
    }

    sendSignal = () => {
        // Roda uma vez
        this.rotate()
        
    }

    rotate = () => {}

    convertToString = () => {}

    getPositions = () => {}

    setPositions = () => {}

    getPositions = () => {}

    setPositions = () => {}
}