import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  let start = Date.now();
  const allUsers = await prisma.user.findMany();
  let end = Date.now();

  return new Response(
    `request method: ${request.method}! \n ${JSON.stringify(
      allUsers
    )}\n start: ${start} / end: ${end} / diff: ${end - start}`
  );
}
