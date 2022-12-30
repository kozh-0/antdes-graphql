import MyTable from "./Pages/Table";

import { Layout } from 'antd';
import MyHeader from "./Components/Header";
import MyFooter from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Smth from "./Pages/Smth";
import Csv from "./Pages/Csv";
const { Content } = Layout;


export default function App() {
  return (
    <Layout>
      <MyHeader />

      <Content style={{ minHeight: 'calc(100vh - 131px)' }}>
        <Routes>
          <Route path="/antdes-graphql" element={<MyTable />} />
          <Route path="/antdes-graphql/smth" element={<Smth />} />
          <Route path="/antdes-graphql/csv" element={<Csv />} />
        </Routes>

      </Content>

      <MyFooter />
    </Layout>
  );
}

