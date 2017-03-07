		
						function LogSheet_repairissue()
						{
						
                                var itemn,qty1,toloc,count;
								fn_Inner2_receive();

    							itemn=document.getElementById("txtitem").value;
     							qty1=document.getElementById("txtqty").value;
     							toloc=document.getElementById("txtbusNo").value;
						}
						
							function fn_Inner2_receive()
		                	{
		                	
								var Inner_str	= document.getElementById("Grd_Item").innerHTML;
								var itemn1 = document.getElementById("txtitem").value;
								var qty2 = document.getElementById("txtqty").value;
								var app1 = document.getElementById("txtbusNo").value;
								
								var isReturnVal = "0";
								var isReturnText = "No";
								
				                 if (qty2  != "")
								{
                               
								P_Row	 = document.getElementById('Grd_Item').insertRow(document.getElementById('Grd_Item').rows.length - 1);
								Row_Obj	 = document.getElementById('Grd_Item').rows;
								Cell_Obj = P_Row.cells;

								New_Cell_1 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_2 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);
								New_Cell_3 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);	
								New_Cell_4 = Row_Obj(P_Row.rowIndex).insertCell(Cell_Obj.length);	
											
								New_Cell_1.align = "center";
								New_Cell_2.align = "Center";
								New_Cell_3.align = "Center";
								New_Cell_4.align = "Center";                                                                                        
								//New_Cell_1.innerHTML = IvechNo;
					
								New_Cell_1.innerHTML = itemn1;
								New_Cell_2.innerHTML = app1;
								New_Cell_3.innerHTML = qty2
								
								New_Cell_4.innerHTML = "<IMG Type='Button' class='Button' src='../images/icon_delete.gif' Value='Delete' OnClick= 'Fn_Delete1("+P_Row.rowIndex+")'>"							
								Recs = document.getElementById("Hid_Rec").value ;
							
								//document.getElementById("Hid_Rec").value = Recs +''+ IvechNo + '|' + IrouteNo + '|' + ItoLoc +  '|' + IFromLoc +  '|' + Icount + '^'
								document.getElementById("Hid_Rec").value = Recs +''+ itemn1 + '|' + app1 + '|' + qty2 +  '^'
								//document.getElementById("txtvehno").value = "";
								//document.getElementById("ddlcat").value = "";
								document.getElementById('txtitem').value = '';
								document.getElementById('txtqty').value ='';
								document.getElementById("txtbusNo").value="";
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
					document.getElementById("Grd_Item").deleteRow(val);
					item=item.replace("</TD>","|");
					item=item.replace(/(<\/?p)(?:\s[^>]*)?(>)|<[^>]*>/gi,"");
					item=item.substring(0,item.lastIndexOf("|")-3);
					item=item.replace(/\n/g,"").replace(/\r/g,"");
					var newarr=removeItem(rec_arr,item);
					document.getElementById("Hid_Rec").value=newarr.join("^");			
					//fn_Cal_Total();
					//alert(document.getElementById("Hid_Rec").value)
					
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
							originalArray.splice(j, 1);
							
						}
						 else 
						{
							j++;
						}
					}
					return originalArray;
			}
//			


		function Select()
						{
						
								var resultStr = ""; 
								objddl2 =document.getElementById('Select1');
								for(var i = 0; i < objddl2.options.length; i++ )
							{  
									if( objddl2.options[i].selected ) 
								 {    
									resultStr+= (objddl2.options[i].text);
									var objddl1 = document.getElementById('txtitem');
									objddl1.value=resultStr;
									var x=document.getElementById('Select1');
									x.style.display="none";  
									return false;
									//alert(resultStr)
								} 
							} 
							
						}
			
//					
						