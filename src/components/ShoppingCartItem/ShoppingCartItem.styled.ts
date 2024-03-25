import styled from '@emotion/styled';

export const ShoppingCartLi = styled.li`
display: flex;
flex-direction: column;
text-align: center;
margin: 15px auto;
border: 3px solid #eeeeee;
border-radius: 8px;
 cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.122);
  }

  img{
    margin: 0 auto;
    width: 250px;
    height: 250px;    
  }
`;

export const CartLiTitle = styled.p`
font-size: 30px;
`;

export const CartLiPriceText = styled.p`
font-size: 20px;
`;

export const CartLiDescrBox = styled.div`
display: flex;
flex-direction:column;
justify-content: center; 
align-items: center;
margin: 0 auto;
gap: 15px;
`;
export const BtnBox = styled.div`
display: flex;
`;
