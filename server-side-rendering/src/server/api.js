/* eslint-disable max-len */
import Koa from 'koa';

const app = new Koa();
const port = process.env.PORT || 5000;

const users = {
  luis: {
    name: 'Luis Mendoza',
    description: 'Full-stack Developer / Technical Lead @ GBM Digital. A veces tomo fotos',
    talk: {
      name: 'Aplicaciones de Node con Docker',
    },
  },
  antonio: {
    name: 'Antonio Sandoval',
    description: 'Programador',
    talk: {
      name: 'Server-side rendering con React',
    },
  },
  richard: {
    name: 'Richard Kaufman',
    description: 'Ingeniero de software. De día, hacker en aliada.mx. De noche, hacker en el @ledhack, co-organizador de Eventloop, e invitado regular de @discomania_fm',
    talk: {
      name: 'Estructura de folders para aplicaciones de React',
    },
  },
};

app.use(function *res() {
  if (this.path === '/') {
    this.body = users;
    return;
  }

  const name = this.path.slice(1);
  const user = users[name];
  this.body = user;
});

app.listen(port);
console.log(`api listen on port => ${port}`);
