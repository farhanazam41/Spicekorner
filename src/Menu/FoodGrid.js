import styled from 'styled-components';
import {Title} from '../Styles/title';

export const FoodGrid =styled.div`

display: grid;
grid-template-columns: 2fr 2fr;
gap: 5px;

`
export const FoodLabel = styled.div`

position: absolute;
background-color: rgba(255, 255,255, 0.8);
padding: 5px;
`


export const Food = styled(Title)`

height: 200px;
width: auto;
padding: 10px;
font-size: 20px;
background-image: ${({img}) => `url(${img});` }
background-position: center;
 background-size: cover;
 filter: contrast(75%);
 border-radius: 7px;
 box-shadow: 0px 0px 10px 0px grey;
 &:hover {
     cursor: pointer;
     opacity: 0.7;
 }
`