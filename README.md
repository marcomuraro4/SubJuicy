# SubJuicy

SubJuicy is a monophonic synthesizer based on subtractive synthesis featuring four different filters, effects, tremolo and other controls. The app was developed by means of the following libraries:
- [Vue.js](https://vuejs.org/)
- [Tone.js](https://tonejs.github.io/)

Moreover, [Web MIDI API](https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API) is employed to manage MIDI devices connection and handle MIDI messages.

<p align="center">
    <img width="1000" height="auto" alt="SubJuicy synthesizer interface" src="./assets/SubJuicySynthGUI.png">
</p>

## Synth Controls and Graphical User Interface

SubJuicy synthesizer provides the user with different controls sections. In the following, the corresponding parameters for each one of them are shown and explained.

**Sources Controls** </br>
The user can control three different oscillators and a noise source. Available parameters are:
- **Oscillators Gain**: for individually setting *volume* of each oscillator node
- **Oscillators Type**: four types of *waveshape* are available (sine, triangle, square, sawtooth) and selectable through a drop down menu
- **Noise Gain**: sets the *volume* of the noise source node
- **Noise Type**: two *types of noise* are selectable (white and pink)

<p align="center">
    <img width="400" height="auto" alt="Sources Controls GUI" src="./assets/SourcesControlsGUI.png">
</p>

**Filters Controls** </br>
Four types of filters can be controlled from the graphical user interface. Each filter is implemented as a Tone.js BiquadFilter node. Available filters are: **Low-Pass**, **High-Pass**, **Peaking**, and **Notch filter**. Controllable parameters are listed below:
- **Frequency**: sets the *cut-off frequency* of the filter
- **Q-Factor**: for setting the *quality factor*
- **Detune**: sets the *detune* parameter
- **Gain**: available only for *Peaking Filter*

<p align="center">
    <img width="400" height="auto" alt="Peaking Filter Controls" src="./assets/HPFilterControlsGUI.png">
</p>

The user can navigate through filters controls by clicking on the red button indicating the type of the filter that is currently displayed within the user interface. Every time the button is clicked, controls of the following filters are made visible and its type denomination is shown as well. Filters are rendered according to the order indicated above.

**Effects Controls** </br>
Effects controls are shown by clicking on the corresponding button which is located at the top-right of SubJuicy interface. Indeed, within the navigation bar of the synth GUI the user can find two buttons, responsible for Filters and Effects controls rendering. Available effects are listed in the following:

- **Chorus** audio node implements a stereo chorus effect consisting of a left and right delay with a LFO that is applied to the delayTime of each channel.
  - **Depth**: sets the *depth* of chorus effect.
  - **Delay Time**: for setting the *time delay* of the chorus (in milliseconds). Larger delays result in a more pronounced effect.
  - **Frequency**: sets the *frequency* of the LFO modulating the delay time
  - **Feedback**: controls the *amount of feedback* from the output back into the input of the effect node
  - **Wet**: manages *dry/wet balance* at the output of the audio node
 
- **Phaser** node works by changing the phase of different frequency components of an incoming signal.
  - **Base Frequency**: controls the *cut-off frequency* of the filter
  - **Frequency**: sets the *frequency* of the effect
  - **Wet**: for setting *dry/wet balance* at the output of the audio node
 
- **Reverb** audio node implements a simple convolution created with decaying noise. Controllable parameters are:
  - **Decay**: sets the *reverb duration*
  - **Pre-Delay**: controls the *amount of time the reverb is fully ramped in*
  - **Wet**: manages *dry/wet balance*

- **Ping Pong Delay** node implements a feedback delay effect where the echo is heard first in one channel and next in the opposite channel.
  - **Delay Time**: controls *delay time*
  - **Feedback**: sets *feedback* of the delay
  - **Wet**: sets *dry/wet balance* at the output of the audio node
 
<p align="center">
    <img width="400" height="auto" alt="Chorus Controls" src="./assets/ChorusControlsGUI.png">
</p>

**Amplitude Envelope Controls** </br>
Amplitude Envelope is implemented as an *ADSR envelope*. AmplitudeEnvelope node of Tone.js basically is a Tone.Envelope object connected to a Gain node. Unlike Tone.Envelope which provides the envelope's value as the output of the node itself, AmplitudeEnvelope accepts an audio signal as the input and applies the ADSR envelope to its amplitude.

- **Attack**: when triggerAttack function is invoked, the *attack time* is the amount of time in seconds it takes for the ADSR envelope to reach its maximum value
- **Decay**: after the attack stage of the envelope, the value of the amplitude will fall over the *decay time* duration to its sustain value
- **Sustain**: the value which the *amplitude* envelope rests at *after triggerAttack function is called* and *before triggerRelease is invoked*
- **Release**: after triggerRelease function is called, the envelope's value will fall to its minimum value over the *release time* duration

<p align="center">
    <img width="400" height="auto" alt="ADSR Amplitude Envelope Controls" src="./assets/AmpEnvControlsGUI.png">
</p>

**LFO Controls** </br>
LFO block is implemented as a Tone.js Tremolo node. The user can control the parameters below:

- **Frequency**: sets the *frequency* of the tremolo effect
- **Depth**: controls the *depth* of the effect

<p align="center">
    <img width="250" height="auto" alt="LFO Controls" src="./assets/TremoloControlsGUI.png">
</p>

**Master Controls** </br>
Master controls section enables the user to set:

- **Master Gain**: sets the *master gain* of the synth sound that has been shaped
- **Pan**: implemented by means of Tone.js Panner node which is an *equal power Left/Right channel*

<p align="center">
    <img width="250" height="auto" alt="Master Controls" src="./assets/MasterControlsGUI.png">
</p>

## App Architecture and State Update
The app provides different types of controls enabling the user to find the desired parameters configuration and shape the sound as wanted. All the functional macro-sections integrated in the GUI of the application were implemented as **Vue components**. The state of the synth is managed and updated within the **SynthDevice** component, which handles *sound generation* and *signal processing* by means of Tone.js library. Each controls component allows the user to interact with the application and update the parameters related to the corresponding signal processing functional block.  
**Vue watchers** are employed in order to emit *stateChange* custom event that is dispatched directly to the parent SynthDevice whenever child component internal data are modified from the GUI. In the parent, every time this event is received, the corresponding event handler automatically triggers **updateState function** which is defined in the methods object and responsible for *state update* based on the parameter name received from the child.

<p align="center">
    <img width="1000" height="auto" alt="Vue App Architecture" src="./assets/SubJuicyAppArchitecture.png">
</p>

The diagram above shows how the architecture of the application is organized into nested Vue components and how parameters are passed from controls components to the parent SynthDevice where the overall synth state is updated. An external Vue component, [**vue-three-round-slider**](https://github.com/Artem9989/vue-three-round-slider.git) module (imported and used in the app as **RoundSlider** component), was employed to integrate *circular sliders* within the graphical user interface for a more pleasant and comfortable user interaction with the software.

## Signal Flow

Signal processing is implemented through Tone.js audio nodes that are connected together to build the overall signal flow architecture, which is illustrated in the graph below. Just for simplicity, only the parameters related to the sources block are shown in the diagram.

<p align="center">
    <img width="800" height="auto" alt="Signal Flow Diagram" src="./assets/SignalProcessingFlow.png">
</p>

**You're now ready to jump into SubJuicy World ...and make some wonderful music!**
