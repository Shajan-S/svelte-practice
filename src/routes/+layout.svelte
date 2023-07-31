<script>
  import "../app.css";
  import {appState} from "../lib/appstate.store"
</script>

<div class="{$appState?.switch1 === "On" ? "bg-slate-300 text-slate-900": "bg-slate-900 text-slate-200" } transition-all transition-900">
  <div >
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
  <slot></slot>

</div>