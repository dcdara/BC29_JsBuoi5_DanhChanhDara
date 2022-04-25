
//====================================================================//

//Quản lý tuyển sinh

//Hàm getgetElementById

function getEle(id){
    return document.getElementById(id);
}


//Hàm kiểm tra điểm phải khác <= 0

function kiemTraDiem(diem){
    return !(diem <=0);
}

//Tính điểm 

document.getElementById("btnDiem").onclick = function (){

    var diemChuan = getEle("diemChuan").value * 1;
    var khuVuc = getEle("khuVuc").value * 1;
    var doiTuong = getEle("doiTuong").value * 1;
    var diemMon1 = getEle("diemMon1").value * 1;
    var diemMon2 = getEle("diemMon2").value * 1;
    var diemMon3 = getEle("diemMon3").value * 1;
        reSult = "";
    
    if(diemChuan && kiemTraDiem(diemMon1) && kiemTraDiem(diemMon2) && kiemTraDiem(diemMon3)){

        var tongDiem = diemMon1 + diemMon2 + diemMon3 + (khuVuc + doiTuong);

        if(tongDiem >= diemChuan){

            reSult = "Tổng điểm: " + tongDiem +" => Bạn đã đậu." ;

        }else {

            reSult = "Tổng điểm: " + tongDiem +" => Bạn đã rớt." ;

        }

    }else{

        reSult = "Bạn đã rớt do có điểm 0" ;

    }

    document.getElementById("txtKetQua_show").innerHTML = reSult;
}

//====================================================================//


//Tính tiền điện

const KW_1 = 500;
const KW_2 = 650;
const KW_3 = 850;
const KW_4 = 1100;
const KW_5 = 1300;

document.getElementById("btnTienDien").onclick = function(){
    var hoTen = document.getElementById("hoTen").value;
    var soKwDien = document.getElementById("soKwDien").value * 1;
    var tongTienDien =0;

    if (0 < soKwDien && soKwDien <= 50){

        tongTienDien = soKwDien * KW_1;
        
    }else if (50 < soKwDien && soKwDien <= 100){

        tongTienDien = 50 * KW_1 + (soKwDien - 50) * KW_2;

    }else if (100 < soKwDien && soKwDien <= 200 ){

        tongTienDien = 50 * KW_1 + 50 * KW_2 + (soKwDien - 100) * KW_3;
        
    }else if (200 < soKwDien && soKwDien <= 350){

        tongTienDien = 50 * KW_1 + 50 * KW_2 + 50 * KW_3 + (soKwDien - 200) * KW_4;
        
    }else if (soKwDien > 350){

        tongTienDien = 50 * KW_1 + 50 * KW_2 + 50 * KW_3 + 50 * KW_4 + (soKwDien - 350) * KW_5;
        

    }else {
        
        alert("Bạn chưa nhập họ tên hoặc số kw điện")
    }


    tongTienDien = new Intl.NumberFormat("vn-VN").format(tongTienDien);
    document.getElementById("showTienDien").innerHTML = "Họ tên: " + hoTen + " " + " -Tiền điện: " + tongTienDien + " vnđ";
}

//====================================================================//