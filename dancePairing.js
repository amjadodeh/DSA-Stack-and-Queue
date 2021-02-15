const Queue = require('./queue');

// 9. Square dance pairing
class dancePairing {
  constructor() {
    this.maleQ = new Queue();
    this.femaleQ = new Queue();
  }

  dancerEnqueue(string) {
    const gender = string[0];
    const name = string.split(' ')[1];
    if (gender === 'M') {
      this.maleQ.enqueue(name);
    }
    if (gender === 'F') {
      this.femaleQ.enqueue(name);
    }
    if (this.femaleQ.first && this.maleQ.first) {
      const dancerF = this.femaleQ.dequeue();
      const dancerM = this.maleQ.dequeue();
      console.log(
        `Female dancer is ${dancerF}, and the male dancer is ${dancerM}`
      );
    }
  }

  dancersInQueue() {
    let count = 1;
    if (this.femaleQ.first) {
      let currNode = this.femaleQ.first;
      while (currNode.next !== null) {
        count++;
        currNode = currNode.next;
      }
      console.log(`There are ${count} female dancers waiting to dance.`);
    } else if (this.maleQ.first) {
      let currNode = this.maleQ.first;
      while (currNode.next !== null) {
        count++;
        currNode = currNode.next;
      }
      console.log(`There are ${count} male dancers waiting to dance.`);
    }
  }
}

const squareDance = new dancePairing();

squareDance.dancerEnqueue('F Jane');
squareDance.dancerEnqueue('M Frank');
squareDance.dancerEnqueue('M John');
squareDance.dancerEnqueue('M Sherlock');
squareDance.dancerEnqueue('F Madonna');
squareDance.dancerEnqueue('M David');
squareDance.dancerEnqueue('M Christopher');
squareDance.dancerEnqueue('F Beyonce');
squareDance.dancersInQueue();
