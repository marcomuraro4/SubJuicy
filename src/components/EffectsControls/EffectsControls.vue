<template>
    <div class="component-wrapper flex-container-col">
        <div class="title-container">
            <h2>Effects</h2>
        </div>
        <div class="flex-container-row controls-wrapper">
            <div v-if="chorusIsVisible" class="flex-container-col controls-wrapper">
                <div class="flex-container-row controls-wrapper controls-container">
                    <div class="flex-container-col controls-wrapper">
                        <h3>Depth</h3>
                        <div class="knob-wrapper flex-container-col">
                            <RoundSlider
                                v-model="chorusDepth"
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
                            <label>{{ chorusDepth }}</label>
                        </div>
                    </div>
                    <div class="flex-container-col controls-wrapper">
                        <h3>Delay Time</h3>
                        <div class="knob-wrapper flex-container-col">
                            <RoundSlider
                                v-model="chorusDelayTime"
                                min="2"
                                max="20"
                                :step="roundSlider.step"
                                :radius="roundSlider.radius"
                                :width="roundSlider.width"
                                :startAngle="roundSlider.startAngle"
                                :endAngle="roundSlider.endAngle"
                                :lineCap="roundSlider.lineCap"
                                startValue="2"
                                :showTooltip="roundSlider.showTooltip"
                                :rangeColor="roundSlider.rangeColor"
                            />
                            <label>{{ chorusDelayTime }}</label>
                            <label class="unit-of-measure">ms</label>
                        </div>
                    </div>
                    <div class="flex-container-col controls-wrapper">
                        <h3>Frequency</h3>
                        <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                                v-model="chorusFrequency"
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
                            <label>{{ chorusFrequency }}</label>
                            <label class="unit-of-measure">Hz</label>
                        </div>
                    </div>
                    <div class="flex-container-col controls-wrapper">
                        <h3>Feedback</h3>
                        <div class="knob-wrapper flex-container-col">
                            <RoundSlider
                                v-model="chorusFeedback"
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
                            <label>{{ chorusFeedback }}</label>
                        </div>
                    </div>
                    <div class="flex-container-col controls-wrapper">
                        <h3>Wet</h3>
                        <div class="knob-wrapper flex-container-col">
                            <RoundSlider
                                v-model="chorusWet"
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
                            <label>{{ chorusWet }}</label>
                        </div>
                    </div>
                </div>
                <button @click="renderPhaserPanel">
                    Chorus
                </button>                
            </div>
            <div v-else-if="phaserIsVisible" class="flex-container-col controls-wrapper">
                <div class="flex-container-row controls-wrapper controls-container">
                    <div class="flex-container-col controls-wrapper">
                        <h3>Base Frequency</h3>
                        <div class="knob-wrapper flex-container-col">
                            <RoundSlider
                                v-model="phaserBaseFrequency"
                                min="100"
                                max="5000"
                                :step="roundSlider.step"
                                :radius="roundSlider.radius"
                                :width="roundSlider.width"
                                :startAngle="roundSlider.startAngle"
                                :endAngle="roundSlider.endAngle"
                                :lineCap="roundSlider.lineCap"
                                startValue="100"
                                :showTooltip="roundSlider.showTooltip"
                                :rangeColor="roundSlider.rangeColor"
                            />
                            <label>{{ phaserBaseFrequency }}</label>
                            <label class="unit-of-measure">Hz</label>
                        </div>
                    </div>
                    <div class="flex-container-col controls-wrapper">
                        <h3>Frequency</h3>
                        <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                                v-model="phaserFrequency"
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
                            <label>{{ phaserFrequency }}</label>
                            <label class="unit-of-measure">Hz</label>
                        </div>
                    </div>
                    <div class="flex-container-col controls-wrapper">
                        <h3>Wet</h3>
                        <div class="knob-wrapper flex-container-col">
                            <RoundSlider
                                v-model="phaserWet"
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
                            <label>{{ phaserWet }}</label>
                        </div>
                    </div>
                </div>
                <button @click="renderReverbPanel">
                Phaser
                </button>
            </div>
            <div v-else-if="reverbIsVisible" class="flex-container-col controls-wrapper">
                <div class="flex-container-row controls-wrapper controls-container">
                    <div class="flex-container-col controls-wrapper">
                        <h3>Decay</h3>
                        <div class="knob-wrapper flex-container-col">
                            <RoundSlider
                                v-model="reverbDecay"
                                min="0.01"
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
                            <label>{{ reverbDecay }}</label>
                            <label class="unit-of-measure">s</label>
                        </div>
                    </div>
                    <div class="flex-container-col controls-wrapper">
                        <h3>Pre-Delay</h3>
                        <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                                v-model="reverbPreDelay"
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
                            <label>{{ reverbPreDelay }}</label>
                            <label class="unit-of-measure">s</label>
                        </div>
                    </div>
                    <div class="flex-container-col controls-wrapper">
                        <h3>Wet</h3>
                        <div class="knob-wrapper flex-container-col">
                            <RoundSlider
                                v-model="reverbWet"
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
                            <label>{{ reverbWet }}</label>
                        </div>
                    </div>
                </div>
                <button @click="renderPingPongDelayPanel">
                    Reverb
                </button>
            </div>
            <div v-else class="flex-container-col controls-wrapper">
                <div class="flex-container-row controls-wrapper controls-container">
                    <div class="flex-container-col controls-wrapper">
                        <h3>Delay Time</h3>
                        <div class="knob-wrapper flex-container-col">
                            <RoundSlider
                                v-model="pingPongDelayTime"
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
                            <label>{{ pingPongDelayTime }}</label>
                            <label class="unit-of-measure">s</label>
                        </div>
                    </div>
                    <div class="flex-container-col controls-wrapper">
                        <h3>Feedback</h3>
                        <div class="knob-wrapper flex-container-col">
                        <RoundSlider
                                v-model="pingPongDelayFeedback"
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
                            <label>{{ pingPongDelayFeedback }}</label>
                        </div>
                    </div>
                    <div class="flex-container-col controls-wrapper">
                        <h3>Wet</h3>
                        <div class="knob-wrapper flex-container-col">
                            <RoundSlider
                                v-model="pingPongDelayWet"
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
                            <label>{{ pingPongDelayWet }}</label>
                        </div>
                    </div>
                </div>
                <button @click="renderChorusPanel">
                    Ping Pong Delay
                </button>
            </div>
        </div>
    </div>
</template>

<script src="./EffectsControls.js"></script>

<style src="./EffectsControls.css" scoped></style>
