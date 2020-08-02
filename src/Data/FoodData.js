export const foodItems = [
    {
        name: 'Bryani',
        img: '/img/Bryani.jpg',
        section: 'Pakistani Food'
    },
    {
        name: 'Beef Stake',
        img: '/img/BeefStake.jpg',
        section: 'Western'
    },
    {
        name: 'Aloo Samosa',
        img: '/img/AlooSamosa.jpg',
        section: 'Pakistani Food'
    },
    {
        name: 'Burrito',
        img: '/img/burrito.jpg',
        section: 'Mexican'
    },
    {
        name: 'Channa Chart',
        img: '/img/ChannaChart.jpg',
        section: 'Pakistani Food'
    },
    {
        name: 'Chicken Tikka',
        img: '/img/ChickenTikka.jpg',
        section: 'Pakistani Food'
    },
    {
        name: 'Club Sandwich',
        img: '/img/ClubSandwich.jpg',
        section: 'Western'
    },
    {
        name: 'Daal Rice',
        img: '/img/DaalRice.jpg',
        section: 'Pakistani Food'
    },
    {
        name: 'Pasta',
        img: '/img/Pasta.jpg',
        section: 'Italian'
    },
    {
        name: 'Fried Fish',
        img: '/img/Friedfish.jpg',
        section: 'Pakistani Food'
    },{
        name: 'Fried Fish',
        img: '/img/Friedfish.jpg',
        section: 'Pakistani Food'
    },{
        name: 'Fried Fish',
        img: '/img/Friedfish.jpg',
        section: 'Pakistani Food'
    }

];

export const foods = foodItems.reduce((res, food) =>{
   
    if(!res[food.section]){
        res[food.section] =[];
    }
    res[food.section].push(food);
    return res;


}, {});