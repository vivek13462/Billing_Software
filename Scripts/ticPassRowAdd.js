// JScript File
var count = "1";
var currentpage="";


				
							function PassRowAdd()
						{
								var denom,start,end;
								fn_Calc();
								fn_Inner();
								var start =	document.getElementById("ststart").value;
								var end	=   document.getElementById("stend").value;
								//CheckItemExists(denom,start,end);
								
						}
					
//							function KillClock() 
//							{
//							if(clockID)
//								{
//								clearTimeout(clockID);
//								clockID  = 0;
//								}
//							}

//						function CheckItemExists(denom,start,end)
//						{
//							var str=denom+";"+start+";"+end;
//							CallFunctionFromPage_CheckExists(str)
//							
//						}

//						function ItemExists_callback(res)
//						{
//						var response=res.value;
//						if(!response)
//						{
//							fn_Calc();
//							fn_Inner();
//						}
//						else
//						{
//						alert("Sorry!!! This Item already Exists in the database.");
//						return false;
//						}
//						}

//				
//						function RemoveDeno(intModelID)
//						{

//							for(i=Form1.Select1.length;i>0;i--)		// Remove Desc
//							{
//							Form1.Select1.options.remove(i)
//							} 
//						}
//				
//							function Select()
//						{
//								var resultStr = ""; 
//								objddl2 =document.getElementById('Select1');
//								for(var i = 0; i < objddl2.options.length; i++ )
//							{  
//									if( objddl2.options[i].selected ) 
//								 {    
//									resultStr+= (objddl2.options[i].text);
//									var objddl1 = document.getElementById('txttest');
//									objddl1.value=resultStr;
//									var x=document.getElementById('Select1');
//									x.style.display="none";  
//									return false;
//									//alert(resultStr)
//								} 
//							} 
//							
//						}
//			
//					function getServerTime()
//				
//				{
//							
//							var objddl1 = document.getElementById('txttest');
//							var str = objddl1.value
//							var x=document.getElementById('Select1');
//							x.style.visibility="visible";
//							if(document.getElementById('Select1'))
//							document.getElementById('Select1').focus();
//							if (objddl1.value=="")
//							{
//							var x=document.getElementById('Select1');
//							x.style.visibility="hidden";
//							}
//							RemoveDeno(str);
//							CallFunctionFromPage_GetDeno(str);
//							 // asynchronous call
//				
//				}

//						function getServerTime_callback(res)
//				{
//				
//						var ds = res.value;
//						if(ds !=null) //&& ds.Tabels[0].Rows.length>0)
//						{	
//								objddl2 =document.getElementById('Select1');
//								for(var i=0;i<ds.Tables[0].Rows.length;i++)
//							{
//								objddl2 =document.getElementById('Select1');
//								var option = new Option(ds.Tables[0].Rows[i].tic_den_des.toString(), ds.Tables[0].Rows[i].tic_den_no.toString())
//								var count=i;
//								objddl2.options[i]= option;
//								objddl2.size=count + 1;
//								
//							}
//						}
//						
//											
//				}	
//				
//				function CheckEndExists()
//				{
//					var End =	parseInt(document.getElementById("End_cat_code").value+document.getElementById("txtendSNo").value,10);
//					var tic1=document.getElementById("txttest").value;
//					var tab=document.getElementById("Grd_Item");
//					if(tab.rows.length>2)
//					{
//								for(var j=1;j<=tab.rows.length-1;j++)
//						{
//							var temp=GetTicandstartandEndcode(GetFormat(tab.rows[j].innerHTML)).split("@");
//							var tic=temp[0];
//							var start=parseInt(temp[1]);
//							var end=parseInt(temp[2]);
//								if(tic1==tic && (End>=start && End<=end))
//							{
//								alert("You have previously entered this value");
//								
//								
//								return false;
//							}
//						}
//					}
//					return true;
//				}
//		
//			function CheckStartExists()
//			{
//					//Check at client side
//					var Start =	parseInt(document.getElementById("Start_cat_code").value+document.getElementById("txtstNo").value,10);
//					var tic1=document.getElementById("txttest").value;
//					var tab=document.getElementById("Grd_Item");
//					if(tab.rows.length>2)
//				{
//				
//						for(var j=1;j<=tab.rows.length-1;j++)
//					{
//							var temp=GetTicandstartandEndcode(GetFormat(tab.rows[j].innerHTML)).split("@");
//							var tic=temp[0];
//							var start=parseInt(temp[1]);
//							var end=parseInt(temp[2]);
//							if(tic1==tic && (Start>=start && Start<=end))
//							{
//								
//								alert("You have previously entered this value");
//								document.getElementById("Start_cat_code").value="";
//								document.getElementById("txtstNo").value="";
//								//document.getElementById("txttest").value="";
//								document.getElementById("Start_cat_code").focus();
//								return false;
//							}
//					}
//				
//				//end clientside validation
//				//Start server side validation
//				}
//				//CallFunctionFromPage_CheckStartExists(Start,tic1);
//					 
//					return true;

