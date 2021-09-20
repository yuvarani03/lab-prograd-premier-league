//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
let createManager =(managerName, managerAge, currentTeam, trophiesWon) => {
  let manager = [managerName,managerAge,currentTeam,trophiesWon];
  return manager;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
let createFormation = (formation) => {
  if(formation.length == 0){
  return null;
  }
  else{
    return { defender: formation[0], midfield: formation[1], forward: formation[2] };
  }

}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
let filterByDebut = (year) =>{
  let filter = [];
  for(var i=0; i<players.length;i++)
  {
    if(players[i].debut == year){
      filter.push(players[i]);
    }
  }
  return filter;
}

//Progression 4 - Filter players that play at the position _______
let filterByPosition = (position) =>{
  let filter = [];
  for(var i=0; i<players.length;i++)
  {
    if(players[i].position == position){
      filter.push(players[i]);
    }
  }
  return filter;
}

//Progression 5 - Filter players that have won ______ award
let filterByAward = (awardName) =>
{
  let filter = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        filter.push(players[i]);
      }
    }
  }
  return filter;
}


//Progression 6 - Filter players that won ______ award ____ times
let filterByAwardxTimes = (awardName, noOfTimes) =>{
  let filter=[];
  for( let i=0;i<players.length;i++){
    let count = 0;
      for(let j=0;j<players[i].awards.length;j++){
        if(players[i].awards[j].name ==awardName){
         count++;
        }
      }  
        if(count==noOfTimes)
        filter.push(players[i]);
    }  
    return filter ;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
let filterByAwardxCountry = (awardName, country) => {
let filter = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName && players[i].country == country) {
        filter.push(players[i])
      }
    }
  }
  return filter;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
let filterByNoOfAwardsxTeamxAge = (noOfAwards, team, age) =>{
  var filter = [];
  for (var i= 0; i < players.length; i++) {
    if (players[i].awards.length >= noOfAwards && players[i].team == team && players[i].age < age) {
      filter.push(players[i])
    }
  }
  return filter;
}
