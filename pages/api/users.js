import { PrismaClient } from '@prisma/client';

export async function getUsers() {
	const prisma = new PrismaClient();
	let users = await prisma.user.findMany();
	return { users: users };
}
