import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import NotFound from '../notFound/notFound'

export default class Home extends Component {
  constructor(props, context) { 
    super(props, context); 
  }
  handleClick() {
    console.log("点击了")
  } 
  render() {
    const arr = ['a', 'b', 'c']
    return (
      <div>
        <div className="hello" onClick={this.handleClick.bind(this)}>你好，世界!!ss!11<i className="icon-user"></i></div>
        <p style={{color:"#faf",fontSize:"22px"}}>这是一段文本</p>
        {arr.map((item, index) => { return <p key={index}>this is {item}</p> })}
        <Link to="/list">to list</Link>
        {/* <img src="/src/images/timg.jpg" alt="logo" style={{width:"100%"}}></img> */}
        <img src={require('../../images/timg.jpg')} alt="logo" style={{width:"100%"}}></img>
        <NotFound userId={9999} text={"3333pppp"}/>
      </div>
    )
  }
}
