//The cos() method returns the cosine of a number.The Math.cos() method returns a numeric value between -1 and 1, which represents the cosine of the angle given in radians. The cos() is a static method of Math, therefore, it is always used as Math.cos(), rather than as a method of a Math object created

function newAff(a,b){
    return Math.cos(a+b)
}
console.log(newAff(3,4));