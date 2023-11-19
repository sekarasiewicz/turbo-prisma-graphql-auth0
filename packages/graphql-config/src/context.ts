import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "@auth0/nextjs-auth0";

export const createContext = async ({req, res}: { req: NextApiRequest, res: NextApiResponse}) => {
    const session = await getSession(req, res);

    if (!session || typeof session === 'undefined') {
        return
    }

    const { user, accessToken } = session;

    return {
        user,
        accessToken
    }
}
