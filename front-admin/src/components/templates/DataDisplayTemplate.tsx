import Card from '../organisms/Card';
import styled from 'styled-components';
import Header from '../organisms/Header';
import StringInput from '../molecules/StringInput';
import { Dropdown } from '../molecules/Dropdown';
import { useEffect, useState } from 'react';
import userService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';
import MainButton from '../atoms/MainButton';
import {createPortal} from "react-dom";
import UserManagementModal from "../organisms/UserManagementModal";

interface DataDisplayTemplateProps {
  type: 'drink' | 'user';
  data: any[];
  maxCount: number;
  isLoading?: boolean;
  categories:string[];
  showMore: VoidFunction;
}

const PageContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 99px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 76px;

  @media (max-width: 450px) {
    padding: 0 21px;
  }
`;

export const ControlsContainer = styled.div`
  width: min(80%, 929px);
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 1011px) {
    flex-direction: column;
    gap: 0.5rem;
    width: max(50%, 320px);
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  width: 227px;
  height: 291px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.grey};
`;

export const DataContainer = styled.div`
  max-width: 80%;
  display: grid;
  gap: 56px;
  grid-template-columns: repeat(auto-fit, minmax(227px, 227px));

  @media (max-width: 450px) {
    padding: 0 21px;
    width: 100%;
  }
`;


const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const DataDisplayTemplate = ({type,data,maxCount=0,isLoading,categories=[],showMore}: DataDisplayTemplateProps) => {
  const navigate = useNavigate();

  async function isSigned() {
    if (!userService.user) {
      try {
        const user = await userService.getUserData();
        if (!user?.id) navigate('/login');
      } catch (error) {
        navigate('/login');
      }
    }
  };

  const ActionModal = (userEmail: string, action: string, setShowModal: any) => {
      return (
          <ModalWrapper>
              <UserManagementModal
                  userEmail={userEmail}
                  action={action}
                  setShowModal={setShowModal}
              />
          </ModalWrapper>
      );
  };

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactElement | null>(null);


  const [nameQuery, setNameQuery] = useState<string>('');
  const [categoryQuery, setCategoryQuery] = useState<string>('Categorias');



  

  useEffect(() => {
    isSigned();
  });

  //useEffect(() => {
    //console.log(categoryQuery); // replace with back end req
  //}, [categoryQuery]);

  const renderCards = () => {
    if(type==='drink'){
      return data && data.map((item) => (
        <Card
          key={item.id}
          cardTitle={item.name}
          cardType={'drink'}
          height='291px'
          width='227px'
          backgroundImage={item.picture}
          drinkTime={item.time.toString()+" min"}
          drinkDifficulty={item.difficulty}
          drinkLocation={(item.country!==undefined?item.country.join(","):"Não definido")}
          drinkCategories={(item.category!==undefined?item.category.join(","):"Não definido")}
        />
      ))}
    else{
      return data && data.map((item) => (
        <Card
            cardTitle={item.name}
            cardType="user"
            userIndicationQuantity={3}
            height="291px"
            width="227px"
            backgroundImage={item.picture}
            userBlock={false}
            onBlockUser={ () => {
                setModalContent(ActionModal(item.email!, 'block', setShowModal));
                setShowModal(true);
            } }
            onDrinkRecommendation={() => { }}
            onUnlockUser={ () => {
                setModalContent(ActionModal(item.email!, 'unlock', setShowModal));
                setShowModal(true);
            } }
            />
      ))
    }

  }

  return (
    <PageContainer>
      <Header />

      <Container>
        <ControlsContainer>
          {(type==="drink")&&(
            <Dropdown
              label={categoryQuery}
              icon={'segment'}
              options={categories}
              width='238px'
              onSelect={(category) => setCategoryQuery(category)}
            />
          )}
          <StringInput
            value={nameQuery}
            onChange={(event) => setNameQuery(event.target.value)}
            height='58px'
            width='499px'
            borderRadius='8px'
            hasSearchButton
            onSearch={() => { }} // replace with back end req
          />
          {(type==="drink")&&(
            <Dropdown
              label={'Filtrar'}
              icon={'filter_list'}
              options={[]}
              onSelect={(option) => { }}
            />
          )}
        </ControlsContainer>

        <DataContainer>
          {renderCards()}
        </DataContainer>

        {(data.length < maxCount || isLoading)&&(<MainButton
                width="160px"
                height="80px"
                children="Carregar mais"
                onClick={(e) => {
                    e.preventDefault();
                    if (data.length < maxCount) {
                        (showMore());
                    }
                }}
                type={isLoading ? "loading" : "primary"}
        />)}
      </Container>

      {showModal && createPortal(modalContent, document.body)}
    </PageContainer >
  );
};

export default DataDisplayTemplate;
