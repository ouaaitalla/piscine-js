function dogYears(name, age) {
    var second = 31557600;
    var dog = 7;
obj = {
    earth : 1,
    mercury : 0.2408467,
    venus : 0.61519726,
    mars : 1.8808158,
    jupiter : 11.862615,
    saturn : 29.447498,
    uranus : 84.016846,
    neptune : 164.79132
}
var dogYears= (age / (second * obj.name))*dog;
dogAge = dogYears.toFixed(2);
Agedog = Number(dogAge);
return Agedog;
}