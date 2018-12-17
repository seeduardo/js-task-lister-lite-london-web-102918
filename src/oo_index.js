
document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();

  const tasksDiv = document.querySelector("#tasks");
  const newForm = document.querySelector("#create-task-form")
  const input = document.querySelector("#new-task-description")


  newForm.addEventListener("submit", addListItem)

  function addListItem(event) {
    event.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.innerText = input.value;
    tasksDiv.append(newListItem);
    input.value = ""
  };



});
