import RoundSlider from 'vue-three-round-slider'

export default {
    name: 'TremoloControls',
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
                showTooltip: false,
                rangeColor: '#f7884f'
            },
            frequency: this.synthState.lfo.frequency,
            depth: this.synthState.lfo.depth
        }
    },
    watch: {
        frequency() {
            console.log('LFO Frequency changed:', this.frequency);
            this.$emit("stateChange", {name: 'LFOFreq', value: this.frequency});
        },
        depth() {
            console.log('LFO Amount changed:', this.amount);
            this.$emit("stateChange", {name: 'LFODepth', value: this.depth});
        }
    }
}