//			}
//			
//							function ItemStartExists_callback(res)
//						{
//								if(document.getElementById("txtstNo").value=="" || document.getElementById("txtstNo").value.length<6)
//								{
//									return false;
//								}
//								var response=res.value;
//								if(response)
//							{
//								alert("This Item already Exists in the database.");
//								return false;
//							}
//							return true;
//						}
//						

//			
//			function CheckAlreadyInserted()
//			{
//				if(!CheckStartExists())
//				return false;
//				if(!CheckEndExists())
//				return false;
//				var TDen 	= document.getElementById("txttest").value;
//				var select 	= document.getElementById("Select1").value;
//				var Start =	parseInt(document.getElementById("Start_cat_code").value+document.getElementById("txtstNo").value,10);
//				var End	= parseInt(document.getElementById("End_cat_code").value+document.getElementById("txtendSNo").value,10);
//				var Total = document.getElementById("totalTicket").value;
//				var Bunddel	=Total/100;
//				var tab=document.getElementById("Grd_Item");
//				//var newitem=TDen + '|' + Start + '|' + End +'|' + Total + '|' + Bunddel +'|' + Amt
//				if(tab.rows.length>2)
//				{
//				
//					for(var j=2;j<=tab.rows.length-1;j++)
//					{
//							var temp=GetTicandstartandEndcode(GetFormat(tab.rows[j].innerHTML)).split("@");
//							//alert("Hi this is"+temp);
//							var tic=temp[0];
//							var start=parseInt(temp[1]);
//							var end=parseInt(temp[2]);
//							if(tic==TDen && (( start>=Start && Start<end ) || (end<=End && End<start)))
//							{
//								//alert(tic+" "+TDen);
//								//alert(Start+" "+start);
//								//alert(End+" "+end);
//								alert("You have previously entered this value");
//								return false;
//							}
//					}
//				}
//					
//						return true;
//			
//			}
//			
//			function GetTicandstartandEndcode(val)
//			{
//				var item;
//				var item2;
//				//alert(val);
//				item2=val.substring(0,val.indexOf("|"));
//				var findex=val.indexOf("|");
//				item=val.substring(val.indexOf("|")+1,val.indexOf("|",findex+1))
//				findex=val.indexOf("|",findex+1);
//				item=item.replace("-","")
//				var start=item;		//copy item in a temp var start
//				item=val.substring(findex+1,val.indexOf("|",findex+1))
//				item=item.replace("-","");
//				//alert(item2+"@"+start+"@"+item);
//				return item2+"@"+start+"@"+item;
//			
//			}
//			
//			function GetFormat(item)
//			{
//			
//				for(var i=0;i<=10;i++)
//				item=item.replace("</TD>","|");
//				item=item.replace(/(<\/?p)(?:\s[^>]*)?(>)|<[^>]*>/gi,"");
//				item=item.substring(0,item.lastIndexOf("|")-3);
//				item=item.replace(/\n/g,"").replace(/\r/g,"");
//				return item;
//				
//			}
//			
//			
			function fn_Inner()
			{
			
//							var Total = document.getElementById("totalTicket").value;
//							var Isvalid	=parseInt(Total,10)%200;
//                            if(Isvalid!=0 && document.getElementById("txtendSNo").value.length!=0)
//						{
//							alert("Incorrect input!!! Please enter figures in a multiple of 200");
//							document.getElementById("txtendSNo").focus();
//							return false;
//						}
//						
						if (document.getElementById("ststart").value == "" || document.getElementById("stend").value =="" )
						{
							//alert("Please enter numbers only.");
							return false;
						}
				
					  else if(document.getElementById("ststart").value > document.getElementById("stend").value)
						{	
							 alert('Starting Sr No. should be less than ending Sr No.')
							 return false;
						}
							 else
						 {			
						 
							//if(CheckAlreadyInserted())
							//{
								var Inner_str = document.getElementById("stu_pass").innerHTML;
								//alert(Inner_str);
								var TDen 	= 'Student Pass No';
								//var select 	= document.getElementById("Select1").value;
								var Start =	document.getElementById("ststart").value;
								var End	= document.getElementById("stend").value;
								var Total = document.getElementById("lblstpass").innerHTML;
								//var Bunddel	=Total/200;
			   				    var Amt	= document.getElementById("lblstpassamt").innerHTML;
								
								P_Row	 = stu_pass.insertRow(stu_pass.rows.length - 1);
								Row_Obj	 = stu_pass.rows;
								Cell_Obj = P_Row.cells;
								
								New_Cell_1 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_2 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_3 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_4 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_5 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								//New_Cell_6 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								//New_Cell_7 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								
								New_Cell_1.align = "Center";
								New_Cell_2.align = "Center";
								New_Cell_3.align = "Center";
								New_Cell_4.align = "Center";
								New_Cell_5.align = "Center";
								//New_Cell_6.align = "right";
								//New_Cell_7.align = "Center";

								New_Cell_1.innerHTML = TDen;
								New_Cell_2.innerHTML = Start;
								New_Cell_3.innerHTML = End;
								New_Cell_4.innerHTML = Total;
								New_Cell_5.innerHTML = Amt;
								//New_Cell_6.innerHTML = Amt;
								//New_Cell_7.innerHTML = "<IMG Type='Button' class='Button' src='../images/icon_delete.gif' Value='Delete' OnClick='Fn_Delete("+P_Row.rowIndex+")'>"
								Recs = document.getElementById("Hid_Rec").value ;
								document.getElementById("Hid_Rec").value = Start + '|' + End +'|' + Total + '|' + '|' + Amt +  '^'
								//document.getElementById("txttest").value = "";
								document.getElementById("ststart").value = "";
								document.getElementById("stend").value = "";
								document.getElementById("lblstpass").innerHTML = 0;
								//document.getElementById("bunddle").value = "";
								document.getElementById("lblstpassamt").innerHTML = 0;
								//document.getElementById("Start_cat_code").value="";
								//document.getElementById("End_cat_code").value="";
								//document.getElementById("txttest").focus();
								//fn_Cal_Total();
							//}//checkalreadins
						}//end else
					}// end function
