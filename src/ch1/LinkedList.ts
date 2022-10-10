class _Node<T> {
  data: T;
  next: _Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: _Node<T> | null;

  constructor(data?: T) {
    this.head = data ? new _Node(data) : null;
  }

  push = (data: T): void => {
    const newNode = new _Node(data);
    newNode.next = this.head;
    this.head = newNode;
  };

  insertAfter = (prevNode: _Node<T> | null, data: T): void => {
    if (prevNode === null) {
      return;
    }

    const newNode = new _Node(data);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  };

  append = (data: T): void => {
    const newNode = new _Node(data);
    if (this.head === null) {
      this.head = newNode;
    }

    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    
    tail.next = newNode;
  }

  deleteFromBeginning = (): void => {
    if (this.head === null) {
      return;
    }

    this.head = this.head.next;
  };

  deleteFromEnd = (): void => {
    let tail = this.head;
    if (tail === null) {
      return;
    }
    
    let prev = tail;
    while (tail.next !== null) {
      prev = tail;
      tail = tail.next;
    }
    prev.next = null;
  };

  deleteAt = (n: number): void => {
    let curr = this.head as _Node<T> | null;
    let currIndex = 0;
    if (curr === null) {
      return;
    }
    
    let prev = curr as _Node<T> | null;
    curr = curr.next;
    while (currIndex < n - 1) {
      currIndex++;
      prev = curr;
      curr = curr ? curr.next : null;
    }
    if (prev !== null) {
      prev.next = curr !== null ? curr : null;
    }
  };

  display = (): void => {
    if (this.head === null) {
      return;
    }

    let curr = this.head as _Node<T> | null;
    while (curr !== null) {
      console.log(curr.data + (curr.next !== null ? '->' : ''));
      curr = curr.next;
    } 
  };
}
