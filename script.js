let calculated=false;
function appendValue(value){
    const display=document.getElementById("display");
    if(calculated){
        display.value=' ';
        calculated=false;

    }
    display.value +=value;
}
    
function clearDisplay(){
    document.getElementById("display").value = "";
    

}
function backspace(){
  const display=document.getElementById('display');
  display.value=display.value.slice(0,-1);
}

function calculate() {
  const display = document.getElementById('display');
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
    addToHistory(expression + " = " + result);
  } catch (e) {
    display.value = "Error";
  }
}

function addToHistory(entry) {
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li); // latest at top
}

  function toggleTheme(){
    const body=document.body;
    body.classList.toggle('dark-theme');
    if(body.classList.contains('dark-theme')){
      localStorage.setItem('theme','dark');

    }else{
      localStorage.setItem('theme', 'light');
    }
  }
  window.onload=function(){
    const savedTheme=localStorage.getItem('theme');
    if(savedTheme==='dark'){
      document.body.classList.add('dark-theme');

    }
  };
  document.body.classList.add('light');
  document.getElementById('theme-toggle').addEventListener('click', ()=>{
    const body=document.body;
    const toggleBtn=document.getElementById('theme-toggle');
    if(body.classList.contains('light')){
      body.classList.replace('light','dark');
      toggleBtn.textContent='Light Mode';

    }else{
      body.classList.replace('dark','light');
      toggleBtn.textContent='Dark Mode';
    }
  });
  document.addEventListener('keydown', function (event) {
    const key = event.key;
  
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
      appendValue(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      backspace();
    } else if (key === 'c' || key === 'C') {
      clearDisplay();
    }
  });