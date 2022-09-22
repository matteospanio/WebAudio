const loadBuffer = async (context, url) => {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return context.decodeAudioData(arrayBuffer);
};

const playBuffer = async (context, buffer) => {
    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start();
};

const stopBuffer = (source) => {
    source.stop();
};

window.onload = async () => {
    const context = new AudioContext();

    const buffer = await loadBuffer(context, 'http://localhost:8080/audio/sample1.mp3');
    
    const playBtn = document.createElement('button');
    playBtn.textContent = 'Play';
    playBtn.addEventListener('click', () => playBuffer(context, buffer));
    document.querySelector('.app').appendChild(playBtn);

    const stopBtn = document.createElement('button');
    stopBtn.textContent = 'Stop';
    stopBtn.addEventListener('click', () => stopBuffer(buffer));
};