export function formatPrice(price){
  return price.toLocaleString('en-Us' , {
      style: 'currency',
      currency: 'USD'
  })
}

export const foodItems = [
    {
        name: 'Bryani',
        img: '/img/Bryani.jpg',
        section: 'Pakistani Food',
        price: 10
    },
    {
        name: 'Beef Stake',
        img: '/img/BeefStake.jpg',
        section: 'Western',
        price: 12
    },
    {
        name: 'Aloo Samosa',
        img: '/img/AlooSamosa.jpg',
        section: 'Pakistani Food',
        price: 2
    },
    {
        name: 'Burrito',
        img: '/img/burrito.jpg',
        section: 'Mexican',
        price: 15
    },
    {
        name: 'Channa Chart',
        img: '/img/ChannaChart.jpg',
        section: 'Pakistani Food',
        price: 9
    },
    {
        name: 'Chicken Tikka',
        img: '/img/ChickenTikka.jpg',
        section: 'Pakistani Food',
        price: 13
    },
    {
        name: 'Club Sandwich',
        img: '/img/ClubSandwich.jpg',
        section: 'Western',
        price: 5
    },
    {
        name: 'Daal Rice',
        img: '/img/DaalRice.jpg',
        section: 'Pakistani Food',
        price: 7
    },
    {
        name: 'Pasta',
        img: '/img/Pasta.jpg',
        section: 'Italian',
        price: 10
    },
    {
        name: 'Fried Fish',
        img: '/img/Friedfish.jpg',
        section: 'Pakistani Food',
        price: 20
    },{
        name: 'Pizza',
        img: '/img/Friedfish.jpg',
        section: 'Pizza',
        price: 20
    },{
        name: 'Fried Fish',
        img: '/img/Friedfish.jpg',
        section: 'Pakistani Food',
        price: 20
    },{
        price: 1,
        name: 'Soda',
        section: 'Drinks',
        choices: ['Coke', 'Pepsi','Fanta','Sprite']

    }

];

export const foods = foodItems.reduce((res, food) =>{
   
    if(!res[food.section]){
        res[food.section] =[];
    }
    res[food.section].push(food);
    return res;


}, {});