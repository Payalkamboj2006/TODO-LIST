function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();

      if (taskText === "") {
        alert("😟😔😢 Please enter a task ⚠️⚠️");
        return;
      }

      const taskList = document.getElementById("taskList");

      const li = document.createElement("li");
      li.className = "taskItem";

      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;

      const buttonDiv = document.createElement("div");
      buttonDiv.className = "taskButtons";

      const markBtn = document.createElement("button");
      markBtn.textContent = "Mark";
      markBtn.className = "markBtn";
      markBtn.onclick = () => {
        li.classList.toggle("completed");
      };

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "removeBtn";
      removeBtn.onclick = () => {
        taskList.removeChild(li);
      };

      buttonDiv.appendChild(markBtn);
      buttonDiv.appendChild(removeBtn);

      li.appendChild(taskSpan);
      li.appendChild(buttonDiv);

      taskList.appendChild(li);

      input.value = "";
    }