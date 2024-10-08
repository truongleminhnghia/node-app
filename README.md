# Node App Demo

## Giới thiệu
Dự án này là một ứng dụng Node.js demo, bao gồm cả backend và frontend. Backend sử dụng Express để phục vụ API, trong khi frontend sử dụng React để cung cấp giao diện người dùng. Ứng dụng này nhằm mục đích minh họa cách kết hợp giữa Node.js và React để xây dựng một ứng dụng đầy đủ chức năng.

## Cấu trúc dự án
my-project/ ├── client/ # Thư mục chứa mã nguồn frontend │ ├── src/ # Mã nguồn của frontend │ │ ├── components/ # Thư mục chứa các component │ │ ├── App.js # Tệp chính của ứng dụng React │ │ └── index.js # Tệp khởi động ứng dụng │ └── package.json # Thông tin và phụ thuộc của frontend ├── server/ # Thư mục chứa mã nguồn backend │ ├── src/ # Mã nguồn của backend │ │ ├── routes/ # Thư mục chứa các route │ │ ├── models/ # Thư mục chứa các model │ │ └── controllers/ # Thư mục chứa các controller │ ├── server.js # Tệp chính để khởi động server │ └── package.json # Thông tin và phụ thuộc của backend └── README.md # Tài liệu hướng dẫn sử dụng dự án

## Chạy dự án

### Bước 1: Clone dự án

Đầu tiên, bạn cần clone dự án từ GitHub:

```bash
git clone https://github.com/truongleminhnghia/node-app.git

--> BE
cd server

npm install

npm run dev 

--> FE

cd client

npm install

npm start
