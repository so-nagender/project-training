function switchOfStuff(val) {
    var answer = "";
    // Switch Case
  switch(val){
    case "a":
    answer = "apple";
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;
    default :
    answer = "stuff";
  }
  // returning answer
    console.log(answer);
  }
  switchOfStuff("a");
  