console.log("hello world")


let x=20;
console.log(x)
{
     let x=10
     console.log(x)
}
var a=4
console.log(typeof(a))

let temperature=15
if (temperature>30)
{
    
    console.log("hot day")
}
else if(temperature<20)
{
    console.log("cold day")
}
else
{
    console.log("pleasant day")
}

let fruits = ['apple','banana','grape']
console.log(fruits[0])
fruits.unshift('mango')
console.log(fruits)
fruits.pop()
console.log(fruits)

let people = [
    {
      name: 'Alice',
      age: 25,
      place: {
        city: 'Wonderland',
        country: 'Fairyland'
      }
    },
    {
      name: 'Bob',
      age: 30,
      place: {
        city: 'TechCity',
        country: 'Geekland'
      }
    },
    {
      name: 'Charlie',
      age: 28,
      place: {
        city: 'Artsville',
        country: 'Createland',
      }
    }
  ];
  console.log(people[2].place.country)

