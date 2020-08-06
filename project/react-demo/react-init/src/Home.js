import React from 'react'
import { Row, Col, AutoComplete, Button, Rate } from 'antd'

import "./Home.css"
import { SearchOutlined } from '@ant-design/icons';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: [
                { value: '111' },
                { value: '222' },
                { value: '333' },
            ],
            cattegoryList: [
                { value: '全部' },
                { value: '明星' },
                { value: '交通汽车' },
                { value: '科技数码' },
                { value: '美妆' },
                { value: '帅哥' },
                { value: '美女' },
            ],
            categoryKey: "全部",
            conditionList: [
                { value: '全部' },
                { value: '个人博主视频' },
                { value: '蓝V博主视频' },
                { value: '带有购物链接视频' },
                { value: '广告视频' },
            ],
            conditionKey: "全部",
            goodsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }
    render() {
        return (
            <div className='home'>
                <Row>
                    <Col span={8} offset={0}>
                        <AutoComplete
                            options={this.state.options}
                            style={{
                                width: "calc(100% - 100px)",
                            }}
                            onSelect={this.onSelect}
                            onSearch={this.onSearch}
                            placeholder="input here"
                        />
                        <Button type='primary' icon={<SearchOutlined />}>Search</Button>
                    </Col>
                </Row>
                <div className="category">
                    <div className="category-title">
                        分类：
                    </div>
                    <div className="category-container">
                        {
                            this.state.cattegoryList.map(item => {
                                return (<p key={item.value} onClick={() => { this.setState({ categoryKey: item.value }) }} className={this.state.categoryKey === item.value ? 'active' : ''}>{item.value}</p>)
                            })
                        }
                    </div>
                </div>
                <div className="condition">
                    <div className="condition-title">
                        分类：
                    </div>
                    <div className="condition-container">
                        {
                            this.state.conditionList.map(item => {
                                return (<p key={item.value} onClick={() => { this.setState({ conditionKey: item.value }) }} className={this.state.conditionKey === item.value ? 'active' : ''}>{item.value}</p>)
                            })
                        }
                    </div>
                </div>
                <div className="goods">
                    {
                        this.state.goodsList.map(item => {
                            return (
                                <div className="goods-item" key={item}>
                                    <div className="item-left">
                                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596736562097&di=a8aaa7cc5eb03cfc8de90a60847c29aa&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg" alt="" />
                                    </div>
                                    <div className="item-middle">
                                        <p>category</p>
                                        <p>title</p>
                                        <div className='rating'>
                                            NoxScore <Rate defaultValue={2.5} /> &nbsp;&nbsp;&nbsp;<span className='ratings-num'>1000 ratings</span>
                                        </div>
                                    </div>
                                    <div className="item-right">
                                        <p> <i className='iconfont icon-bofang'></i> 221.57M</p>
                                        <p> <i className='iconfont icon-video'></i>236</p>
                                        <p> <i className='iconfont icon-yonghu'></i>1.84M</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='loading-status'>
                    {/* Loging More */}
                    All Loaded
                </div>
            </div>
        )
    }

    onSearch() {

    }

    onSelect() {

    }
}