function fncall() {
    var result;
    var firstnum, secondnum;
    firstnum = parseInt(document.getElementById("first").value)            
    secondnum = parseInt(document.getElementById("second").value)
    result = fadd(firstnum ,secondnum);
    document.getElementById("result").value = result;
}
function subcall() {
    var result;
 firstnum = parseInt(document.getElementById("first").value)            
    secondnum = parseInt(document.getElementById("second").value)
    result = fsub(firstnum, secondnum);
    document.getElementById("result").value = result;
}
function mulcall() {
    var result;
 firstnum = parseInt(document.getElementById("first").value)            
    secondnum = parseInt(document.getElementById("second").value)
    result = fmul(firstnum, secondnum);
    document.getElementById("result").value = result;
}
function divcall() {
    var result;
    firstnum = parseInt(document.getElementById("first").value)            
    secondnum = parseInt(document.getElementById("second").value)
    result = fdiv(firstnum, secondnum);
    document.getElementById("result").value = result;
}
function fadd(first, second) {
    return first + second
}
function fsub(first, second) {
    return first - second
}
function fmul(first, second) {
    return first * second
}
function fdiv(first, second) {
    return first / second
}num