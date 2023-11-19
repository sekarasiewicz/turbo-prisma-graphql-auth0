import { createYoga } from 'graphql-yoga'
import { createContext, schema } from "graphql-lib";
import { NextResponse } from "next/server";

const { handleRequest } =  createYoga({
    schema,
    context: createContext,
    graphqlEndpoint: '/api/graphql',
    fetchAPI: {
        Request,
        Response: NextResponse,
    }
})

export { handleRequest as GET, handleRequest as POST }
