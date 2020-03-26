const ten = prompt("Nhap ten cua ban");
const sinh = prompt("Nhap nam sinh cua ban");
const tuoi = 2020 - parseInt(sinh);
const gioiTinh = prompt("Nhap gioi tinh cua ban");
// su dung const hoac let, khong dung var

const head = document.querySelector("h1"); //chon element h1
const divA = document.querySelector(".div-A"); //chon element co class la div-A
const div = document.querySelector("div"); // chon element div
const divB = document.querySelector(".div-B");
const divC = document.querySelector(".div-C");
// xem them css3 selector de biet them nhieu cach chon element

const textDivA = divA.innerHTML; // lay noi dung cua divA
const textDivB = divB.innerHTML; // lay noi dung cua divB
const textDivC = divC.innerHTML; // lay noi dung cua divC

divA.innerHTML = textDivA + " " + ten; //thay doi noi dung cua divA
divB.innerHTML = textDivB + " " + tuoi; //thay doi noi dung cua divB
divC.innerHTML = gioiTinh; //thay doi noi dung cua divC
