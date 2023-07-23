import RoundSlider from 'vue-three-round-slider'

export default {
    name: 'FiltersControls',
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
            lpfFrequency: this.synthState.filters.lowPass.frequency,
            lpfQuality: this.synthState.filters.lowPass.quality,
            lpfDetune: this.synthState.filters.lowPass.detune,
            hpfFrequency: this.synthState.filters.highPass.frequency,
            hpfQuality: this.synthState.filters.highPass.quality,
            hpfDetune: this.synthState.filters.highPass.detune,
            pfGain: this.synthState.filters.peaking.gain,
            pfFrequency: this.synthState.filters.peaking.frequency,
            pfQuality: this.synthState.filters.peaking.quality,
            pfDetune: this.synthState.filters.peaking.detune,
            notchFFrequency: this.synthState.filters.notch.frequency,
            notchFQuality: this.synthState.filters.notch.quality,
            notchFDetune: this.synthState.filters.notch.detune,
            lpfIsVisible: true,
            hpfIsVisible: false,
            pfIsVisible: false
        }
    },
    methods: {
        renderLPFPanel() {
            this.lpfIsVisible = true;
            this.hpfIsVisible = false;
            this.pfIsVisible = false;
            console.log('LPF controls visible');
        },
        renderHPFPanel() {
            this.lpfIsVisible = false;
            this.hpfIsVisible = true;
            this.pfIsVisible = false;
            console.log('HPF controls visible');
        },
        renderPFPanel() {
            this.lpfIsVisible = false;
            this.hpfIsVisible = false;
            this.pfIsVisible = true;
            console.log('PF controls visible');
        },
        renderNotchFPanel() {
            this.lpfIsVisible = false;
            this.hpfIsVisible = false;
            this.pfIsVisible = false;
            console.log('NotchF controls visible');
        }
    },
    watch: {
        lpfFrequency() {
            console.log('LPF Frequency changed:', this.lpfFrequency);
            this.$emit("stateChange", {name: 'LPFFrequency', value: this.lpfFrequency});
        },
        lpfQuality() {
            console.log('LPF Q-Factor changed:', this.lpfQuality);
            this.$emit("stateChange", {name: 'LPFQuality', value: this.lpfQuality});
        },
        lpfDetune() {
            console.log('LPF Detune changed:', this.lpfDetune);
            this.$emit("stateChange", {name: 'LPFDetune', value: this.lpfDetune});
        },
        hpfFrequency() {
            console.log('HPF Frequency changed:', this.hpfFrequency);
            this.$emit("stateChange", {name: 'HPFFrequency', value: this.hpfFrequency});
        },
        hpfQuality() {
            console.log('HPF Q-Factor changed:', this.hpfQuality);
            this.$emit("stateChange", {name: 'HPFQuality', value: this.hpfQuality});
        },
        hpfDetune() {
            console.log('HPF Detune changed:', this.hpfDetune);
            this.$emit("stateChange", {name: 'HPFDetune', value: this.hpfDetune});
        },
        pfGain() {
            console.log('PF Gain changed:', this.pfGain);
            this.$emit("stateChange", {name: 'PFGain', value: this.pfGain});
        },
        pfFrequency() {
            console.log('PF Frequency changed:', this.pfFrequency);
            this.$emit("stateChange", {name: 'PFFrequency', value: this.pfFrequency});
        },
        pfQuality() {
            console.log('PF Q-Factor changed:', this.pfQuality);
            this.$emit("stateChange", {name: 'PFQuality', value: this.pfQuality});
        },
        pfDetune() {
            console.log('PF Detune changed:', this.pfDetune);
            this.$emit("stateChange", {name: 'PFDetune', value: this.pfDetune});
        },
        notchFFrequency() {
            console.log('NotchF Frequency changed:', this.notchFFrequency);
            this.$emit("stateChange", {name: 'NotchFFrequency', value: this.notchFFrequency});
        },
        notchFQuality() {
            console.log('NotchF Q-Factor changed:', this.notchFQuality);
            this.$emit("stateChange", {name: 'NotchFQuality', value: this.notchFQuality});
        },
        notchFDetune() {
            console.log('NotchF Detune changed:', this.notchFDetune);
            this.$emit("stateChange", {name: 'NotchFDetune', value: this.notchFDetune});
        }
    }
}
