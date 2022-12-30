import { Button, Table } from "antd";
import { CSVLink } from "react-csv";

export default function Csv() {
  const list = [
    { category: "credit", amount: 200 },
    { category: "debit", amount: 100 },
    { category: "debit", amount: 100 },
  ];
  const columns = [
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
  ];
  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <Table defaultExpandAllRows={true} columns={columns} dataSource={list} />
      <Button type="primary">
        <CSVLink
          filename={"Expense_Table.csv"}
          data={[...list]}
          className="btn btn-primary"
          onClick={() => {
            console.log("The file is downloading");
          }}
        >
          Export to CSV
        </CSVLink>
      </Button>
    </div>
  );
}
