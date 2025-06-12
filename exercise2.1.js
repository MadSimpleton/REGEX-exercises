const input = `>>---->
>>>--->
>>====>
>>--->
>>-----D
>>===>
>>----->
>>-------->`
const output = []

const arrows = input.trim().split("\n");
const regex = /^>>-{3,5}>$/;

const validation = arrows.forEach((line, index) => {
    if (!regex.test(line)){
        output.push(index + 1);
    }
});

console.log(output.join(" "));