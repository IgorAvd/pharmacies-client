import styled from '@emotion/styled';

export const ShoppingCartContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    // gap: 35px;
    margin: 175px auto 0;
    padding: 0 10px;
    // padding : 0 50px;
    @media (max-width: 393px) {
   display: flex;
   flex-direction:column;
   margin-top: 140px;
  }
  }
`;

export const CredentialsCartContainer = styled.form`
  
  
    // height: 370px;
    height: 460px;
    // width: 250px;
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
  }
`;

export const OrderCartContainer = styled.div`
// height: 420px;
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
`;

export const InputStyle = {
  // width: "530px",
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
  fontSize: "14px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: "#ffffff",
    color: "#007eff",
  },
};