import MasterControls from '../MasterControls/MasterControls.vue'
import AmpEnvelopeControls from '../AmpEnvelopeControls/AmpEnvelopeControls.vue';
import TremoloControls from '../TremoloControls/TremoloControls.vue';
import SourcesControls from '../SourcesControls/SourcesControls.vue';
import FiltersControls from '../FiltersControls/FiltersControls.vue';
import EffectsControls from '../EffectsControls/EffectsControls.vue';

let keysLabel = ['A0','A#0','B0',
'C1','C#1','D1','D#1','E1','F1','F#1','G1','G#1','A1','A#1','B1',
'C2','C#2','D2','D#2','E2','F2','F#2','G2','G#2','A2','A#2','B2',
'C3','C#3','D3','D#3','E3','F3','F#3','G3','G#3','A3','A#3','B3',
'C4','C#4','D4','D#4','E4','F4','F#4','G4','G#4','A4','A#4','B4',
'C5','C#5','D5','D#5','E5','F5','F#5','G5','G#5','A5','A#5','B5',
'C6','C#6','D6','D#6','E6','F6','F#6','G6','G#6','A6','A#6','B6',
'C7','C#7','D7','D#7','E7','F7','F#7','G7','G#7','A7','A#7','B7',
'C8'];

const keyRange = {};
for (let i = 0; i < keysLabel.length; i++) {
    keyRange[i + 21] = keysLabel[i];
}

let keysObj = [];

for (let i = 0; i < keysLabel.length; i++) {
    let key = {
        id: '',
        class: ''
    }
    key.id = keysLabel[i];
    if (keysLabel[i].includes('#')) {
        key.class = 'key, key-black';
    } else {
        key.class = 'key, key-white';
    }
    keysObj.push(key);
}

var currentNote = '';

