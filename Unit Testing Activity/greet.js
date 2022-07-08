function Greet(name = 'there') {
    if (typeof(name) === "string") {
        if (name == name.toUpperCase()) {
            return "HELLO " + name.toUpperCase() + "!";
        } else {
            return "Hello " + name + ".";
        }
    } else if (Array.isArray(name)) {
        let names = "Hello";
        for (let i = 0; i < name.length; i++) {
            names += " " + names[i];
        }
        return (names);
        
    }
}
