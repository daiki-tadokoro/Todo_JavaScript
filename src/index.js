import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  // inputフォームの中身を""
  document.getElementById("add-text").value = "";
  creatIncomplateList(inputText);
};

// 未完了リストから指定の要素の削除
const deleteFromInComplateList = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

// 未完了リストに追加する関数
const creatIncomplateList = (text) => {
  // div生成
  const div = document.createElement("div");
  // classを付与
  div.className = "list-row";
  // li生成
  const li = document.createElement("li");
  li.appendChild(div);
  // pタグ生成
  const p = document.createElement("p");
  p.className = "todo-name";
  p.innerText = text;
  // button(完了)タグ生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.id = "complate-button";

  // 完了ボタンのクリック時
  complateButton.addEventListener("click", () => {
    // 押された完了ボタンの祖先タグ（li)を未完了リストから削除
    deleteFromInComplateList(complateButton.closest("li"));
    // 完了リストに追加する要素
    const addTarget = complateButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // li以下を初期化しincomplateでの処理終了
    addTarget.textContent = null;

    // complate用のliタグ生成
    const li = document.createElement("li");
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";
    li.appendChild(div);

    // pタグ生成
    const p = document.createElement("p");
    p.className = "todo-name";
    p.innerText = text;

    // button(back)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.id = "back-button";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（li)を未完了リストから削除
      backFromInComplateList(backButton.closest("li"));
      // 完了リストに追加する要素
      const addTarget = backButton.parentNode;
      // TODO内容テキストを取得
      const text = addTarget.firstElementChild.innerText;
      creatIncomplateList(text);
    });

    // divタグの子要素に各要素を追加
    div.appendChild(p);
    div.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complate-list").appendChild(li);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（li)を未完了リストから削除
    deleteFromInComplateList(deleteButton.closest("li"));
  });

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplate-list").appendChild(li);
};

const backFromInComplateList = (target) => {
  document.getElementById("complate-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
