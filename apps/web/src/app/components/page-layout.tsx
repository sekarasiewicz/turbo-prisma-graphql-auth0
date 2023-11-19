"use client";

import type {ReactElement} from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "apollo";
import { Header } from "./header";

export const PageLayout = ({children}: { children: React.ReactNode }): ReactElement => {
  return (
    <ApolloProvider  client={apolloClient}>
      <Header/>
      {children}
    </ApolloProvider>
  );
};
