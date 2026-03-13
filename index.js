
let text = document.getElementById('welcome');
let words = [" puissant  |", "performant  |","ultra rapide |"];
let i=-1;
let interval = null;
let isIntervalActive = false;
///15000s for writing and deleting one word
text.textContent = words[0];

      i++;      
      if(i==words.length)i=0;

      writeWord(words[i]);
      setTimeout(()=>{
         deleteWord(words[i]);
      },1300);

   setInterval(function(){
      i++;
      if(i==words.length)i=0;
      writeWord(words[i]);
      setTimeout(()=>{
         deleteWord(words[i]);
      },1300);      
   },2800);




function deleteWord(word){
    
    let tmp = word;
     text.textContent = tmp;
     interval = setInterval(function(){
      isIntervalActive = true;
      console.log("1");
        text.textContent = tmp.slice(0,-2)+tmp.slice(-1);
        tmp = text.textContent;
        if(text.textContent.length ===1){
         clearInterval(interval);
         isIntervalActive = false;
        }
     },70);
}

function writeWord(word){
   cpt =0;
   let tmp = word.slice(0,-3);
   text.textContent = tmp;
   text.textContent = "|";
   interval =  setInterval(function(){
      // isIntervalActive = true;
      console.log("2");
         text.textContent =text.textContent.slice(0,-1)+ tmp.charAt(cpt)+"|";
         cpt++;
      if(cpt == word.length){
         clearInterval(interval);
      }

   },70);
}



// setInterval(function(){
//     if(i==words.length) i=0;
//  text.textContent = words[i];
// i++;
// },3000);
