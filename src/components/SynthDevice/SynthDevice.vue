<template>
    <div id="synth" class="flex-container-row">
        <div class="sidebar sidebar-left"></div>
        <div id="synth-panel" class="flex-container-col">
            <div id="nav-panel" class="flex-container-row">
                <div class="flex-container-row">
                    <h1>{{ title }}</h1>
                    <div class="flex-container-col">
                        <img src="../../assets/img/musical-notes.png" alt="" class="musical-notes-img">
                        <img src="../../assets/img/cocktail.png" alt="" class="cocktail-img">
                    </div>
                </div>
                <div id="nav-controls">
                    <button v-for="control in controls"
                        :key="control.id + '-btn'"
                        :id="control.id + '-btn'"
                        @click="control.click"
                        class="nav-btn"> {{ control.text }}
                    </button>
                </div>
            </div>
            <div id="controls-panel" class="flex-container-col">
                <div class="controls-wrapper flex-container-row">
                    <div id="sources-controls">
                        <SourcesControls 
                        :synthState="synthState"
                        @stateChange="updateState"/>
                    </div>
                    <div v-if="filtersPanelIsVisible" id="filters-controls" class="controls-box">
                        <FiltersControls
                        :synthState="synthState"
                        @stateChange="updateState"/>
                    </div>
                    <div v-else id="fx-controls" class="controls-box">
                        <EffectsControls
                        :synthState="synthState"
                        @stateChange="updateState"/>
                    </div>
                </div>
                <div id="master-panel" class="flex-container-row">
                    <div id="master-controls">
                        <MasterControls
                        :synthState="synthState"
                        @stateChange="updateState"/>
                    </div>
                    <div id="adsr-controls">
                        <AmpEnvelopeControls
                        :synthState="synthState"
                        @stateChange="updateState"/>
                    </div>
                    <div id="lfo-controls">
                        <TremoloControls
                        :synthState="synthState"
                        @stateChange="updateState"/>
                    </div>
                </div>
            </div>
            <div class="bar"></div>
            <div id="keyboard-wrapper">
                <div v-for="key in keys"
                    :key="key.id"
                    :id="key.id"
                    :class="key.class"
                    @mousedown="playNote(key.id)"
                    @mouseup="stopNote(key.id)">
                </div>
            </div>
        </div>
        <div class="sidebar sidebar-right"></div>
    </div>
</template>

<script src="./SynthDevice.js"></script>

<style src="./SynthDevice.css" scoped></style>
