import { workerData, parentPort, isMainThread, Worker } from 'worker_threads'

if (isMainThread) {
  console.log("main thread")
} else {
  parentPort.on('message', (msg) => {

    setTimeout(() => {
      console.log(msg)
      parentPort.postMessage(`Done processing ${msg.id}, ${msg.time}`)
    }, msg.time)
  })
}

