function challengeBanner(n) {
    console.log(`######### Challenge ${n} #########`);
}

challengeBanner(1)
let num =1 ;
while (num <= 5) {
    console.log(num);
    num =num +1 ;
} 

challengeBanner(2);
function countFromTo(num,num2){
while (num <= num2){
    console.log(num)
    num = num + 1
}
}
countFromTo(1,22)

challengeBanner(3)
function countEvenOdd(num,num2){
while (num <= num2){
    if (num % 2 === 0){
        console.log('even')
    } else {
        console.log ('odd')
    }
    num = num + 1
}
}
countEvenOdd(1,5)

challengeBanner(4)
function countEven(num,num2){
while (num <= num2){
    if (num % 2 === 0){
        console.log(num)
    } num = num + 1
}}
countEven(1,10)

challengeBanner(5)
function descending(num,num2){
while (num <= num2){
    
    console.log(num2)
    num2 = num2 - 1
}
}
descending(1,10)

challengeBanner(6)
function descendingBlast(num,num2){
while (num <= num2){
    if (num2 === 0){
    console.log('Blast off!')
    }else{
    console.log(num2)
    }
    num2 = num2 - 1
} 
}
descendingBlast (0,10)

challengeBanner(7)

function countBy3(num){
while (num >= 0){
    console.log(num)
    num = num -3
}
}
countBy3(20)

challengeBanner(8)
num = 1
function countHello(){
while (num <= 7){
    console.log(num + '. '+'Hello!')
    num = num + 1
}
}
countHello()

challengeBanner(9)
num = 1
function countString(string){
while (num <= 7){
    console.log(num +'. '+ string )
    num = num + 1
}
}
countString('hi')

challengeBanner(10)
num = 1
function countGoodbye(num2,string){
while (num <= num2 ){
    console.log(num +'. '+ string )
    num = num + 1
}
}
countGoodbye(4,"Good-bye...")

challengeBanner(11)
num = 0
function stringToCharacter(string){
while (num <= string.length){
    console.log(string.charAt(num))
    num = num +1
}
}
stringToCharacter('think')

challengeBanner(12)
num = -1
function stringToCharacter2(string){
while (num <= string.length){
    console.log(string.charAt(num))
    num = num + 2
}
}
stringToCharacter2('nobody')

challengeBanner(13)

function backwardString(string){
while (num <= string.length){
    console.log(string.charAt(string.length-1))
    num = num + 1 
}
}
backwardString('backward')

challengeBanner(14)
let num = 1
function fizzBuzz(num2){
while (num <=num2){
    if (num % 3 === 0 && num % 5 ===0)
    {
    console.log('FizzBuzz')
    } else if (num % 3===0){
    console.log('Fizz')
    } else if (num % 5===0){
    console.log('Buzz')
    }else console.log(num)
    num = num + 1
}
}
fizzBuzz(15)



