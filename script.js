
    var para_g="";
    var para_p=0;
    // function for the grades
    function abm(para_total){
        if (para_total >=80 && para_total<=100){
            para_g="A+";
            para_p=5.00;
            }
        else if (para_total >=70 && para_total<=79){
            para_g="A";
            para_p=4.00;
            }
        else if (para_total >=60 && para_total<=69){
            para_g="A-";
            para_p=3.50;
            }
        else if (para_total >=50 && para_total<=59){
            para_g="B";
            para_p=3.00;
            }
        else if (para_total >=40 && para_total<=49){
            para_g="C";
            para_p=2.00;
            }
        
        else if (para_total >=0 && para_total<=39){
            para_g="F";
            para_p=0.00;
        }
        else{
            alert("WRONG INPUT!!! Your input should be numbers and the total mark should be between 1 to 100.");
        } 

    }
    //functions for individual subject 
    function cf(){
        var para_a= parseInt(document.getElementById("btm").value);
        var para_b= parseInt(document.getElementById("bpm").value);
        var para_t=para_a+para_b;
        abm(para_t);
        document.getElementById("btotal").value=para_t;
        document.getElementById("bgrade").value=para_g;
        document.getElementById("bpoint").value=para_p;

    }

    function english(){
        var para_a= parseInt(document.getElementById("etm").value);
        var para_b= parseInt(document.getElementById("epm").value);
        var para_t=para_a+para_b;
        abm(para_t);
        document.getElementById("etotal").value=para_t;
        document.getElementById("egrade").value=para_g;
        document.getElementById("epoint").value=para_p;

    }

    function physics(){
        var para_a= parseInt(document.getElementById("ptm").value);
        var para_b= parseInt(document.getElementById("ppm").value);
        var para_t=para_a+para_b;
        abm(para_t);
        document.getElementById("ptotal").value=para_t;
        document.getElementById("pgrade").value=para_g;
        document.getElementById("ppoint").value=para_p;

    }

    function chemistry(){
        var para_a= parseInt(document.getElementById("ctm").value);
        var para_b= parseInt(document.getElementById("cpm").value);
        var para_t=para_a+para_b;
        abm(para_t);
        document.getElementById("ctotal").value=para_t;
        document.getElementById("cgrade").value=para_g;
        document.getElementById("cpoint").value=para_p;

    }

    function ict(){
        var para_a= parseInt(document.getElementById("itm").value);
        var para_b= parseInt(document.getElementById("ipm").value);
        var para_t=para_a+para_b;
        abm(para_t);
        document.getElementById("itotal").value=para_t;
        document.getElementById("igrade").value=para_g;
        document.getElementById("ipoint").value=para_p;

    }


    // function for calculating total
    function calc_total(){
        var a= parseInt(document.getElementById("btotal").value);
        var b=parseInt(document.getElementById("etotal").value);
        var c=parseInt(document.getElementById("ptotal").value);
        var d=parseInt(document.getElementById("ctotal").value);
        var e=parseInt(document.getElementById("itotal").value);

        var point_a= parseFloat(document.getElementById("bpoint").value); 
        var point_b= parseFloat(document.getElementById("epoint").value); 
        var point_c= parseFloat(document.getElementById("ppoint").value); 
        var point_d= parseFloat(document.getElementById("cpoint").value); 
        var point_e= parseFloat(document.getElementById("ipoint").value); 

        var grade_a=document.getElementById("bgrade").value;
        var grade_b=document.getElementById("egrade").value;
        var grade_c=document.getElementById("pgrade").value;
        var grade_d=document.getElementById("cgrade").value;
        var grade_e=document.getElementById("igrade").value;

        var z=a+b+c+d+e;
        document.getElementById("totalmark").value=z;

        if(a<40 || b<40 || c<40 || d<40 || e<40){
            document.getElementById("totalgpa").value="0.00";

        }else{
            var point_z=((point_a+point_b+point_c+point_d+point_e)/5);
        document.getElementById("totalgpa").value=point_z;

        }
        

        if(grade_a=="F" || grade_b=="F" || grade_c=="F" || grade_d=="F" || grade_e=="F" ){
            document.getElementById("totalgrade").value="F";
        }else{
            if(point_z>=2 && point_z<3){
            document.getElementById("totalgrade").value="C";
        }
        else if(point_z>=3 && point_z<3.5){
            document.getElementById("totalgrade").value="B";
        }
        else if(point_z>=3.5 && point_z<4){
            document.getElementById("totalgrade").value="A-";
        }
        else if(point_z>=4 && point_z<5){
            document.getElementById("totalgrade").value="A";
        }
        else if(point_z==5){
            document.getElementById("totalgrade").value="A+";
        }

        }
       

    }
