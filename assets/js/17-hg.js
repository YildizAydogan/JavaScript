function darkMode() {
    var element = document.table;
    element.classList.toggle("dark-mode");
    document.getElementById("switch").innerHTML = "Toggle Light Mode";
  }
  
  function lightMode() {
    var element = document.table;
    element.classList.toggle("dark-mode");
    document.getElementById("switch").innerHTML = "Toggle Dark Mode";
  }
  
  function modeSwitch() {
    var text = document.getElementById("switch");
    if (text.innerHTML === "Toggle Dark Mode") {
      darkMode();
    } else if (text.innerHTML === "Toggle Light Mode"){
      lightMode();
    } else {
      console.log("Hmm, something went wrong...")
    }
  }