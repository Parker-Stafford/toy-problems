class Allocator {
  ids: {}; 
  idCounter: number;
  constructor () {
    this.ids = {};
    this.idCounter = 0;
  }
  
  allocate () {
    const id = this.idCounter++;
    this.ids[id] = true;
    return id;
  }

  release (id) {
    delete this.ids[id];
    return id; 
  }
}
