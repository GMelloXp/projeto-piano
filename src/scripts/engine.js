
const pianoKeys = document.querySelectorAll(".piano-keys .key")

//função que cria o áudio das teclas

let audio = new Audio("src/tunes/a.wav")

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play()
}

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key))
})