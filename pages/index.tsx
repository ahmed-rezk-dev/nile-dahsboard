import Metric from 'components/Metric';
import { Row } from 'antd';
import { useUserQuery } from 'generated/graphql';
import { MessagesSvg, MoneyBagSvg, OrdersSvg, UsersSvg } from 'utils/svg';

const IndexPage = () => {
    const { data } = useUserQuery();
    return (
        <>
            {/* Metric Cards */}
            <Row gutter={16} justify="space-between">
                <Metric color="#2dce89" icon={UsersSvg} title="Users Total" count="100,000"></Metric>
                <Metric color="#f5365c" icon={MessagesSvg} title="Messages Total" count="10,000"></Metric>
                <Metric color="#1890ff" icon={OrdersSvg} title="Orders Total" count="20,000"></Metric>
                <Metric color="#613cea" icon={MoneyBagSvg} title="Money Total" count="60,000"></Metric>
            </Row>

            <h4>
                {data?.user.firstname} {data?.user.lastname}
            </h4>
        </>
    );
};

export default IndexPage;
