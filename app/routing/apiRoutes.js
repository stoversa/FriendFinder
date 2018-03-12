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
        var match = friendCompare(newFriend.scores);
        res.json(match);
    });

    function addArr(x) {
        var total = 0;
        var array = x;
        array.forEach(e => {
            total += parseInt(e);
        });
        return total;
    };

    function friendCompare (data){
        var userTotal = addArr(data);
        var compareArray = [];
        friendsData.forEach(e => {
            var val = addArr(e.scores);
            val = Math.abs(val - userTotal);
            compareArray.push(val);
            });
        var value = compareArray[0];
        var index = 0;
        for (var i = 1; i < (compareArray.length - 1); i++) {
            if (compareArray[i] < value) {
                value = compareArray[i];
                index = i;
            };
        };
        return friendsData[index];
    }
};