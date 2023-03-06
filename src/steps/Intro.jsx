import React from "react";

function Intro(props) {
  return (
    <div>
      <h2>Intro</h2>
      <h3>
        AG Grid là một thư viện dành cho Javascript để tạo ra các bảng dữ liệu,
        cung cấp nhiều tính năng như phân trang, sắp xếp, lọc, tìm kiếm, chỉnh
        sửa dữ liệu trực tiếp, kéo thả cột, dòng và cột tự động điều chỉnh kích
        thước cho phù hợp với nội dung của các ô. Nó được sử dụng rộng rãi trong
        các ứng dụng web và các dự án phát triển phần mềm. AG Grid hỗ trợ các
        framework như Angular, React, Vue, Web Components và các ngôn ngữ lập
        trình khác nhau như Javascript, TypeScript, Vue, React, Angular, và các
        ngôn ngữ lập trình khác.
        <br />
        React-AG Grid được xây dựng dựa trên các công nghệ web tiên tiến như
        ReactJS và TypeScript, giúp cho việc phát triển ứng dụng nhanh chóng và
        hiệu quả hơn. Nó cũng được thiết kế để tương thích với các công nghệ và
        thư viện khác như Redux và MobX.
        <br />
        Với React-AG Grid, bạn có thể tùy chỉnh giao diện của bảng dữ liệu, áp
        dụng các tính năng mà không cần viết mã phức tạp và dễ dàng tích hợp vào
        các ứng dụng ReactJS hiện có. Tính linh hoạt và tính mở rộng cao của thư
        viện này đã được chứng minh thông qua việc sử dụng trong nhiều ứng dụng
        web lớn và phức tạp.
      </h3>
      <h3>
        Một số trang web nổi tiếng sử dụng AG Grid:
        <ol>
          <li>Amazon</li>
          <li>IBM</li>
          <li>Microsoft</li>
          <li>Cisco</li>
          <li>Siemens</li>
          <li>Accenture</li>
          <li>Panasonic</li>
          <li>Cognizant</li>
          <li>Deloitte</li>
          <li>Bloomberg</li>
        </ol>
      </h3>
      <h2>Community / Enterprise</h2>
      <h3>
        Ag-Grid là một thư viện lưới dữ liệu phổ biến được sử dụng trong các ứng
        dụng web. Ag-Grid được cung cấp dưới hai dạng chính: Ag-Grid Community
        và Ag-Grid Enterprise.
        <br /> Ag-Grid Community là phiên bản miễn phí của Ag-Grid, cung cấp các
        tính năng cơ bản cho phép hiển thị dữ liệu, sắp xếp, lọc và tìm kiếm. Nó
        hỗ trợ các nền tảng React, Angular, Vue, JavaScript và HTML5.
        <hr /> Ag-Grid Enterprise là phiên bản trả phí của Ag-Grid, đi kèm với
        nhiều tính năng bổ sung và khả năng tùy chỉnh mạnh mẽ hơn. Ag-Grid
        Enterprise bao gồm các tính năng như Grouping, Aggregation, Pivoting,
        Enterprise Search và Enterprise Data Export. Nó cũng có thêm các giao
        diện API mở rộng cho phép tích hợp các tính năng khác nhau với các ứng
        dụng. Một số tính năng của Ag-Grid Enterprise có thể được thêm vào
        Ag-Grid Community bằng cách sử dụng các plugin trả phí, tuy nhiên tính
        năng này có giới hạn và không thể tùy chỉnh nhiều như trong phiên bản
        Enterprise. Vì vậy, sự khác biệt chính giữa Ag-Grid Community và Ag-Grid
        Enterprise là tính năng và khả năng tùy chỉnh của chúng. Ag-Grid
        Enterprise có tính năng mạnh mẽ hơn và cho phép tùy chỉnh linh hoạt hơn
        để đáp ứng nhu cầu của các ứng dụng doanh nghiệp, trong khi Ag-Grid
        Community cung cấp các tính năng cơ bản để hiển thị dữ liệu và phù hợp
        cho các ứng dụng nhỏ hơn và các trang web cá nhân.
      </h3>
      <h2> Dưới đây là một số điểm mạnh và điểm yếu của react-ag-grid:</h2>
      <h2>Điểm mạnh:</h2>
      <h3>
        <br />
        Tính tùy biến cao: React-ag-grid cho phép người dùng tùy biến các cột và
        hàng, định dạng hiển thị, các sự kiện và hành động trên các dữ liệu được
        hiển thị. Điều này giúp cho việc hiển thị dữ liệu trở nên linh hoạt và
        dễ dàng hơn. Khả năng xử lý các bảng dữ liệu lớn: React-ag-grid có khả
        năng xử lý các bảng dữ liệu lớn một cách hiệu quả. Việc xử lý dữ liệu
        được thực hiện bằng cách render các phần tử trong bảng theo cách chia
        nhỏ để tối ưu hiệu năng. Hỗ trợ cho nhiều kiểu dữ liệu: React-ag-grid hỗ
        trợ cho nhiều loại dữ liệu khác nhau, bao gồm cả dữ liệu từ các nguồn
        bên ngoài.
        <hr />
        <h2>Điểm yếu:</h2>
        <br />
        Điểm yếu lớn nhất của react-ag-grid là việc phải trả phí sử dụng khi sử
        dụng ở một số ứng dụng thương mại. Việc tùy biến bảng dữ liệu và các tùy
        chọn có thể khiến việc cấu hình và thiết lập trở nên phức tạp hơn so với
        một số thư viện khác. Có một số hạn chế về hiển thị dữ liệu nhất định,
        ví dụ như khó khăn trong việc hiển thị nhiều dòng dữ liệu với chiều rộng
        cố định của bảng.
      </h3>
    </div>
  );
}

export default Intro;
