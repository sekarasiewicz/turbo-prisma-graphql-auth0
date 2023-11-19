"use client";

import type {ReactElement} from "react";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import { Header } from "./header";

export function PageLayout({children}: { children: React.ReactNode }): ReactElement {
  const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider  client={apolloClient}>
      <Header/>
      {children}
    </ApolloProvider>
  );
}
