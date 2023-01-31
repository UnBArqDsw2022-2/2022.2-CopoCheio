import BoxContainer from "../atoms/BoxContainer";
import Button from "../molecules/Button";
import TextInput from "../organisms/TextInput";
import Icon from "../atoms/Icon/Icon";

const SignUpTemplate = () => {
    return (
        <BoxContainer>
            <Icon icon="sports_bar" />

            <TextInput type="text" placeholder="Insira seu nome de usuário" />
            <TextInput type="email" placeholder="Insira seu e-mail" />
            <TextInput type="password" placeholder="Insira sua senha" />

            <Button variant="primary" children="CRIAR COTNA" onClick={() => { }} />
            <Button variant="secondary" children="LOGIN" onClick={() => { }} />
        </BoxContainer>
    );
};

export default SignUpTemplate;