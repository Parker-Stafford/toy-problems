class Allocator {
  // types
  ids: {}; 
  idCounter: number;
  maxId: number;
  releaseQueue: number[];

  constructor (maxId: number) {
    this.ids = {};
    this.idCounter = 0;
    this.maxId = maxId;
    this.releaseQueue = [];
  }
  
  allocate () {
    let id;
    if (this.idCounter <= this.maxId) id = this.idCounter++;
    else if (this.releaseQueue.length) id = this.releaseQueue.pop();
    if (id === undefined) throw new Error('ID cannot be allocated, too many id\'s allocated please release id\'s to allocate more');
    this.ids[id] = true;
    return id;
  }

  release (id) {
    if (!this.ids[id]) throw new Error('ID cannot be released because it has not yet been allocated');
    delete this.ids[id];
    this.releaseQueue.unshift(id);
    return id; 
  }
}

const alloc = new Allocator(4);
// allocates id 0
alloc.allocate();
// releases that id
alloc.release(0);
// should err because 0 is no longer allocated;
// alloc.release(0);
// should err on last iteration because above max allocation
for (let i = 0; i <= 5; i++) {
  console.log(alloc.ids)
  alloc.allocate();
}
