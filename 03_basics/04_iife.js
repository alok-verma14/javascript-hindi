// Immediately Invoked Function Expression (IIFE)
// Q.    Why IIFE is use?
// Ans - Many times, we faced the problem of the global scope   
//       pollution. So, to remove global scope pollution such as 
//       variables and declarations, we use the IIFE. 
//       It immediately runs the function   
(function showMessage(){
    console.log(`DB conneceted`); 
})();

( (name) => {
    console.log(`User: ${name}`);
    
})("Alok");