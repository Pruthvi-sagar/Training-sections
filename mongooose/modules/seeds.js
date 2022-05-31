const mongoose = require("mongoose");
const Product = require("./modules/product");

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongooo Connection open")
    })
    .catch(err => {
        console.log("OH NO Mongooo EERRROOOORRRR!!!")
        console.log(err)
    })

// const p = new Product({
//     name: "Rubiee Grapefruit",
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    {
        name: "Fairy Eggplant",
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: "Dragon fruits",
        price: 4.99,
        category: 'fruit'
    },
    {
        name: "Mango",
        price: 3.99,
        category: 'fruit'
    },
    {
        name: "Rubiee Grapefruit",
        price: 1.99,
        category: 'fruit'
    },
    {
        name: "Margareta milk",
        price: 10.99,
        category: 'dairy'
    },
    {
        name: "Butter Milk",
        price: 2.99,
        category: 'dairy'
    }
]
Product.insertMany(seedProducts)
.then(res=>{
    console.log(res)
})
.catch(e=>{
    console.log(e)
})
