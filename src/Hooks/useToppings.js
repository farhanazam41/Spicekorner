import {useState} from 'react';

export function useToppings(defaultTopping) {
 const [toppings, setToppings] = useState(defaultTopping || getDefaultToppings()) ;

 function checkTopping(index){
    
    const newToppings = [ ...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
 }
 return {
     checkTopping,
     toppings
 }

}

const toppingsList = [
    'Extra Cheese',
    'Pepperoni',
    'Sausage',
    'Onions',
    'Peppers',
    'Pineapples',
    'Ham',
    'Spinach',
    'Artichokes',
    'Mushrooms',
    'Anchovies'
];


function getDefaultToppings() {
 
    return toppingsList.map(topping => {
        return {
            name: topping,
            checked: false
        }
    });


}