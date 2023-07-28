import { StaticPool } from 'node-worker-threads-pool';

const staticPool = new StaticPool({
  size: 10,
  task: (n) => n + 1
});

// while(true){
  setImmediate(()=>{
    console.log("Exectuting")
    staticPool.exec(1).then((result) => {
      console.log('result from thread pool:', result); // result will be 2.
    });
  })
// }
