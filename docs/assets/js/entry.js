const jobCategory = {
  "delivery-b": "家電配送スタッフB（家電量販店）",
  "delivery-a": "家電配送スタッフA（家電量販店）",
  "driver-4t-b": "地場ドライバー４ｔ（定期便）",
  "driver-4t-a": "地場ドライバー４ｔ",
  "tire-maintenance": "タイヤ交換作業",
  "tire-sales": "タイヤ販売営業",
  other: "その他",
};

const selectInitializer = () => {
  const params = new URL(document.location).searchParams;
  const jobType = params.get("job") || "";
  if (!jobType) return;
  const selectJobs = document.querySelector("select[name=entry-job]");
  const option = selectJobs.querySelector(`option[value=${jobType}]`);
  option.selected = true;
};

const submitCallbackFn = async (e) => {
  e.preventDefault();
  const submitButton = document.querySelector("form button");
  submitButton.disabled = true; // 送信ボタンを無効にする
  const formData = new FormData(document.forms[0]);
  const body = formDataToJson(formData);
  try {
    await fetch(
      "https://2wzc671fxa.execute-api.ap-northeast-1.amazonaws.com/stg/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }
    );
  } catch (e) {
    console.error(e);
    alert(
      "メールの送信に失敗しました。一時的なエラーの可能性がありますので、時間をおいて再度お試しください。"
    );
    location.href = "/";
    return;
  }
  location.href = "/thanks";
};

document.addEventListener("DOMContentLoaded", function () {
  selectInitializer();
  const form = document.querySelector("form");
  form.addEventListener("submit", submitCallbackFn, { passive: false });
});

function formDataToJson(formData) {
  const object = {};
  formData.forEach((value, key) => {
    object[key] = object[key] ? [...object[key], value] : value;
  });

  const entryJobJa = jobCategory[object["entry-job"]];
  if (entryJobJa) object["entry-job-ja"] = entryJobJa;
  return JSON.stringify(object);
}
