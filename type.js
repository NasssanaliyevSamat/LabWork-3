var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Basis = /** @class */ (function () {
    function Basis() {
    }
    Basis.prototype.FullInfo = function () { };
    return Basis;
}());
var Sun = /** @class */ (function (_super) {
    __extends(Sun, _super);
    function Sun() {
        var _this = _super.call(this) || this;
        _this.name = "Sun";
        _this.color = "EAE006";
        _this.mass = 1.989 * Math.pow(10, 30);
        _this.temperature = 5778;
        _this.age = 4.603 * Math.pow(10, 9);
        _this.square = 6.07877 * Math.pow(10, 18);
        _this.gravity = 274;
        _this.rotation_period = 225 * Math.pow(10, 6); // period of orbit around center of galaxy
        _this.rotation_speed = 828000; // speed in galaxy
        _this.distance_from_star = 2.62 * Math.pow(10, 17); // to the center of galaxy
        _this.names = ['Gun-Gun', 'Florence'];
        _this.number_of_satellites = 2;
        return _this;
    }
    Sun.getInstance = function () {
        if (!Sun.instance) {
            Sun.instance = new Sun();
        }
        return Sun.instance;
    };
    Sun.prototype.getRadius = function (square) {
        this.radius = Math.sqrt(square / (4 * 3.14));
        return this.radius;
    };
    Sun.prototype.FullInfo = function () {
        _super.prototype.FullInfo.call(this);
        console.log("Name " + this.name);
        console.log("Age " + this.age + " years");
        console.log("Color " + this.color);
        console.log("Mass " + this.mass + " kg");
        console.log("Average temperature " + this.temperature + " K");
        console.log("Surface area " + this.square + " km^2");
        console.log("Gravity on planet " + this.gravity + " m/sec^2");
        console.log("Rotation period around the galaxy " + this.rotation_period + " days");
        console.log("Rotation speed around the galaxy " + this.rotation_speed + " km/h");
        console.log("Distance to the center of the galaxy " + this.distance_from_star + " km");
        console.log("Number of satellites " + this.number_of_satellites);
        if (this.names) {
            console.log("Satellites " + this.names);
        }
    };
    Sun.prototype.isCreate = function () {
        return console.log("Object " + this.name + " has created");
    };
    return Sun;
}(Basis));
var Planet = /** @class */ (function (_super) {
    __extends(Planet, _super);
    function Planet(name, age) {
        var _this = _super.call(this) || this;
        _this.names = ['Gun-Gun', 'Florence'];
        _this.number_of_satellites = 2;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Planet.prototype.getRadius = function (square) {
        this.radius = Math.sqrt(square / (4 * 3.14));
        return this.radius;
    };
    Planet.prototype.isCreate = function () {
        return console.log("Object " + this.name + " has created");
    };
    Planet.prototype.FullInfo = function () {
        _super.prototype.FullInfo.call(this);
        console.log("Name " + this.name);
        console.log("Age " + this.age + " years");
        console.log("Color " + this.color);
        console.log("Mass " + this.mass + " kg");
        console.log("Average temperature " + this.temperature + " K");
        console.log("Surface area " + this.square + "km^2");
        console.log("Gravity on planet " + this.gravity + " m/sec^2");
        console.log("Rotation period " + this.rotation_period + " days");
        console.log("Rotation speed " + this.rotation_speed + " km/h");
        console.log("Distance to the nearest star " + this.distance_from_star + " km");
        console.log("Number of satellites " + this.number_of_satellites);
        if (this.names) {
            console.log("Satellites " + this.names);
        }
    };
    return Planet;
}(Basis));
var sun = Sun.getInstance();
sun.isCreate();
console.log("Radius " + sun.getRadius(sun.square));
sun.FullInfo();
var Mercury = new Planet("Mercury", 4.503 * Math.pow(10, 9));
Mercury.isCreate();
Mercury.color = "C1C709";
Mercury.mass = 3.285 * Math.pow(10, 23);
Mercury.temperature = 452;
Mercury.square = 748 * Math.pow(10, 5);
Mercury.gravity = 3.7;
Mercury.rotation_period = 88;
Mercury.rotation_speed = 172.44;
Mercury.distance_from_star = 57.91 * Math.pow(10, 6);
Mercury.number_of_satellites = 0;
// console.log(Mercury.getRadius(Mercury.square));
// Mercury.FullInfo();
var Venus = new Planet("Venus", 4.503 * Math.pow(10, 9));
Venus.isCreate();
Venus.color = "E47813";
Venus.mass = 4.867 * Math.pow(10, 24);
Venus.temperature = 735;
Venus.square = 4602 * Math.pow(10, 5);
Venus.gravity = 8.87;
Venus.rotation_period = 224.7;
Venus.rotation_speed = 126000;
Venus.distance_from_star = 108 * Math.pow(10, 6);
Venus.number_of_satellites = 0;
// console.log(Venus.getRadius(Venus.square));
// Venus.FullInfo();
var Earth = new Planet("Earth", 4.543 * Math.pow(10, 9));
Earth.isCreate();
Earth.color = "#0625EA";
Earth.mass = 5.972 * Math.pow(10, 24);
Earth.temperature = 287.2;
Earth.square = 5101 * Math.pow(10, 5);
Earth.gravity = 9.807;
Earth.rotation_period = 365;
Earth.rotation_speed = 108 * Math.pow(10, 4);
Earth.distance_from_star = 152 * Math.pow(10, 6);
Earth.names = ["Moon"];
Earth.number_of_satellites = 1;
// console.log(Earth.getRadius(Earth.square));
// Earth.FullInfo();
var Mars = new Planet("Mars", 4.603 * Math.pow(10, 9));
Mars.isCreate();
Mars.color = "#976007";
Mars.mass = 6.39 * Math.pow(10, 24);
Mars.temperature = 210;
Mars.square = 1448 * Math.pow(10, 5);
Mars.gravity = 3.711;
Mars.rotation_period = 687;
Mars.rotation_speed = 86867;
Mars.distance_from_star = 228 * Math.pow(10, 6);
Mars.names = ["Phobos", "Deimos"];
Mars.number_of_satellites = 2;
// console.log(Mars.getRadius(Mars.square));
// Mars.FullInfo();
var Jupiter = new Planet("Jupiter", 4.503 * Math.pow(10, 9));
Jupiter.isCreate();
Jupiter.color = "#FABD5B";
Jupiter.mass = 1.898 * Math.pow(10, 27);
Jupiter.temperature = 165;
Jupiter.square = 6.142 * Math.pow(10, 10);
Jupiter.gravity = 24.79;
Jupiter.rotation_period = 243;
Jupiter.rotation_speed = 47016;
Jupiter.distance_from_star = 778 * Math.pow(10, 6);
Jupiter.names = ["Metida", "Adrasteya", " Amalteya", "Fiva", "Io", "Europe", "Ganimed", "Kallisto"];
Jupiter.number_of_satellites = 79;
console.log(Jupiter.getRadius(Jupiter.square));
Jupiter.FullInfo();
var Saturn = new Planet("Saturn", 4.503 * Math.pow(10, 9));
Saturn.isCreate();
Saturn.color = "#ECFF00";
Saturn.mass = 5.683 * Math.pow(10, 26);
Saturn.temperature = 134;
Saturn.square = 4.27 * Math.pow(10, 10);
Saturn.gravity = 10.44;
Saturn.rotation_period = 10585;
Saturn.rotation_speed = 32400;
Saturn.distance_from_star = 1430 * Math.pow(10, 6);
Saturn.names = ["Mimas", "Encelad", "Tefia", "Diona", "Reya", "Titan"];
Saturn.number_of_satellites = 82;
// console.log(Saturn.getRadius(Saturn.square));
// Saturn.FullInfo();
var Uranus = new Planet("Uranus", 4.503 * Math.pow(10, 9));
Uranus.isCreate();
Uranus.color = "#7BBDEE";
Uranus.mass = 8.681 * Math.pow(10, 25);
Uranus.temperature = 76;
Uranus.square = 8.083 * Math.pow(10, 9);
Uranus.gravity = 8.87;
Uranus.rotation_period = 30660;
Uranus.rotation_speed = 25200;
Uranus.distance_from_star = 2871 * Math.pow(10, 6);
Uranus.names = ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon"];
Uranus.number_of_satellites = 27;
// console.log(Uranus.getRadius(Uranus.square));
// Uranus.FullInfo();
var Neptune = new Planet("Neptune", 4.503 * Math.pow(10, 9));
Neptune.isCreate();
Neptune.color = "#517793";
Neptune.mass = 1.024 * Math.pow(10, 26);
Neptune.temperature = 72;
Neptune.square = 7.618 * Math.pow(10, 9);
Neptune.gravity = 11.15;
Neptune.rotation_period = 60225;
Neptune.rotation_speed = 19565, 64;
Neptune.distance_from_star = 4497 * Math.pow(10, 6);
Neptune.names = ["Triton", "Nereida", "Nayada", "Talassa"];
Neptune.number_of_satellites = 24;
// console.log(Neptune.getRadius(Neptune.square));
// Neptune.FullInfo();
