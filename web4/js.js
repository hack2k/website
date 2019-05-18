window.onload = () => {
    let elements = document.getElementsByClassName("nav-elem");
    let activeIndex = -1;
  
    function rerenderDOM() {
      for (let j = 0; j < elements.length; j++) {
        let sublists = elements[j].querySelectorAll("ul");
        console.log(sublists);
        for (let childIndex = 0; childIndex < sublists.length; childIndex++) {
          if (activeIndex == j) {
            sublists[childIndex].style.display = "block";
          } else {
            sublists[childIndex].style.display = "none";
          }
        }
      }
    }
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      element.addEventListener("click", () => {
        if (i === activeIndex) {
          // console.log(i);
          activeIndex = -1;
        } else {
          activeIndex = i;
        }
  
        rerenderDOM();
      });
    }
  
    window.addEventListener("click", () => {
      console.log("RESET");
      rerenderDOM();
      activeIndex = -1;
    });
  };
  