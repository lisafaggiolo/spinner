
spinnerArray = [ '\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|' ];


let spinTime = 200;

for (let line in spinnerArray){
  setTimeout(() => {
  
    process.stdout.write(spinnerArray[line]); 
  }, spinTime);
  spinTime += 200;
};
