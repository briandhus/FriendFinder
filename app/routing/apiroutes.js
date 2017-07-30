
var friends = require('../data/friends')

module.exports = function(app) {
  

  app.get("/api/friends", function(req, res) {
    // res.sendFile(path.join(__dirname, "/../data/friends.js"));
    res.json(friends)
  });

  // post route
  app.post('/api/friends', function(req, res) {
    // console.log(req);
    var newFriend = req.body;
    // console.log('new', newFriend);
    var total = 0;
    for (var i = 0; i < req.body.scores.length; i++) {
      total += parseInt(req.body.scores[i]);
    }
    var greatestDifference = 1000;
    var bestFriend = "";
    newFriend.totalScore = total;
    for (var i = 0; i < friends.length; i++) {
      var friendA = 0;
      var friendB = 0;
      if (newFriend.totalScore < friends[i].totalScore) {
        friendA = friends[i].totalScore;
        friendB = newFriend.totalScore;
      } else {
        friendA = newFriend.totalScore;
        friendB = friends[i].totalScore;
      }
      var difference = newFriend.totalScore - friends[i].totalScore;
      console.log(friendA);
      console.log(friendB);
      if (difference < greatestDifference) {
        greatestDifference = difference;
        bestFriend = friends[i];
      }
    }
    friends.push(newFriend);
    res.send(bestFriend);
  });
};

// comparisons on this page