let arrStudent = [];
// let student = {
//     name:"yaseen",
//     number:1,
//     major:"cse"
// };
let print = [];
function read(){
  let student = {
    name:document.getElementById("fname").value,
    number: document.getElementById("number").value,
    major: document.getElementById("major").options[document.getElementById("major").selectedIndex].value
};
    arrStudent.push(student);
    document.getElementById("fname").value=""
    document.getElementById("number").value="";
    // console.log(arrStudent);
    print.push("name : " +student.name+" number: "+ student.number+" Major : "+ student.major + "<br>" );
    document.getElementById("list").innerHTML=print;
}
function search(){
    let n = document.getElementById("search").value;
    console.log(n);
    let printSearch = [];
    let i;
    for (i = 0; i < arrStudent.length; i++) {
      console.log(arrStudent[i]);
      console.log(arrStudent[i].name==n);
      if(arrStudent[i].name==n){
        printSearch.push("name : " + arrStudent[i].name +" number: "+ arrStudent[i].number+" Major : "+ arrStudent[i].major + "<br>" );
      }
    }
    if(printSearch.length===0){
      document.getElementById("searchlist").innerHTML= "Not Found !";
    }
    else
    document.getElementById("searchlist").innerHTML= printSearch;
    document.getElementById("search").value="";
}
function sortTheList(){
  let printSort=[];
  arrStudent.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });
  for (i = 0; i < arrStudent.length; i++) {
   
    printSort.push("name : " + arrStudent[i].name +" number: "+ arrStudent[i].number+" Major : "+ arrStudent[i].major + "<br>" );
    
  }
  document.getElementById("list").innerHTML=printSort;
  console.log("done");
}