const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("home", "/", async (ctx, next) => {
  const posts = await getPosts();

  ctx.body = `
  <html>
    <head></head>
    <body>
      <h1>Blog</h1>
      <ol></ol>
    </body>
  </html>
  `;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
