function getNumber(num)
{
    var result = document.getElementById("result");
    result.value += num;
}
function clearResult(num)
{
    var result = document.getElementById("result");
    result.value = ""
}
function getResult()
{
    var result = document.getElementById("result");
    result.value = eval(result.value)
}