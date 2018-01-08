import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { BrowserRouter , Route , Link , Switch ,history } from 'react-router-dom';
import Chat from  './component/function';
import Home from './containers/home/home'
import Detail from './containers/detail/detail';
import List from './containers/list/list';
import NotFound from './containers/notFound/notFound';
import './css/common';
import './css/less';

class Index extends Component {
  constructor(props, context) { 
    super(props, context); 
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this); //性能优化 http://www.imooc.com/article/14932
  }
  render() {
    return (
      <div>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/detail" component={Detail}></Route>
              <Route path="/list" component={List}></Route>
              <Route path="*" component={NotFound}></Route>
            </Switch>
          </BrowserRouter>
      </div>
    )
  }
}
ReactDOM.render(
  <Index/>,document.getElementById('root')
)
