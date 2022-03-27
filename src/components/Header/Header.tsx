import 
{
    HeaderButtonMetaMaskContainer,
    HeaderContainer, 
    HeaderItemsContainer, 
    HeaderLogoContainer, 
    HeaderSearchBarContainer, 
    LogoTitle, 
    SearchBar, 
    SearchBarIconContainer 
} from "./styles";
import logo from '../../assets/logo.png';
import { FiSearch } from 'react-icons/fi';
import { ButtonComponent } from "../Button/Button";

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
                <ButtonComponent/>
            </HeaderButtonMetaMaskContainer>
        </HeaderContainer>
    )
}