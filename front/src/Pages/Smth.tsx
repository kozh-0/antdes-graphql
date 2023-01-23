import { Card, Col, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../apollo/countries";

const antIcon = <LoadingOutlined style={{ fontSize: 54 }} spin />





export default function Smth() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);


  if (loading) {
    return <Col xs={24} offset={12} style={{ marginTop: '40px' }}>
      <Spin tip='Loading...' indicator={antIcon} />
    </Col>
  }

  if (error) {
    return <h2>Error...</h2>
  }

  // const columns = [
  //   {
  //     title: 'Country',
  //     dataIndex: 'id',
  //     key: 'id',
  //     sorter: (a: any, b: any) => b.id - a.id
  //   },
  //   {
  //     title: 'Title',
  //     dataIndex: 'title',
  //     key: 'title',
  //     render: (text: string) => <Typography.Text copyable>{text}</Typography.Text>,
  //   },
  //   {
  //     title: 'Image',
  //     dataIndex: 'thumbnailUrl',
  //     key: 'thumbnailUrl',
  //     render: (image: string) => <Image height={100} src={image} alt='img' />
  //   },
  // ];



  return <>
  <h1 style={{textAlign: 'center'}}>Total countries: {data.countries.length}</h1>
    <Col xs={24} md={{ span: 20, offset: 2 }} className='kek'>
      {data.countries.map((el: any, idx: number) => (
        <Card size="small" title={el.name + ' (' + el.capital + ')'} className='country'>
          <p>Langs: {el.languages.map((el: any, idx: number, arr: any[]) => <>
            {arr[arr.length - 1].name === el.name ? `${el.name}.` : `${el.name}, `}
          </>)}</p>
        </Card>
      ))}
    </Col>;
  </>
}
