<template>
    <div class="component-wrapper flex-container-col">
        <div class="title-container">
            <h2>LFO</h2>
        </div>
        <div class="flex-container-row controls-wrapper">
            <div class="flex-container-col controls-wrapper">
                <h3>Frequency</h3>
                <div class="knob-wrapper flex-container-col">
                    <RoundSlider
                        v-model="frequency"
                        min="0.01"
                        max="10"
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
                    <label>{{ frequency }}</label>
                    <label class="unit-of-measure">Hz</label>
                </div>
            </div>
            <div class="flex-container-col controls-wrapper">
                <h3>Depth</h3>
                <div class="knob-wrapper flex-container-col">
                    <RoundSlider
                        v-model="depth"
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
                    <label>{{ depth }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./TremoloControls.js"></script>

<style src="./TremoloControls.css" scoped></style>
