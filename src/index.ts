import app from "./app"
import {dbConnection} from './database'

async function conectarDB () {
    await dbConnection();
}

conectarDB();

app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'))
})