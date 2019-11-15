class RadiusClass {
    constructor(r) {
        this.r = r;
    }
    circumference(r = this.r) {
        return 2 * Math.PI * r;
    }
    circle_area(r = this.r) {
        return Math.PI * r * r;
    }
}
class Cylider extends RadiusClass {
    constructor(r, h) {
        super(r);
        this.r = r;
        this.h = h;
    }
    volume(r = this.r, h = this.h) {
        return super.circle_area(r) * h;
    }
    suface_area(r = this.r, h = this.h) {
        return 2 * super.circle_area(r) + super.circumference(r) * h;
    }
}
let rc01 = new RadiusClass(10);
console.log(rc01.circumference());  // 62.83185307179586
console.log(rc01.circumference(15));  // 94.24777960769379

let c01 = new Cylider(20, 30);
console.log(c01.volume());  // 37699.11184307752
console.log(c01.suface_area());  //6283.185307179587