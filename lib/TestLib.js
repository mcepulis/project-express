// function TestFunction(name) {
//     let wordArr = ["a", "ė", "as", "ius", "is", "jus"];
//     let greetArr = ["a", "e", "ai", "iau", "i", "jau"];
//     let resultName = "";
//      for (let i = 0; i < wordArr.length; i++) {
//             if (name.endsWith(wordArr[i])) {
//                 resultName = name.slice(0, -wordArr[i].length) + greetArr[i];
//                 break;
//              } else {
//                     resultName = name;
//                 }
            
// }
// return resultName[0].toUpperCase() + resultName.slice(1);
// }

let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    TestFunction();
});
function TestFunction() {
      console.log("LABAS");
}
// export { TestFunction };