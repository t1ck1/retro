document.getElementById('2').addEventListener("click", function() {
    document.getElementById('block11').classList.add("op1")
    document.getElementById('block12').classList.add("op2")
    document.getElementById('rot2').classList.add("loll")
    document.getElementById('rot1').classList.add("lell")
    document.getElementById('rot4').classList.add("loll")
    document.getElementById('rot3').classList.add("lell")
})

document.getElementById('1cl').addEventListener("click", function() {
    document.getElementById('block11').classList.remove("op1")
    document.getElementById('block12').classList.remove("op2")
    document.getElementById('rot2').classList.remove("loll")
    document.getElementById('rot1').classList.remove("lell")
    document.getElementById('rot4').classList.remove("loll")
    document.getElementById('rot3').classList.remove("lell")
})

document.getElementById('3').addEventListener("click", function() {
    document.getElementById('block111').classList.add("roc1")
    document.getElementById('block11').classList.add("op1")
    document.getElementById('block12').classList.remove("op2")
    document.getElementById('fh').classList.add("ff")
    document.getElementById('block1111').classList.remove("roc2")
    document.getElementById('block11111').classList.remove("roc3")
    document.getElementById('block111111').classList.remove("roc4")
})

document.getElementById('9').addEventListener("click", function() {
    document.getElementById('block111').classList.remove("roc1")
    document.getElementById('block11').classList.remove("op1")
    document.getElementById('block12').classList.remove("op2")
    document.getElementById('fh').classList.remove("ff")
    document.getElementById('block1111').classList.remove("roc2")
    document.getElementById('block11111').classList.remove("roc3")
    document.getElementById('block111111').classList.remove("roc4")
})

document.getElementById('19').addEventListener("click", function() {
    document.getElementById('block1111').classList.add("roc2")
    document.getElementById('block111').classList.remove("roc1")
    document.getElementById('block11').classList.add("op1")
    document.getElementById('block12').classList.remove("op2")
    document.getElementById('fh').classList.add("ff")
    document.getElementById('block11111').classList.remove("roc3")
    document.getElementById('block111111').classList.remove("roc4")
})

document.getElementById('100').addEventListener("click", function() {
    document.getElementById('block11111').classList.add("roc3")
    document.getElementById('block111111').classList.remove("roc4")
    document.getElementById('block1111').classList.remove("roc2")
    document.getElementById('block111').classList.remove("roc1")
    document.getElementById('block11').classList.add("op1")
    document.getElementById('block12').classList.remove("op2")
    document.getElementById('fh').classList.add("ff")
})

document.getElementById('200').addEventListener("click", function() {
    document.getElementById('block11111').classList.remove("roc3")
    document.getElementById('block111111').classList.add("roc4")
    document.getElementById('block1111').classList.remove("roc2")
    document.getElementById('block111').classList.remove("roc1")
    document.getElementById('block11').classList.add("op1")
    document.getElementById('block12').classList.remove("op2")
    document.getElementById('fh').classList.add("ff")
})