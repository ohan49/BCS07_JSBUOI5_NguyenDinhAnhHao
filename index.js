// todo: Quản lý sinh viên
function sinhVien() {
  var diemToan = document.getElementById("diemToan").value * 1;
  var diemLy = document.getElementById("diemLy").value * 1;
  var diemHoa = document.getElementById("diemHoa").value * 1;
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value;
  var diemKhuVuc = 0;
  var diemDoiTuong = 0;
  var ketQua = "";
  console.log(khuVuc);

  if (khuVuc == "a") {
    diemKhuVuc = 2;
  } else if (khuVuc == "b") {
    diemKhuVuc = 1;
  } else if (khuVuc == "c") {
    diemKhuVuc = 0.5;
  } else {
    diemKhuVuc = 0;
  }
  console.log(diemKhuVuc);

  if (doiTuong == 1) {
    diemDoiTuong = 2.5;
  } else if (doiTuong == 2) {
    diemDoiTuong = 1.5;
  } else if (doiTuong == 3) {
    diemDoiTuong = 1;
  } else {
    diemDoiTuong = 0;
  }

  var diemTong = diemToan + diemLy + diemHoa + diemDoiTuong + diemKhuVuc;
  if (diemTong >= diemChuan) {
    ketQua = "Chúc mừng bạn đã đậu với số điểm: " + diemTong;
  } else {
    ketQua = "Bạn chưa đạt điểm chuẩn với tổng số điểm là: " + diemTong;
  }
  if ((diemToan > 10) | (diemToan < 0)) {
    ketQua = "Điểm toán không hợp lệ mời nhập lại";
  }
  if ((diemLy > 10) | (diemLy < 0)) {
    ketQua = "Điểm lý không hợp lệ mời nhập lại";
  }
  if ((diemHoa > 10) | (diemHoa < 0)) {
    ketQua = "Điểm hóa học không hợp lệ mời nhập lại";
  }
  if ((diemChuan > 30) | (diemChuan < 0)) {
    ketQua = "Điểm chuẩn không hợp lệ mời nhập lại";
  }

  document.querySelector("#bT1").innerHTML = ketQua;
}

//todo: Tính tiền điện
function tienDien() {
  var ten = document.getElementById("ten").value;
  var soKw = document.getElementById("soKw").value * 1;
  var soTienDien = 0;
  var tien50KwDau = 500 * 50;
  var tien50KwTiep = 650 * 50;
  var tien100KwKe = 850 * 100;
  var tien150KwKe = 1100 * 100;
  if (soKw < 0) {
    alert("Số kW phải lớn hơn 0");
  } else if (soKw <= 50) {
    soTienDien = 500 * soKw;
  } else if (soKw < 100 && soKw > 50) {
    soTienDien = tien50KwDau + (soKw - 50) * 650;
  } else if (soKw < 200 && soKw > 100) {
    soTienDien = tien50KwDau + tien100KwTiep + (soKw - 100) * 850;
  } else if (soKw < 350 && soKw > 200) {
    soTienDien = tien50KwDau + tien50KwTiep + tien100KwKe + (soKw - 200) * 1100;
  } else {
    soTienDien =
      tien50KwDau +
      tien50KwTiep +
      tien100KwKe +
      tien150KwKe +
      (soKw - 350) * 1300;
  }

  document.querySelector("#bT2").innerHTML =
    "Anh/Chị: " +
    ten +
    " Phải trả tổng tiền điện từ số kW là: " +
    soTienDien +
    "VND";
}

// todo: Tính thuế thu nhập cá nhân
function thuNhapCanNhan() {
  var hoTen = document.getElementById("hoTen").value;
  var thuNhap = document.getElementById("thuNhap").value * 1;
  var soNguoi = document.getElementById("soNguoi").value * 1;
  //   var thuNhapSauthue = 0;
  switch (thuNhap) {
    case thuNhap < 0:
      alert("Số thu nhập phải lớn hơn 0");
      break;
    case thuNhap <= 60:
      var thuNhapSauThue = thuNhap - (thuNhap * 5) / 100 - soNguoi * 1.6;
      break;
    case thuNhap > 60 && thuNhap <= 120:
      var thuNhapSauThue = thuNhap - (thuNhap * 10) / 100 - soNguoi * 1.6;
      break;
    case thuNhap > 120 && thuNhap <= 210:
      var thuNhapSauThue = thuNhap - (thuNhap * 15) / 100 - soNguoi * 1.6;
      break;
    case thuNhap > 210 && thuNhap <= 384:
      var thuNhapSauThue = thuNhap - (thuNhap * 20) / 100 - soNguoi * 1.6;
      break;
    case thuNhap > 384 && thuNhap <= 624:
      var thuNhapSauThue = thuNhap - (thuNhap * 25) / 100 - soNguoi * 1.6;
      break;
    case thuNhap > 624 && thuNhap <= 960:
      var thuNhapSauThue = thuNhap - (thuNhap * 30) / 100 - soNguoi * 1.6;
      break;
    default:
      var thuNhapSauThue = thuNhap - (thuNhap * 35) / 100 - soNguoi * 1.6;
  }
  document.querySelector("#bT3").innerHTML =
    "Ông/Bà: " + hoTen + " có thu nhập chịu thuế là: " + thuNhapSauThue + "tr";
}


// todo: Tính tiền cáp
function change(){
    var loaiKhach = document.getElementById("loaiKhach").value;
    if(loaiKhach == "caNhan"){
        document.getElementById("soKetNoi").disabled = true;
    } else{
        document.getElementById("soKetNoi").disabled = false;
    }
}

function tienCap(){
    var loaiKhach = document.getElementById("loaiKhach").value;
    var soKetNoi = document.getElementById("soKetNoi").value*1;
    var soKenh = document.getElementById("soKenh").value*1;
    var ketQua = 0;
    if(loaiKhach == "caNhan"){
        if(soKenh > 0){
        ketQua = 4.5 + 20.5 + 7.5 * soKenh;
        } else {
            alert("Số kênh phải lớn hơn 0");
        }
    } else{
        if(soKetNoi <= 10 && soKetNoi > 0 && soKenh > 0){
            ketQua = 15 + 75 + 50 *soKenh;
        } else if(soKetNoi > 10 && soKenh > 0){
            ketQua = 15 + 75 + 5 * (soKetNoi - 10) + 50 * soKenh;
        } else{
            alert("Số kết nối hoặc số kênh không phù hợp");
        }
    }
    document.getElementById("bT4").innerHTML = "Kết quả tiền cáp là: " + ketQua;
}