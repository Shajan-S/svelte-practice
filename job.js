import {Worker} from 'worker_threads'
// @ts-ignore
let jobs = []
let totalTime = 0;

const NUM_JOBS = 500
const WORKERS = 10;

const workerPools = (onComplete)=>{
  let tWorkers = []
  let currentWorker = 0;

  for(let i =0; i< WORKERS; i++){
    const worker = new Worker("./worker.js")

    console.log(worker.threadId)
    worker.on('message',msg=>{
      onComplete({msg:msg,worker:worker.threadId})
    })
    worker.on('error',error=>{
      throw new Error(error)
    })
    worker.on("exit",(code)=>{
      // if(code !=0){
      //   throw new Error(`Worker exited with none zero ${code}`)
      // }
    })

    tWorkers.push(worker)
  }
  return {
    runJob: (jobData)=>{
      currentWorker++;
      if(currentWorker >= WORKERS){
        currentWorker = 0
      }

      tWorkers[currentWorker].postMessage({...jobData,id:tWorkers[currentWorker].threadId })
    },
    exitThreads:async ()=>{
      let exitPromises=[]
      for(const worker of tWorkers){
        exitPromises.push(worker.terminate())
      }
      await Promise.all(exitPromises)
    }
  }
}

async function main(){
  let processed =0

  const onComplete = (response)=>{
    console.log(response)
    processed++
    
    if(processed+1 == NUM_JOBS){
      pool.exitThreads();
      console.timeEnd("Processing")
    }
  }

  console.time("Creating thread pool")
  const pool = workerPools(onComplete)
  console.timeEnd("Creating thread pool")

  console.time("Processing")

  for(let i =0 ; i < NUM_JOBS; i++){
    // console.log(i)
    pool.runJob({pos:i, time:6000})
  }
}


main()
