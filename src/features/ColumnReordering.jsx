import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { Col, Row } from "antd";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import CodeBlock from "../steps/CodeBlock";

const ColumnReordering = () => {
  const [columnDefs, setColumnDefs] = useState([
    { headerName: "ID", field: "id", rowGroup: true },
    { headerName: "Name", field: "name" },
    { headerName: "Age", field: "age" },
    { headerName: "Country", field: "country" },
  ]);

  const [rowData, setRowData] = useState([
    { id: 1, name: "John", age: 25, country: "USA" },
    { id: 2, name: "Mike", age: 30, country: "Canada" },
    { id: 3, name: "Sarah", age: 20, country: "UK" },
    { id: 4, name: "David", age: 35, country: "Australia" },
    { id: 5, name: "Anna", age: 28, country: "USA" },
    { id: 6, name: "Alex", age: 27, country: "Canada" },
    { id: 7, name: "Kate", age: 23, country: "UK" },
    { id: 8, name: "Peter", age: 40, country: "Australia" },
  ]);

  const autoGroupColumnDef = {
    headerName: "Group",
    minWidth: 200,
  };

  return (
    <div>
      <Row gutter={[16, 24]}>
        <Col span={12}>
          <CodeBlock
            code={`
              import React, { useState } from 'react';
              import { AgGridReact } from 'ag-grid-react';
              
              import 'ag-grid-community/dist/styles/ag-grid.css';
              import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
              
              const MyGrid = () => {
                const [columnDefs, setColumnDefs] = useState([
                  { headerName: 'ID', field: 'id', rowGroup: true },
                  { headerName: 'Name', field: 'name' },
                  { headerName: 'Age', field: 'age' },
                  { headerName: 'Country', field: 'country' },
                ]);
              
                const [rowData, setRowData] = useState([
                  { id: 1, name: 'John', age: 25, country: 'USA' },
                  { id: 2, name: 'Mike', age: 30, country: 'Canada' },
                  { id: 3, name: 'Sarah', age: 20, country: 'UK' },
                  { id: 4, name: 'David', age: 35, country: 'Australia' },
                  { id: 5, name: 'Anna', age: 28, country: 'USA' },
                  { id: 6, name: 'Alex', age: 27, country: 'Canada' },
                  { id: 7, name: 'Kate', age: 23, country: 'UK' },
                  { id: 8, name: 'Peter', age: 40, country: 'Australia' },
                ]);
              
                const autoGroupColumnDef = {
                  headerName: 'Group',
                  minWidth: 200,
                };
              
                return (
                  <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
                    <AgGridReact
                      columnDefs={columnDefs}
                      rowData={rowData}
                      autoGroupColumnDef={autoGroupColumnDef}
                      groupUseEntireRow={true}
                    />
                  </div>
                );
              };
              
              export default MyGrid;
              
                  
                `}
            language="javascript"
          />
          <div>
            Trong ví dụ này, chúng ta sử dụng hook useState để quản lý state cho
            các cột và dữ liệu của bảng. Các cột và dữ liệu được khởi tạo mặc
            định trong state. Chúng ta sử dụng thuộc tính rowGroup để cho biết
            cột nào có thể được nhóm. Các thuộc tính của bảng được định nghĩa
            trong function component và sử dụng như trong các ví dụ trước. Trong
            ví dụ này, chúng ta cũng sử dụng autoGroupColumnDef để định nghĩa
            cột tự động nhóm và groupUseEntireRow để cho phép nhóm dữ liệu theo
            hàng. Khi chúng ta nhấn vào cột có thuộc tính rowGroup, bảng sẽ tự
            động nhóm dữ liệu theo cột đó. Chúng ta cũng có thể tùy chỉnh hành
            vi của ColumnReordering bằng cách sử dụng các thuộc tính khác như
            groupDefaultExpanded để mở rộng tất cả các nhóm mặc định.
          </div>
        </Col>
        <Col span={12}>
          <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              autoGroupColumnDef={autoGroupColumnDef}
              groupUseEntireRow={true}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ColumnReordering;
