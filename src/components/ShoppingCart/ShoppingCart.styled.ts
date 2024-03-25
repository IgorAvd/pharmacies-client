import styled from '@emotion/styled';

export const ShoppingCartContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
    margin-top: 175px;
    padding : 0 50px;
`;

export const CredentialsCartContainer = styled.form`
    height: 370px;
    border: 3px solid #eeeeee;
    border-radius: 8px;
    padding: 25px;
     cursor: pointer;
     &:hover,
  &:focus {
    box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.122);
  }
`;

export const OrderCartContainer = styled.div`
height: 420px;
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
  width: "530px",
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