import styled from '@emotion/styled';


export const MedicineLi = styled.li`
display: block;
text-align: center;
width: 350px;
margin: 0 auto;
border: 3px solid #eeeeee;
border-radius: 8px;
 cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.122);
  }
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
