/**
 *
 * Metric̣
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import Icon from '@ant-design/icons';

const MetricContainer = styled(Row)`
    background: ${(props) => props.theme.colors.white};
    max-width: 600px;
    min-height: fit-content;
    margin-top: 2rem;
    margin-bottom: 5rem;
    border-radius: 12px;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
    justify-content: space-between;
`;
const MetricLeft = styled(Col)`
    display: flex;
    padding: 0.1rem 1.5rem;
`;
const MetricRight = styled(Col)`
    padding: 0.1rem 1rem;
`;

type WrapperProps = {
    component?: React.ElementType | keyof JSX.IntrinsicElements
}
const MetricIcon = styled(Icon).attrs((props: WrapperProps) => {
    return {
        component: props.component,  // <-- add this line
      style: {
            'align-self': 'center',
            'width': '4rem'
      },
    };
  })``;

const MetricCount = styled.strong`
    display: block;
    margin: 1rem 0;
    font-size: xx-large;
`;
const MetricCountTitle = styled.p`
    display: block;
    margin: 1rem;
`;

interface Props {
    color: string;
    icon: Function;
    count: string;
    title: string;
}

function Metric({ color, icon, count, title }: Props) {
    return (
        <MetricContainer>
            <MetricLeft style={{ background: color }}>
                <MetricIcon component={icon} />
            </MetricLeft>
            <MetricRight>
                <MetricCount>{count}</MetricCount>
                <MetricCountTitle>{title}</MetricCountTitle>
            </MetricRight>
        </MetricContainer>
    );
}

export default Metric;
