const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  // li 생성
  const li = document.createElement("li");

  // 텍스트
  const span = document.createElement("span");
  span.innerText = text;

  // 완료 버튼만 먼저 생성
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "완료";
  completeBtn.className = "todo__button--complete";

  // 완료 클릭
  completeBtn.addEventListener("click", () => {
    // 완료 목록으로 이동
    doneList.appendChild(li);

    // 완료 버튼 제거
    completeBtn.remove();

    // 삭제 버튼 생성
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "삭제";
    deleteBtn.className = "todo__button--delete";

    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
  });

  // li에 넣기
  li.appendChild(span);
  li.appendChild(completeBtn);

  todoList.appendChild(li);

  input.value = "";
});