//			
//			function CheckCount()
//			{
//			var grid=document.getElementById("Grd_Item");
//			if (grid.rows.length<3)
//			{
//			alert("Please fill some data first.");
//			return false;
//			}
//			return true;
//			}
//				
//				function Setfocus(e)
//			{
//					var keynum=e.charCode? e.charCode : e.keyCode;
//					if(keynum!=46 || keynum!=8)
//				{
//						if(document.getElementById("Start_cat_code").value.length==3)
//						document.getElementById("txtstNo").focus();
//				}
//			}
//			
//			function Setfocusdenom(e)
//			{
//					var keynum=e.charCode? e.charCode : e.keyCode;
//					if(keynum!=46 || keynum!=8)
//				{
//						if(document.getElementById("txttest").value!="")
//						document.getElementById("txttest").focus();
//				}
//			}
//			
//				function Setfocus1(e)
//			{
//					var keynum=e.charCode? e.charCode : e.keyCode;
//					if(keynum!=46 || keynum!=8)
//				{
//						if(document.getElementById("End_cat_code").value.length==3)
//						document.getElementById("txtendSNo").focus();
//				}
//			}
//			
//			function Fn_Delete(val)
//			{
//				if(confirm('Are you sure you wan`t to delete this Item'))
//				{
//					var Records = document.getElementById("Hid_Rec").value;
//					var rec_arr=Records.split("^");
//					var item=document.getElementById("Grd_Item").rows(val).innerHTML
//					for(var i=0;i<=10;i++)
//					item=item.replace("</TD>","|");
//					item=item.replace(/(<\/?p)(?:\s[^>]*)?(>)|<[^>]*>/gi,"");
//					item=item.substring(0,item.lastIndexOf("|")-3);
//					item=item.replace(/\n/g,"").replace(/\r/g,"");
//					document.getElementById("Grd_Item").deleteRow(val);
//					var newarr=removeItem(rec_arr,item);
//					document.getElementById("Hid_Rec").value=newarr.join("^");			
//					fn_Cal_Total();
//					
//				}
//				else
//				return false;
//		
//			}	
//			
//			function removeItem(originalArray, itemToRemove)
//			 {
//					var j;
//					j = 0;
//					while (j < originalArray.length) 
//					{
//						if (originalArray[j] == itemToRemove)
//						{
//							originalArray.splice(j, 1);
//							
//						}
//						 else 
//						{
//							j++;
//						}
//					}
//					return originalArray;
//			}
//			
//				
	function fn_Calc()
			{
				 
//				 var str=document.getElementById("txttest").value
//				 var search=str.match(/\d+(?!\.)/.exec(str))
//			     search += '' 
//				 if (search.length == 2)
//	             {
	            // var start1=parseFloat(document.getElementById("Start_cat_code").value);
//alert("Hi");
	             var start =document.getElementById("ststart").value;
				// var end1=parseFloat(document.getElementById("End_cat_code").value);
				 var end	=document.getElementById("stend").value;
				
//						count=str.replace(/\+0.15/,"");
//					    count1=0.15;
					    count2=(eval(end)-eval((start)))+1;
						document.getElementById("lblstpass").innerHTML = count2 ;
						//alert(document.getElementById("lblstid").value);
						document.getElementById("lblstpassamt").innerHTML = (count2 * 12) ;
//						document.getElementById("totalTicket").value =(end-start)+1 ;
//						document.getElementById("Amt").value = (eval(document.getElementById("txttest").value)*eval(document.getElementById("totalTicket").value)) ;
//				       
			//	}
//			//		if (search.length != 2)
//			//    {
//						 
//			//			 document.getElementById("totalTicket").value =(document.getElementById("txtendSNo").value-document.getElementById("txtstNo").value)+1 ;
//			//			 var xyz=eval(document.getElementById("txttest").value)* eval(document.getElementById("totalTicket").value);
//			//			 document.getElementById("Amt").value=xyz;
//			//			
//			//    }
	}

