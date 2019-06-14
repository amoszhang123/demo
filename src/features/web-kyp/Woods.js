import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getWoods } from './redux/actions';
import { Table, Select, Button } from 'antd';
const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
const data = [
  {
		"pid": "20509",
		"name": "尺码",
		"values": [{
			"vid": "1221368011",
			"name": "160/64A/XS"
		}, {
			"vid": "695890831",
			"name": "165/72A/S"
		}, {
			"vid": "687306398",
			"name": "170/80A/M"
		}, {
			"vid": "792138562",
			"name": "175/88A/L"
		}, {
			"vid": "835610261",
			"name": "180/96B/XL"
		}, {
			"vid": "860514477",
			"name": "185/104C/XXL"
		}, {
			"vid": "860514476",
			"name": "185/112C/XXXL"
		}, {
			"vid": "860514475",
			"name": "185/120C/XXXXL"
		}]
	},
   {
		"pid": "1627207",
		"name": "颜色分类",
		"values": [{
			"vid": "8025988",
			"name": "09 黑色"
		}, {
			"vid": "795580078",
			"name": "23 橙黄色"
		}, {
			"vid": "428872692",
			"name": "30 浅米色"
		}, {
			"vid": "492404758",
			"name": "31 米色"
		}, {
			"vid": "811844629",
			"name": "46 鹅黄色"
		}, {
			"vid": "384808471",
			"name": "56 橄榄色"
		}, {
			"vid": "735640061",
			"name": "64 湖蓝色"
		}, {
			"vid": "781776397",
			"name": "68 深蓝色"
		}]
	}
]
export class Woods extends Component {
  static propTypes = {
    webKyp: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  state = {
        name:"xxx",
        detail:[],
        cityData:['Zhejiang', 'Jiangsu'],

        loading: false,
    iconLoading: false,
  }

  enterLoading = () => {
    this.setState({ loading: true });
    this.props.actions.getWoods(this.props.location.search).then(response => {
            console.info(response.data.data)
            this.setState(response.data.data)
            console.warn(this.state)
        })
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  // get_detail = () =>{
  //   this.state.detail
  // };


  _getColumns (){
    return [
    {
      title: '规格',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '选择',
      key: 'select',
      render: (value, row, index) => (
        // const { cities } = this.state;
        <div>
        <Select
          defaultValue={this.state.cityData[index]}
          style={{ width: 120 }}
          onChange={this.handleProvinceChange}
        >
          {this.state.detail.map(province => (
            <Option key={row.key} value={province.values}>{province.values.name}</Option>
          ))}
        </Select>
      </div>
      ),
    }]
  }

  componentWillMount () {
      console.info(data)
      this.setState({detail: data}, () => {console.log(this.state.detail)})
      for(var index in this.state.detail) {

      console.log(index );

}  
      // this.setState({this.data.detail: data}, () => {console.log(this.state.detail)})
        // this.props.actions.getWoods(this.props.location.search).then(response => {
        //     console.info(response.data.data)
        //     this.setState(response.data.data)
        //     console.warn(this.state)
        // })
    }

  render() {
    return (
      <div className="web-kyp-woods">
        <h1>商品名称:{this.state.name}</h1>
        {/* <div>账号：登陆时间：</div> */}
        <div style={{ marginTop: "16px" }}>
             <Table columns={this._getColumns()} dataSource={this.state.detail} />
        </div>
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          提交订单
        </Button>
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
    actions: bindActionCreators({ getWoods }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Woods);
