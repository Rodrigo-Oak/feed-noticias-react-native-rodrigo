import React from 'react';
import styled from 'styled-components/native';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import Avatar from './components/Avatar';
import Card from './components/Card';

const DATA = [
  {
    id: '1',
    userAvatar: require('./assets/images/avatar2.png'),
    userName: 'FRASES MOTIVACIONAIS DA FERNANDA',
    postText:
      'não insista em quem desistiu de você',
    postImage: require('./assets/images/post1.png')
  },
  {
    id: '2',
    userAvatar: require('./assets/images/avatar4.png'),
    userName: 'Dwayne johnson',
    postText:
      'Por que quando agente para pra pensar agente pensa parado?',
    postImage: require('./assets/images/post2.png')
  },
  {
    id: '3',
    userAvatar: require('./assets/images/6a59a906-fa56-49a5-b7f4-e51a54ad2ad1.jpg'),
    userName: 'Paulo Francisco Silva',
    postText:
      'imagem feita na inteligência artificial MIDJOURNEY',
    postImage: require('./assets/images/ovelhas.jpg')
  },
  {
    id: '4',
    userAvatar: require('./assets/images/avatar4.png'),
    userName: 'Diego e suas viagens',
    postText:
      'Cada dia esta cidade me inspira, #losangelesloveforever',
    postImage: require('./assets/images/post4.png')
  }
];

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const RowContainer = styled.View`
  width: 100%;
  padding-horizontal: 10px;
  flex-direction: row;
`;

export default function App() {
  return (
    <Container>
      <Header headerTitle='social' />
      <RowContainer>
        <Avatar imageSource={require('./assets/images/avatar1.png')} />
        <InputContainer />
      </RowContainer>
      <Card data={DATA} />
    </Container>
  );
}
