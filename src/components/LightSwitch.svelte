<script>

  let leftColor = "bg-white text-slate-900"

  export let switchState = "On"

  const makeSwitch = ()=>{
    if(switchState === "On"){
      switchState= "Off"
      leftColor = "bg-slate-900 text-white float-right"
    }else if(switchState === "Off"){
      switchState= "On"
      leftColor = "bg-white text-slate-900 float-left"
    }
  }  

</script>

<div class=" rounded-3xl h-9 w-36 border-slate-500 m-5 p-2 cursor-pointer bg-green-600" on:click={makeSwitch}>

  <div class="w-1/2 {leftColor} text-center transition-all rounded-md" >{switchState}</div>
 
</div>

<style>
  .full-circle{
    border-radius: 50%;
  }
</style>