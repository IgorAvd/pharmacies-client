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
    width: "210px",
    marginLeft: "8px",
    backgroundColor: "red",
    height: "55px",
    lineHeight: "40px",
    fontWeight: "600",
    fontSize: "18px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    borderRadius: "12px",
    "&:hover": {
        backgroundColor: "#ffffff",
        color: "red",
    },
};

export const PharmListTitle = styled.p`
font-size: 33px;
margin-bottom: 40px;
text-align: center;
`;