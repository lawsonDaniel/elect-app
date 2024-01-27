arr = []
for (let i = 0; i < 10; i++) {
    i%2 === 0 && arr.push(i)
    
}
let b = Array(...arr)
    
  console.log(b)
