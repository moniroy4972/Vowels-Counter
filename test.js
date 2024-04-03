let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let vowels = "aeiou";

btn.addEventListener("click", () => {
  let count = 0;
  let res = input.value;
  
  for (i = 0; i < res.length; i++) {
    for (j = 0; j < vowels.toUpperCase().length; j++) {
      if (res[i].toUpperCase().includes(vowels[j].toUpperCase())) {
        count++;
      }
    }
  }
  para1.innerHTML = res;
  input.value = "";
  para2.innerHTML = count;
});
