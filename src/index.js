document.addEventListener("DOMContentLoaded", () => {
  // Step 2: Select form and add event listener
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  function buildToDo(task) {
    // Step 4: Create li, set textContent, append to task list
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  }

  form.addEventListener("submit", (event) => {
    // Step 2: preventDefault
    event.preventDefault();

    // Step 3: Use event to gather data by name attribute
    const task = event.target.elements["new-task-description"].value;

    // Step 3: Call buildToDo with the saved task
    buildToDo(task);
  });
});
