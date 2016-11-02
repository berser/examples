import Koa from 'koa';
import universalRender from './universalRender';

const app = new Koa();
const port = process.env.PORT || 4000;

app.use(function *render() {
  try {
    const html = yield universalRender({ location: this.request.url });
    this.body = html;
  } catch (err) {
    const { error, redirect } = err;

    if (error) {
      throw error;
    } else if (redirect) {
      this.redirect(redirect.pathname + redirect.search);
    } else {
      this.status = err.status || 500;
    }
  }
});

app.listen(port);
console.log(`koa listen on port => ${port}`);
