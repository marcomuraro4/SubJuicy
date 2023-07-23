<template>
    <div class="component-wrapper flex-container-col">
        <div class="title-container">
            <h2>Sources</h2>
        </div>
        <div class="flex-container-row controls-wrapper">
            <div class="flex-container-col controls-wrapper">
                <h3>Osc 1</h3>
                <div class="knob-wrapper flex-container-col">
                    <RoundSlider
                        v-model="osc1Volume"
                        :min="roundSlider.min"
                        :max="roundSlider.max"
                        :step="roundSlider.step"
                        :radius="roundSlider.radius"
                        :width="roundSlider.width"
                        :startAngle="roundSlider.startAngle"
                        :endAngle="roundSlider.endAngle"
                        :lineCap="roundSlider.lineCap"
                        :startValue="roundSlider.startValue"
                        :showTooltip="roundSlider.showTooltip"
                        :rangeColor="roundSlider.rangeColor"
                    />
                    <label>{{ osc1Volume }}</label>
                    <label class="unit-of-measure">dB</label>
                </div>
                <select v-model="osc1Type">
                    <option v-for="oscType in oscTypes" 
                        :key="oscType"
                        :value="oscType"> {{ oscType }} </option>
                </select>
            </div>
            <div class="flex-container-col controls-wrapper">
                <h3>Osc 2</h3>
                <div class="knob-wrapper flex-container-col">
                    <RoundSlider
                        v-model="osc2Volume"
                        :min="roundSlider.min"
                        :max="roundSlider.max"
                        :step="roundSlider.step"
                        :radius="roundSlider.radius"
                        :width="roundSlider.width"
                        :startAngle="roundSlider.startAngle"
                        :endAngle="roundSlider.endAngle"
                        :lineCap="roundSlider.lineCap"
                        :startValue="roundSlider.startValue"
                        :showTooltip="roundSlider.showTooltip"
                        :rangeColor="roundSlider.rangeColor"
                    />
                    <label>{{ osc2Volume }}</label>
                    <label class="unit-of-measure">dB</label>
                </div>
                <select v-model="osc2Type">
                    <option v-for="oscType in oscTypes" 
                        :key="oscType"
                        :value="oscType"> {{ oscType }} </option>
                </select>
            </div>
            <div class="flex-container-col controls-wrapper">
                <h3>Osc 3</h3>
                <div class="knob-wrapper flex-container-col">
                    <RoundSlider
                        v-model="osc3Volume"
                        :min="roundSlider.min"
                        :max="roundSlider.max"
                        :step="roundSlider.step"
                        :radius="roundSlider.radius"
                        :width="roundSlider.width"
                        :startAngle="roundSlider.startAngle"
                        :endAngle="roundSlider.endAngle"
                        :lineCap="roundSlider.lineCap"
                        :startValue="roundSlider.startValue"
                        :showTooltip="roundSlider.showTooltip"
                        :rangeColor="roundSlider.rangeColor"
                    />
                    <label>{{ osc3Volume }}</label>
                    <label class="unit-of-measure">dB</label>
                </div>
                <select v-model="osc3Type">
                    <option v-for="oscType in oscTypes" 
                        :key="oscType"
                        :value="oscType"> {{ oscType }} </option>
                </select>
            </div>
            <div class="flex-container-col controls-wrapper">
                <h3>Noise</h3>
                <div class="knob-wrapper flex-container-col">
                    <RoundSlider
                        v-model="noiseVolume"
                        :min="roundSlider.min"
                        :max="roundSlider.max"
                        :step="roundSlider.step"
                        :radius="roundSlider.radius"
                        :width="roundSlider.width"
                        :startAngle="roundSlider.startAngle"
                        :endAngle="roundSlider.endAngle"
                        :lineCap="roundSlider.lineCap"
                        :startValue="roundSlider.startValue"
                        :showTooltip="roundSlider.showTooltip"
                        :rangeColor="roundSlider.rangeColor"
                    />
                    <label>{{ noiseVolume }}</label>
                    <label class="unit-of-measure">dB</label>
                </div>
                <select v-model="noiseType">
                    <option v-for="noiseType in noiseTypes" 
                        :key="noiseType"
                        :value="noiseType"> {{ noiseType }} </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script src="./SourcesControls.js"></script>

<style src="./SourcesControls.css" scoped></style>
