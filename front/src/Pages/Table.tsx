import { Col, Image, Spin, Table, Typography } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
interface Idata {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}

const antIcon = <LoadingOutlined style={{ fontSize: 54 }} spin />

const columns = [
	{
		title: 'id',
		dataIndex: 'id',
		key: 'id',
		sorter: (a: any, b: any) => b.id - a.id
	},
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
		render: (text: string) => <Typography.Text copyable>{text}</Typography.Text>,
	},
	{
		title: 'Image',
		dataIndex: 'thumbnailUrl',
		key: 'thumbnailUrl',
		render: (image: string) => <Image height={100} src={image} alt='img' />
	},
];

export default function MyTable() {
	const [data, setData] = useState<Idata[]>();

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then(res => res.json())
			.then((res: Idata[]) => res.map(el => ({ ...el, key: el.id })))
			.then(data => setData(data))
	}, [])

	return (
		<Col xs={24} md={{ span: 20, offset: 2 }}>
			{data ? <Table
				dataSource={data}
				columns={columns}
				pagination={{
					defaultPageSize: 5,
					showSizeChanger: true,
					pageSizeOptions: [5, 10, 15, 30]
				}}
			/> : <Col xs={24} offset={12} style={{marginTop:'40px'}}>
				<Spin tip='Loading...' indicator={antIcon} />
			</Col>
			}
		</Col>
	)
}

