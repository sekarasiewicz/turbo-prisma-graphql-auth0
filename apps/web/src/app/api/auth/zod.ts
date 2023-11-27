import type { TypeOf} from "zod";
import { object, string} from "zod";

export const HookBodySchema = object({
  email: string(),
  secret: string(),
});

export type HookBody = TypeOf<typeof HookBodySchema>;
