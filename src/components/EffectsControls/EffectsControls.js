import RoundSlider from 'vue-three-round-slider'

export default {
    name: 'EffectsControls',
    components: {
        RoundSlider
    },
    props: {
        synthState: Object
    },
    data() {
        return {
            roundSlider: {
                step: 0.01,
                radius: 40,
                width: 8,
                startAngle: 315,
                endAngle: 225,
                lineCap: 'round',
                startValue: 0,
                showTooltip: false,
                rangeColor: '#f7884f'
            },
            chorusDepth: this.synthState.effects.chorus.depth,
            chorusDelayTime: this.synthState.effects.chorus.delayTime,
            chorusFrequency: this.synthState.effects.chorus.frequency,
            chorusFeedback: this.synthState.effects.chorus.feedback,
            chorusWet: this.synthState.effects.chorus.wet,
            phaserBaseFrequency: this.synthState.effects.phaser.baseFrequency,
            phaserFrequency: this.synthState.effects.phaser.frequency,
            phaserWet: this.synthState.effects.phaser.wet,
            reverbDecay: this.synthState.effects.reverb.decay,
            reverbPreDelay: this.synthState.effects.reverb.preDelay,
            reverbWet: this.synthState.effects.reverb.wet,
            pingPongDelayTime: this.synthState.effects.pingPongDelay.delayTime,
            pingPongDelayFeedback: this.synthState.effects.pingPongDelay.feedback,
            pingPongDelayWet: this.synthState.effects.pingPongDelay.wet,
            chorusIsVisible: true,
            phaserIsVisible: false,
            reverbIsVisible: false
        }
    },
    methods: {
        renderChorusPanel() {
            this.chorusIsVisible = true;
            this.phaserIsVisible = false;
            this.reverbIsVisible = false;
            console.log('Chorus controls visible');
        },
        renderPhaserPanel() {
            this.phaserIsVisible = true;
            this.chorusIsVisible = false;
            this.reverbIsVisible = false;
            console.log('Phaser controls visible');
        },
        renderReverbPanel() {
            this.reverbIsVisible = true;
            this.chorusIsVisible = false;
            this.phaserIsVisible = false;
            console.log('Reverb controls visible');
        },
        renderPingPongDelayPanel() {
            this.chorusIsVisible = false;
            this.phaserIsVisible = false;
            this.reverbIsVisible = false;
            console.log('Ping Pong Delay controls visible');
        }
    },
    watch: {
        chorusDepth() {
            console.log('Chorus Depth changed:', this.chorusDepth);
            this.$emit("stateChange", ['chorusDepth', this.chorusDepth]);
        },
        chorusDelayTime() {
            console.log('Chorus Delay Time changed:', this.chorusDelayTime);
            this.$emit("stateChange", {name: 'chorusDelayTime', value: this.chorusDelayTime});
        },
        chorusFrequency() {
            console.log('Chorus Frequency changed:', this.chorusFrequency);
            this.$emit("stateChange", {name: 'chorusFreq', value: this.chorusFrequency});
        },
        chorusFeedback() {
            console.log('Chorus Feedback changed:', this.chorusFeedback);
            this.$emit("stateChange", {name: 'chorusFeedback', value: this.chorusFeedback});
        },
        chorusWet() {
            console.log('Chorus Wet changed:', this.chorusWet);
            this.$emit("stateChange", {name: 'chorusWet', value: this.chorusWet});
        },
        phaserBaseFrequency() {
            console.log('Phaser Base Frequency changed:', this.phaserBaseFrequency);
            this.$emit("stateChange", {name: 'phaserBaseFreq', value: this.phaserBaseFrequency});
        },
        phaserFrequency() {
            console.log('Phaser Frequency changed:', this.phaserFrequency);
            this.$emit("stateChange", {name: 'phaserFreq', value: this.phaserFrequency});
        },
        phaserWet() {
            console.log('Phaser Wet changed:', this.phaserWet);
            this.$emit("stateChange", {name: 'phaserWet', value: this.phaserWet});
        },
        reverbDecay() {
            console.log('Reverb Decay changed:', this.reverbDecay);
            this.$emit("stateChange", {name: 'reverbDecay', value: this.reverbDecay});
        },
        reverbPreDelay() {
            console.log('Reverb Pre-Delay changed:', this.reverbPreDelay);
            this.$emit("stateChange", {name: 'reverbPreDelay', value: this.reverbPreDelay});
        },
        reverbWet() {
            console.log('Reverb Wet changed:', this.reverbWet);
            this.$emit("stateChange", {name: 'reverbWet', value: this.reverbWet});
        },
        pingPongDelayTime() {
            console.log('Ping Pong Delay Time changed:', this.pingPongDelayTime);
            this.$emit("stateChange", {name: 'pingPongDelayTime', value: this.pingPongDelayTime});
        },
        pingPongDelayFeedback() {
            console.log('Ping Pong Delay Feedback changed:', this.pingPongDelayFeedback);
            this.$emit("stateChange", {name: 'pingPongDelayFeedback', value: this.pingPongDelayFeedback});
        },
        pingPongDelayMaxDelay() {
            console.log('Ping Pong Delay Max Delay changed:', this.pingPongDelayMaxDelay);
            this.$emit("stateChange", {name: 'pingPongDelayMaxDelay', value: this.pingPongDelayMaxDelay});
        },
        pingPongDelayWet() {
            console.log('Ping Pong Delay Wet changed:', this.pingPongDelayWet);
            this.$emit("stateChange", {name: 'pingPongDelayWet', value: this.pingPongDelayWet});
        }
    }
}
