export function order(name, phone, address, city, zip, email) {
    try {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.zip = zip;
        this.email = email;
    } catch (err) {
        console.log(err);
    }
}

