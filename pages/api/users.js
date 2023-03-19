import { PrismaClient } from '@prisma/client';
import nc from 'next-connect'

const app = nc();

export async function getUsers() {
	const prisma = new PrismaClient();
	let users = await prisma.user.findMany();
	return { users: users };
}


app.get(async function(req,res){
     res.json(await getUsers())
})
export default app
