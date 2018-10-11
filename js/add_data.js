myStorage = window.localStorage;

document.getElementById('add_data').addEventListener('click',
    function(event) {
      event.preventDefault();
        var entryData = {
          "type":document.getElementById('type').value,
          "date":document.getElementById('inputDate').value,
          "exercise":document.getElementById('exercise').value,
          "weights":document.getElementById('weights').value,
          "sets":document.getElementById('sets').value,
      };
      if (formCheck() == true){
        //Display Error message if fields are empty
        var para = document.getElementById('forAnError')
        para.innerHTML='Must fill in all fields!';
      }else{ //All fields are filled in so add it to the storage
        var value = JSON.stringify(entryData)
        var key = keyGenerator()
        localStorage.setItem(key, value);
        alert('Successfully added data');
      }
      





})

var keyGenerator = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

function view_data(){
  //if storage has  0 entries
  
  if (localStorage.length == 0){
        var table = document.getElementById('tableBody')
        table.parentNode.removeChild(table)
        var para = document.getElementById('forAnError')
        var message = document.createElement("p");
        para.appendChild(message)
        message.innerHTML='No entries to display yet';

  }else{
      //Iterates through storage
      for(var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        //Parses the stringied json so I can use it
        var parsedJson = JSON.parse(value)
        var table = document.getElementById('tableBody')
        //insert new row in table
        var row = table.insertRow(i+1)
        //create new cells in the row and insert the data from the json into the cells.
        var date = row.insertCell(0)
        date.innerHTML = parsedJson['date']

        var exercise = row.insertCell(1)
        exercise.innerHTML = parsedJson['exercise']

        var weights = row.insertCell(2)
        weights.innerHTML = parsedJson['weights']

        var sets = row.insertCell(3)
        sets.innerHTML = parsedJson['sets']

        var type = row.insertCell(4)
        type.innerHTML = parsedJson['type']

    }
  }
}

function formCheck(){
    var elements = document.getElementsByTagName("input");
    for (var i=0; i < elements.length; i++) {
     if (elements[i].value == "") {
       return true;
     }
  }
}
