import styled from '@emotion/styled';


export const MedicineLi = styled.li`
display: block;
text-align: center;
width: 330px;
margin: 0 auto;
border: 3px solid #eeeeee;
border-radius: 8px;
 cursor: pointer;
  &:hover,
  &:focus {
     box-shadow: 0 1px 4px rgba(0,0,0,0.3), -23px 0 20px -23px rgba(0,0,0,0.8), 23px 0 20px -23px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.1) inset;   
  }
   @media (min-width: 394px) {
  width: 400px;
`;

export const buttonStyles = {
  backgroundColor: "#007eff",
  height: "30px",
  lineHeight: "40px",
  fontWeight: "600",
  fontSize: "15px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  borderRadius: "12px",
  marginTop: "10px",
  marginBottom: "10px",
  "&:hover": {
    backgroundColor: "#ffffff",
    color: "#007eff",
  },
};

export const PriceText = styled.p`
font-size: 20px;
`;
