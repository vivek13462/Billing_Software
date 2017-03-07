		
						function LogSheet()
						{
						
                                //alert(document.getElementById("Hid_Rec").value); 						
								//alert("KK");
								var HH,MM,VechNo,TF,DRVVD,DRVNM,CHKNM,CHKM1,vechid;
//								fn_Calc();
                                if (document.getElementById("tableVech").value == '')
                                {
                                document.getElementById("tableVech").focus();
                                alert ('Please Enter Vech No ')
								return false;
                                }
                                else
                                {
                                
                                 fn_Inner();
                                 }
     							HH=document.getElementById("tableH").value;
     							MM=document.getElementById("tableM").value;
     							VechNo=document.getElementById("tableVech").value;
     							TF=document.getElementById("tableTF").value;
     							DRVVD=document.getElementById("tableDrvCd").value;
     							DRVNM=document.getElementById("tableDN").value;
     							vechid=document.getElementById("hdnvechid").value;
     							CHKM1=document.getElementById('txtkms').options.text;
     							CHKNM=document.getElementById('tablecmb').options.text;
						}
						
						function fn_Inner()
			            {
                           
                                
								var Inner_str	= document.getElementById("Grd_Item").innerHTML;
								
								var THH = document.getElementById("tableH").value + ':' + document.getElementById("tableM").value;
     							//var TMM=;
     							var TVechNo = document.getElementById("hdnvechno").value;
     							
     							//var resp1 = document.getElementById('tableVech').value;
					            //var ele1 = resp1.split("/");
					            //var busno;
					            //for (var i = 0; i < ele1.length; i++)
                                //{
                                   // if (i==1)
							        //{
							         //   TVechNo=ele1[i];
							        //}
                                //}
                                   
     							var TTF=document.getElementById("tableTF").value;
     							var CODE=document.getElementById("tableCD").value;
     							var TDRVVD=document.getElementById("tableDrvCd").value;
     							var TDRVNM=document.getElementById("tableDN").value;
     							var TCHKNM=document.getElementById('tablecmb').options.value;
     							var txtkms=document.getElementById("txtkms").value;
     							var txtchallan=document.getElementById("txtchallan").value;
     							var vechid=document.getElementById("hdnvechid").value;
     							
//     							var TCREK=document.getElementById("tablecmb1").value;
								
								P_Row	 = Grd_Item.insertRow(Grd_Item.rows.length - 1);
								Row_Obj	 = Grd_Item.rows;
								Cell_Obj = P_Row.cells;
								
								New_Cell_1 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_2 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_3 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_4 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_5 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_6 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_7 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_8 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_9 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_10 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_11 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								
								New_Cell_1.align = "Center";
								New_Cell_2.align = "Center";
								New_Cell_3.align = "Center";
								New_Cell_4.align = "Center";
								New_Cell_5.align = "Center";
								New_Cell_6.align = "Center";
								New_Cell_7.align = "Center";
								New_Cell_8.align = "Center";
								New_Cell_9.align = "Center";
								New_Cell_10.align = "Center";
								New_Cell_11.align = "Center";

								New_Cell_1.innerHTML = THH;
								New_Cell_2.innerHTML = TVechNo;
								New_Cell_3.innerHTML = TTF;
								New_Cell_4.innerHTML = CODE;
								New_Cell_5.innerHTML = TCHKNM ;
								New_Cell_6.innerHTML = TDRVVD ;
								New_Cell_7.innerHTML = TDRVNM;
								New_Cell_8.innerHTML = txtkms;
								New_Cell_9.innerHTML = txtchallan;
								New_Cell_10.innerHTML = vechid;
								
								New_Cell_11.innerHTML = "<IMG Type='Button' class='Button' src='../images/icon_delete.gif' Value='Delete' OnClick='Fn_Delete("+P_Row.rowIndex+")'>"
								Recs = document.getElementById("Hid_Rec").value ;
								document.getElementById("Hid_Rec").value = Recs +''+ THH + '|' + TVechNo + '|' + TTF + '|' + CODE + '|' + TCHKNM  + '|' + TDRVVD  +'|' + TDRVNM + '|' + txtkms + '|'+ txtchallan + '|' + vechid + '^';
								document.getElementById("tableH").value = "";
								document.getElementById("tableM").value="";
								document.getElementById("tableTF").value="";
								document.getElementById("tableDrvCd").value = "";
								document.getElementById("tableDN").value = "";
								document.getElementById("tableCD").value ="";
								document.getElementById("tableVech").value ="";
								document.getElementById("txtchallan").value ="";
								document.getElementById("txtkms").value ="";
								document.getElementById("hdnvechid").value ="";
						
								document.getElementById("tableVech").focus();
								fn_Cal_Total();
								
					}
					

			
			function Fn_Delete(val)
			{
			
				if(confirm('Are you sure you wan`t to delete this Item'))
				{
					var Records = document.getElementById("Hid_Rec").value;
					var rec_arr=Records.split("^");
					var item=document.getElementById("Grd_Item").rows(val).innerHTML
					for(var i=0;i<=11;i++)
					item=item.replace("</TD>","|");
					item=item.replace(/(<\/?p)(?:\s[^>]*)?(>)|<[^>]*>/gi,"");
					item=item.substring(0,item.lastIndexOf("|")-3);
					item=item.replace(/\n/g,"").replace(/\r/g,"");
					document.getElementById("Grd_Item").deleteRow(val);
					var newarr=removeItem(rec_arr,item);
					document.getElementById("Hid_Rec").value=newarr.join("^");	
							
					
					fn_Cal_Total();
					
				}
				else
				return false;
		
			}	
			
			
			function fn_Cal_Total()
			{
			       
					var Arr_Amt, Str, Tot_Amt, i=0;
					Str = document.getElementById("Hid_Rec").value;
					var Arr_Rec = Str.split("^");
					Tot_Amt = 0;
					for(i=0;i<Arr_Rec.length-1;i++ )
					{
						
						Arr_Amt = Arr_Rec[i].split("|");
						 
						Tot_Amt = parseFloat(Tot_Amt) + parseFloat(Arr_Amt[2])+ 0.00;
						 
						
					   
					}
					//document.getElementById("Total").innerHTML = format(Tot_Amt,2);
				    document.getElementById("txtTotal").value = Tot_Amt;
			}
			function removeItem(originalArray, itemToRemove)
			 {
					var j;
					j = 0;
					while (j < originalArray.length) 
					{
						if (originalArray[j] == itemToRemove)
						{
							originalArray.splice(j, 1);
							
						}
						 else 
						{
							j++;
						}
					}
					return originalArray;
			}


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




