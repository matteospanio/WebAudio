class Sound {
    constructor(context, {frequency, type}) {
        this.frequency = frequency
        this.type = type
        this.context = context
        this.isPlaying = false
    }

    play() {
        const source = new OscillatorNode(this.context, {
            frequency: this.frequency,
            type: this.type,
        })
        const filter = new BiquadFilterNode(this.context, {
            type: 'lowpass',
            frequency: 450,
            Q: 1
        })
        source.connect(filter)
              .connect(this.context.destination);
        source.start()
        this.source = source
        this.filter = filter
    }

    stop() {
        this.source.stop()
    }

    toggle() {
        this.isPlaying ? this.stop() : this.play()
        this.isPlaying = !this.isPlaying
    }

    toggleFilter(element) {
        this.source.disconnect(0);
        this.filter.disconnect(0);
        if (element.checked) {
            this.source.connect(this.filter);
            this.filter.connect(this.context.destination);
        } else {
            this.source.connect(this.context.destination);
        }
    }
}

function main() {
    const context = new AudioContext()

    const playBtn = createBtn('Play')
    const stopBtn = createBtn('Stop')
    const checkbox = createCheckBox('Apply filter')
    const osc = new Sound(context, {frequency: 440, type: 'square'})

    playBtn.addEventListener('click', () => {
        osc.play()
    })
    
    stopBtn.addEventListener('click', () => {
        osc.stop()
    })

    checkbox.addEventListener('change', () => {
        osc.toggleFilter(checkbox)
    })
}

function createBtn(text) {
    const btn = document.createElement('button')
    btn.textContent = text
    document.body.appendChild(btn)
    return btn
}

function createCheckBox(text) {
    const label = document.createElement('label')
    const input = document.createElement('input')
    input.type = 'checkbox'
    input.setAttribute('checked', true)
    label.appendChild(input)
    label.appendChild(document.createTextNode(text))
    document.body.appendChild(label)
    return input
}

window.onload = main
