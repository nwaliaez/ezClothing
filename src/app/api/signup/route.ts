import { db } from '@/db';
import { users } from '@/db/schema';
import { hash } from '@/lib/hash';
export async function POST(req: Request) {
    // let res: Users[] = await db.select().from(users);
    // console.log(res);
    const { name, email, password } = await req.json();
    const hashedPassword = await hash(password);
    // await db.insert(users).values({ name: 'Andrew' });

    const res = await db
        .insert(users)
        .values({ name, email, password: hashedPassword })
        .returning();
    console.log(res);
    return new Response('ok');
}
