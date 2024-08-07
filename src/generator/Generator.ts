function* range(start : number, end : number, step : number){
    let index = 0;
    let border = Math.floor((end-start)/step)
    for(let i=0; i<= border ; i++){
        yield start + (step * (index++))
    }
}


const x = range(5,50,3)
for (const value of x) {
    console.log(value);
}
//////////////////////////////////////

console.log([...range(3,30,3)]);

//////////////////////////////////////
const iterator = range(2,16,2);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
