const customerName = "Nguyen Van An";
const rawMainDishPrice = "120000"; // Giá món chính (VND)
const rawDrinkPrice = "35000";     // Giá đồ uống (VND)
const rawQuantity = "2";           // Số lượng suất
const rawDistanceKm = "3.5";       // Cự ly giao hàng (km)
const openingDiscount = 20000;     // Giảm giá khai trương cố định (VND)
const vatRate = 0.08;              // Thuế suất VAT (8%)

const mainDishPrice = Number(rawMainDishPrice);
const drinkPrice = Number(rawDrinkPrice);
const quantity = Number(rawQuantity);
const distanceKm = Number(rawDistanceKm);


const foodSubtotal = (mainDishPrice + drinkPrice) * quantity;
const discountedTotal = foodSubtotal - openingDiscount;
const vatAmount = discountedTotal * vatRate;
const shippingFee = 15000 + distanceKm * 4000;
const finalPayment = discountedTotal + vatAmount + shippingFee;

console.log("================ HÓA ĐƠN ĐẶT MÓN ================");
console.log(`Khách hàng: ${customerName}`);
console.log(`Tiền món ăn: ${foodSubtotal} VND`);
console.log(`Chiết khấu khai trương: ${openingDiscount} VND`);
console.log(`Tiền sau chiết khấu: ${discountedTotal} VND`);
console.log(`Thuế VAT (8%): ${vatAmount} VND`);
console.log(`Cước vận chuyển (${distanceKm} km): ${shippingFee} VND`);
console.log("-------------------------------------------------");
console.log(`TỔNG THANH TOÁN THỰC TẾ: ${finalPayment} VND`);
console.log("=================================================");