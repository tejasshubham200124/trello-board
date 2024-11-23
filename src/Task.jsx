export const task = [
    {
        id: 1,
        name: 'New react js project',
        description: 'initialize a new react js project with wite for an ecommerce website',
        status: 'pending',
        assignedTo: [
            {
                id: 1,
                name: "shubham",
            },
            {
                id: 2,
                name: "Meera",
            },
            {
                id: 3,
                name: "kajal",
            },
        ],
        dependencies: []
    },
    {
        id: 2,
        name: 'HomePage',
        status: 'pending',
        description: 'collaborate with ui/ux team to design the home page',
        assignedTo: [
            {
                id: 1,
                name: "vishal",
            },
            {
                id: 2,
                name: "dhaval",
            },
        ],
        dependencies: [1]
    },
    {
        id: 3,
        name: 'home page complted',
        description: 'home page completed',
        status: 'completed',
        assignedTo: [
            {
                id: 1,
                name: "shubham",
            },
            {
                id: 2,
                name: "Meera",
            },
            {
                id: 3,
                name: "kajal",
            },
        ],
        dependencies: []
    },
    {
        id: 4,
        name: 'cart page',
        description: 'update cart products acc to the products added',
        status: 'in-progress',
        assignedTo: [
            {
                id: 1,
                name: "shubham",
            },
            {
                id: 2,
                name: "Meera",
            },
            {
                id: 3,
                name: "kajal",
            },
        ],
        dependencies: []
    },
]