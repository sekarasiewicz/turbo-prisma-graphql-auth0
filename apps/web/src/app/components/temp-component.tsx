import { prisma } from "database";
import type { ReactElement } from "react";

export const TempComponent = async (): Promise<ReactElement> => {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};
