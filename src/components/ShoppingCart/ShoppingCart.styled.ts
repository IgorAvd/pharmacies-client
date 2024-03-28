import styled from '@emotion/styled';

export const ShoppingCartContainer = styled.div`
// width: 300px;
    // display: grid;
    // grid-template-columns: repeat(2, 1fr);
    gap: 50px;     
    //  padding-bottom: 25px;
    margin: 175px auto 0;
    padding: 0 10px 25px;  
     align-items: center; 
    justify-items: center; 

    @media (max-width: 393px) {
   display: flex;
   flex-direction:column;
   margin-top: 140px;
  //  width: 330px; 
   gap: 8px;  
  }
    @media (min-width: 394px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;     
 }
`;

export const CredentialsCartContainer = styled.form` 
    // width: 300px;
    height: 460px;   
    border: 3px solid #eeeeee;
    border-radius: 8px;
    padding:0 25px;
     cursor: pointer;
     &:hover,
  &:focus {
    box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.122);
  }
  @media (max-width: 393px) {
  height: 360px;
      width: 330px;
  }
   @media (min-width: 394px) {
  width: 360px;
 }
`;

export const OrderCartContainer = styled.div`
height: 460px;
overflow: auto;
border: 3px solid #eeeeee;
border-radius: 8px;
 cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.122);
  }
   @media (max-width: 393px) {
  
      width: 330px;
  }
   @media (min-width: 394px) {
  width: 360px;
 }
`;

export const InputStyle = {
  display: "flex",
  margin: "25px auto",
}

export const ButtonBox = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
grid-column: 2;
`;

export const buttonStyles = {
  display: "block",
  width: "270px",
  marginLeft: "8px",
  backgroundColor: "#007eff",
  height: "55px",
  lineHeight: "40px",
  fontWeight: "600",
  fontSize: "12px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: "#ffffff",
    color: "#007eff",
  },
};