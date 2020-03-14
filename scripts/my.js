function setActive(selected) {
  document.querySelector(".active").classList.remove("active");
  selected.classList.add("active");
}

function loadContent(selection) {
  var container1 = document.getElementById("active_content_1");
  var skillsContainer = document.querySelector("#skills ul");
  var container2 = document.getElementById("active_content_2");
  var contentBlock1 = document.querySelector("#content_" + selection + " .content-block-1");
  var skillsBlock = document.querySelector("#content_" + selection + " .skills");
  var contentBlock2 = document.querySelector("#content_" + selection + " .content-block-2");
  container1.innerHTML = contentBlock1.innerHTML;
  skillsContainer.innerHTML = skillsBlock.innerHTML;
  container2.innerHTML = contentBlock2.innerHTML;
}
