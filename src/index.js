import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import $ from 'jquery';
import App from './containers/App';
import store from './store';


const root = $("[data-faqid]")[0];
var id = root.getAttribute('data-faqid');
render(
  <Provider store={store}>
    <App faqid={root.getAttribute('data-faqid')}/>
  </Provider>,
  root
)