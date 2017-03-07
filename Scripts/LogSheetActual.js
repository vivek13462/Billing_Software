function LogSheet3()
						{
                                var vechNo,routeNo,FromLoc,FromTime,ToLoc,count;
                                
								fn_Inner2_actual();

     							//vechNo=document.getElementById("ddlcat").text;
     							subrackno = document.getElementById('txtSubRackNo').value
     							partno = document.getElementById('txtPartNo').value
     							routeNo=document.getElementById("ddlitem").value;
     							toLoc=document.getElementById("txtqty").value;
     							FromLoc=0//document.getElementById("txtdemandqty").value;
						}		

function fn_Inner2_actual()
		                	{
			                             
								var Inner_str	= document.getElementById("Grd_Item").innerHTML;
								var subrackno = document.getElementById('txtSubRackNo').value;
								var partno = document.getElementById('txtPartNo').value
								var IrouteNo = document.getElementById("ddlitem").value;
								var ItoLoc = document.getElementById("txtqty").value;
								var IFromLoc = "0";
								var isReturnVal = "0";
								var isReturnText = "No";
    			                if (IFromLoc  != "")
								{
								P_Row	 = Grd_Item.insertRow(Grd_Item.rows.length - 1);
								Row_Obj	 = Grd_Item.rows;
								Cell_Obj = P_Row.cells;
								
								New_Cell_1 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_2 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_3 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_4 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_5 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								//New_Cell_6 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								//New_Cell_7 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
						
								///New_Cell_6 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								//alert(IFromLoc)
								//return false;
						
								New_Cell_1.align = "center";
								New_Cell_2.align = "Center";
								New_Cell_3.align = "Center";
							    New_Cell_4.align = "Center";
                                New_Cell_5.align = "Center";
                                //New_Cell_6.align = "Center";
                                // New_Cell_7.align = "Center";
                                 
                                New_Cell_1.innerHTML = subrackno;
								New_Cell_2.innerHTML = partno;                               
								New_Cell_3.innerHTML = IrouteNo;
								New_Cell_4.innerHTML = ItoLoc;
								//New_Cell_5.innerHTML = refNo;
								//New_Cell_5.innerHTML = IFromLoc;
						
								///New_Cell_5.innerHTML = Icount;
								New_Cell_5.innerHTML = "<IMG Type='Button' class='Button' src='../images/icon_delete.gif' Value='Delete' OnClick= 'Fn_Delete1("+P_Row.rowIndex+")'>"
								Recs = document.getElementById("Hid_Rec").value;
                                //document.getElementById("Hid_Rec").value = Recs +''+ IvechNo + '|' + IrouteNo + '|' + ItoLoc +  '|'  + IFromLoc +  '|' + refNo +  '|' + isReturnVal +  '^'
                                document.getElementById("Hid_Rec").value = Recs + subrackno + '|' + IrouteNo + '|' + ItoLoc + '^'
                                 //+  '|'  + IFromLoc //+  '|' + refNo +  '|' + isReturnVal +  '^'
								//document.getElementById("txtvehno").value = "";
								document.getElementById('txtSubRackNo').value = "";
								document.getElementById('txtPartNo').value = "";
								document.getElementById("ddlitem").value="";
								document.getElementById("txtqty").value="";
								//document.getElementById("txtdemandqty").value="";
								//document.getElementById("txtbqty").value="";
								}
								else
								{
								    alert("please enter total quantity")
								    return false;
								}
							}
			
			function Fn_Delete1(val)
			{
				if(confirm('Are you sure you wan`t to delete this Item'))
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
					//alert(document.getElementById("Hid_Rec").value)
				}
				else
				return false;
			}	