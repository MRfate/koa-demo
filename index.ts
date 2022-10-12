import * as apiApp from './api';

const app = apiApp.app();

app.listen(3000, () => {
    console.log('应用已经启动，http://localhost:3000');
});
