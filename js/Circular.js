var circular;

circular = function(arg) {
  if (arg) {
    alert(arg);
  }
  else {
    // refers to the |circular| variable, and by that to itself.
    circular("No argument");
  }
}

circular("hello");
circular();