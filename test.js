function checkNumber2() {
    let num =
    parseInt(document.getElementById("ans").value);
    let output =
    document.getElementById("btn2");
    if (num === 200) {
        alert("correct");
    } else if (num < 200 || num > 200) {
        alert("wrong");
    }
}
if (num === 200) {
    function showmessage() {
        alert("correct!");
    } if (num  < 200 || num > 200) {
        function showmessage() {
            alert("wrong!");
        }
    }
}