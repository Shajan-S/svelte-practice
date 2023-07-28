<script>
  import LightSwitch from "../components/LightSwitch.svelte";
  let state = "On"
  let state2 = "On"
  let switchState
</script>

<LightSwitch bind:switchState = {state}></LightSwitch>
<LightSwitch bind:switchState = {state2}></LightSwitch>

<p>State is now {state}</p>
<p>State 2 is now {state2}</p>