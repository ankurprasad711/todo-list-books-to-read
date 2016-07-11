

function setn()
{
 var name =document.getElementById('book').value;
    var listItem = document.createElement("li");
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    var itemText = document.createTextNode(name);
    listItem.appendChild(itemText);
    document.getElementById('mybooklist').appendChild(listItem);


}
function deletetab() {
    var l = document.getElementById('mybooklist');
    var t = l.children;
    for (var i = 0; i < t.length; i++) {
        while (t[i] && t[i].children[0].checked) {
            l.removeChild(t[i]);
        }
    }
}