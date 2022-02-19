import "./styles.css";

const onClickAdd = () => {
  //テキストBOXの情報を取得して、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  //押された削除ボタンの親タグを未完了リスtから削除
  document.getElementById("imcomplete-list").removeChild(target);
};

// 完了リストから指定の要素を削除
const deleteFromCompleteList = (target) => {
  //押された削除ボタンの親タグを未完了リスtから削除
  document.getElementById("complete-list").removeChild(target);
};

// 未完了リストに追加
const createIncompleteList = (text) => {
  //liタグの作成
  const li = document.createElement("li");

  //divタグの作成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグの作成
  const p = document.createElement("p");
  p.innerText = text;

  //完了buttonタグの作成
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "完了";
  completeButton.addEventListener("click", () => {
    //imcomplete-listから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    //completeリスト用のタグの生成

    const div = completeButton.parentElement;

    // todoテキスト内容を取得
    const text = div.firstElementChild.innerText;

    div.textContent = null;

    // //liタグの作成
    const li = document.createElement("li");

    //pタグの作成
    const p = document.createElement("p");
    // p.innerText = completeButton.innerHTML;
    p.innerText = text;

    //戻るbuttonタグの作成
    const returnButton = document.createElement("button");
    returnButton.innerHTML = "戻す";
    returnButton.addEventListener("click", () => {
      //complete-listから削除
      deleteFromCompleteList(returnButton.parentElement.parentElement);

      //値の取得
      const text = returnButton.parentElement.firstElementChild.innerText;

      createIncompleteList(text);
    });

    // //liタグの子要素に各タグを入れる
    div.appendChild(p);
    div.appendChild(returnButton);
    li.appendChild(div);

    //complete-listに追加
    document.getElementById("complete-list").appendChild(li);
  });

  //削除buttonタグの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リスtから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  //liタグの子要素に各タグを入れる
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  //未完了のリストに追加する
  document.getElementById("imcomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
