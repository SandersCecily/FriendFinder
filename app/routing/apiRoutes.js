var friends = require("../data/friends.json");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
		var match;
		var bestmatch = 100;
		for(var i=0; i<10; i++){
			var newDif = 0;
			for(var j=0; j<friends[i].scores.length; j++){
				newDif += Math.abs(friends[i].scores[j] - req.body.scores[j]);
			};
			if(newDif < bestmatch){
				bestmatch = newDif;
				match = i;
			};
		};
		friends.push(req.body);
		res.json(friends[match]);
	});
}