
var friends = require('../app/data/friends');

module.exports = function(app){
 
  app.get('/api/friends', function(req,res){
    res.json(friends);
  });

  app.post('/api/friends', function(req,res){
  
    var friendScore = req.body.scores;
    var friendArray = [];
    var friendMatch = 0;

    for(var i=0; i<friends.length; i++){
      var scoresDiff = 0;
      
      for(var j=0; j<friendScore.length; j++){
        scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(friendScore[j])));
      }

    
      friendArray.push(scoresDiff);
    }

    for(var i=0; i<friendArray.length; i++){
      if(friendArray[i] <= friendArray[friendMatch]){
        friendMatch = i;
      }
    }


    var bff = friends[friendMatch];
    res.json(bff);

    friends.push(req.body);
  });
};