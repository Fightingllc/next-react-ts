import { User, UserAuth } from './entity';
import { Connection, createConnection, getConnection } from "typeorm"

const host = process.env.DATABASE_HOST;
const port = Number(process.env.DATABASE_PORT);
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_NAME;



let connectionReadyPromise: Promise<Connection> | null = null;




export const perpareConnection = () => {
    if (!connectionReadyPromise) {
        connectionReadyPromise = (async () => {
            try {
                const staleConnection = getConnection();
                // await staleConnection.close()
            } catch (error) {
                console.log(error)
            }

            const connection = await createConnection({
                type: 'mssql',
                host,
                port,
                username,
                password,
                database,
                entities: {User, UserAuth},
                synchronize: false,
                logging: true,
                options: {
                    encrypt: true, // 启用加密
                    // trustServerCertificate: true, // 信任自签名证书
                  },
            });
            return connection;
        })();
    }
    return connectionReadyPromise;
}