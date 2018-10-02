const projects = [
    {
        name: "Havoc and Fortune",
        description: "A rogue dungeon crawling game created for a group project in Microsoft XNA. Havoc and Fortune has multiple levels with increasing difficulties that present an exciting challenge for those who dare. Players who can overcome the difficult enemies may find weapons around the dungeon to add to their inventory and equip to try and make their fight for life a little more bearable. Best of luck for those strong enough to make it to the end, as they will fight the final boss and his bullet hell minions!",
        src: "img/Portfolio/HavocAndFortunePreview.gif"
    },
    {
        name: "Fast Mining",
        description: "Fast Mining is a solo project created using Microsoft XNA and Xamarin studios for mobile platforms. Fast Mining is a clicker game in which the player levels up and earns money by mining different ores. The further along the player gets, the more expensive and rare ores they can mine. Players can use their in game money to help them advance with bonuses that increase experience points or a drill that mines for them. Players can also use real world currency to unlock special pickaxes for aide!",
        src: "img/Portfolio/FastMiningPreview.gif"
    },
    {
        name: "NFL Zombie Wonderland",
        description: "NFL Zombie Wonderland was a group project designed in Microsoft XNA. It is a side scrolling zombie game including two bosses throughout. The game includes an inventory of weapons for the player to choose from, a selection of NFL players to play as and access to an external character creation tool so players can play as themselves!",
        src: "img/Portfolio/NFLWonderlandPreview.gif"
    },
    {
        name: "Tetris",
        description: "Written in JavaScript, this version of Tetris comes with a fun holiday twist! The higher you score the more excited Santa becomes with a new celebration every 1000 points!",
        src: "img/Portfolio/Tetris.png"
    }
];
let index = 0;

var image = new Image();
image.src = 'img/Portfolio/HavocAndFortunePreview.gif';

function updateExpanded(){
    $('#expandedImage').attr("src", projects[index].src);
    $('#expandedTitle').text(projects[index].name);
    $('#expandedDescription').text(projects[index].description);
}

(function(){
    $('#expanded').hide();

    $('.imageGif').click(function(){
        let $image = $(this);
        index = $image.data('foo');
        $('#expanded').show();
        $('#images').hide();
        updateExpanded();
    });

    // Update information to next project in array
    $('#next').click(function(){
        if(index == projects.length - 1){
            index = 0;
        }
        else{
            index++;
        }
        updateExpanded();
    });

    // Update information to previous project in array
    $('#previous').click(function(){
        if(index == 0){
            index = projects.length - 1;
        }
        else{
            index--;
        }
        updateExpanded();
    });

    // Close expanded view 
    $('#closeBtn').click(function(){
        index = 0;
        $('#expanded').hide();
        $('#images').show();
    });
})();