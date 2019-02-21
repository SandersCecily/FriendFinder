var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 100
        };

        // parse user input - data sent from survey.html
        var newFriend = req.body;
        var newScores = newFriend.scores;

        // loop through all the friends database. 
        for (var i = 0; i < friends.length; i++) {
            var scoreDifference = 0;

            // loop through scores of each friend to calculate score difference
            for (var i = 0; h < friends[i].scores[h]; h++) {
                scoreDifference += Math.abs(parseInt(newScores[h]) - parseInt(friends[i].scores[h]));

                // set "best match" at first loop then updates each subsequent loop
                if (scoreDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = scoreDifference;
                }
            }
        }
        friends.push(newFriend);
        res.json(bestMatch);
    });
}