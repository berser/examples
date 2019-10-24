import { hot } from 'react-hot-loader/root';
import React from 'react';
import StateHookExample from './hooks/StateHookExample';
import EffectHookExample from './hooks/EffectHookExample';

const App = () => (
  <div>
    <h1>Hooks</h1>
    <br />
    <StateHookExample />
    <EffectHookExample />
    <br />
  </div>
);

export default hot(App);
