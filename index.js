document.addEventListener("DOMContentLoaded", function () {
  let list_array = [
    "Shopping",
    "Cook",
    "Read",
    "Work",
    "Go out with friends",
    "Go to gym",
    "Yoga",
    "Watch football",
  ];

  const input = document.getElementById("add_list");
  const add_btn = document.getElementById("add_btn");
  const list = document.getElementById("list");

  function renderItems() {
    list.innerHTML = "";

    list_array.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = item;
      console.log(item, index);

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";

      removeBtn.addEventListener("click", () => {
        list_array.splice(index, 1);
        renderItems();
        console.log(list_array);
      });
      li.appendChild(removeBtn);
      list.appendChild(li);
    });
  }

  add_btn.addEventListener("click", (event) => {
    event.preventDefault();
    let new_item = input.value.trim();
    if (new_item !== "") {
      list_array.push(new_item);
      input.value = "";
      renderItems();
    } else {
      alert("Please enter an item");
    }
  });

  const delete_all = document.getElementById("delete_all");
  delete_all.addEventListener("click", function (event) {
    event.preventDefault();
    list_array = [];
    renderItems();
  });
  renderItems();
});
