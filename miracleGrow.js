const Tree= require("./tree.js");
const queue= require("./queue.js");
const random= require("./random.js");

const miracleGrow= function(size){
  forestSize= size;
  let plantingSeeds= new Queue();
  for(let x=0; x<forestSize; x++){
    plantingSeeds.enqueue(random.discreteRangeIn(1,100));
  }
  let forest= new Tree(0);
  for(x=0; x<plantingSeeds.length; x++){
    forest.add(plantingSeeds.dequeue());
  }
    return forest;
}
