import React , { Component } from 'react';
import PropTypes from 'prop-types';  //配合限制传参引入文件

export default class NotFound extends Component {
  render() {
    return (
      <div>
        NotFound  {this.props.userId} {this.props.text}
        {/* <INDEX {...this.props} id={111}/>    将父页面的参数在传递给子页面，并且在加上自己的参数*/}
      </div>
    )
  }
}


NotFound.propTypes = {
  userId: PropTypes.number.isRequired //限制传参为数字并且必须
}
NotFound.defaultProps = {
  text: 'Stranger'  //如果没有传递text这个参数    默认为这个值
};
