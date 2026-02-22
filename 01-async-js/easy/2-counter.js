// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let cnt = 0;

 const counter = () =>{

      cnt+=1;
      console.log(cnt);

      setTimeout(counter , 1000)
 }


 counter()


