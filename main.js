/*Bài tập 1
- Đầu vào:
    + Lương 1 ngày (100.000).
    + Số ngày làm. (20 ngày)
- Xử lý:
    + Tiền lương = Lương 1 ngày * Số ngày làm
- Đầu ra:
    + Tiền lương
*/
var currencyFormat = new Intl.NumberFormat("vn-VN")
var luong1Ngay = 100000;
var soNgayLam = 20;
var totalSalary = luong1Ngay * soNgayLam;

console.log("Bài tập 1 - Tổng số lương của 20 ngày là: " + currencyFormat.format(totalSalary));

// --------------------------------------------------------------------------------------

/*Bài tập 2
- Đầu vào:
    + Số thứ 1 (1.1).
    + Số thứ 2 (2.2).  
    + Số thứ 3 (3.3).
    + Số thứ 4 (4.4). 
    + Số thứ 5 (5.5).  
- Xử lý:
    + Giá trị trung bình = (Số thứ 1 + Số thứ 2 + Số thứ 3 + Số thứ 4 + Số thứ 5)/5
- Đầu ra:
    + Giá trị trung bình
*/
var value1 = 1.1;
var value2 = 2.2;
var value3 = 3.3;
var value4 = 4.4;
var value5 = 5.5;
var avgValue = (value1+value2+value3+value4+value5)/5

console.log("Bài tập 2 - Giá trị trung bình của 5 số là: " + avgValue)

// --------------------------------------------------------------------------------------

/*Bài tập 3
- Đầu vào:
    + Tỷ giá chuyển đổi từ USD sang VND (23.500).
    + Số lượng USD (3 USD).  
- Xử lý:
    + Số tiền sau khi quy đổi sang VND = Số lượng USD * Tỷ giá chuyển đổi USD sang VND
- Đầu ra:
    + Số tiền sau khi quy đổi sang VND
*/
var tyGia = 23500;
var slUSD = 3;
var slVND = tyGia*slUSD;

console.log("Bài tập 3 - Số tiền VND nhận được sau khi chuyển đổi từ 3 USD là: " + currencyFormat.format(slVND));

// --------------------------------------------------------------------------------------

/*Bài tập 4
- Đầu vào:
    + Chiều rộng hình chữ nhật (10 cm).
    + Chiều dài hình chữ nhật (20 cm).  
- Xử lý:
    + Chu vi hình chữ nhật = (Chiều rộng hình chữ nhật + Chiều dài hình chữ nhật)*2
    + Diện tích hình chữ nhật = Chiều dài hình chữ nhật * Chiều rộng hình chữ nhật
- Đầu ra:
    + Chu hình hình chữ nhật
    + Diện tích hình chữ nhật
*/
var chieuDai = 20;
var chieuRong = 10;
var chuVi = (chieuDai+chieuRong)*2;
var dientich = chieuDai*chieuRong;

console.log("Bài tập 4 - Hình chữ nhật có chiều dài 20 cm và chiều rộng 10 cm có Chu vi là: "+ chuVi+" cm và Diện tích là: "+dientich+ " cm2");

// --------------------------------------------------------------------------------------

/*Bài tập 5
- Đầu vào:
    + Số có 2 chữ số (68)
- Xử lý:
    + Chữ số hàng chục  = Số có 2 chữ số chia lấy phần nguyên với 10
    + Chữ số hàng đơn vị  = Số có 2 chữ số chia lấy phần dư với 10
    + Tổng 2 chữ số = Chữ số hàng chục + Chữ số hàng đơn vị
- Đầu ra:
    + Tổng 2 chữ số
*/
var soNhapVao = 68;
var chuSoDv = soNhapVao%10;
var chuSoChuc = Math.floor(soNhapVao/10);
var tongKy = chuSoDv + chuSoChuc;

console.log("Bài tập 5 - Tổng ký của 2 chữ số là "+ tongKy);

// --------------------------------------------------------------------------------------