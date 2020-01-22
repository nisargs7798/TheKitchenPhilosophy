
    //ES6 ,ES6 refers to version 6 of the ECMA Script programming language. ECMA Script is the standardized name for JavaScript,

    //Math.random() always returns a number lower than 1.

    //The Crypto.getRandomValues() method lets you get cryptographically strong random values. The array given as the parameter is filled with random numbers (
    
    
function GenerateID(){
    debugger; //The debugger statement stops the execution of JavaScript, and calls (if available) the debugging function. Using the debugger statement has the same function as setting a breakpoint in the code.
    var a=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c,crypto.getRandomValues(new Uint8Array(1)))[0]&15>>c/4).toString(16);
    document.getElementById("Uid").innerHTML=" Your Unique ID is :"+a;
} 







// function b(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)}


// function b(
//     a                  // placeholder
//   ){
//     return a           // if the placeholder was passed, return
//       ? (              // a random number from 0 to 15
//         a ^            // unless b is 8,
//         Math.random(new Uint8Array(1))[0]  // in which case
//         % 16           // a random number from
//         >> a/4         // 8 to 11
//         ).toString(16) // in hexadecimal
//       : (              // or otherwise a concatenated string:
//         [1e7] +        // 10000000 +
//         -1e3 +         // -1000 +
//         -4e3 +         // -4000 +
//         -8e3 +         // -80000000 +
//         -1e11          // -100000000000,
//         ).replace(     // replacing
//           /[018]/g,    // zeroes, ones, and eights with
//           b            // random hex digits
//         )
//   }
