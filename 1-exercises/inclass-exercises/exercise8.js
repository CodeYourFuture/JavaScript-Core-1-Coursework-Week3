/* Imagine you have a ToDo list which you are planning to do in order. Use the methods we’ve looked at to manipulate the list.
let todo = ["order dog food", "do the dishes"];
Add a new item - "clean bedroom" - to the end of the list as it’s not that important
Now add "pay council tax" to the beginning of the list, as we need to do this soon!
After this, we realise we have enough dog food - so remove "order dog food" from the array
We’ve just done the dishes, but now we need to take out the garbage, so replace "do the dishes" with "take out garbage"
*/

let todo = ["order dog food", "do the dishes"];
todo.push("clean bedroom");
todo.unshift("pay council tax");
todo.splice(1, 1);
todo.splice(1, 1, "take out garbage");

console.log(todo);
