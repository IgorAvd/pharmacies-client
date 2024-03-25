import styled from '@emotion/styled';

export const PharmListContainer = styled.div`
width: 300px;
gap: 15px;
display: flex;
flex-direction: column;
margin-right: 90px;
align-items: center;
`;

export const buttonStyles = {
    display: "block",
    width: "210px",
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

export const PharmListTitle = styled.p`
font-size: 33px;
margin-bottom: 40px;
text-align: center;
`;