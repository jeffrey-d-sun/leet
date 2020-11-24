class MinStack {
  constructor() {
    this.stack = []
    this.min = null
  }
  
  push(x) {
    this.stack.push(x)
    if (this.min === null || x < this.min) {
      this.min = Math.min(...this.stack)
    }
    return null
  }
  
  pop() {
    if (this.stack.length > 0) {
      const item = this.stack.pop()
      if (item === this.min) {
        this.min = Math.min(...this.stack)
      }
    }
    return null
  }
  
  top() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1]
    }
  }
  
  getMin() {
    return this.min
  }
};

const stack = new MinStack()
const expected = []

console.log(stack.push(-2)) // null
console.log(stack.push(0)) // null
console.log(stack.push(-3)) // null
console.log(stack.getMin()) // -3
console.log(stack.pop()) // null
console.log(stack.top()) //) 0
console.log(stack.getMin()) // -2
