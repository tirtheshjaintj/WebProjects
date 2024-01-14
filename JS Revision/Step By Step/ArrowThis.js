const x = {
    name: "Tirthesh",
    role: "Programmer",
    age: 20,
    show: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.name, this.role);
        }, 2000)

    }
}

x.show();