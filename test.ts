function echo<T>(arg: T): T {
  return arg
}
const result = echo("123")


function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])


interface hasLength {
  length: number
}
function echoWithArr<T extends hasLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
echoWithArr([])
echoWithArr({ length: 3 })
echoWithArr('123')


class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(1)
// queue.push('str')
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())


interface KeyPair<T, U> {
  key: T,
  value: U
}
let kp1: KeyPair<number, string> = { key: 1, value: '123'}
let kp2: KeyPair<string, number> = { key: '123', value: 123}
let arr1: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]