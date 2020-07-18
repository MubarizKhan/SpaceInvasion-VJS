var level = 2; //Level of the game

var hero = {
    left: 575,
    top: 500
};

var missiles = [];

var enemies = [

    { left: 200, top: 175 },
    // { left: 300, top: 175 },
    { left: 400, top: 175 },
    // { left: 500, top: 175 },
    { left: 600, top: 175 },
    // { left: 700, top: 175 },
    { left: 300, top: 175 },
    { left: 900, top: 175 }
];



var enemies1 = [

    { left: 200, top: 175 },
    // { left: 300, top: 175 },
    { left: 400, top: 175 },
    // { left: 500, top: 175 },
    { left: 600, top: 175 },
    // { left: 700, top: 175 },
    { left: 800, top: 175 },
    { left: 900, top: 175 }
];


document.onkeydown = function(e) {
    if (e.keyCode === 37) {
        // Left
        console.log("Left key is pressed");
        hero.left = hero.left - 10;
    }
    if (e.keyCode === 39) {
        // Right
        console.log("right key is pressed");
        hero.left = hero.left + 10;
    }
    if (e.keyCode === 32) {
        // Spacebar (fire)
        missiles.push({
            left: hero.left + 20,
            top: hero.top - 20 
        });
        drawMissiles()
    }
    drawHero();
}



function drawHero() {
  //  document.getElementById('hero').innerHTML += `<div class='hero'> <h4> ${num1}</h4> </div>`;
   // document.getElementById('hero').innerHTML += `<div style='left:${hero.left}px; top:${hero.top}px'> <h4> ${num1} </h4> </div>`;

    document.getElementById('hero').style.left = hero.left + 'px';
    document.getElementById('hero').style.top = hero.top + 'px';
    //alert("D H");
    //document.getElementById('hero').innerHTML += `<div class='hero'> <h4> ${num1}</h4> </div>`;
  //  document.getElementById('hero').innerHTML += `<div'> <h4> ${num1} </h4> </div>`;
}



function drawMissiles() {
    // console.log(missiles.length, "<-");
    document.getElementById('missiles').innerHTML = ""
    for(var i = 0 ; i < missiles.length ; i++ ) {
        document.getElementById('missiles').innerHTML += `<div class='missile1' style='left:${missiles[i].left}px; top:${missiles[i].top}px'></div>`;
    }
    console.log("DWW")
}

function moveMissiles() {
    for(var i = 0 ; i < missiles.length ; i++ ) {
        missiles[i].top = missiles[i].top - 8
    }
}


var rv1 = Math.floor(Math.random() * 45);
var rv2 = Math.floor(Math.random() * 10);
var rv3 = Math.floor(Math.random() * 45);
var rv4 = Math.floor(Math.random() * 18);
var rv5 = Math.floor(Math.random() * 28);
var rv6 = Math.floor(Math.random() * 18);
var rv7 = Math.floor(Math.random() * 250);
var rv8 = Math.floor(Math.random() * 1);

var rand_list = [rv1,rv2,rv3,rv4,rv5, rv6, rv7, rv8]; //Will create an array of random integers
var num1 = 220; //The sum value of this page is 100
var nx = 0;  //First digit that will lead up to the sum
var ny = 0; //Second digit that will lead up to the sum
//var sum2 = "0000000";
var temp = 0; //Temporary variable which will lead up to the enemy index. which will have the correct sum.

function drawEnemies() {
    // console.log(nx,ny);
    // enemies[3].innerHTML = "`<div class='enemy' style='left:${enemies[3].left}px; top:${enemies[3].top}px'>  </div>`";
    document.getElementById('enemies').innerHTML = ""
    for(var i = 0 ; i < enemies.length ; i++ ) {  
            console.log("drawing enemies");
            if (i != 3){
                document.getElementById('enemies').innerHTML += `<div class='enemy' style='left:${enemies[i].left}px; top:${enemies[i].top}px'> <h4> ${rand_list[i]} "+" ${rand_list[i+1]} </h4> </div>`;
            }
            else{
                document.getElementById('enemies').innerHTML += `<div class='enemy' style='left:${enemies[i].left}px; top:${enemies[i].top}px'>  </div>`;
                temp = i;
            }
    }
    // var temp;
    nx = 0; //
    ny = 0;
    // calculatind a + b, calculating a and b, for correct enemy which has good score, which is 3, by choice.
    for(var i = 0; i < num1; i++)
    {
        // console.log(nx, ny, "temp = ", enemies[temp]);
        if (nx + ny === num1){
            // console.log("check 1");
            document.getElementById('enemies').innerHTML += `<div class='enemy' style='left:${enemies[temp].left}px; top:${enemies[temp].top}px'> ${nx} "+" ${ny} </div>`;
        }
        if ( (nx + ny) > num1 && nx + ny != num1)
            return;
        nx += 1;
        ny += 1;
    }
}   

