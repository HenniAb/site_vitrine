import Koa from "koa";
import bodyParser from "koa-bodyparser";
import koaRouter from "koa-router";
import serve from "koa-static";
import mount from "koa-mount";

import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import { renderToString } from "react-dom/server"
import Html from "./html";
import configureStore from "store/configureStore";
import App from "component/app";

const app = new Koa();

app.use(mount("/assets", serve("assets")));
app.use(bodyParser());

const router = koaRouter();



app.use(router.routes())
   .use(router.allowedMethods());

app.use(async ctx => {
  const location = ctx.request.url;
  const context = {};

  const store = configureStore({
  });

  const component = (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const content = renderToString(
    <Html component={component} store={store} />
  );

  ctx.body = `<!DOCTYPE html>\n${content}`
});

app.listen(3000, err => {
  if (err) {
    console.error("Error when running server", err);
    return
  } 

  console.log("Server running on port 3000");
});