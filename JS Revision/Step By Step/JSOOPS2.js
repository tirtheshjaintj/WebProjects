class RailwayForm {
    constructor (name, seat, train) {
        this.name = name;
        this.seat = seat;
        this.train = train;
        console.log("Created");
    }
    submit() {
        console.log(this.name + " submitted for " + this.train);
    }
    cancel() {
        console.log(this.name + " cancelled for " + this.train);
    }
    details() {
        console.log(this);
    }
}

class ChildRailwayForm extends RailwayForm {

}


let tj = new RailwayForm("Tirthesh Jain", 430, "Shatabdi");
tj.submit();
tj.details();
tj.cancel();

let child = new ChildRailwayForm("Ram Kumar", 420, "Gareeb Rath");
child.submit();




