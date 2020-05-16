//map() methods create new array with the help of existing array by modifying it differently

var id = [2,4,53,22,44,32,54]
var name = ['akash','oaes','kuruni','turjo','talal']

 var arr = name.map(function(value,index,arr){
    console.log(value,index,arr)
})