//				function fn_Cal_Total()
//			{
//					var Arr_Amt, Str, Tot_Amt, i=0;
//					Str = document.getElementById("Hid_Rec").value;
//					var Arr_Rec = Str.split("^");
//					Tot_Amt = 0;
//						for(i=0;i<Arr_Rec.length-1;i++ )
//					{
//						Arr_Amt = Arr_Rec[i].split("|");
//						Tot_Amt = parseFloat(Tot_Amt) + parseFloat(Arr_Amt[5])+ 0.00;
//					    //alert(Tot_Amt);
//						//alert(Tot_Amt)
//					}
//						//document.getElementById("Total").innerHTML = format(Tot_Amt,2);
//						document.getElementById("Hid_total").value = format(Tot_Amt,2);
//				}
//			
//			
//			
//			function format(expr,decplaces) 
//			{ 
//				var str=""+Math.round(eval(expr)*Math.pow(10,decplaces)); 
//					while(str.length<=decplaces) 
//				{ 
//						str="0"+str; 
//				} 
//				var decpoint=str.length-decplaces; 
//				return str.substring(0,decpoint) + "." + str.substring(decpoint,str.length); 
//			} 

//			
//			function IsNumeric(strString)
//            {
//					var ValidChars = "0123456789.";
//					var Char;
//						for (i = 0; i < strString.length; i++) 
//					{ 
//							Char = strString.charAt(i); 
//							if (ValidChars.indexOf(Char) == -1) 
//						{
//							return false;
//						}
//					}
//						return true;
//			}
//			
//			
//			var clockID = 0;

//function UpdateClock() 
//{
//   if(clockID) 
//   {
//      clearTimeout(clockID);
//      clockID  = 0;
//   }

//   var tDate = new Date();
//   var zone;
//	var hrs=tDate.getHours();
//	if(hrs>=12)
//	zone="PM";
//	else
//	zone="AM";
//	if(hrs>12)
//	hrs=hrs%12;
//	var min=tDate.getMinutes();
//	if(min<10)
//	min="0"+min;
//	var sec=tDate.getSeconds();
//	if(sec<10)
//	sec="0"+sec;
//   lbltime.innerHTML = "" + hrs + ":" + min + ":" + sec+ " "+zone;
//   
//   clockID = setTimeout("UpdateClock()", 1000);
//}
//function StartClock() {
//   clockID = setTimeout("UpdateClock()", 500);
//}


//function load()
//{
//objddl1 =document.getElementById('Grd_Item');
//objddl2 =document.getElementById('Select1');
//objddl2.size=0;
//objddl1.height=20;
//}

//function check()
//{
//if (document.Form1.txtInChaNo.value=="")
//{
//alert("Please enter challan no")
//document.Form1.txtInChaNo.focus();
//return false;
//}
//if(document.Form1.ddlvendor)
//{
//		if (document.Form1.ddlvendor.selectedIndex==0)
//		{
//		alert("Please select vendor")
//		//document.Form1.txtInChaNo.focus();
//		return false;
//		}
//}
//if(!CheckCount())
//return false;
//}


//function ValidateKey(e)
//{
//		var unicode=e.charCode? e.charCode : e.keyCode //determine keycode
//		if (unicode>=48 && unicode<=57)
//			return true; 
//		else
//			return false; 
//	
//}

//function CheckItem()
//{
//		if(!CheckDenom())
//		{
//			alert("Pleases select proper denomination");
//			return false;
//		}
//		return true;
//							
//}

//						function CheckDenom()
//				{
//							var TDen 	= document.getElementById("txttest").value;
//								objddl2 =document.getElementById('Select1');
//								for(var i = 0; i < objddl2.options.length; i++ )
//							{  
//									
//									if( objddl2.options[i].text==TDen ) 
//								 {  
//								 
//									 return true;
//								 }
//							}  
//							return false;
//				}



