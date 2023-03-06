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

const CellEditing = () => {
  const [columnDefs, setColumnDefs] = useState([
    { headerName: "ID", field: "id", sortable: true },
    { headerName: "Name", field: "name", sortable: true },
    { headerName: "Age", field: "age", sortable: true },
    { headerName: "Country", field: "country", sortable: true },
  ]);

  const [rowData, setRowData] = useState([
    { id: 1, name: "John", age: 25, country: "USA" },
    { id: 2, name: "Mike", age: 30, country: "Canada" },
    { id: 3, name: "Sarah", age: 20, country: "UK" },
    { id: 4, name: "David", age: 35, country: "Australia" },
  ]);

  const defaultColDef = {
    sortable: true,
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
  import CodeBlock from '../steps/CodeBlock';
  
  const MyGrid = () => {
    const [columnDefs, setColumnDefs] = useState([
      { headerName: 'ID', field: 'id', sortable: true },
      { headerName: 'Name', field: 'name', sortable: true },
      { headerName: 'Age', field: 'age', sortable: true },
      { headerName: 'Country', field: 'country', sortable: true },
    ]);
  
    const [rowData, setRowData] = useState([
      { id: 1, name: 'John', age: 25, country: 'USA' },
      { id: 2, name: 'Mike', age: 30, country: 'Canada' },
      { id: 3, name: 'Sarah', age: 20, country: 'UK' },
      { id: 4, name: 'David', age: 35, country: 'Australia' },
    ]);
  
    const defaultColDef = {
      sortable: true,
    };
  
    return (
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
        />
      </div>
    );
  };
  
  export default MyGrid;
            `}
            language="javascript"
          />
          <div>
            Trong ví dụ trên, chúng ta định nghĩa một bảng dữ liệu với 4 cột:
            ID, Name, Age và Country. Các cột này đều có thể sắp xếp được bằng
            cách đặt thuộc tính sortable của cột là true và sử dụng thuộc tính
            defaultColDef để đặt mặc định các cột có thể sắp xếp được. Khi người
            dùng click vào tiêu đề của cột, bảng dữ liệu sẽ tự động sắp xếp lại
            dữ liệu theo cột đó. Ngoài ra, chúng ta cũng có thể tùy chỉnh hành
            vi của Sorting bằng cách sử dụng các thuộc tính khác như
            sortingOrder để đặt thứ tự sắp xếp hoặc sortIndex để đặt cột được
            sắp xếp mặc định.
          </div>
        </Col>
        <Col span={12}>
          <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              defaultColDef={defaultColDef}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CellEditing;
