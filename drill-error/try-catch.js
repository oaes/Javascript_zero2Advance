//

try{
    amFunction()
}
catch(error){
    console.log('this thrown a error'+error.stack);
}
finally{
    console.log('err shown');
}