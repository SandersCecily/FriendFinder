var friends = require("../data/friends.json");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        friends.push(req.body);
        var userscorearr = req.body.scores;
        var userdifference = 0;
        var differencearr = [];

        for (var i = 0; i < friends.length - 1; i++) {
            for (var j = 0; j < 10; j++) {
                userdifference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userscorearr[j])))
            }
            differencearr.push(userdifference);
        };
        console.log(differencearr);
        var bestmatch = Math.min(differencearr);
        var matchindex = differencearr.indexOf(bestmatch);
        var match = friends[matchindex];
        console.log(match);

        res.json(match);
	});
}