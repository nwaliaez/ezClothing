import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import 'dotenv/config';

// create the connection
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

const db = drizzle(pool);

// this will automatically run needed migrations on the database
const main = async () => {
    console.log('migration started');
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('migration ended');
    process.exit(0);
};
main();
