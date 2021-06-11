//const found = array1.find(element => element > 10);

  
  const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...

  ] 
  function superbowlWin(record) {
    
    const winner = record.find((r) => r.result==="W") 
    return winner ? winner.year : undefined
  }

//TC helped me use a ternary statement to pass both tests. Still need practice on callback fn