import { prisma } from 'database';
import type { TypeOf } from "zod";
import { object, string } from "zod";

const HookBodySchema = object({
    email: string(),
    secret: string(),
});

type HookBody = TypeOf<typeof HookBodySchema>;

export const POST = async (req: Request): Promise<Response> => {
    const { secret, email }: HookBody = await req.json() as HookBody;

    if (req.method !== 'POST') {
        return Response.json({ message: 'Method not allowed' }, { status: 403 })
    }

    if (secret !== process.env.AUTH0_HOOK_SECRET) {
        return Response.json({ message: `You must provide the secret 🤫` }, { status: 403 });
    }

    if (email) {
        await prisma.user.create({
            data: { email },
        });
        return Response.json({
            message: `User with email: ${email} has been created successfully!`,
        });
    }
    return Response.json({ message: 'Invalid request' }, { status: 403 })
}