export default {
    name: 'SynthDevice',
    components: {
        MasterControls,
        AmpEnvelopeControls,
        TremoloControls,
        SourcesControls,
        FiltersControls,
        EffectsControls
    },
    data() {
        return {
            title: 'SubJuicy',
            controls: [
                {
                    id: 'filters',
                    text: 'Filters',
                    click: this.renderFiltersControls
                },
                {
                    id: 'effects',
                    text: 'FX',
                    click: this.renderFXControls
                }
            ],
            filtersPanelIsVisible: true,
            keys: keysObj,
            synthState: {
                sources: {
                    osc1: {
                        type: 'sine',
                        volume: 0
                    },
                    osc2: {
                        type: 'sine',
                        volume: 0
                    },
                    osc3: {
                        type: 'sine',
                        volume: 0
                    },
                    noise: {
                        type: 'white',
                        volume: -50
                    }
                },
                amplitudeEnvelope: {
                    attack: 0.1,
                    decay: 0,
                    sustain: 0,
                    release: 1
                },
                master: {
                    gain: 0,
                    pan: 0
                },
                lfo: {
                    frequency: 1,
                    depth: 0
                },
                filters: {
                    lowPass: {
                        frequency: 5000,
                        quality: 1,
                        detune: 0
                    },
                    highPass: {
                        frequency: 0,
                        quality: 1,
                        detune: 0
                    },
                    peaking: {
                        gain: 0,
                        frequency: 5000,
                        quality: 1,
                        detune: 0
                    },
                    notch: {
                        frequency: 350,
                        quality: 1,
                        detune: 0
                    }
                },
                effects: {
                    chorus: {
                        depth: 0.7,
                        delayTime: 3.5,
                        frequency: 1.5,
                        feedback: 0,
                        wet: 0
                    },
                    phaser: {
                        baseFrequency: 350,
                        frequency: 0.5,
                        wet: 0
                    },
                    reverb: {
                        decay: 1.5,
                        preDelay: 0.01,
                        wet: 0
                    },
                    pingPongDelay: {
                        delayTime: 0.25,
                        feedback: 0.5,
                        wet: 0
                    }
                }
            }
        }
    },
    methods: {
        renderFiltersControls() {
            this.filtersPanelIsVisible = true;
        },
        renderFXControls() {
            this.filtersPanelIsVisible = false;
        },
        playNote(note) {
            try {
                if (this.$tone.context.state !== "running") {
                    this.$tone.context.resume().then(() => {
                        this.$tone.start();
                    });
                }
                this.osc1.frequency.value = note;
                this.osc2.frequency.value = note;
                this.osc3.frequency.value = note;
                this.osc1.start();
                this.osc2.start();
                this.osc3.start();
                this.noise.start();
                this.ampEnv.triggerAttack();
                this.lfo.start();
                console.log('Note On:', note);
            } catch (error) {
                console.error(error);
                console.log('Cannot play note');
            }
        },
        stopNote(note) {
            this.ampEnv.triggerRelease();
            console.log('Note Off:', note);
        },
        updateState(update) {
            switch(update.name) {
                case 'osc1Type': 
                    this.synthState.sources.osc1.type = update.value;
                    this.osc1.type = this.synthState.sources.osc1.type;
                    console.log('Osc1 Type updated:', update.value);
                    break;
                case 'osc1Volume':
                    this.synthState.sources.osc1.volume = update.value;
                    this.osc1.volume.value = this.synthState.sources.osc1.volume;
                    console.log('Osc1 Volume updated:', update.value);
                    break;
                case 'osc2Type':
                    this.synthState.sources.osc2.type = update.value;
                    this.osc2.type = this.synthState.sources.osc2.type;
                    console.log('Osc2 Type updated:', update.value);
                    break;
                case 'osc2Volume':
                    this.synthState.sources.osc2.volume = update.value;
                    this.osc2.volume.value = this.synthState.sources.osc2.volume;
                    console.log('Osc2 Volume updated:', update.value);
                    break;
                case 'osc3Type':
                    this.synthState.sources.osc3.type = update.value;
                    this.osc3.type = this.synthState.sources.osc3.type;
                    console.log('Osc3 Type updated:', update.value);
                    break;
                case 'osc3Volume':
                    this.synthState.sources.osc3.volume = update.value;
                    this.osc3.volume.value = this.synthState.sources.osc3.volume;
                    console.log('Osc3 Volume updated:', update.value);
                    break;
                case 'noiseType':
                    this.synthState.sources.noise.type = update.value;
                    this.noise.type = this.synthState.sources.noise.type;
                    console.log('Noise Type updated:', update.value);
                    break;
                case 'noiseVolume':
                    this.synthState.sources.noise.volume = update.value;
                    this.noise.volume.value = this.synthState.sources.noise.volume;
                    console.log('Noise Volume updated:', update.value);
                    break;
                case 'ampEnvAttack':
                    this.synthState.amplitudeEnvelope.attack = update.value;
                    this.ampEnv.attack = this.synthState.amplitudeEnvelope.attack;
                    console.log('Attack updated:', update.value);
                    break;
                case 'ampEnvDecay':
                    this.synthState.amplitudeEnvelope.decay = update.value;
                    this.ampEnv.decay = this.synthState.amplitudeEnvelope.decay;
                    console.log('Decay updated:', update.value);
                    break;
                case 'ampEnvSustain':
                    this.synthState.amplitudeEnvelope.sustain = update.value;
                    this.ampEnv.sustain = this.synthState.amplitudeEnvelope.sustain;
                    console.log('Sustain updated:', update.value);
                    break;
                case 'ampEnvRelease':
                    this.synthState.amplitudeEnvelope.release = update.value;
                    this.ampEnv.release = this.synthState.amplitudeEnvelope.release;
                    console.log('Release updated:', update.value);
                    break;
                case 'masterGain':
                    this.synthState.master.gain = update.value;
                    this.masterGain.volume.value = this.synthState.master.gain;
                    console.log('Master Gain updated:', update.value);
                    break;
                case 'pan':
                    this.synthState.master.pan = update.value;
                    this.panner.pan.value = this.synthState.master.pan;
                    console.log('Pan updated:', update.value);
                    break;
                case 'LFOFreq':
                    this.synthState.lfo.frequency = update.value;
                    this.lfo.frequency.value = this.synthState.lfo.frequency;
                    console.log('LFO Frequency updated:', update.value);
                    break;
                case 'LFODepth':
                    this.synthState.lfo.depth = update.value;
                    this.lfo.depth.value = this.synthState.lfo.depth;
                    console.log('LFO Depth updated:', update.value);
                    break;
                case 'LPFFrequency':
                    this.synthState.filters.lowPass.frequency = update.value;
                    this.lpFilter.frequency.value = this.synthState.filters.lowPass.frequency;
                    console.log('LPF Frequency updated:', update.value);
                    break;
                case 'LPFQuality':
                    this.synthState.filters.lowPass.quality = update.value;
                    this.lpFilter.Q.value = this.synthState.filters.lowPass.quality;
                    console.log('LPF Q-Factor updated:', update.value);
                    break;
                case 'LPFDetune':
                    this.synthState.filters.lowPass.detune = update.value;
                    this.lpFilter.detune.value = this.synthState.filters.lowPass.detune;
                    console.log('LPF Detune updated:', update.value);
                    break;
                case 'HPFFrequency':
                    this.synthState.filters.highPass.frequency = update.value;
                    this.hpFilter.frequency.value = this.synthState.filters.highPass.frequency;
                    console.log('HPF Frequency updated:', update.value);
                    break;
                case 'HPFQuality':
                    this.synthState.filters.highPass.quality = update.value;
                    this.hpFilter.Q.value = this.synthState.filters.highPass.quality;
                    console.log('HPF Q-Factor updated:', update.value);
                    break;
                case 'HPFDetune':
                    this.synthState.filters.highPass.detune = update.value;
                    this.hpFilter.detune.value = this.synthState.filters.highPass.detune;
                    console.log('HPF Detune updated:', update.value);
                    break;
                case 'PFGain':
                    this.synthState.filters.peaking.gain = update.value;
                    this.peakingFilter.gain.value = this.synthState.filters.peaking.gain;
                    console.log('PF Gain updated:', update.value);
                    break;
                case 'PFFrequency':
                    this.synthState.filters.peaking.frequency = update.value;
                    this.peakingFilter.frequency.value = this.synthState.filters.peaking.frequency;
                    console.log('PF Frequency updated:', update.value);
                    break;
                case 'PFQuality':
                    this.synthState.filters.peaking.quality = update.value;
                    this.peakingFilter.Q.value = this.synthState.filters.peaking.quality;
                    console.log('PF Q-Factor updated:', update.value);                        
                    break;
                case 'PFDetune':
                    this.synthState.filters.peaking.detune = update.value;
                    this.peakingFilter.detune.value = this.synthState.filters.peaking.detune;
                    console.log('PF Detune updated:', update.value);
                    break;
                case 'NotchFFrequency':
                    this.synthState.filters.notch.frequency = update.value;
                    this.notchFilter.frequency.value = this.synthState.filters.notch.frequency;
                    console.log('NotchF Frequency updated:', update.value);
                    break;
                case 'NotchFQuality':
                    this.synthState.filters.notch.quality = update.value;
                    this.notchFilter.Q.value = this.synthState.filters.notch.quality;
                    console.log('NotchF Q-Factor updated:', update.value);
                    break;
                case 'NotchFDetune':
                    this.synthState.filters.notch.detune = update.value;
                    this.notchFilter.detune.value = this.synthState.filters.notch.detune;
                    console.log('NotchF Detune updated:', update.value);
                    break;
                case 'chorusDepth':
                    this.synthState.effects.chorus.depth = update.value;
                    this.chorus.depth = this.synthState.effects.chorus.depth;
                    console.log('Chorus Depth updated:', update.value);
                    break;
                case 'chorusDelayTime':
                    this.synthState.effects.chorus.delayTime = update.value;
                    this.chorus.delayTime = this.synthState.effects.chorus.delayTime;
                    console.log('Chorus Delay Time updated:', update.value);
                    break;
                case 'chorusFreq':
                    this.synthState.effects.chorus.frequency = update.value;
                    this.chorus.frequency.value = this.synthState.effects.chorus.frequency;
                    console.log('Chorus Frequency updated:', update.value);
                    break;
                case 'chorusFeedback':
                    this.synthState.effects.chorus.feedback = update.value;
                    this.chorus.feedback.value = this.synthState.effects.chorus.feedback;
                    console.log('Chorus Feedback updated:', update.value);
                    break;
                case 'chorusWet':
                    this.synthState.effects.chorus.wet = update.value;
                    this.chorus.wet.value = this.synthState.effects.chorus.wet;
                    console.log('Chorus Wet updated:', update.value);
                    break;
                case 'phaserBaseFreq':
                    this.synthState.effects.phaser.baseFrequency = update.value;
                    this.phaser.baseFrequency = this.synthState.effects.phaser.baseFrequency;
                    console.log('Phaser Base Frequency updated:', update.value);
                    break;
                case 'phaserFreq':
                    this.synthState.effects.phaser.frequency = update.value;
                    this.phaser.frequency.value = this.synthState.effects.phaser.frequency;
                    console.log('Phaser Frequency update:', update.value);
                    break;
                case 'phaserWet':
                    this.synthState.effects.phaser.wet = update.value;
                    this.phaser.wet.value = this.synthState.effects.phaser.wet;
                    console.log('Phaser Wet updated:', update.value);
                    break;
                case 'reverbDecay':
                    this.synthState.effects.reverb.decay = update.value;
                    this.reverb.decay = this.synthState.effects.reverb.decay;
                    console.log('Reverb Decay updated:', update.value);
                    break;
                case 'reverbPreDelay':
                    this.synthState.effects.reverb.preDelay = update.value;
                    this.reverb.preDelay = this.synthState.effects.reverb.preDelay;
                    console.log('Reverb Pre Delay updated:', update.value);
                    break;
                case 'reverbWet':
                    this.synthState.effects.reverb.wet = update.value;
                    this.reverb.wet.value = this.synthState.effects.reverb.wet;
                    console.log('Reverb Wet updated:', update.value);
                    break;
                case 'pingPongDelayTime':
                    this.synthState.effects.pingPongDelay.delayTime = update.value;
                    this.pingPongDelay.delayTime.value = this.synthState.effects.pingPongDelay.delayTime;
                    console.log('Ping Pong Delay Time updated:', update.value);
                    break;
                case 'pingPongDelayFeedback':
                    this.synthState.effects.pingPongDelay.feedback = update.value;
                    this.pingPongDelay.feedback.value = this.synthState.effects.pingPongDelay.feedback;
                    console.log('Ping Pong Delay Feedback updated:', update.value);
                    break;
                case 'pingPongDelayWet':
                    this.synthState.effects.pingPongDelay.wet = update.value;
                    this.pingPongDelay.wet.value = this.synthState.effects.pingPongDelay.wet;
                    console.log('Ping Pong Delay Wet updated:', update.value);
                    break;
            }
        }
    },
    created() {

        /* ----- CREATE and INITIALIZE AUDIO NODES ----- */

        // Sources
        this.osc1 = new this.$tone.Oscillator({
            'type': this.synthState.sources.osc1.type,
            'volume': this.synthState.sources.osc1.volume
        });
        this.osc2 = new this.$tone.Oscillator({
            'type': this.synthState.sources.osc2.type,
            'volume': this.synthState.sources.osc2.volume
        });
        this.osc3 = new this.$tone.Oscillator({
            'type': this.synthState.sources.osc3.type,
            'volume': this.synthState.sources.osc3.volume
        });
        this.noise = new this.$tone.Noise({
            'type': this.synthState.sources.noise.type,
            'volume': this.synthState.sources.noise.volume
        });

        // Filters
        this.lpFilter = new this.$tone.BiquadFilter({
            'type': 'lowpass',
            'frequency': this.synthState.filters.lowPass.frequency,
            'Q': this.synthState.filters.lowPass.quality,
            'detune': this.synthState.filters.lowPass.detune
        });
        this.hpFilter = new this.$tone.BiquadFilter({
            'type': 'highpass',
            'frequency': this.synthState.filters.highPass.frequency,
            'Q': this.synthState.filters.highPass.quality,
            'detune': this.synthState.filters.highPass.detune
        });
        this.peakingFilter = new this.$tone.BiquadFilter({
            'type': 'peaking',
            'gain': this.synthState.filters.peaking.gain,
            'frequency': this.synthState.filters.lowPass.frequency,
            'Q': this.synthState.filters.lowPass.quality,
            'detune': this.synthState.filters.lowPass.detune
        });
        this.notchFilter = new this.$tone.BiquadFilter({
            'frequency': this.synthState.filters.notch.frequency,
            'Q': this.synthState.filters.notch.quality,
            'detune': this.synthState.filters.notch.detune
        });

        // Effects
        this.chorus = new this.$tone.Chorus({
            'depth': this.synthState.effects.chorus.depth,
            'delayTime': this.synthState.effects.chorus.delayTime,
            'frequency': this.synthState.effects.chorus.frequency,
            'feedback': this.synthState.effects.chorus.feedback,
            'wet': this.synthState.effects.chorus.wet
        });
        this.phaser = new this.$tone.Phaser({
            'baseFrequency': this.synthState.effects.phaser.baseFrequency,
            'frequency': this.synthState.effects.phaser.frequency,
            'wet': this.synthState.effects.phaser.wet
        });
        this.reverb = new this.$tone.Reverb({
            'decay': this.synthState.effects.reverb.decay,
            'preDelay': this.synthState.effects.reverb.preDelay,
            'wet': this.synthState.effects.reverb.wet
        });
        this.pingPongDelay = new this.$tone.PingPongDelay({
            'delayTime': this.synthState.effects.pingPongDelay.delayTime,
            'feedback': this.synthState.effects.pingPongDelay.feedback,
            'wet': this.synthState.effects.pingPongDelay.wet
        });

        // Amplitude Envelope
        this.ampEnv = new this.$tone.AmplitudeEnvelope({
            'attack': this.synthState.amplitudeEnvelope.attack,
            'decay': this.synthState.amplitudeEnvelope.decay,
            'sustain': this.synthState.amplitudeEnvelope.sustain,
            'release': this.synthState.amplitudeEnvelope.release
        });

        // LFO
        this.lfo = new this.$tone.Tremolo({
            'frequency': this.synthState.lfo.frequency,
            'type': 'sine',
            'depth': this.synthState.lfo.depth,
            'spread': 0
        });

        // Master
        this.masterGain = new this.$tone.Volume({
            'volume': this.synthState.master.gain
        });
        this.panner = new this.$tone.Panner({
            'pan': this.synthState.master.pan
        });

        // Destination (prevent from clipping at the output)
        this.$tone.Destination.volume.value = -9;

        /* CONNECTION - SIGNAL FLOW */

        this.osc1.connect(this.lpFilter);
        this.osc2.connect(this.lpFilter);
        this.osc3.connect(this.lpFilter);
        this.noise.connect(this.lpFilter);

        this.lpFilter.connect(this.hpFilter);
        this.hpFilter.connect(this.peakingFilter);
        this.peakingFilter.connect(this.notchFilter);
        this.notchFilter.connect(this.ampEnv);
        
        this.ampEnv.connect(this.chorus);

        this.chorus.connect(this.phaser);
        this.phaser.connect(this.reverb);
        this.reverb.connect(this.pingPongDelay);
        this.pingPongDelay.connect(this.panner);

        this.panner.connect(this.masterGain);
        this.masterGain.connect(this.lfo);

        this.lfo.toDestination();

        /* ----- Manage MIDI Connection ----- */

        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess().then(success, failure);
        }
        
        function success(midiAccess) {
            console.log(midiAccess);
            midiAccess.onstatechange = updateDevices;

            const inputs = midiAccess.inputs;
            console.log(inputs);

            inputs.forEach((input) => {
                console.log(input);
                input.onmidimessage = handleInput;
            })
        }

        function updateDevices(event) {
            console.log(event);
            console.log(`Name: ${event.port.name}, Brand: ${event.port.manufacturer}, State: ${event.port.state}, Type: ${event.port.type}`);

            const midiAccess = event.currentTarget;
            console.log(event.currentTarget.inputs);

            const inputs = midiAccess.inputs;
            console.log(inputs);

            inputs.forEach((input) => {
                console.log(input);
                input.onmidimessage = handleInput;
            })
        }

        function handleInput(event) {
            const note = (event.data[1] > 108) ? keyRange[108] : (event.data[1] < 21) ? keyRange[21] : keyRange[event.data[1]];
            const key = document.getElementById(note);
    
            if (event.data[0] === 144) {
                currentNote = note;
                key.dispatchEvent(new Event('mousedown'));
                if (note.includes('#')) {
                    key.classList.add('active-black');
                } else {
                    key.classList.add('active-white');
                }
            } else if (currentNote === note) {
                key.dispatchEvent(new Event('mouseup'));
                if (note.includes('#')) {
                    key.classList.remove('active-black');
                } else {
                    key.classList.remove('active-white');
                }
            } else {
                if (note.includes('#')) {
                    key.classList.remove('active-black');
                } else {
                    key.classList.remove('active-white');
                }
            }
        }

        function failure() {
            console.log('Could not connect MIDI');
        }
    }
}
