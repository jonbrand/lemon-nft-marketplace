import styled from "styled-components";

export const HeaderContainer = styled.div`
    background: var(--background-primary);
    color: black;
    height: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderLogoContainer = styled.div`
    margin: 10px;
    display: flex;

    img {
        width: 100px;
        height: 100px;
    }
`;

export const LogoTitle = styled.div`
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--text)
`;

export const HeaderItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-between;

    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    font-weight: 500;
   
   p {
    margin: 20px;
    color: var(--text);
    font-family: 'Roboto', sans-serif;

    font-weight: 500;
   }
`;

export const HeaderSearchBarContainer = styled.div`
    background-color: var(--white);
    height: 42px;
    flex: 0.8;

    display: flex;
    border-radius: 10px;
    align-items: center;

    margin-right: 20px;
`;

export const SearchBarIconContainer = styled.div`
    img {
        margin: 10px;
    }
`;

export const SearchBar = styled.input`
    background-color: transparent;
    border: none;
    width: 100%;

    outline: none;
    color: var(--gray-primary);
    font-size: 16px;

    ::placeholder {
        color: grey;
    }
`;