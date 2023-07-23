import RoundSlider from 'vue-three-round-slider'

export default {
    name: 'SourcesControls',
    components: {
        RoundSlider
    },
    props: {
        synthState: Object
    },
    data() {
        return {
            roundSlider: {
                min: -60,
                max: 6,
                step: 0.01,
                radius: 40,
                width: 8,
                startAngle: 315,
                endAngle: 225,
                lineCap: 'round',
                startValue: -60,
                showTooltip: false,
                rangeColor: '#f7884f'
            },
            oscTypes: ['sine', 'triangle', 'square', 'sawtooth'],
            noiseTypes: ['white', 'pink'],
            osc1Type: this.synthState.sources.osc1.type,
            osc1Volume: this.synthState.sources.osc1.volume,
            osc2Type: this.synthState.sources.osc2.type,
            osc2Volume: this.synthState.sources.osc2.volume,
            osc3Type: this.synthState.sources.osc3.type,
            osc3Volume: this.synthState.sources.osc3.volume,
            noiseType: this.synthState.sources.noise.type,
            noiseVolume: this.synthState.sources.noise.volume
        }
    },
    watch: {
        osc1Type() {
            console.log('Osc1 Type chnaged:', this.osc1Type);
            this.$emit("stateChange", {name: 'osc1Type', value: this.osc1Type});
        },
        osc1Volume() {
            console.log('Osc1 Volume changed:', this.osc1Volume);
            this.$emit("stateChange", {name: 'osc1Volume', value: this.osc1Volume});
        },
        osc2Type() {
            console.log('Osc2 Type changed:', this.osc2Type);
            this.$emit("stateChange", {name: 'osc2Type', value: this.osc2Type});
        },
        osc2Volume() {
            console.log('Osc2 Volume changed:', this.osc2Volume);
            this.$emit("stateChange", {name: 'osc2Volume', value: this.osc2Volume});
        },
        osc3Type() {
            console.log('Osc3 Type changed:', this.osc3Type);
            this.$emit("stateChange", {name: 'osc3Type', value: this.osc3Type});
        },
        osc3Volume() {
            console.log('Osc3 Volume changed:', this.osc3Volume);
            this.$emit("stateChange", {name: 'osc3Volume', value: this.osc3Volume});
        },
        noiseType() {
            console.log('Noise Type changed:', this.noiseType);
            this.$emit("stateChange", {name: 'noiseType', value: this.noiseType});
        },
        noiseVolume() {
            console.log('Noise Volume changed:', this.noiseVolume);
            this.$emit("stateChange", {name: 'noiseVolume', value: this.noiseVolume});
        }
    }
}
