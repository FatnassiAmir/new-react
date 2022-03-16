import React, { useState } from 'react';
import { Select, Typography, Row, Col, Card, Avatar } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;
const demo = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({simplify}) => {
    const [newsCategory, setNewsCategory] = useState('cryptocurrency')
    const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory, count: simplify ? 6 : 12});
    const { data } = useGetCryptosQuery(100);

    if (!cryptoNews?.value) return <Loader />;
    
    return (
        <Row gutter={[24,24]}>
            {
                !simplify && (
                    <Col span={24}>
                        <Select
                            showSearch
                            className="select-news"
                            placeholder="selecta Crypto"
                            optionFilterProp="children"
                            onChange={(value) => setNewsCategory(value)}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase())}
                        >
                            <Option value="cryptocurrency">cryptocurrency</Option>
                            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option> )}
                        </Select>
                    </Col>
                )
            }
            {
                cryptoNews?.value?.map((news, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverble className="news-card">
                            <a href={news.url} target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className="news-title" level={4}>{news.name}</Title>
                                    <img style={{maxWidth:'200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demo} alt="newsImage"/>
                                </div>
                                <p>
                                    {news.description > 100
                                        ? `${news.description.substring(0, 100)}...`
                                        : news.description
                                    }
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={news.provider[0]?.iamge?.thumbnail?.contentUrl || demo} alt="" />
                                        <Text className="provider-name">{news.provider[0]?.name}</Text>
                                    </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default News
