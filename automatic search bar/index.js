const availableKeywords = ['HTML', 'CSS', 'Web design', 'Where to learn coding'];
const resultsBox = document.querySelector(".box");
const inputBox = document.querySelector("input");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}

function display(result) {
    const content = result.map((list) => {
        return "<li>" + list + "</li>";
    }).join(""); 
    resultsBox.innerHTML = "<ul>" + content + "</ul>";
}
