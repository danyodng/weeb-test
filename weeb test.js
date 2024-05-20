/* <form for="example.com/path" method="post" class="show">
            <input type="checkbox">
            <label for="anime">anime1</label>
          </form> */

 // Array of anime titles
 const animes = ["assassination classroom", "attack on titan", "banana fish", "berserk", "black butler", 
 "black clover", "bleach", "blue lock", "bocchi the rock", "bungou stray dogs", "chainsaw man", "code geass", 
 "cowboy bepop", "cyberpunk: edgerunners", "death note", "demon slayer", "detective conan", "dr. stone", "dragon ball", 
 "erased", "evangelion", "fairy tail", "fate/zero","food wars" ,"frieren", "fruits basket", "fullmetal alchemist", "gintama", "given", 
 "haikyuu", "horimiya", "hunter x hunter", "jojo's bizarre adventure", "jujutsu kaisen", "kaiju no. 8", "kamisama kiss", 
 "kuroko's basketball", "love is war", "mob psycho", "monster", "moriarty the patriot", "my hero academa", "nana", "naruto", 
 "noragami", "one piece", "one punch man", "oshi no ko", "pokemon", "psycho pass", "ranking of kings", "samurai champloo", "spy x family", "steins;gate", "sword art online", "the apothecary diaries", "the first slam dunk", "tokyo ghoul", "tokyo revengers", "vinland saga", "violet evergarden", "vivy: fluorite eye's song", "your lie in april", "your name", "yu-gi-oh", "yuri on ice", "yuu yuu hakusho"];

 document.addEventListener("DOMContentLoaded", function() {
    const formContainer = document.getElementById('form-container');

    animes.forEach(anime => {
        // Create a container div for each toggle switch
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'toggle';

        // Create the switch label
        const switchLabel = document.createElement('label');
        switchLabel.className = 'switch';

        // Create the input element for the toggle switch
        const toggleSwitch = document.createElement('input');
        toggleSwitch.type = 'checkbox';
        toggleSwitch.id = `toggle-${anime.replace(/\s+/g, '-').toLowerCase()}`;

        // Create the span for the slider
        const slider = document.createElement('span');
        slider.className = 'slider round';

        // Append the input and slider to the switch label
        switchLabel.appendChild(toggleSwitch);
        switchLabel.appendChild(slider);

        // Create the label for the toggle switch name
        const nameLabel = document.createElement('label');
        nameLabel.className = 'toggle-name';
        nameLabel.setAttribute('for', toggleSwitch.id);
        nameLabel.textContent = anime;

        // Append the switch label and name label to the container
        toggleContainer.appendChild(switchLabel);
        toggleContainer.appendChild(nameLabel);

        // Append the container to the form container
        // const br = document.createElement("br");
        formContainer.appendChild(toggleContainer);
        // formContainer.appendChild(br);

    });
});

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
    let percentscore = checkedCount/len;
    
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
            scorecomment = "you should watch more anime, you silly baka";
            break;        
        
        case percent <= .49:
            scorecomment ="you're almost a weeb, gambare gambare";
            break;        
        
        case percent <= .9:
            scorecomment ="wao sugoi you're definitely a weeb";
            break;        
            
        case percent <= .99:
            scorecomment ="yare yare, you need some help";
            break;   
            
        case percent ==1:
            scorecomment ="congratulations!! stand proud (or not), you're a weeb who's seen everything on this list";
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