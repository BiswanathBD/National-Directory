You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

## Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
 <br><br>
### Answer of question number-1:
<table>
   <thead>
      <tr>
         <th>getElementById</th>
         <th>getElementsByClassName</th>
         <th>querySelector / querySelectorAll</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            Use for get a single html element in javascript by using id name.
         </td>
         <td>
            Use for get single or multiple html element in javascript by using class name.
         </td>
         <td>
            Use for get single or multiple html element in javascript by using css selector. querySelector for get first element and querySelectorAll for get all element.
         </td>
      </tr>
      <tr>
         <td>
            document.getElementById("id name")
         </td>
         <td>
            document.getElementsByClassName("class name")
         </td>
         <td>
            document.querySelector("#id / .class / tag") <br>
            document.querySelectorAll("#id / .class / tag")
         </td>
      </tr>
   </tbody>
</table><br>

2. How do you **create and insert a new element into the DOM**?
 <br><br>
 ### Answer of question number-2: <br>
  > Step-1 (create an element) : document.createElement("tag-name") <br>
  > Step-2 : get parent by using DOM tool <br>
  > Step 2 (push into mother node) : parent.appendChild("newElement") <br>

3. What is **Event Bubbling** and how does it work?
 <br><br>
 ### Answer of question number-3: <br>
> Event bubbling is a type of propagetion into DOM. When you click a button from your html file that mean you also clicked all of the parent of this button ultil the root (html). in short bubbling is travel from the event element to root step by step.

4. What is **Event Delegation** in JavaScript? Why is it useful?


5. What is the difference between **preventDefault() and stopPropagation()** methods?

   
