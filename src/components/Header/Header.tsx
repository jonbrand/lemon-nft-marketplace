import { HeaderContainer, HeaderItemsContainer, HeaderLogoContainer, HeaderSearchBarContainer, LogoTitle, SearchBar, SearchBarIconContainer } from "./Header.styles";
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search.png';

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogoContainer>
                <img src={logo} alt='logo' />
                <LogoTitle>Lemonade</LogoTitle>
            </HeaderLogoContainer>
            <HeaderItemsContainer>
                <p>Explorar</p>
                <p>Minhas NFT's</p>
                <p>Criar</p>
                <p>Quem Somos</p>
            </HeaderItemsContainer>
            <HeaderSearchBarContainer>
                <SearchBarIconContainer>
                    <img src={searchIcon} alt='lupa' />
                </SearchBarIconContainer>
                <SearchBar placeholder='Coleções, itens ou usuários...'/>
            </HeaderSearchBarContainer>
        </HeaderContainer>
    )
}