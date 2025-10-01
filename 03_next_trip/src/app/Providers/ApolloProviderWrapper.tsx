'use client';

import { useAccessTokenStore } from '@/store/accessTokenStore';
import { IProps } from '@/types';
import {
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { useEffect } from 'react';

const BaseUrl = 'http://main-practice.codebootcamp.co.kr/graphql';
const GLOBAL_STATE = new InMemoryCache();

export default function ApolloProviderWrapper({ children }: IProps) {
  const { accessToken, setAccessToken } = useAccessTokenStore();

  useEffect(() => {
    const result = localStorage.getItem('accessToken');
    if (result) setAccessToken(result);
  }, [setAccessToken]);

  const uploadLink = createUploadLink({
    uri: BaseUrl,
    headers: {
      Authorization: `Bearer ${accessToken ?? ''}`,
    },
  });

  const client = new ApolloClient({
    uri: BaseUrl,
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
