				/////////////////  step wise  last
						function BLogSheet()
						{
					
                    	
								var vechNo,routeNo,FromLoc,FromTime,ToLoc,Totime;
//								fn_Calc();
                             
                              
								fn_Inner2();
							

     							vechNo=document.getElementById("BvehNo").value;
     							routeNo=document.getElementById("BRoute").value;
     							FromLoc=document.getElementById("BfromLoc").value;
     							FromTime=document.getElementById("Bsttime").value;
     							ToLoc=document.getElementById("BtoLoc").value;
     							Totime=document.getElementById("BEndTm").value;
     							CalKm=document.getElementById("Btxtkm").innerHTML;
     							

						}
						
				
						
							function fn_Inner2()
			{
                              
                                if(document.getElementById("Btxtkm").innerHTML == "0")
                                  {
                                  alert("Please select correct combination of route");
                                  document.getElementById("BfromLoc").focus();
                                  return false;
                                  }
								var Inner_str	= document.getElementById("Table1").innerHTML;
								//alert(Inner_str);
								var IvechNo  = document.getElementById("BvehNo").value;
								var IrouteNo = document.getElementById("BRoute").value;
								var IFromLoc = document.getElementById("BfromLoc").value;
								var IFromTime= document.getElementById("Bsttime").value;
								var IToLoc   = document.getElementById("BtoLoc").value;
								var ITotime  = document.getElementById("BEndTm").value;
								var ICalKm   = document.getElementById("Btxtkm").innerHTML;
								//var Bunddel	=Total/200;
			   				    //var Amt	= format(document.getElementById("Amt").value,2);
								
								P_Row	 = Table1.insertRow(Table1.rows.length - 1);
								Row_Obj	 = Table1.rows;
								Cell_Obj = P_Row.cells;
								
								New_Cell_1 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_2 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_3 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_4 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_5 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_6 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_7 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_8 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								
								New_Cell_1.align = "Center";
								New_Cell_2.align = "Center";
								New_Cell_3.align = "Center";
								New_Cell_4.align = "Center";
								New_Cell_5.align = "Center";
								New_Cell_6.align = "Center";
								New_Cell_7.align = "Center";
								New_Cell_8.align = "Center";

								New_Cell_1.innerHTML = IvechNo;
								New_Cell_2.innerHTML = IrouteNo;
								New_Cell_3.innerHTML = IFromLoc;
								New_Cell_4.innerHTML = IFromTime;
								New_Cell_5.innerHTML = IToLoc;
								New_Cell_6.innerHTML = ITotime;
								New_Cell_7.innerHTML = ICalKm;
								New_Cell_8.innerHTML = "<IMG Type='Button' class='Button' src='../images/icon_delete.gif' Value='Delete' OnClick='Fn_Delete2("+P_Row.rowIndex+")'>"
								Recs = document.getElementById("BHid_Rec").value ;
								document.getElementById("BHid_Rec").value = Recs +''+ IvechNo + '|' + IrouteNo + '|' + IFromLoc +'|' + IFromTime + '|' + IToLoc +'|' + ITotime + '|' + ICalKm + '^'
								
								
								//////////  total km value add  
	
                                document.getElementById("logsheetkm").value=  eval (document.getElementById("logsheetkm").value) +  eval( ICalKm)
                                document.getElementById("lblkmtotal").innerHTML =   ((document.getElementById("logsheetkm").value));
            
            
								
								document.getElementById("BRoute").value = "";
								document.getElementById("BfromLoc").value="";
								document.getElementById("BtoLoc").value="";
								document.getElementById("BfromLoc").value = "";
								document.getElementById("BtoLoc").value = "";
								document.getElementById("Btxtkm").innerHTML ="0";
								document.getElementById("BRoute").focus();
					
					}// end function
					

	//		var Start =	parseInt(document.getElementById("Start_cat_code").value+document.getElementById("txtstNo").value,10);


			
			function Fn_Delete2(val)
			{
				if(confirm('Are you sure you wan`t to delete this Item'))
				{
					var Records = document.getElementById("BHid_Rec").value;
					var rec_arr=Records.split("^");
					var item=document.getElementById("Table1").rows(val).innerHTML
					for(var i=0;i<=10;i++)
					item=item.replace("</TD>","|");
					item=item.replace(/(<\/?p)(?:\s[^>]*)?(>)|<[^>]*>/gi,"");
					item=item.substring(0,item.lastIndexOf("|")-3);
					item=item.replace(/\n/g,"").replace(/\r/g,"");
					document.getElementById("Table1").deleteRow(val);
					var newarr=removeItem(rec_arr,item);
					document.getElementById("BHid_Rec").value=newarr.join("^");			
					fn_Cal_Total();
					
				}
				else
				return false;
		
			}	
			
			function removeItem(originalArray, itemToRemove)
			 {
					var j;
					j = 0;
					while (j < originalArray.length) 
					{
						if (originalArray[j] == itemToRemove)
						{
						
						 var ele = originalArray[j].split("|");
					    //////////  total km value substract
                        document.getElementById("logsheetkm").value=  eval (document.getElementById("logsheetkm").value) -  eval( ele[6])
                        document.getElementById("lblkmtotal").innerHTML =   (document.getElementById("logsheetkm").value);
    		
							originalArray.splice(j, 1);
							
						}
						 else 
						{
							j++;
						}
					}
					return originalArray;
			}
			




