import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  flex: 1;
  background: #FFF;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 0 32px;
`;

export const Welcome = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeMessage = styled.View``;

export const Frame = styled.View`
  width: 56px;
  height: 56px;
  padding: 6px;
  border-radius: 12px;
  background-color: #e1f1ff;
`;

export const Content = styled.View``;

export const TitleContainer = styled.View`
  margin: 48px 0 8px;
`;
