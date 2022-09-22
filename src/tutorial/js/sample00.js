// Create audio context
const context = new AudioContext();

// Create an oscillator node
const osc = new OscillatorNode(context, { frequency: 440 });

// Connect the oscillator to the output
osc.connect(context.destination);

// Start the oscillator
osc.start();

// Stop the oscillator after 1 second
osc.stop(context.currentTime + 1);
