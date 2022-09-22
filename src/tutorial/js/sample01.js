const context = new AudioContext();

const playBtn = document.createElement('button');
playBtn.textContent = 'Play';

playBtn.addEventListener('click', () => {
    // Create an oscillator node
    const osc = context.createOscillator();

    // Set the frequency of the oscillator
    osc.frequency.value = 440;

    // Connect the oscillator to the output
    osc.connect(context.destination);

    // Start the oscillator
    osc.start();

    // Stop the oscillator after 1 second
    osc.stop(context.currentTime + 1);
});

document.body.appendChild(playBtn);
