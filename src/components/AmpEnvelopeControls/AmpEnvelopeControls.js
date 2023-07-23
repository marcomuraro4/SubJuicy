import RoundSlider from 'vue-three-round-slider'

export default {
    name: 'AmpEnvelopeControls',
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
            attack: this.synthState.amplitudeEnvelope.attack,
            decay: this.synthState.amplitudeEnvelope.decay,
            sustain: this.synthState.amplitudeEnvelope.sustain,
            release: this.synthState.amplitudeEnvelope.release
        }
    },
    watch: {
        attack() {
            console.log('Attack changed:', this.attack);
            this.$emit("stateChange", {name: 'ampEnvAttack', value: this.attack});
        },
        decay() {
            console.log('Decay changed:', this.decay);
            this.$emit("stateChange", {name: 'ampEnvDecay', value: this.decay});
        },
        sustain() {
            console.log('Sustain changed:', this.sustain);
            this.$emit("stateChange", {name: 'ampEnvSustain', value: this.sustain})
        },
        release() {
            console.log('Release changed:', this.release);
            this.$emit("stateChange", {name: 'ampEnvRelease', value: this.release});
        }
    }
}
