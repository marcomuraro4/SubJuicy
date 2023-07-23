<template>
    <div class="component-wrapper flex-container-col">
        <div class="title-container">
            <h2>Master</h2>
        </div>
        <div class="flex-container-row controls-wrapper">
            <div class="flex-container-col controls-wrapper">
                <h3>Gain</h3>
                <div class="knob-wrapper flex-container-col">
                    <RoundSlider
                        v-model="masterGain"
                        min="-60"
                        max="6"
                        :step="roundSlider.step"
                        :radius="roundSlider.radius"
                        :width="roundSlider.width"
                        :startAngle="roundSlider.startAngle"
                        :endAngle="roundSlider.endAngle"
                        :lineCap="roundSlider.lineCap"
                        startValue="-60"
                        :showTooltip="roundSlider.showTooltip"
                        :rangeColor="roundSlider.rangeColor"
                    />
                    <label>{{ masterGain }}</label>
                    <label class="unit-of-measure">dB</label>
                </div>
            </div>
            <div class="flex-container-col controls-wrapper">
                <h3>Pan</h3>
                <div class="knob-wrapper flex-container-col">
                    <RoundSlider
                        v-model="pan"
                        min="-1"
                        max="1"
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
                    <label>{{ pan }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./MasterControls.js"></script>

<style src="./MasterControls.css" scoped></style>
