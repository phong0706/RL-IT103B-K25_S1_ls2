# Tài liệu Kiểm thử & Phân tích Kỹ thuật - Quuyết toán Hóa đơn Đặt món

## 1. Mô tả giải pháp
- Sử dụng hàm ép kiểu tường minh `Number()` để chuyển đổi các chuỗi thô đầu vào (`rawMainDishPrice`, `rawDrinkPrice`, `rawQuantity`, `rawDistanceKm`) sang kiểu dữ liệu số trước khi thực hiện các phép tính số học.
- Áp dụng Template Literals để định dạng hóa đơn xuất trực tiếp ra Browser Console theo đúng chuẩn giao diện.

## 2. Bảng Test Cases đối chứng

| Trường hợp kiểm thử | Dữ liệu đầu vào thay đổi | Kết quả tính toán mong đợi |
| :--- | :--- | :--- |
| **Test Case 1 (Mặc định)** | `rawMainDishPrice = "120000"`<br>`rawDrinkPrice = "35000"`<br>`rawQuantity = "2"`<br>`rawDistanceKm = "3.5"` | - Tiền món ăn: 310,000 VND<br>- Tiền sau chiết khấu: 290,000 VND<br>- Thuế VAT (8%): 23,200 VND<br>- Cước vận chuyển: 29,000 VND<br>- **Tổng thanh toán: 342,200 VND** |
| **Test Case 2** | `rawMainDishPrice = "150000"`<br>`rawDrinkPrice = "40000"`<br>`rawQuantity = "3"`<br>`rawDistanceKm = "5.0"` | - Tiền món ăn: 570,000 VND<br>- Tiền sau chiết khấu: 550,000 VND<br>- Thuế VAT (8%): 44,000 VND<br>- Cước vận chuyển: 35,000 VND<br>- **Tổng thanh toán: 629,000 VND** |