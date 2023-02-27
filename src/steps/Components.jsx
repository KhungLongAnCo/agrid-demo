import React from "react";
import SimpleDemo from "../demo/SimpleDemo";
import CodeBlock from "./CodeBlock";

function Components(props) {
  return (
    <div>
      <h3>Các thành phần quan trọng của React-AG-Grid bao gồm:</h3>
      AgGridReact: Đây là thành phần chính để hiển thị bảng. Nó cung cấp các
      thuộc tính để cấu hình và quản lý bảng, bao gồm cách hiển thị dữ liệu,
      cách sắp xếp và lọc, và cách xử lý sự kiện. AgGridColumn: Đây là thành
      phần con của AgGridReact để định nghĩa các cột trong bảng. Mỗi
      AgGridColumn đại diện cho một cột dữ liệu trong bảng, và nó cung cấp các
      thuộc tính để định nghĩa cách hiển thị và xử lý dữ liệu trong cột đó. Ví
      dụ đơn giản bằng function components:
      <CodeBlock
        code={`
        import React from 'react';
        import { AgGridColumn, AgGridReact } from 'ag-grid-react';
        import 'ag-grid-community/dist/styles/ag-grid.css';
        import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
        import CodeBlock from './CodeBlock';
        
        function MyTable(props) {
          const rowData = [
            { make: 'Toyota', model: 'Celica', price: 35000 },
            { make: 'Ford', model: 'Mondeo', price: 32000 },
            { make: 'Porsche', model: 'Boxter', price: 72000 }
          ];
        
          return (
            <div className="ag-theme-alpine" style={{ height: '200px', width: '600px' }}>
              <AgGridReact rowData={rowData}>
                <AgGridColumn field="make"></AgGridColumn>
                <AgGridColumn field="model"></AgGridColumn>
                <AgGridColumn field="price"></AgGridColumn>
              </AgGridReact>
            </div>
          );
        }
        `}
        language="javascript"
      />
      Trong ví dụ này, chúng ta đang sử dụng hai thành phần quan trọng của
      React-AG-Grid là AgGridReact và AgGridColumn. Chúng ta cũng đang sử dụng
      một số thuộc tính của AgGridReact, bao gồm rowData để cung cấp dữ liệu cho
      bảng và ag-theme-alpine để áp dụng một giao diện người dùng cho bảng
      <ul>
        <li>
          <a
            href="https://www.ag-grid.com/react-data-grid/components/#component-usage"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Grid Component
          </a>
          : Là thành phần chính để hiển thị các dữ liệu trong bảng. Nó cho phép
          bạn tạo các cột và các hàng để hiển thị dữ liệu và cung cấp các tùy
          chọn để tùy chỉnh nội dung.
        </li>
        <li>
          <a
            href="https://www.ag-grid.com/react-data-grid/tool-panel-columns/"
            target="_blank"
            rel="noreferrer"
          >
            Column Definitions:
          </a>{" "}
          Các định nghĩa cột là danh sách các cột sẽ được hiển thị trong grid và
          các thuộc tính được cấu hình cho từng cột, bao gồm kiểu dữ liệu, định
          dạng hiển thị, và tên cột.
        </li>
        <li>
          <a
            href="https://www.ag-grid.com/react-data-grid/data-update-row-data/"
            target="_blank"
            rel="noreferrer"
          >
            Data Source:
          </a>{" "}
          Được sử dụng để lấy dữ liệu để hiển thị trong grid. Nó có thể là một
          mảng hoặc một REST API để lấy dữ liệu.
        </li>
        <li>
          <a
            href="https://www.ag-grid.com/react-data-grid/row-models/#row-model-comparisons"
            target="_blank"
            rel="noreferrer"
          >
            Row Model:
          </a>{" "}
          Cho phép bạn quản lý cách dữ liệu được hiển thị trong grid. Các chế độ
          hàng bao gồm in-memory, server-side, và infinite scrolling.
        </li>
        <li>
          <a
            href="https://www.ag-grid.com/react-data-grid/cell-rendering/"
            target="_blank"
            rel="noreferrer"
          >
            Cell Renderer:
          </a>{" "}
          Là một thành phần tùy chỉnh được sử dụng để hiển thị dữ liệu trong các
          ô của grid. Bạn có thể sử dụng các renderer được tích hợp sẵn hoặc tạo
          renderer tùy chỉnh của riêng mình.
        </li>
        <li>
          <a
            href="https://www.ag-grid.com/react-data-grid/component-filter/"
            target="_blank"
            rel="noreferrer"
          >
            Filter Component:
          </a>{" "}
          Cho phép người dùng lọc dữ liệu trong grid. Các tùy chọn bao gồm
          filter theo kiểu chữ, filter theo kiểu số, và filter theo kiểu ngày.
        </li>
        <li>
          <a
            href="https://www.ag-grid.com/react-data-grid/row-pagination/"
            target="_blank"
            rel="noreferrer"
          >
            Pagination Component:
          </a>{" "}
          Cho phép người dùng xem các trang dữ liệu trong grid nếu dữ liệu được
          phân trang.
        </li>
        <li>
          <a
            href="https://www.ag-grid.com/react-data-grid/csv-export/"
            target="_blank"
            rel="noreferrer"
          >
            Export Component:
          </a>{" "}
          Cho phép người dùng xuất dữ liệu từ grid sang các định dạng tệp khác
          nhau như CSV, Excel, hoặc PDF.
        </li>
      </ul>
    </div>
  );
}

export default Components;
