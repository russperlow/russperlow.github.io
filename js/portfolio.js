const projects = [
    {
        name: "Havoc and Fortune",
        description: "A rogue dungeon crawling game created for a group project in Microsoft XNA. Havoc and Fortune has multiple levels with increasing difficulties that present an exciting challenge for those who dare. Players who can overcome the difficult enemies may find weapons around the dungeon to add to their inventory and equip to try and make their fight for life a little more bearable. Best of luck for those strong enough to make it to the end, as they will fight the final boss and his bullet hell minions!",
        src: "img/Portfolio/HavocAndFortunePreview.gif"
    },
    {
        name: "Fast Mining",
        description: "Description of Fast Mining",
        src: "img/Portfolio/FastMiningPreview.gif"
    }
];
let index = 0;

function updateExpanded(){
    $('#expandedImage').attr("src", projects[index].src);
    $('#expandedTitle').text(projects[index].name);
    $('#expandedDescription').text(projects[index].description);
}

(function(){

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

    $('#closeBtn').click(function(){
        index = 0;
        $('#expanded').hide();
        $('#images').show();
    });
})();