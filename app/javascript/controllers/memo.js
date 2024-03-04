const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

// フォームの送信を処理する関数
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // ページのリロードを防ぐ

    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";

    // 送信データの設定
    XHR.onload = () => {
      if (XHR.status === 200) {
        const list = document.getElementById("list");
        const formText = document.getElementById("content");
        list.insertAdjacentHTML("beforeend", buildHTML(XHR));
        formText.value = "";
      } else {
        alert('エラーが発生しました');
      }
    };

    // リクエストの送信
    XHR.send(formData);
  });
});
// ページの読み込み完了時にpost関数を呼び出す
window.addEventListener('DOMContentLoaded', post);