// JScript File

		/////////////////  step wise
						function triplogsheet()
						{
						
                 
								var vechNo,routeNo,FromLoc,FromTime,ToLoc,Totime;
//								fn_Calc();
								fn_Inner3();

     							vechNo=document.getElementById("BvehNo1").value;
     							routeNo=document.getElementById("BRoute1").value;
     							FromLoc=document.getElementById("BfromLoc1").value;
     							FromTime=document.getElementById("Bsttime1").value;
     							ToLoc=document.getElementById("BtoLoc1").value;
     							Totime=document.getElementById("BEndTm1").value;
     							CalKm=document.getElementById("Btxtkm1").innerHTML;

						}
						
							function fn_Inner3()
			{

                          
                                
                                if(document.getElementById("Btxtkm1").innerHTML == "0")
                                  {
                                  alert("Please select correct combination of route");
                                  document.getElementById("BfromLoc1").focus();
                                  return false;
                                  }
								var Inner_str	= document.getElementById("tab_stepwise").innerHTML;
								//alert(Inner_str);
								var IvechNo  = document.getElementById("BvehNo1").value;
								var IrouteNo = document.getElementById("BRoute1").value;
								var IFromLoc = document.getElementById("BfromLoc1").value;
								var IFromTime= document.getElementById("Bsttime1").value;
								var IToLoc   = document.getElementById("BtoLoc1").value;
								var ITotime  = document.getElementById("BEndTm1").value;
								var ICalKm   = document.getElementById("Btxtkm1").innerHTML;
								//var Bunddel	=Total/200;
			   				    //var Amt	= format(document.getElementById("Amt").value,2);
								
								P_Row	 = tab_stepwise.insertRow(tab_stepwise.rows.length - 1);
								Row_Obj	 = tab_stepwise.rows;
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
								New_Cell_8.innerHTML = "<IMG Type='Button' class='Button' src='../images/icon_delete.gif' Value='Delete' OnClick='Fn_Delete3("+P_Row.rowIndex+")'>"
								Recs = document.getElementById("hid_Step").value ;
								document.getElementById("hid_Step").value = Recs +''+ IvechNo + '|' + IrouteNo + '|' + IFromLoc +'|' + IFromTime + '|' + IToLoc +'|' + ITotime + '|' + ICalKm + '^'
							
								
								//////////  total km value add  
	
                                document.getElementById("logsheetkm").value=  eval (document.getElementById("logsheetkm").value) +  eval( ICalKm)
                                document.getElementById("lblkmtotal").innerHTML =   ((document.getElementById("logsheetkm").value));
            
            
								document.getElementById("BRoute1").value = "";
								document.getElementById("BfromLoc1").value="";
								document.getElementById("BtoLoc1").value="";
							    document.getElementById("BfromLoc1").value = "";
								document.getElementById("BtoLoc1").value = "";
								document.getElementById("Btxtkm1").innerHTML ="0";
								document.getElementById("BRoute1").focus();
					
					}// end function
					

						
			function Fn_Delete3(val)
			{
				if(confirm('Are you sure you wan`t to delete this Item'))
				{
					var Records = document.getElementById("hid_Step").value;
					var rec_arr=Records.split("^");
					var item=document.getElementById("tab_stepwise").rows(val).innerHTML
					for(var i=0;i<=10;i++)
					item=item.replace("</TD>","|");
					item=item.replace(/(<\/?p)(?:\s[^>]*)?(>)|<[^>]*>/gi,"");
					item=item.substring(0,item.lastIndexOf("|")-3);
					item=item.replace(/\n/g,"").replace(/\r/g,"");
					document.getElementById("tab_stepwise").deleteRow(val);
					var newarr=removeItem(rec_arr,item);
					document.getElementById("hid_Step").value=newarr.join("^");			
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




