/* <form for="example.com/path" method="post" class="show">
            <input type="checkbox">
            <label for="anime">anime1</label>
          </form> */

 // Array of anime titles
 const animes = ["assassination classroom", "attack on titan", "banana fish", "berserk", "black butler", 
 "black clover", "bleach", "blue lock", "bocchi the rock", "bungou stray dogs", "chainsaw man", "code geass", 
 "cowboy bepop", "cyberpunk: edgerunners", "death note", "demon slayer", "detective conan", "dr. stone", "dragon ball", 
 "erased", "evangelion", "fairy tail", "fate/zero", "frieren", "fruits basket", "fullmetal alchemist", "gintama", "given", 
 "haikyuu", "horimiya", "hunter x hunter", "jojo's bizarre adventure", "jujutsu kaisen", "kaiju no. 8", "kamisama kiss", 
 "kuroko's basketball", "love is war", "mob psycho", "monster", "moriarty the patriot", "my hero academa", "nana", "naruto", 
 "noragami", "one piece", "one punch man", "oshi no ko", "pokemon", "psyco pass", "ranking of kings", "samurai champloo", "spy x family", "steins;gate", "sword art online", "the apothecary diaries", "the first slam dunk", "tokyo ghoul", "tokyo revengers", "vinland saga", "violet evergarden", "vivy: fluorite eye's song", "your lie in april", "your name", "yu-gi-oh", "yuri on ice", "yuu yuu hakusho"];

 // Function to create form with checkboxes and labels
 function createFormWithCheckboxes(animeArray, formFor, formMethod, formClass) {
     // Create form element
     let form = document.createElement('form');
     form.setAttribute('for', formFor);
     form.setAttribute('method', formMethod);
     form.setAttribute('class', formClass);

     // Iterate over each anime title in the array
     animeArray.forEach(function(animeTitle) {
         // Create checkbox
         let checkbox = document.createElement('input');
         checkbox.type = 'checkbox';

         // Create label
         let label = document.createElement('label');
         label.htmlFor = 'anime';
         label.appendChild(document.createTextNode(animeTitle));

         // Append checkbox and label to form
         form.appendChild(checkbox);
         form.appendChild(label);

         // Append line break for better visual separation
         form.appendChild(document.createElement('br'));
     });

     // Append form to the div with id "animes"
     document.getElementById('animes').appendChild(form);
 }

 // Call the function with the array of anime titles and form attributes
 createFormWithCheckboxes(animes, 'example.com/path', 'post', 'show');

 const weebLabel = document.getElementById("weebLabel");
 const weebComment = document.getElementById("weebComment");

 function calculateChecked(event) {
    event.preventDefault();
    let checkboxes = document.querySelectorAll('.animecheckboxes input[type="checkbox"]');
    let checkedCount = 0;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    // let totalcheckboxes = checkedCount + uncheckedCount;
    // let weebpercent = checkedCount/totalcheckboxes;

    
    
    let len =animes.length;
    let percentscore  = checkedCount/len;
    
    score(percentscore);

    // console.log(checkedCount,percentscore);
    weebLabel.textContent=Math.round(percentscore*100);
    window.scrollTo({top:0, behavior:"instant"});
    // alert("Number of checked checkboxes: " + checkedCount);

    
    
}

function score(percent){
    let scorecomment;
    switch(true){
        case percent <= .1:
            scorecomment = "do you know what anime is, you silly baka?";
            break;        
        
        case percent <= .49:
            scorecomment ="you're almost a weeb, gambare gambare";
            break;        
        
        case percent <= .1:
            scorecomment ="wao sugoi you're definitely a weeb";
            break;        
            
        case percent <= .49:
            scorecomment ="yare yare, you need some help";
            break;        
        }
    weebComment.textContent=scorecomment;
}

function resetBoxes() {
    let checkboxes = document.querySelectorAll('.animecheckboxes input[type="checkbox"]');

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkbox.checked=false;
        }
        weebComment.textContent="let's find out...";
        weebLabel.textContent=0;
    });
}