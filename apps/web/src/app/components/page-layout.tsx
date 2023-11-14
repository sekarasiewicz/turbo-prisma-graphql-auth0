"use client";

import { ApolloProvider } from "@apollo/client";
import apolloClient from "apollo";

export const PageLayout = ({children}: { children: React.ReactNode }) => {
  return (
    <ApolloProvider  client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};
