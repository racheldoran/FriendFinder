var friends = require('../data/friends.js');

module.exports = function (app) {

  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function (req, res) {


    var bestFriend = req.body;

    for (var i = 0; i < bestFriend.scores.length; i++) {
      if (bestFriend.scores[i] == "Yes") {

        bestFriend.scores[i] = 1;
      } else if (bestFriend.scores[i] == "No") {

        bestFriend.scores[i] = 3;
      } else {

        bestFriend.scores[i] = parseInt(bestFriend.scores[i]);
      }
    }


    var newArray = [];

    for (var i = 0; i < friends.length; i++) {

      var comparison = friends[i];

      var totalDifference = 0;

      for (var i = 0; i < comparison.scores.length; i++) {

        var difference = Math.abs(comparison.scores[i] - bestFriend.scores[i]);
        totalDifference += difference;
      }

      newArray[i] = totalDifference;
    }

    var friendNumber = newArray[0];
    var newFriend = 0;

    for (var i = 1; i < newArray.length; i++) {
      if (newArray[i] < friendNumber) {
        friendNumber = newArray[i];
        newFriend = i;
      }
    }

    friends.push(bestFriend);

    res.json(friends[newFriend]);
  });
};