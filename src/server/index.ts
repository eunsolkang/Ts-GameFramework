import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.static('dist'));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen('5000', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 5000🛡️
  ################################################
`);
});