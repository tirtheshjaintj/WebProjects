class RailwayForm {
    constructor (name, seat, train) {
        this.name = name;
        this.seat = seat;
        this.train = train;
        console.log("Created");
    }
    submit() {
        console.log(this.name + " submitted");
    }
    cancel() {
        console.log(this.name + " cancelled");
    }
    details() {
        console.log(this);
    }

}

let tj = new RailwayForm("Tirthesh Jain", 430, "Shatabdi");
tj.submit();
tj.details();
tj.cancel();




