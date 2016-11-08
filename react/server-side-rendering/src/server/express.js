import express from 'express';
import universalRender from './universalRender';

const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static('dist'));

app.get('*', async (req, res) => {
  try {
    const html = await universalRender({ location: req.url });
    res.send(html);
  } catch (err) {
    console.log(err);

    const { error, redirect } = err;

    if (error) {
      throw error;
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else {
      res.sendStatus(err.status || 500);
    }
  }
});

app.listen(port, () => {
  console.log(`Server started port => ${port}`);
});
