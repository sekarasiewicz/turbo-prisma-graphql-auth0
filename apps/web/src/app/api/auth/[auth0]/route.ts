import { handleAuth} from "@auth0/nextjs-auth0";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- need to be ignored because of the type of handleAuth
export const GET = handleAuth()
