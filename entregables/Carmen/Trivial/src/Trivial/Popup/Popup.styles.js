import styled from 'styled-components';
import font from '../fonts/GABRWFFR.ttf';


export const Container = styled.div`
display: ${({visible})  => visible? 'flex' : 'none'};
position: fixed;
width: 100%;
height: 100%;
background-image: url('https://www.ecestaticos.com/file/dde7fddcc7b3563b66b1a4196bb51ab0/1568643953-sillon.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
left: 0;
top: 0;
`;

export const Box = styled.div`
justify-content: center;
align-items: center;
display: flex;
width: 100%;
height: 100%;
`;

export const Inside = styled.div`

font-family: myFont;
font-size: 3rem;



p{
    color: #E91E23;
    display: grid;
  place-items: center;
  text-align: center;
  font-size: 5rem;
  
}

@font-face {
        font-family: myFont;
        src: url(${font});
    }
`;
