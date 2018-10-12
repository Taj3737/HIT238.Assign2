function calculateTip() {
	var age = document.getElementById("age").value;
	var height = document.getElementById("height").value;
	var weight = document.getElementById("weight").value;
	
	if(height >= 4 || height <= 5)
		{
			
			if(weight >= 91 &&  weight <= 118)
				{
					document.getElementById("w1").innerHTML = "Normal";
				}
			
			if(weight >= 119 &&  weight <= 137)
				{
					document.getElementById("w1").innerHTML = "OverWeight";
				}
			
			if(weight >= 138 &&  weight <= 186)
				{
					document.getElementById("w1").innerHTML = "Obese";
				}
			
			if(weight >= 187 &&  weight <= 258)
				{
					document.getElementById("w1").innerHTML = "Extremely Obese";
				}
		}
	
	
	
	if(height >= 5 || height <= 6)
		{
			
			if(weight >= 91 &&  weight <= 118)
				{
					document.getElementById("w1").innerHTML = "Normal";
				}
			
			if(weight >= 119 &&  weight <= 137)
				{
					document.getElementById("w1").innerHTML = "OverWeight";
				}
			
			if(weight >= 138 &&  weight <= 186)
				{
					document.getElementById("w1").innerHTML = "Obese";
				}
			
			if(weight >= 187 &&  weight <= 258)
				{
					document.getElementById("w1").innerHTML = "ExtremeObesity";
				}
		}
	
	
	if(height > 6)
		{
			
			if(weight >= 91 &&  weight <= 118)
				{
					document.getElementById("w1").innerHTML = "Normal";
				}
			
			if(weight >= 119 &&  weight <= 137)
				{
					document.getElementById("w1").innerHTML = "OverWeight";
				}
			
			if(weight >= 138 &&  weight <= 186)
				{
					document.getElementById("w1").innerHTML = "Obese";
				}
			
			if(weight >= 187 &&  weight <= 258)
				{
					document.getElementById("w1").innerHTML = "ExtremeObesity";
				}
		}
	
	
	
	
	
	if(age >= 19 || age <= 30)
		{
			if(document.getElementById("male").checked){
				if(document.getElementById("activity").value == 0){
					document.getElementById("c1").innerHTML = "2400";
					document.getElementById("c2").innerHTML = "1900";
					document.getElementById("c3").innerHTML = "1400";
				}
				
			}
			if(document.getElementById("female").checked){
				if(document.getElementById("activity").value == 0){
					document.getElementById("c1").innerHTML = "2000";
					document.getElementById("c2").innerHTML = "1900";
					document.getElementById("c3").innerHTML = "1400";
				}
			}
			
		}
	if(age > 30)
		{
			if(document.getElementById("male").checked){
				if(document.getElementById("activity").value == 0){
					document.getElementById("c1").innerHTML = "2200";
					document.getElementById("c2").innerHTML = "1700";
					document.getElementById("c3").innerHTML = "1200";
				}
				
			}
			if(document.getElementById("female").checked){
				if(document.getElementById("activity").value == 0){
					document.getElementById("c1").innerHTML = "1800";
					document.getElementById("c2").innerHTML = "1300";
					document.getElementById("c3").innerHTML = "1000";
				}
			}
			
		}
	
	
	if(age >= 19 || age <= 30)
		{
			if(document.getElementById("male").checked){
				if(document.getElementById("activity").value == 1){
					document.getElementById("c1").innerHTML = "2700";
					document.getElementById("c2").innerHTML = "2200";
					document.getElementById("c3").innerHTML = "1700";
				}
				
			}
			if(document.getElementById("female").checked){
				if(document.getElementById("activity").value == 1){
					document.getElementById("c1").innerHTML = "2200";
					document.getElementById("c2").innerHTML = "1700";
					document.getElementById("c3").innerHTML = "1200";
				}
			}
			
		}
	if(age > 30)
		{
			if(document.getElementById("male").checked){
				if(document.getElementById("activity").value == 1){
					document.getElementById("c1").innerHTML = "2500";
					document.getElementById("c2").innerHTML = "2000";
					document.getElementById("c3").innerHTML = "1500";
				}
				
			}
			if(document.getElementById("female").checked){
				if(document.getElementById("activity").value == 1){
					document.getElementById("c1").innerHTML = "2000";
					document.getElementById("c2").innerHTML = "1500";
					document.getElementById("c3").innerHTML = "1000";
				}
			}
			
		}
	
	
	if(age >= 19 || age <= 30)
		{
			if(document.getElementById("male").checked){
				if(document.getElementById("activity").value == 2){
					document.getElementById("c1").innerHTML = "3000";
					document.getElementById("c2").innerHTML = "2500";
					document.getElementById("c3").innerHTML = "2000";
				}
				
			}
			if(document.getElementById("female").checked){
				if(document.getElementById("activity").value == 2){
					document.getElementById("c1").innerHTML = "2400";
					document.getElementById("c2").innerHTML = "1900";
					document.getElementById("c3").innerHTML = "1400";
				}
			}
			
		}
	if(age > 30)
		{
			if(document.getElementById("male").checked){
				if(document.getElementById("activity").value == 2){
					document.getElementById("c1").innerHTML = "2800";
					document.getElementById("c2").innerHTML = "2300";
					document.getElementById("c3").innerHTML = "1800";
				}
				
			}
			if(document.getElementById("female").checked){
				if(document.getElementById("activity").value == 2){
					document.getElementById("c1").innerHTML = "2200";
					document.getElementById("c2").innerHTML = "1700";
					document.getElementById("c3").innerHTML = "1200";
				}
			}
			
		}
	
}