import MyTable from "./Pages/Table";

import { Layout } from 'antd';
import MyHeader from "./Components/Header";
import MyFooter from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Smth from "./Pages/Smth";
const { Content } = Layout;


export default function App() {
  return (
    <Layout>
      <MyHeader />

      <Content style={{ minHeight: 'calc(100vh - 131px)' }}>
        <Routes>
          <Route path="/" element={<MyTable />} />
          <Route path="/smth" element={<Smth />} />
        </Routes>

      </Content>

      <MyFooter />
    </Layout>
  );
}

