<template>
    <div class="component-wrapper flex-container-col">
        <div class="title-container">
            <h2>ADSR Envelope</h2>
        </div>
        <div class="flex-container-row controls-wrapper">
            <div class="flex-container-col controls-wrapper">
                <h3>Attack</h3>
                <div class="knob-wrapper flex-container-col">
                    <RoundSlider
                        v-model="attack"
                        min="0.01"
                        max="5"
                        :step="roundSlider.step"
                        :radius="roundSlider.radius"
                        :width="roundSlider.width"
                        :startAngle="roundSlider.startAngle"
                        :endAngle="roundSlider.endAngle"
                        :lineCap="roundSlider.lineCap"
                        startValue="0.01"
                        :showTooltip="roundSlider.showTooltip"
                        :rangeColor="roundSlider.rangeColor"
                    />
                    <label>{{ attack }}</label>
                    <label class="unit-of-measure">s</label>
                </div>
            </div>
            <div class="flex-container-col controls-wrapper">
                <h3>Decay</h3>
                <div class="knob-wrapper flex-container-col">
                    <RoundSlider
                        v-model="decay"
                        min="0"
                        max="5"
                        :step="roundSlider.step"
                        :radius="roundSlider.radius"
                        :width="roundSlider.width"
                        :startAngle="roundSlider.startAngle"
                        :endAngle="roundSlider.endAngle"
                        :lineCap="roundSlider.lineCap"
                        startValue="0"
                        :showTooltip="roundSlider.showTooltip"
                        :rangeColor="roundSlider.rangeColor"
                    />
                    <label>{{ decay }}</label>
                    <label class="unit-of-measure">s</label>
                </div>
            </div>
            <div class="flex-container-col controls-wrapper">
                <h3>Sustain</h3>
                <div class="knob-wrapper flex-container-col">
                    <RoundSlider
                        v-model="sustain"
                        min="0"
                        max="1"
                        :step="roundSlider.step"
                        :radius="roundSlider.radius"
                        :width="roundSlider.width"
                        :startAngle="roundSlider.startAngle"
                        :endAngle="roundSlider.endAngle"
                        :lineCap="roundSlider.lineCap"
                        startValue="0"
                        :showTooltip="roundSlider.showTooltip"
                        :rangeColor="roundSlider.rangeColor"
                    />
                    <label>{{ sustain }}</label>
                </div>
            </div>
            <div class="flex-container-col controls-wrapper">
                <h3>Release</h3>
                <div class="knob-wrapper flex-container-col">
                    <RoundSlider
                        v-model="release"
                        min="0.01"
                        max="5"
                        :step="roundSlider.step"
                        :radius="roundSlider.radius"
                        :width="roundSlider.width"
                        :startAngle="roundSlider.startAngle"
                        :endAngle="roundSlider.endAngle"
                        :lineCap="roundSlider.lineCap"
                        startValue="0.01"
                        :showTooltip="roundSlider.showTooltip"
                        :rangeColor="roundSlider.rangeColor"
                    />
                    <label>{{ release }}</label>
                    <label class="unit-of-measure">s</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./AmpEnvelopeControls.js"></script>

<style src="./AmpEnvelopeControls.css" scoped></style>
