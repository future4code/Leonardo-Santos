import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetails from '../components/userDetails';

export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserPicture url="https://avatars.githubusercontent.com/u/89327853?v=4" alternativeText="image"/>
                <UserDetails name="Leonardo Silva" login="#leonardo-silva988" bio="Um"/>
            </UserContainer>
        </Container>
    );
}