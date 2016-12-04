## Available Scripts

This project is an "eject" version of create-react-app.

### Project Description
The widget editor has a form to allow a user to create a new widget. This form includes the following fields:

- Title
- Unit: metric or imperial
- Show Wind: true or false

once the widget is created, click "show codes",and copy the codes to any part of the web page to show weather widget. [weather editor demo](https://ns-zzkeyaspgn.now.sh/)

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.



### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

After builds, You may also serve it locally with a static server:
``` js
npm install -g pushstate-server
pushstate-server build
open http://localhost:9000
```

### `npm run deploy`

Deploy app to Now server, please refer to this post:  [Zero Configuration Deployment for React app with Zeit Now](https://medium.com/@kawixiao/zero-configuration-deployment-for-react-apps-with-zeits-now-4f002be98c#.eyvj3mjdb)