// }
name = "Mubariz";
function save_game(){
    console.log("It is working");
    console.log(level, hit, miss); //name
    //var saved_items = []
    var testObject = { 'name': name, 'levels': 2, 'hit': Hits, 'miss': miss};
    document.getElementsByClassName('navbar-toggler').innerHTML = " <h3> Logs saved </h3";
    localStorage.setItem('testObject', JSON.stringify(testObject));
    //Retrieve the object from storage
    var retrievedObject = localStorage.getItem('testObject');
    for (var i = 0; i < 155; i++){
    console.log('retrievedObject: ', JSON.parse(retrievedObject));

    }
};

function moveEnemies() {
    for(var i = 0 ; i < enemies.length ; i++ ) {
        enemies[i].top = enemies[i].top + 1;
    }
}

var hit = 0;
var miss = 0;
function collisionDetection() {
    // Colllision occurs with the enemy which has the correct answer, which will be the third enemy always

        for (var missile = 0; missile < missiles.length; missile++) {
            // HITTTTTTTTT
            if (  missiles[missile].left >= enemies[3].left  &&
                  missiles[missile].left <= (enemies[3].left + 50)  &&
                  missiles[missile].top <= (enemies[3].top + 50)  &&
                  missiles[missile].top >= enemies[3].top 
                
                )
            { 
                enemies.splice(3, 1);
                missiles.splice(missile, 1);
                hit += 1;
                console.log("hit correct", hit);
                window.location.href = "level3.html";
                
            }
        }
            // This will happen when missiles will collide with the enemy ship
        for (var enemy = 0; enemy < enemies.length; enemy++) {
            for (var missile = 0; missile < missiles.length; missile++)
                {   if  (missiles[missile].left >= enemies[enemy].left  &&
                        missiles[missile].left <= (enemies[enemy].left + 50)  &&
                        missiles[missile].top <= (enemies[enemy].top + 50)  &&
                        missiles[missile].top >= enemies[enemy].top )
                
                {                            
                    enemies.splice(enemy, 1);
                    missiles.splice(missile, 1);
                    miss += 1;
                    console.log("miss correct", miss);
                   //alert("Miss alert!");
                    
                    alert("GAME OVER");
                    window.location.href = "homepage.html";
                }
    }
}



}


function enemy_hero_meet()
{  console.log("enemy_hero_meet");
    var hero_l = document.getElementById('hero').style.height;
    var hero_t = document.getElementById('hero').style.top;
   console.log(hero_l, hero_t);

            for (var enemy = 0; enemy < enemies.length; enemy++) {
                // HITTTTTTTTT
                //enemy_pos = 
                if (   hero_l == enemies[enemy].left  &&
                      hero_l == ( enemies[enemy].left)  &&
                      hero_l + 50 == ( enemies[enemy].top)  &&
                      hero._l == enemies[enemy].top 
                    
                    )
                { 
                    enemies.splice(enemy, 1);
                   // missiles.splice(missile, 1);
                    //hit += 1;
                    //console.log("hit correct", hit);
                    window.location.href = "level3.html";
                    //alert("working!");
                }
}           }


function gameLoop() {
    console.log("function call");
    setTimeout(gameLoop, 70);
    
    moveMissiles();
    drawMissiles();
    moveEnemies();
    drawEnemies();
    // enemy_hero_meet();
    collisionDetection();
}



// document.getElementById('hero').innerHTML += `<h4> ${num1} </h4>`;
gameLoop();
console.log("throw weeror");
//alert("game_end");
