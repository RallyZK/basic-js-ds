const { NotImplementedError } = require('../extensions/index.js');



/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

const { ListNode } = require('../extensions/list-node.js');

class Queue {

  constructor() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head;
  }

  // добавить элемент в очередь

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (this.head) {
      let el = new ListNode(value);
      this.tail.next = el;
      this.tail = el;
    } else {
      this.head = new ListNode(value);
      this.tail = this.head;
    }
  }

  // удалить первый элемент из очереди

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let first = this.head.value;
    this.head = this.head.next;
    return first;
  }
}

module.exports = {
  Queue
};
