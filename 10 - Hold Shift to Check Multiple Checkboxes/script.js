const checkboxes = document.querySelectorAll(".item input");
checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", function (e) {
    window.addEventListener("keydown", function (e) {
      if (e.keyCode === 16) {
        firstIndex = index;
        checkboxes.forEach((checkbox, index1) => {
          checkbox.addEventListener("change", function (e) {
            lastIndex = index1;
            // console.log(firstIndex, lastIndex);
            checkboxes.forEach((checkbox, index2) => {
              if (firstIndex < lastIndex) {
                if (index2 > firstIndex && index2 < lastIndex) {
                  checkbox.setAttribute("checked", "checked");
                  // console.log("checked at index:", index2);
                }
              } else if (firstIndex > lastIndex) {
                if (index2 > lastIndex && index2 < firstIndex) {
                  checkbox.setAttribute("checked", "checked");
                  // console.log("checked at index:", index2);
                }
              }
            });
          });
        });
      }
    });
  });
});
