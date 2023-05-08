//getting the add button for event

let addBtn = document.getElementById("add_btn");

let parentList = document.getElementById("parentList");

addBtn.addEventListener("click", function (e) {
  //checking condition for error message..
  if (parentList.children[0].className == "emptyMsg") {
    parentList.children[0].remove();
  }
  //getting text from list-input

  let currentBtn = e.currentTarget;
  let currentInput = currentBtn.previousElementSibling;

  //adding the text in the tag and targetting its text.

  let newElement = document.createElement("li");

  //newElement.classList.add("list-group-item");

  newElement.className = `list-group-item d-flex justify-content-between`;
  let chapterName = currentInput.value;
  newElement.innerHTML = `<h4 class="flex-grow-1 ">${chapterName}</h4> 
  <button class="btn btn-warning mx-3">Edit</button>
  <button class="btn btn-danger" onclick="removeChapter(this)">X</button>`;

  //putting the element in the list.

  parentList.appendChild(newElement);
});

//removing the element in the list.
function removeChapter(currentElement) {
  currentElement.parentElement.remove();
  if (parentList.children.length <= 0) {
    //writing nothing if the element is not present in the list.
    let newEmptyMsg = document.createElement("h4");
    newEmptyMsg.classList.add("emptyMsg");
    newEmptyMsg.textContent = "Nothing is here. Please add a new Chapter";
    parentList.appendChild(newEmptyMsg);
  }
}

//editing the existing chapter..

function editChapter(currentElement) {
  if (currentElement.textContent == "done") {
  
    currentElement.textContent = "Edit";
    let currentChapterName = currentElement.previousElementSibling.value;
    let currentHeading = document.createElement("h4");
    currentHeading.className = "flex-grow-1"
    currentHeading.textContent = currentChapterName;
    currentElement.parentElement.replaceChild(currentHeading,currentElement.previousElementSibling);

  } 
  else
  {

    currentElement.textContent = "Done";  
    let currentChapterName = currentElement.previousElementSibling.textContent;
    let currInput = document.createElement("input");
    currInput.type = "text";
    currInput.className = "form-control";
    currInput.placeholder = "Chapter Name";
    currInput.value = currentChapterName;

    currentElement.parentElement.replaceChild(
      currInput,
      currentElement.previousElementSibling
    );
  }
}
