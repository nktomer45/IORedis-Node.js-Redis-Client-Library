import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';
class Server {
    private app: express.Express;

    constructor(private config: any) {
        this.app = express();
    }

    private initJsonParser() {
        this.app.use(bodyParser.json({ limit: '100mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
    }

    private setupRoutes() {
        this.app.use(routes)
    }
    public bootstrap() {
        this.initJsonParser();
        this.setupRoutes();
        return;
    }

    public run() {
        const { port, env } = this.config;
        this.app.listen(port, () => {
            const message = `|| App is running at port '${port}' in '${env}' mode ||`;
            console.log(message);
        })

    }

}
export default Server;