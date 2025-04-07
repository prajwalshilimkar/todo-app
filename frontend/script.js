async function fetchTasks() {
    const res = await fetch("/api/tasks");
    const tasks = await res.json();
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.innerText = task.name;
      list.appendChild(li);
    });
  }
  async function addTask() {
    const input = document.getElementById("taskInput");
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: input.value })
    });
    input.value = "";
    fetchTasks();
  }
  fetchTasks();
  