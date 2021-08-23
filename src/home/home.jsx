import React, { Component } from 'react'
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
        // console.log(this.nowMonth(202108),'this.nowMonth(202108)')
        console.log(this.getLastDayOfMonth(2021, 1),'444444444444444')
        this.nowPro = 202108
        let currentPeriod = this.nowPro.toString()
        let currentPeriod2 = this.nowMonth(this.nowPro)
        return (
            <div>
                <h1>Home 组件</h1>
            </div>
        )
    }
}
