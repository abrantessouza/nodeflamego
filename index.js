const scribble = require("scribbletune")
const cmd = require("node-cmd")

function createMidi(){
    let flamengoSong = scribble.clip({
        notes: "e4 e4 f4 e4 g4 d4 e4 g4 e4 d4 c4", // notas musicais 
        pattern: 'xxxxxx_-xxxxx_'
    })
    scribble.midi(flamengoSong)
}

function run(){
    cmd.run('"C:\\Program Files (x86)\\Windows Media Player\\wmplayer.exe" "C:\\Users\\thiago.abrantes\\Documents\\projetos\\midjs\\music.mid"');
}

createMidi()
run()
