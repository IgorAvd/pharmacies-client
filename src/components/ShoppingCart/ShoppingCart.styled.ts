import styled from '@emotion/styled';

export const ShoppingCartContainer = styled.div`
    gap: 50px;  
    margin: 175px auto 0;
    padding: 0 10px 25px;  
     align-items: center; 
    justify-items: center; 

    @media (max-width: 393px) {
   display: flex;
   flex-direction:column;
   margin-top: 140px;
   gap: 8px;  
  }
    @media (min-width: 394px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;     
 }
`;

export const CredentialsCartContainer = styled.form`     
    height: 460px;   
    border: 3px solid #eeeeee;
    border-radius: 8px;
    padding:0 25px;
     cursor: pointer;
     &:hover,
  &:focus {    
     box-shadow: 0 1px 4px rgba(0,0,0,0.3), -23px 0 20px -23px rgba(0,0,0,0.8), 23px 0 20px -23px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.1) inset;   
  }
  @media (max-width: 393px) {
  height: 360px;
      width: 330px;
  }
   @media (min-width: 394px) {
  width: 560px;
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
    box-shadow: 0 1px 4px rgba(0,0,0,0.3), -23px 0 20px -23px rgba(0,0,0,0.8), 23px 0 20px -23px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.1) inset;   
  }
   @media (max-width: 393px) {
  
      width: 330px;
  }
   @media (min-width: 394px) {
  width: 460px;
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
  "@media(max-width: 393px)": {
    width: "250px",
  }
};