// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    //stephen returns this.data[this.data.length - 1] without the if
    return (this.data.length > 0) ? this.data[this.data.length - 1] : null;
  }
}

module.exports = Queue;
