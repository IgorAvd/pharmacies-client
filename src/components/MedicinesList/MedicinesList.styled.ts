import styled from '@emotion/styled';


export const MedicinesUl = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 35px;

img {  
  border-radius:10px;   
  width: 250px;
  }   
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    img {  
  border-radius:10px;   
  width: 310px;
  }
  } 
   @media (max-width: 393px) {
    grid-template-columns: repeat(1, 1fr);
    img {  
  border-radius:10px;   
   width: 215px;
  }
  } 
`;

