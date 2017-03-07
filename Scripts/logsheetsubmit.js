// JScript File

						
						
					//////////////////traffic  trip wise					
						function LogSheet()
						{
						

							  
                               //alert(document.getElementById("Hid_Rec").value); 						
								var vechNo,routeNo,FromLoc,FromTime,ToLoc,Totime;
//								fn_Calc();
								fn_Inner();

     							vechNo=document.getElementById("txtvehno").value;
     							routeNo=document.getElementById("txtroute").value;
     							FromLoc=document.getElementById("ddlfrom").value;
     							FromTime=document.getElementById("txtfromtime").value;
     							ToLoc=document.getElementById("ddlto").value;
     							Totime=document.getElementById("txtuptotime").value;
     							CalKm=document.getElementById("txtkm").innerHTML;
     							//alert("ravi test");

								
						}
						
							function fn_Inner()
			{
			
			
	
                           
                                // alert("Hi");
                                if(document.getElementById("txtkm").innerHTML == "0")
                                  {
                                  alert("Please select correct combination of route");
                                  document.getElementById("ddlfrom").focus();
                                  return false;
                                  }
								var Inner_str	= document.getElementById("Grd_Item").innerHTML;
								//alert(Inner_str);
								var IvechNo  = document.getElementById("txtvehno").value;
								var IrouteNo = document.getElementById("txtroute").value;
								var IFromLoc = document.getElementById("ddlfrom").value;
								var IFromTime= document.getElementById("txtfromtime").value;
								var IToLoc   = document.getElementById("ddlto").value;
								var ITotime  = document.getElementById("txtuptotime").value;
								var ICalKm   = document.getElementById("txtkm").innerHTML;
								//var Bunddel	=Total/200;
			   				    //var Amt	= format(document.getElementById("Amt").value,2);
								
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
								New_Cell_8.innerHTML = "<IMG Type='Button' class='Button' src='../images/icon_delete.gif' Value='Delete' OnClick='Fn_Delete("+P_Row.rowIndex+")'>"
								Recs = document.getElementById("Hid_Rec").value ;
								document.getElementById("Hid_Rec").value = Recs +''+ IvechNo + '|' + IrouteNo + '|' + IFromLoc +'|' + IFromTime + '|' + IToLoc +'|' + ITotime + '|' + ICalKm + '^'
								
								//////////  total km value add  
	
                                document.getElementById("logsheetkm").value=  eval (document.getElementById("logsheetkm").value) +  eval( ICalKm)
                                document.getElementById("lblkmtotal").innerHTML =   document.getElementById("logsheetkm").value
                      
                       
            
								
								document.getElementById("txtroute").value = "";
								document.getElementById("ddlfrom").value="";
								document.getElementById("ddlto").value="";
								document.getElementById("txtfromtime").value = "";
								document.getElementById("txtuptotime").value = "";
								document.getElementById("txtkm").innerHTML ="0";
								document.getElementById("txtroute").focus();
			
								
								
				
					}
					
			
			function Fn_Delete(val)
			{
			//alert("alert?")
				if(confirm(' Parat Karo Naka ?Are you sure you wan`t to delete this Item'))
				{
				
					var Records = document.getElementById("Hid_Rec").value;
					var rec_arr=Records.split("^");
					var item=document.getElementById("Grd_Item").rows(val).innerHTML
					
					for(var i=0;i<=10;i++)
					item=item.replace("</TD>","|");
					item=item.replace(/(<\/?p)(?:\s[^>]*)?(>)|<[^>]*>/gi,"");
					item=item.substring(0,item.lastIndexOf("|")-3);
					item=item.replace(/\n/g,"").replace(/\r/g,"");
					document.getElementById("Grd_Item").deleteRow(val);
					var newarr=removeItem(rec_arr,item);
					document.getElementById("Hid_Rec").value=newarr.join("^");			
					//fn_Cal_Total();
					
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
			

