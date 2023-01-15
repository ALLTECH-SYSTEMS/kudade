import app from './index.js';
import mongoose from './util/dbConnection.js';

const PORT = 8000;

const server = app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`));

export default server;