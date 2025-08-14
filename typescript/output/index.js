var num = 1;
var st = "2";
var bool = true;
var u = undefined;
var n = null;
var numArr = [1, 2, 3, 4, 5];
var person = {
    name: "alice",
    age: 18,
};
var person2 = {
    name: "bob",
    age: "12",
    direction: "east",
};
var Direction2;
(function (Direction2) {
    Direction2[Direction2["North"] = 1] = "North";
    Direction2[Direction2["South"] = 2] = "South";
    Direction2[Direction2["East"] = 3] = "East";
    Direction2[Direction2["West"] = 4] = "West";
})(Direction2 || (Direction2 = {}));
var direct = Direction2.East;
console.log(direct);
//# sourceMappingURL=index.js.map