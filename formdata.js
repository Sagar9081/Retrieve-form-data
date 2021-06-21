        
        
        var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];
		var list5 = [];
		var list6 = [];
	
		
		var n = 1;
		var x = 0;

        function formReset(){
            document.getElementById("fname").value=" ";
		document.getElementById("lname").value=" ";
		document.getElementById("address").value=" ";
		 document.getElementById("zip").value=" ";
	    document.getElementById("state").value=" ";
		 document.getElementById("country").value=" ";
		
		const chbx = document.getElementsByName("gender");

              for(let i=0; i < chbx.length; i++) {
                    chbx[i].checked = false;
                                  }

                                  var elements = document.getElementById("choice").options;

                                  for(var i = 0; i < elements.length; i++){
                                    elements[i].selected = false;
                                  }
        }


		function AddRow(){
           

			var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);

			

			list1[x] = document.getElementById("fname").value;
			list2[x] = document.getElementById("lname").value;
			list3[x] = document.getElementById("address").value;
			list4[x] = document.getElementById("zip").value;
			list5[x] = document.getElementById("state").value;
			list6[x] = document.getElementById("country").value;
		
			

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);
			var cel5 = NewRow.insertCell(4);
			var cel6 = NewRow.insertCell(5);
			var cel7 = NewRow.insertCell(6);
			var cel8 = NewRow.insertCell(7);
			
				


			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];
			cel5.innerHTML = list5[x];
			cel6.innerHTML = list6[x];

            document.getElementsByName('gender').forEach(radio =>{
				if(radio.checked){
					cel7.innerHTML = radio.value;
				
				}
               
			});
            
			var emptyString="";
			var x= document.getElementById("choice");
			for(let i=0;i<x.options.length;i++){
				if(x.options[i].selected){
					emptyString+= " "+ x.options[i].value;
					
					cel8.innerHTML = emptyString;
					
				}
               
			}

           
			
           
		
           
			n++;
			x++;
            	
formReset();
		}
		
        