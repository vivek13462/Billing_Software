// JScript File

var count = "1";
var currentpage="";


				
							function PassModCal()
						{
								var denom,start,end;
								fn_Calc();
							    var start =	document.getElementById("stidstart").value
								var end	= document.getElementById("stidend").value
								
						}

	
		
				function fn_Calc()
			            {
            	             var start =document.getElementById("stidstart").value;
				            // var end1=parseFloat(document.getElementById("End_cat_code").value);
				             var end	=document.getElementById("stidend").value;
					                count2=(eval(end)-eval((start)));
						            document.getElementById("lblstid").innerHTML = count2 ;
						            //alert(document.getElementById("lblstid").value);
						            document.getElementById("lblstidamt").innerHTML = (count2 * 12) ;

        	            }


