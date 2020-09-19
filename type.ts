abstract class Basis{
    protected readonly name: string;
    public color : string;
    public mass : number;
    public temperature: number;
    protected readonly age : number
    protected square : number;
    protected gravity : number;
    protected rotation_period : number;
    protected rotation_speed : number;
    protected distance_from_star : number;
    protected FullInfo(){}
}

interface Get // can be used for math deductions
{
    radius : number;
    getRadius(square : number) : number;
    isCreate();

}

interface Satellites // enable if have a satellites
{
    names ?: string[];
    number_of_satellites : number;
}

class Sun extends Basis implements Get, Satellites
{
    private static  instance : Sun; // for pattern Singleton
    private constructor()
    {
        super();  //call base constructor
    }
    static getInstance()
    {
        if(!Sun.instance)
        {
            Sun.instance = new Sun();
        }
        return Sun.instance;
    }
    readonly name = "Sun";
    color = "EAE006";
    mass = 1.989 * Math.pow(10,30);
    temperature = 5778;
    readonly age = 4.603 * Math.pow(10,9);
    square = 6.07877 * Math.pow(10,18);
    gravity = 274;
    rotation_period = 225 * Math.pow(10,6); // period of orbit around center of galaxy
    rotation_speed = 828000; // speed in galaxy
    distance_from_star = 2.62 * Math.pow(10,17); // to the center of galaxy
    public radius : number;

    names = ['Gun-Gun','Florence'];
    number_of_satellites = 2;
    getRadius(square: number): number {
        this.radius = Math.sqrt(square/(4*3.14));
        return this.radius;
    }
    public FullInfo() {
        super.FullInfo();
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
        if(this.names){
            console.log("Satellites " + this.names);
        }
    }
    isCreate(){
        return console.log("Object " + this.name + " has created");
    }

}


class Planet extends Basis implements Get, Satellites
{
    readonly name : string;
    readonly age : number;
    public color : string;
    public mass : number;
    public temperature : number;
    public square : number;
    public gravity : number;
    public rotation_period : number;
    public  rotation_speed : number;
    public distance_from_star : number;
    public radius : number;
    constructor(name: string, age : number ) {
        super()
        this.name = name;
        this.age = age;
    }
    names = ['Gun-Gun','Florence'];
    number_of_satellites = 2;

    public getRadius(square: number): number {
        this.radius = Math.sqrt(square/(4*3.14));
        return this.radius;
    }
    isCreate(){
        return console.log("Object " + this.name + " has created");
    }
    public FullInfo() {
        super.FullInfo();
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
        if(this.names){
            console.log("Satellites " + this.names);
        }
    }
}
const sun = Sun.getInstance();
sun.isCreate();
console.log("Radius " + sun.getRadius(sun.square));
sun.FullInfo();

const Mercury = new Planet("Mercury",4.503 * Math.pow(10,9));
Mercury.isCreate();
Mercury.color = "C1C709";
Mercury.mass = 3.285 * Math.pow(10,23);
Mercury.temperature = 452;
Mercury.square = 748 * Math.pow(10,5);
Mercury.gravity = 3.7;
Mercury.rotation_period = 88;
Mercury.rotation_speed = 172.44;
Mercury.distance_from_star = 57.91 * Math.pow(10,6);
Mercury.number_of_satellites = 0;
// console.log(Mercury.getRadius(Mercury.square));
// Mercury.FullInfo();
const Venus = new Planet("Venus",4.503 * Math.pow(10,9));
Venus.isCreate();
Venus.color = "E47813";
Venus.mass = 4.867 * Math.pow(10,24);
Venus.temperature = 735;
Venus.square = 4602 * Math.pow(10,5);
Venus.gravity = 8.87;
Venus.rotation_period = 224.7;
Venus.rotation_speed = 126000;
Venus.distance_from_star = 108 * Math.pow(10,6);
Venus.number_of_satellites = 0;
// console.log(Venus.getRadius(Venus.square));
// Venus.FullInfo();

