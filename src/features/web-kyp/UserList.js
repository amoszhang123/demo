import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getUsers} from './redux/actions';
import { Table, Divider, Tag } from 'antd';


export class UserList extends Component {
  static propTypes = {
    webKyp: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  state = {
        data:[]
    }
  

  _getColumns (){
    return [
    {
      title: '账号',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: '登陆时间',
      dataIndex: 'login_at',
      key: 'login_at',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">购物车</a>/
          {/* <Divider type="vertical" /> */}
          <a href="javascript:;">退出</a>
        </span>
      ),
    }]
  }
  componentWillMount () {
        this.props.actions.getUsers(this.props.location.search).then(response => {
            // console.info(response.data.data)
            this.setState({data: response.data.data})
        })
    }
  // componentDidMount () {
  //       console.info(this.props.location.search)
  //   }


  // console.info(getUsers)
  render() {

    return (
      
      <div className="web-kyp-user-list">
        <Table columns={this._getColumns()} dataSource={this.state.data} />,
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    webKyp: state.webKyp,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getUsers }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
