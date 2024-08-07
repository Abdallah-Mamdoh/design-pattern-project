 function range (start : number, end : number, step : number){

    let index = 0;
    return{
                next(){
                    let value = start + (index * step)
                    if(value <= end){
                        return{
                            done : false,
                            value : start + (step * (index++))
                        }
                    }
                    return{
                     done : true,
                     value : undefined   
                    }
                },

                [Symbol.iterator](){
                    return this
                }
    }
}

const x = range(6,80,5)
for (const value of x) {
    console.log(value);
}

/////////////////////////////////////

console.log([...range(5,30,5)]);

/////////////////////////////////////

const iterator = range(5,100,12)

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

