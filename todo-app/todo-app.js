(function () {
    function newItem() {
        var item = document.querySelector("#input").value;
        var ul = document.querySelector("#list");
        var li = document.createElement("li");
        var textNodeOne = document.createTextNode(" . " + item);
        li.appendChild(textNodeOne);
        ul.appendChild(li);
        document.querySelector("#input").value = "";
        li.onclick = removeItem;
      }
      
      var inputItem = document.querySelector("#input");
      inputItem.onkeyup = function(e) {
        if (e.keyCode == 13) {
            if(inputItem.value)
                newItem();
            else
                alert('Please enter some text!')
        }
      };
      
      function removeItem(e) {
        e.target.parentElement.removeChild(e.target);
      }
}());
