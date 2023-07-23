<template>
    <div class="component-wrapper flex-container-col">
        <div class="title-container">
            <h2>Filters</h2>
        </div>
        <div v-if="lpfIsVisible" class="flex-container-col controls-wrapper">
            <div class="flex-container-row controls-wrapper controls-container">
                <div class="flex-container-col controls-wrapper">
                    <h3>Frequency</h3>
                    <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                            v-model="lpfFrequency"
                            min="100"
                            max="5000"
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
                        <label>{{ lpfFrequency }}</label>
                        <label class="unit-of-measure">Hz</label>
                    </div>
                </div>
                <div class="flex-container-col controls-wrapper">
                    <h3>Q-Factor</h3>
                    <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                            v-model="lpfQuality"
                            min="0.01"
                            max="12"
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
                        <label>{{ lpfQuality }}</label>
                    </div>
                </div>
                <div class="flex-container-col controls-wrapper">
                    <h3>Detune</h3>
                    <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                            v-model="lpfDetune"
                            min="-300"
                            max="300"
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
                        <label>{{ lpfDetune }}</label>
                        <label class="unit-of-measure">Cents</label>
                    </div>
                </div>
            </div>
            <button @click="renderHPFPanel">
                Low-Pass Filter
            </button>
        </div>
        <div v-else-if="hpfIsVisible" class="flex-container-col controls-wrapper">
            <div class="flex-container-row controls-wrapper controls-container">
                <div class="flex-container-col controls-wrapper">
                    <h3>Frequency</h3>
                    <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                            v-model="hpfFrequency"
                            min="0"
                            max="4000"
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
                        <label>{{ hpfFrequency }}</label>
                        <label class="unit-of-measure">Hz</label>
                    </div>
                </div>
                <div class="flex-container-col controls-wrapper">
                    <h3>Q-Factor</h3>
                    <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                            v-model="hpfQuality"
                            min="0.01"
                            max="12"
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
                        <label>{{ hpfQuality }}</label>
                    </div>
                </div>
                <div class="flex-container-col controls-wrapper">
                    <h3>Detune</h3>
                    <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                            v-model="hpfDetune"
                            min="-300"
                            max="300"
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
                        <label>{{ hpfDetune }}</label>
                        <label class="unit-of-measure">Cents</label>
                    </div>
                </div>
            </div>
            <button @click="renderPFPanel">
                High-Pass Filter
            </button>
        </div>
        <div v-else-if="pfIsVisible" class="flex-container-col controls-wrapper">
            <div class="flex-container-row controls-wrapper controls-container">
                <div class="flex-container-col controls-wrapper">
                    <h3>Gain</h3>
                    <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                            v-model="pfGain"
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
                        <label>{{ pfGain }}</label>
                        <label class="unit-of-measure">dB</label>
                    </div>
                </div>
                <div class="flex-container-col controls-wrapper">
                    <h3>Frequency</h3>
                    <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                            v-model="pfFrequency"
                            min="20"
                            max="5000"
                            :step="roundSlider.step"
                            :radius="roundSlider.radius"
                            :width="roundSlider.width"
                            :startAngle="roundSlider.startAngle"
                            :endAngle="roundSlider.endAngle"
                            :lineCap="roundSlider.lineCap"
                            startValue="20"
                            :showTooltip="roundSlider.showTooltip"
                            :rangeColor="roundSlider.rangeColor"
                        />
                        <label>{{ pfFrequency }}</label>
                        <label class="unit-of-measure">Hz</label>
                    </div>
                </div>
                <div class="flex-container-col controls-wrapper">
                    <h3>Q-Factor</h3>
                    <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                            v-model="pfQuality"
                            min="0.01"
                            max="12"
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
                        <label>{{ pfQuality }}</label>
                    </div>
                </div>
                <div class="flex-container-col controls-wrapper">
                    <h3>Detune</h3>
                    <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                            v-model="pfDetune"
                            min="-300"
                            max="300"
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
                        <label>{{ pfDetune }}</label>
                        <label class="unit-of-measure">Cents</label>
                    </div>
                </div>
            </div>
            <button @click="renderNotchFPanel">
                Peaking Filter
            </button>
        </div>
        <div v-else class="flex-container-col controls-wrapper">
            <div class="flex-container-row controls-wrapper controls-container">
                <div class="flex-container-col controls-wrapper">
                    <h3>Frequency</h3>
                    <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                            v-model="notchFFrequency"
                            min="100"
                            max="1000"
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
                        <label>{{ notchFFrequency }}</label>
                        <label class="unit-of-measure">Hz</label>
                    </div>
                </div>
                <div class="flex-container-col controls-wrapper">
                    <h3>Q-Factor</h3>
                    <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                            v-model="notchFQuality"
                            min="0.01"
                            max="12"
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
                        <label>{{ notchFQuality }}</label>
                    </div>
                </div>
                <div class="flex-container-col controls-wrapper">
                    <h3>Detune</h3>
                    <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                            v-model="notchFDetune"
                            min="-300"
                            max="300"
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
                        <label>{{ notchFDetune }}</label>
                        <label class="unit-of-measure">Cents</label>
                    </div>
                </div>
            </div>
            <button @click="renderLPFPanel">
                Notch Filter
            </button>
        </div>
    </div>
</template>

<script src="./FiltersControls.js"></script>

<style src="./FiltersControls.css" scoped></style>
