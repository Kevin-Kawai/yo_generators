import * as express from 'express';
import * as path from 'path';
const app = express();
const port = 3000;

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => console.log(`Example app is listening on ${port}`))
