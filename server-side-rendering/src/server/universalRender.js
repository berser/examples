import React from 'react';
import createError from 'http-errors';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import fetchData from './fetchData';
import routes from '../client/routes';
import Provider from '../client/components/Provider';
import template from './template';

export default async function render({ location }) {
  const [error, redirect, renderProps] = await new Promise((resolve) =>
    match({ routes, location }, (...args) => resolve(args)));

  if (error || redirect) throw ({ error, redirect });
  if (!renderProps) throw createError(404);

  const initialState = {
    users: {},
  };

  await fetchData(renderProps, initialState);

  const body = renderToString(
    <Provider store={initialState}>
      <RouterContext {...renderProps} />
    </Provider>
  );

  return template({
    body,
    title: 'App',
    initialState: JSON.stringify(initialState),
  });
}
