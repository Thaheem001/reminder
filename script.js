
var input = document.querySelector("#text-box");
var myList = document.querySelector("#my-list");
let newArr = [];
newArr = JSON.stringify(newArr);
if (localStorage.getItem("Arsl") == null) {
    localStorage.setItem("Arsl", newArr)
}
var getLocalData = localStorage.getItem("Arsl")
getLocalData = JSON.parse(getLocalData);
getLocalData = getLocalData.sort();
console.log(getLocalData);

function displayUL() {
    var finalData = ""
    getLocalData.forEach(myfn);
    function myfn(item, number) {
        finalData += `<li>${item} <span onclick="deltask(${number})" class"icon"><i class="far fa-times-circle"></i></span></li>`;
    }
    document.querySelector("#my-list").innerHTML = finalData;
}

displayUL();

function additin() {
    if (input.value.trim() == "") {
        alert("Input Field is Empty")
        return false;
    }
    getLocalData.push(input.value);
    console.log(getLocalData);
    var newArrJson = JSON.stringify(getLocalData);
    localStorage.setItem("Arsl", newArrJson);
    displayUL();
    input.value = "";

};

function clearData() {
    let clear = confirm("Are You Sure to Clear it.");
    if (clear === true) {
        localStorage.setItem("Arsl", "[]")
    }
    // displayUL();
    document.querySelector("#my-list").innerHTML = "";
}
function deltask(index) {
    getLocalData.splice(index, 1);
    let localData = JSON.stringify(getLocalData);
    localStorage.setItem("Arsl", localData);
    displayUL();
}
function enterpress() {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("ok-but").click();
    }
}