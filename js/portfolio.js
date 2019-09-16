const projects = [
    {
        name: "Havoc and Fortune",
        description: "A rogue dungeon crawling game created for a group project in Microsoft XNA. Havoc and Fortune has multiple levels with increasing difficulties that present an exciting challenge for those who dare. Players who can overcome the difficult enemies may find weapons around the dungeon to add to their inventory and equip to try and make their fight for life a little more bearable. Best of luck for those strong enough to make it to the end, as they will fight the final boss and his bullet hell minions!",
        preview: "img/Portfolio/HavocandFortunePreview.gif",
        image: "img/Portfolio/havocandfortune.png"

    },
    {
        name: "Fast Mining",
        description: "Fast Mining is a solo project created using Microsoft XNA and Xamarin studios for mobile platforms. Fast Mining is a clicker game in which the player levels up and earns money by mining different ores. The further along the player gets, the more expensive and rare ores they can mine. Players can use their in game money to help them advance with bonuses that increase experience points or a drill that mines for them. Players can also use real world currency to unlock special pickaxes for aide!",
        preview: "img/Portfolio/FastMiningPreview.gif",
        image: "img/Portfolio/fastmining.png"
    },
    {
        name: "NFL Zombie Wonderland",
        description: "NFL Zombie Wonderland was a group project designed in Microsoft XNA. It is a side scrolling zombie game including two bosses throughout. The game includes an inventory of weapons for the player to choose from, a selection of NFL players to play as and access to an external character creation tool so players can play as themselves!",
        preview: "img/Portfolio/NFLWonderlandPreview.gif",
        image: "img/Portfolio/NFLWonderland.png"
    },
    {
        name: "Tetris",
        description: "Written in JavaScript, this version of Tetris comes with a fun holiday twist! The higher you score the more excited Santa becomes with a new celebration every 1000 points!",
        preview: "img/Portfolio/Tetris.png",
        image: "img/Portfolio/Tetris.png"
    }
];
let index = 0;

function updateExpanded(){
    $('#expandedImage').attr("src", projects[index].preview);
    $('#expandedTitle').text(projects[index].name);
    $('#expandedDescription').text(projects[index].description);
}

(function(){
    $('#expanded').hide();
    $('#hnfPreview').hide();
    $('#fmPreview').hide();
    $('#nflPreview').hide();
    $('#tetrisPreview').hide();

    $('.previewGif').click(function(){
        let $preview = $(this);
        index = $preview.data('foo');
        let image = $preview.data('image');
        $preview.hide();
        $(image).show();
        $('#expanded').show();
        //$('#images').hide();
        //$image.attr("src", projects[index].image);

        updateExpanded();
    });

    $('.imageGif').click(function(){
        let $image = $(this);
        index = $image.data('foo');
        $('#expanded').show();
        updateExpanded();
    })

    // On Hover show the gif as a preview if nothing is expanded
    $('.imageGif').hover(function(){
        // Don't preview anything if something is expanded
        if(($("#expanded").is(":visible")))
            return;
        let $image = $(this);
        //index = $image.data('foo');
        let preview = $image.data('preview');
        $image.hide();
        $(preview).show();
    })

    // On mouse leave go back to the image
    $('.previewGif').mouseleave(function(){
        let $preview = $(this);
        //index = $preview.data('foo');
        //$image.attr("src", projects[index].image);
        let image = $preview.data('image');
        $(image).show();
        $preview.hide();
    })

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
        //$('#images').show();
    });
})();

$("#expanded").css({
    top: (($(window).height() - $("#expanded").outerHeight()) / 2) + "px"
});