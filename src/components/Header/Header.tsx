import 
{
    ButtonMetaMask,
    HeaderButtonMetaMaskContainer,
    HeaderContainer, 
    HeaderItemsContainer, 
    HeaderLogoContainer, 
    HeaderSearchBarContainer, 
    LogoTitle, 
    SearchBar, 
    SearchBarIconContainer 
} from "./Header.styles";
import logo from '../../assets/logo.png';
import { FiSearch } from 'react-icons/fi';

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogoContainer>
                <img src={logo} alt='logo' />
                <LogoTitle>Lemonade</LogoTitle>
            </HeaderLogoContainer>
            <HeaderItemsContainer>
                <p >Explorar</p>
                <p >Minhas NFT's</p>
                <p >Criar</p>
                <p >Quem Somos</p>
            </HeaderItemsContainer>
            <HeaderSearchBarContainer>
                <SearchBarIconContainer>
                    <FiSearch color="white"/>
                </SearchBarIconContainer>
                <SearchBar placeholder='Coleções, itens ou usuários...'/>
            </HeaderSearchBarContainer>
            <HeaderButtonMetaMaskContainer>
                <ButtonMetaMask>
                    Conectar
                </ButtonMetaMask>
            </HeaderButtonMetaMaskContainer>
        </HeaderContainer>
    )
}