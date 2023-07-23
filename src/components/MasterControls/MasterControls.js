import RoundSlider from 'vue-three-round-slider'

export default {
    name: 'MasterControls',
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
            masterGain: this.synthState.master.gain,
            pan: this.synthState.master.pan
        }
    },
    watch: {
        masterGain() {
            console.log('Master Gain changed:', this.masterGain);
            this.$emit("stateChange", {name: 'masterGain', value: this.masterGain});
        },
        pan() {
            console.log('Pan changed:', this.pan);
            this.$emit("stateChange", {name: 'pan', value: this.pan});
        }
    }
}
