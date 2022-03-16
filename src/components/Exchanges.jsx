import React from 'react';
import { Typography, Collapse, Row, Col } from 'antd';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';

import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'

const {Text} = Typography;
const {Panel} = Collapse;

const Exchanges = () => {

    const { data: cryptosList, isFetching } = useGetCryptosQuery(100);

    const cryptos = cryptosList?.data?.coins;

    if (isFetching) return <Loader/>

    return (
        <>
        <Row>
            <Col span={6}><Text>Extchanges</Text></Col>
            <Col span={6}><Text>24h Tard Volume</Text></Col>
            <Col span={6}><Text>Markets</Text></Col>
            <Col span={6}><Text>Change</Text></Col>
        </Row>
            <Collapse>
            {
                cryptos.map((currency) => (
                    <Panel
                        showArrow={false}
                        header={(<Row>
                            <Col span={6}><Text>{`${currency.rank}. `}<img style={{maxWidth: '25px'}} className="crypto-image" src={currency.iconUrl}/> {` ${currency.name}`}</Text></Col>
                            <Col span={6}><Text>{millify(currency.volume)}</Text></Col>
                            <Col span={6}><Text>{millify(currency.marketCap)}</Text></Col>
                            <Col span={6}><Text>{millify(currency.change)}%</Text></Col>
                        </Row>)} 
                    >
                        {HTMLReactParser(`${currency.description}`)}
                </Panel>
                ))
            }
                
            </Collapse>
        </>
    )
}

export default Exchanges
