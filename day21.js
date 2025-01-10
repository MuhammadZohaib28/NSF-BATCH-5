// ARRAY OF OBJECTS

const nsf = {
    ceoName: "ABC",
    address: "Near Double Road",
    employees:
        [
            {
                name: "Najam",
                specialization: "Admin"
            },
            {
                name: "Muhammad Zohaib",
                specialization: "Frontend Dev"
            },
            {
                name: "Wahaj",
                specialization: "Full Stack",
                days: [
                    "Monday", "Wednesday", "Friday"
                ]
            }
        ]
}


const darazCards = [
    {
        image: "asdasdaskjdaskdjh",
        title: "Watch",
        price: 145,
        dissPrice: 71,
        ratings: 90,
        reviews: 466,
        bgColor: "#ff5733",
        address: {
            city: "Karachi",
            area: "Clifton"
        },
        color: ["Brown", "Black"]
    },
    {
        image: "picture 2",
        title: "Airbuds",
        price: 1450,
        dissPrice: 711,
        ratings: 45,
        reviews: 100,
        address: {
            city: "Karachi",
            area: "DHA"
        },
        color: ["Pink", "Black"]
    },
    {
        image: "picture 3",
        title: "Leather Jacker",
        price: 14500,
        dissPrice: 7111,
        ratings: 15,
        reviews: 10,
        bgColor: "#FF13FH",
        address: {
            city: "Karachi",
            area: "GH"
        },
        color: ["Brown", "Black"]
    },
];


darazCards.map((data) => data.color.map((color, index) => console.log(color)))

// console.log(data)




