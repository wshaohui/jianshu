import React, { Component } from 'react';
import Header from './common/header';
import {  Provider } from 'react-redux';
import  store from './store/index.js'
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Writing from './pages/writing';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <div>   
          <BrowserRouter>
            <div>
              <Header /> 
              <Route path='/' exact component={ Home }></Route>
              <Route path='/login' exact component={ Login }></Route>
              <Route path='/detail/:id' exact component={ Detail }></Route>
              <Route path='/writing' exact component={ Writing }></Route>
            </div>
          </BrowserRouter>
        </div>
        </Provider>
      </div>
    );
  }
}
export default App;