const Earth = new Planet("Earth", 4.543 * Math.pow(10,9))
Earth.isCreate();
Earth.color = "#0625EA";
Earth.mass = 5.972 * Math.pow(10,24);
Earth.temperature = 287.2;
Earth.square = 5101 * Math.pow(10,5);
Earth.gravity = 9.807;
Earth.rotation_period = 365;
Earth.rotation_speed = 108 * Math.pow(10,4);
Earth.distance_from_star = 152 * Math.pow(10,6);
Earth.names = ["Moon"];
Earth.number_of_satellites = 1;
// console.log(Earth.getRadius(Earth.square));
// Earth.FullInfo();

const Mars = new Planet("Mars",4.603 * Math.pow(10,9));
Mars.isCreate();
Mars.color = "#976007";
Mars.mass = 6.39 * Math.pow(10,24);
Mars.temperature = 210;
Mars.square = 1448 * Math.pow(10,5);
Mars.gravity = 3.711;
Mars.rotation_period = 687;
Mars.rotation_speed = 86867;
Mars.distance_from_star = 228 * Math.pow(10,6);
Mars.names = ["Phobos","Deimos"];
Mars.number_of_satellites = 2;
// console.log(Mars.getRadius(Mars.square));
// Mars.FullInfo();

const  Jupiter = new Planet("Jupiter", 4.503 * Math.pow(10,9))
Jupiter.isCreate();
Jupiter.color = "#FABD5B";
Jupiter.mass = 1.898 * Math.pow(10,27);
Jupiter.temperature = 165;
Jupiter.square = 6.142 * Math.pow(10,10);
Jupiter.gravity = 24.79;
Jupiter.rotation_period = 243;
Jupiter.rotation_speed = 47016;
Jupiter.distance_from_star = 778 * Math.pow(10,6);
Jupiter.names = ["Metida", "Adrasteya", " Amalteya", "Fiva", "Io", "Europe", "Ganimed", "Kallisto"];
Jupiter.number_of_satellites = 79;
console.log(Jupiter.getRadius(Jupiter.square));
Jupiter.FullInfo();

const  Saturn = new Planet("Saturn", 4.503 * Math.pow(10,9));
Saturn.isCreate();
Saturn.color = "#ECFF00";
Saturn.mass = 5.683 * Math.pow(10,26);
Saturn.temperature = 134;
Saturn.square = 4.27 * Math.pow(10,10);
Saturn.gravity = 10.44;
Saturn.rotation_period = 10585;
Saturn.rotation_speed = 32400;
Saturn.distance_from_star = 1430 * Math.pow(10,6);
Saturn.names = ["Mimas", "Encelad", "Tefia", "Diona", "Reya", "Titan"];
Saturn.number_of_satellites = 82;
// console.log(Saturn.getRadius(Saturn.square));
// Saturn.FullInfo();

const Uranus = new Planet("Uranus", 4.503 * Math.pow(10,9));
Uranus.isCreate();
Uranus.color = "#7BBDEE";
Uranus.mass = 8.681 * Math.pow(10,25);
Uranus.temperature = 76;
Uranus.square = 8.083 * Math.pow(10,9);
Uranus.gravity = 8.87;
Uranus.rotation_period = 30660;
Uranus.rotation_speed = 25200;
Uranus.distance_from_star = 2871 * Math.pow(10,6);
Uranus.names = ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon"];
Uranus.number_of_satellites = 27;
// console.log(Uranus.getRadius(Uranus.square));
// Uranus.FullInfo();

const Neptune = new Planet("Neptune", 4.503 * Math.pow(10,9));
Neptune.isCreate();
Neptune.color = "#517793";
Neptune.mass = 1.024 * Math.pow(10,26);
Neptune.temperature = 72;
Neptune.square = 7.618 * Math.pow(10,9);
Neptune.gravity = 11.15;
Neptune.rotation_period = 60225;
Neptune.rotation_speed = 19565,64;
Neptune.distance_from_star = 4497 * Math.pow(10,6);
Neptune.names = ["Triton", "Nereida", "Nayada", "Talassa"]
Neptune.number_of_satellites = 24;
// console.log(Neptune.getRadius(Neptune.square));
// Neptune.FullInfo();
