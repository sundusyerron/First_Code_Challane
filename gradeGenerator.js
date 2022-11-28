function studentGradeGenerator(myInput) {
    // we can use an if statement here
      // test with 100
    if (myInput >= 79 && myInput <= 100) {
      console.log("A");
      // test with 79 
    } else if (myInput >= 60 && myInput <= 78) {
      console.log("B");
     // test with 49
    } else if (myInput >= 49 && myInput < 59){
      console.log("C")
    } else if(myInput >= 40 && myInput <= 48){
      console.log("D")
    } else if (myInput < 39 >= 0){
      console.log("E")
    
  }
          
  // calling our funciton 
  studentGradeGenerator(80);
  
  // A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.