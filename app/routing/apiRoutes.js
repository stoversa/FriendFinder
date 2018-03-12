var friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var array = newFriend.scores;
        var newArray = [];
        array.forEach(e => {
            var num = parseInt(e);
            newArray.push(num);
        });
        newFriend.scores = newArray
        friendsData.push(newFriend);
        res.json(true);
    });
};