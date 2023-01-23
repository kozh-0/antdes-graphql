import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import MyModal from './Modal';
const { Header } = Layout;

const flx = { display: 'flex', alignItems: 'center', justifyContent: 'space-between' };
const arr = [
    { label: 'Home', key: '/antdes-graphql' },
    { label: 'Smth', key: '/antdes-graphql/smth' },
    { label: 'Csv', key: '/antdes-graphql/csv' },
]


export default function MyHeader() {
    const nav = useNavigate();


    return (
        <Header className='header' style={flx}>
            <Menu
                style={{ fontSize: '18px' }}
                onClick={({ key }) => nav(key)}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={arr}
            />
            <MyModal />

        </Header>
    )
}
