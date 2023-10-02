let string = "";
let buttons = document.getElementsByTagName("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "AC") {
        string = "";
        document.getElementById("input-text").value = string;
      } else if (e.target.innerHTML == "DEL") {
        string = string.substring(0, string.length - 1);
        document.getElementById("input-text").value = string;
      } else if (e.target.innerHTML == "=") {
        string = eval(string);
        document.getElementById("input-text").value = string;
        string = "";
      }  
      else {
        string = string + e.target.innerHTML;
        document.getElementById("input-text").value = string;
      }
    } catch (err) {
      alert("Syntax Error");
    }
  });
});
