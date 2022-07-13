const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}];
  
  const getRichWorkers = (workers) => {
    let richWorkers = [];
    for (i=0; i<workers.length; i++) {
    if (workers[i].salary>1000) {
       //richWorkers[i] = workers[i].name;
       richWorkers.push(workers[i].name)
    }
  }
  return richWorkers;
}

console.log (getRichWorkers(workers));