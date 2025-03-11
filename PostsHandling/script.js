var posts = [
    { id: 1, title: `daily JS news` },
    { id: 2, title: `daily Python news` },
    { id: 3, title: `daily C# news` },
    { id: 4, title: `daily Java news` },
];
function addingDeatils(){
    var tbody = document.querySelector("tbody");
    var addButton=document.querySelector(".addButton");
    var displayDetails = function (post) {
        tbody.innerHTML += `<tr>
                                <td>${post.id}</td>
                                <td>${post.title}</td>
                            </tr>`;
    };       
    posts.forEach(displayDetails);
    addButton.addEventListener("click",()=>{
        location.href="form.html";
    });
}
var form=document.getElementById("form");
console.log(form.value);