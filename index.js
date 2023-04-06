function Scooter(year,color,model) {
    this.color=color
    this.year=year
    this.model=model
}

function Driver(name,age,experience) {
    this.age=age
    this.name=name
    this.experience=experience
}

function PickupLocation(address,city) {
    this.city=city
    this.address=address
}

const samson= new Scooter(2015,"red","swoosh")
const allison= new Driver("Allison","16 Years","2 Years")
const poshHotel= new PickupLocation("123 Broadway","New York City")
