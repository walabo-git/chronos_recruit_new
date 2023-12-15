document.addEventListener("DOMContentLoaded", function () {
  const params = new URL(document.location).searchParams;
  const jobType = params.get("job") || "";
  if (!jobType) return;
  const selectJobs = document.querySelector("select[name=options]");
  const option = selectJobs.querySelector(`option[value=${jobType}]`);
  option.selected = true;
});
