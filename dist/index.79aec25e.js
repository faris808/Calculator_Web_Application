let string="",buttons=document.getElementsByTagName("button");Array.from(buttons).forEach(button=>{button.addEventListener("click",e=>{try{"AC"==e.target.innerHTML?(string="",document.getElementById("input-text").value=string):"DEL"==e.target.innerHTML?(string=string.substring(0,string.length-1),document.getElementById("input-text").value=string):"="==e.target.innerHTML?(string=eval(string),document.getElementById("input-text").value=string,string=""):(string+=e.target.innerHTML,document.getElementById("input-text").value=string)}catch(err){alert("Syntax Error")}})});//# sourceMappingURL=index.79aec25e.js.map

//# sourceMappingURL=index.79aec25e.js.map
