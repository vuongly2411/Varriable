let money = +prompt('So tien vay: ');
let rate = +prompt('Lai suat: ');
let time = +prompt('So nam vay tien: ');
tienno = money * (1+ rate*0.01*time);
document.write('Tong so tien no ngan hang: ' + tienno);