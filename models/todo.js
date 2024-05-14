const todos = [
    {
        id: 1,
        task: 'Wash the car',
        done: false,
    },
    {
        id: 2,
        task: 'Wash Dishes',
        done: false,
    },
    {
        id: 3,
        task: 'Take out Trash',
        done: true,
    },
];

module.exports =  {
    getAll,
}

function getAll() {
 return todos
}