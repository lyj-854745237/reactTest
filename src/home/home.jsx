import React, { Component } from 'react'
import { Input,Button } from 'antd';
import {CameraOutlined,
        TrademarkOutlined,
        AppstoreAddOutlined,
        DesktopOutlined,
        DatabaseOutlined
    } from '@ant-design/icons';
const { Search } = Input;

const suffix = (
  <CameraOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

export default class Home extends Component {
    nowMonth (period) {
        period = period.toString();
        let d = new Date(period.substring(0, 4), period.substr(4, 2));
                d.setMonth((d.getMonth() - 1));
                let year = d.getFullYear();
                let month = d.getMonth() + 1;
                if (month < 10) {
                    month = '0' + month;
                } else {
                    month = month + '';
                }
        return year + month
    }
    getLastDayOfMonth (year, month) { // 获取某年某月的最后一天
        let date = new Date(year, month - 1, '01');
        console.log(date,'1111111')
        date.setDate(1);
        console.log(date,'222222')
        date.setMonth(date.getMonth() + 1);
        console.log(date,'33333333')
        console.log(date.getTime(),'date.getTime()')
        let cdate = new Date(date.getTime() - 1000 * 60 * 60 * 24);
        console.log(cdate,'0000000000')
        console.log(cdate.getDate(),'cdate.getDate()')
        return cdate.getDate();
    }
    render() {
        return (
            <div>
                <div style = {{display:'flex'}}>
                    <div style = {{width:'60%',height:'270px'}}>
                        <div>常用工具</div>
                        <Search
                            placeholder="input search text"
                            enterButton="Search"
                            size="large"
                            suffix={suffix}
                            onSearch={onSearch}
                            />
                        <div>
                            <span><TrademarkOutlined style={{ color: '#1890ff' }} /> 商标注册</span>
                            <span><AppstoreAddOutlined style={{ color: '#1890ff' }}/> 商标分类</span>
                            <span><DesktopOutlined style={{ color: '#1890ff' }}/> 商标大数据</span>
                            <span><DatabaseOutlined style={{ color: '#1890ff' }}/> 商标业务介绍</span>
                        </div>
                    </div>
                    <div style = {{width:'40%',padding:'20px'}}>
                        <div>
                            <div>迪士尼有限公司</div>
                            <div>企业余额:￥12424</div>
                            <Button type="primary">立即充值</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
