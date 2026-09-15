const rawPrice = "45000";
const rawQuantity = "3";
const rawDistance = "4.5";
const rawHour = "12";
const voucherCode = "FREESHIP_EXTRA";

const stockQuantity = 10;
const isStoreOpen = true;

// Ép kiểu dữ liệu chuỗi sang kiểu số (Number)
const price = Number(rawPrice);
const quantity = Number(rawQuantity);
const distance = Number(rawDistance);
const hour = Number(rawHour);

// Tổng tiền món ăn ban đầu
const foodSubtotal = price * quantity;

// Phí vận chuyển cơ bản: 16.000 + (số km tiếp theo * 4.000)
// Math.max(0, distance - 1) đảm bảo nếu distance <= 1km thì số km tiếp theo bằng 0
const baseDeliveryFee = 16000 + Math.max(0, distance - 1) * 4000;

// Phụ phí cao điểm: 10.000 VNĐ nếu thuộc (11h-13h) hoặc (18h-20h)
const isPeakHour = (hour >= 11 && hour <= 13) || (hour >= 18 && hour <= 20);
const peakSurcharge = isPeakHour * 10000;

// Ưu đãi Freeship: 15.000 VNĐ nếu tiền món >= 100k, cự ly <= 5km và đúng mã voucher
const isFreeshipEligible =
  foodSubtotal >= 100000 && distance <= 5 && voucherCode === "FREESHIP_EXTRA";
const shippingDiscount = isFreeshipEligible * 15000;

// Kiểm tra dữ liệu không bị lỗi ép kiểu (NaN)
const isDataValid =
  !Number.isNaN(price) &&
  !Number.isNaN(quantity) &&
  !Number.isNaN(distance) &&
  !Number.isNaN(hour);

// Thẩm định toàn bộ điều kiện nghiệp vụ
const isOrderValid =
  isDataValid &&
  isStoreOpen &&
  quantity > 0 &&
  quantity <= stockQuantity &&
  distance >= 0 &&
  distance <= 15 &&
  hour >= 0 &&
  hour <= 23;

// Tổng tiền dự kiến trước khi kiểm tra tính hợp lệ
const calculatedPayment = foodSubtotal + baseDeliveryFee + peakSurcharge - shippingDiscount;

// Ép số tiền thanh toán về 0 VNĐ bằng toán tử logic ngắn mạch nếu đơn không hợp lệ
const finalPayment = isOrderValid && calculatedPayment;

// Xuất chi tiết hóa đơn quyết toán ra Console
console.log(`
========= HÓA ĐƠN QUYẾT TOÁN SHOPEEFOOD =========
Trạng thái đơn hàng : ${isOrderValid ? "HỢP LỆ" : "KHÔNG HỢP LỆ"}
-------------------------------------------------
Tổng tiền món ăn   : ${foodSubtotal.toLocaleString("vi-VN")} VNĐ
Cước phí giao hàng : ${baseDeliveryFee.toLocaleString("vi-VN")} VNĐ
Phụ phí giờ cao điểm: ${peakSurcharge.toLocaleString("vi-VN")} VNĐ
Giảm giá vận chuyển: -${shippingDiscount.toLocaleString("vi-VN")} VNĐ
-------------------------------------------------
TỔNG TIỀN THANH TOÁN: ${finalPayment.toLocaleString("vi-VN")} VNĐ
=================================================
`);