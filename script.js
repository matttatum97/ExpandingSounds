//Panels represents all the panels that you can click on.
const panels = document.querySelectorAll('.panel');

//Array of sounds that are used to quiet a sound when another one is played.
const sounds = ['applause', 'boo', 'gasp', 'tada', 
'victory', 'wrong']

//Object reprsenting the loading text that fades out upon refresh
const loadText = document.querySelector('.loading-text')

//Object representing the section object
const bg = document.querySelector('.bg')

//Number variable minupulated in order to change loading text
let load = 0

//Object that calls blurring function ever 30ms
let int = setInterval(blurring, 30)

//Calls function that Removes active class from all panels
//Adds active class to clicked pannel
//Calls function that stops all sounds
//Plays sounds associated with panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        stopSongs()
        document.getElementById(panel.id).play()
    })
})

//Stops all sounds that are played
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}

//Removes 'active' class from all panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


//Increments loading percentage on screen
//Fades loading percentage til it disapears
//Makes page less blurry until totaly visible
function blurring() {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

//Function that maps one range of numbers to different range of numbers 
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }