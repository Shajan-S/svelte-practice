<script>
  import LightSwitch from "../components/LightSwitch.svelte";
  let state = "On"
  let state2 = "On"
  let switchState

  import {appState} from "../lib/appstate.store"

  appState.subscribe(val=>{
    console.log(val)
  })

  appState.subscribe(val=>{
    console.log(val,"From another subscriber")
    
  })

  appState.update(oldval=>{
    console.log(oldval)
    // if(oldval?.switch1 === undefined){
    //   return oldval
    // }
    if(oldval.switch1 === "On") {
      return {switch1:"Off"}
    }
    if(oldval.switch1 === "Off") {
      return {switch1:"On"}
    }
    return {switch1:"On"};
  })

</script>

<LightSwitch bind:switchState = {$appState.switch1}></LightSwitch>
<LightSwitch bind:switchState = {state2}></LightSwitch>

<input bind:value={$appState.switch1}>
<p>State is now {$appState.switch1}</p>
<p>State 2 is now {state2}</p>