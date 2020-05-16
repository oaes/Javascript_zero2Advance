//object destructuring

let bio = {
    name:'akash',
    age:25,
    sex:'male',
    height:"5'7",
    weight:'78kg',
    eyes:'black dim',
    address:{
        city:'Rajbari',
        country:'Bangladesh'
    }
}

let {name, age, sex, address:{city}} = bio
//console.log(name, age, sex,city);

let fruits = {
    num:'apple',
    color:'red,black,purple',
    test:'amazing',
    benefit:'lots of',
    amiLike:'yes'
}

let {num,color,amiLike} = fruits

console.log(num,color,amiLike);