//a function inside a function and it will only works it parent function.

function Greeting(greet, name) {
    function firstName(){
        if (name) {
            return name.split(' ')[0]
        }
        else {
            '';
        }
    }
    var sms = greet + ' ' + firstName();
    console.log(sms);
}
Greeting('goodnight', 'oaes kuruni')