import dotenv from 'dotenv';
import  Path  from 'path';

dotenv.config({
    path: Path.join(process.cwd(), ".env")
})

console.log(dotenv);

export default {
    database_url:process.env.DATABASE_URL,
    port:process.env.PORT,
};
