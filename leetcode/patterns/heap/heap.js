export default class Heap {
  constructor() {
    this.harr = [];
  }

  // add method
  add (value) {
    // push to harr
    this.harr.push(value);
    if (this.harr.length === 1) return;
    let valueI = this.harr.length - 1;
    // get parent if smaller swap with parent until its not smaller
    let parentI = this.getParent(valueI);
    let parent = this.harr[parentI];
    while (parent > value) {
      this.swap(parentI, valueI);
      valueI = parentI;
      parentI = this.getParent(valueI);
      parent = this.harr[parentI];
    }
  }

  // remove min
  removeMin () {
    // remove the root
    let min = this.harr[0];
    // grab the last element and make it the root
    let last = this.harr.pop();
    this.harr[0] = last;
    // call heapify on new root
    this.heapify(0);
    // return original root
    return min;
  }
  
  // heapify pass in current element
  heapify (index) {
    // find the smallest of left child and right child
    let value = this.harr[index];
    let rightI = this.getRightChild(index);
    let leftI = this.getLeftChild(index);
    let smallestI = this.harr[rightI] < this.harr[leftI] ? rightI : leftI;
    let smallest = this.harr[smallestI];
    // if current element is bigger than smallest of right and left
    if (value > smallest) {
      //swap with smallest
      this.swap(index, smallestI);
      // call heapify on element where current moved to
      this.heapify(smallestI);
    }
  }


  // get parent
  getParent (index) {
    if (index % 2 === 0) return (index - 2) / 2;
    return (index - 1) / 2
  }

  // get left child
  getLeftChild (index) {
    return index * 2 + 1;
  }

  // get right child
  getRightChild (index) {
    return index * 2 + 2;
  }

  // swap
  swap (i, j) {
    [this.harr[i], this.harr[j]] = [this.harr[j], this.harr[i]];
  }
}