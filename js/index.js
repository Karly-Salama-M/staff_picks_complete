const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}


// Assets 1 to 6 

let assetTitle = document.getElementById("assetTitleOne").src;
assetTitle = assetTitle.split("/").pop();
document.getElementById("titleFromPhoto").innerHTML = decodeURI(assetTitle);

let assetTitleTwo = document.getElementById("assetTitleTwo").src;
assetTitleTwo = assetTitleTwo.split("/").pop();
document.getElementById("titleFromPhotoTwo").innerHTML = decodeURI(assetTitleTwo);

let assetTitleFour = document.getElementById("assetTitleFour").src;
assetTitleFour = assetTitleFour.split("/").pop();
document.getElementById("titleFromPhotoFour").innerHTML = decodeURI(assetTitleFour);

let assetTitleFive = document.getElementById("assetTitleFive").src;
assetTitleFive = assetTitleFive.split("/").pop();
document.getElementById("titleFromPhotoFive").innerHTML = decodeURI(assetTitleFive);

let assetTitleThree = document.getElementById("assetTitleThree").src;
assetTitleThree = assetTitleThree.split("/").pop();
document.getElementById("titleFromPhotoThree").innerHTML = decodeURI(assetTitleThree);

let assetTitleSix = document.getElementById("assetTitleSix").src;
assetTitleSix = assetTitleSix.split("/").pop();
document.getElementById("titleFromPhotoSix").innerHTML = decodeURI(assetTitleSix);


// Assets 7 to 12

let assetTitleSeven = document.getElementById("assetTitleSeven").src;
assetTitleSeven = assetTitleSeven.split("/").pop();
document.getElementById("titleFromPhotoSeven").innerHTML = decodeURI(assetTitle);

let assetTitleTen = document.getElementById("assetTitleTen").src;
assetTitleTen = assetTitleTen.split("/").pop();
document.getElementById("titleFromPhotoTen").innerHTML = decodeURI(assetTitleTen);

let assetTitleEight = document.getElementById("assetTitleEight").src;
assetTitleEight = assetTitleEight.split("/").pop();
document.getElementById("titleFromPhotoEight").innerHTML = decodeURI(assetTitleEight);

let assetTitleEleven = document.getElementById("assetTitleEleven").src;
assetTitleEleven = assetTitleEleven.split("/").pop();
document.getElementById("titleFromPhotoEleven").innerHTML = decodeURI(assetTitleEleven);

let assetTitleNine = document.getElementById("assetTitleNine").src;
assetTitleNine = assetTitleNine.split("/").pop();
document.getElementById("titleFromPhotoNine").innerHTML = decodeURI(assetTitleNine);

let assetTitleTwelve = document.getElementById("assetTitleTwelve").src;
assetTitleTwelve = assetTitleTwelve.split("/").pop();
document.getElementById("titleFromPhotoTwelve").innerHTML = decodeURI(assetTitleTwelve);


// Assets 13 to 18

let assetTitleThirteen = document.getElementById("assetTitleThirteen").src;
assetTitleThirteen = assetTitleThirteen.split("/").pop();
document.getElementById("titleFromPhotoThirteen").innerHTML = decodeURI(assetTitle);

let assetTitleSixteen = document.getElementById("assetTitleSixteen").src;
assetTitleSixteen = assetTitleSixteen.split("/").pop();
document.getElementById("titleFromPhotoSixteen").innerHTML = decodeURI(assetTitleSixteen);

let assetTitleFourteen = document.getElementById("assetTitleFourteen").src;
assetTitleFourteen = assetTitleFourteen.split("/").pop();
document.getElementById("titleFromPhotoFourteen").innerHTML = decodeURI(assetTitleFourteen);

let assetTitleSeventeen = document.getElementById("assetTitleSeventeen").src;
assetTitleSeventeen = assetTitleSeventeen.split("/").pop();
document.getElementById("titleFromPhotoSeventeen").innerHTML = decodeURI(assetTitleSeventeen);

let assetTitleFifteen = document.getElementById("assetTitleFifteen").src;
assetTitleFifteen = assetTitleFifteen.split("/").pop();
document.getElementById("titleFromPhotoFifteen").innerHTML = decodeURI(assetTitleFifteen);

let assetTitleEighteen = document.getElementById("assetTitleEighteen").src;
assetTitleEighteen = assetTitleEighteen.split("/").pop();
document.getElementById("titleFromPhotoEighteen").innerHTML = decodeURI(assetTitleEighteen);


// Assets 19 to 24

let assetTitleNineteen = document.getElementById("assetTitleNineteen").src;
assetTitleNineteen = assetTitleNineteen.split("/").pop();
document.getElementById("titleFromPhotoNineteen").innerHTML = decodeURI(assetTitle);

let assetTitleTwentytwo = document.getElementById("assetTitleTwentytwo").src;
assetTitleTwentytwo = assetTitleTwentytwo.split("/").pop();
document.getElementById("titleFromPhotoTwentytwo").innerHTML = decodeURI(assetTitleTwentytwo);

let assetTitleTwenty = document.getElementById("assetTitleTwenty").src;
assetTitleTwenty = assetTitleTwenty.split("/").pop();
document.getElementById("titleFromPhotoTwenty").innerHTML = decodeURI(assetTitleTwenty);

let assetTitleTwentythree = document.getElementById("assetTitleTwentythree").src;
assetTitleTwentythree = assetTitleTwentythree.split("/").pop();
document.getElementById("titleFromPhotoTwentythree").innerHTML = decodeURI(assetTitleTwentythree);

let assetTitleTwentyone = document.getElementById("assetTitleTwentyone").src;
assetTitleTwentyone = assetTitleTwentyone.split("/").pop();
document.getElementById("titleFromPhotoTwentyone").innerHTML = decodeURI(assetTitleTwentyone);

let assetTitleTwentyfour = document.getElementById("assetTitleTwentyfour").src;
assetTitleTwentyfour = assetTitleTwentyfour.split("/").pop();
document.getElementById("titleFromPhotoTwentyfour").innerHTML = decodeURI(assetTitleTwentyfour);



// Assets 25 to 30

let assetTitleTwentyfive = document.getElementById("assetTitleTwentyfive").src;
assetTitleTwentyfive = assetTitleTwentyfive.split("/").pop();
document.getElementById("titleFromPhotoTwentyfive").innerHTML = decodeURI(assetTitle);

let assetTitleTwentyEight = document.getElementById("assetTitleTwentyEight").src;
assetTitleTwentyEight = assetTitleTwentyEight.split("/").pop();
document.getElementById("titleFromPhotoTwentyEight").innerHTML = decodeURI(assetTitleTwentyEight);

let assetTitleTwentysix = document.getElementById("assetTitleTwentysix").src;
assetTitleTwentysix = assetTitleTwentysix.split("/").pop();
document.getElementById("titleFromPhotoTwentysix").innerHTML = decodeURI(assetTitleTwentysix);

let assetTitleTwentynine = document.getElementById("assetTitleTwentynine").src;
assetTitleTwentynine = assetTitleTwentynine.split("/").pop();
document.getElementById("titleFromPhotoTwentynine").innerHTML = decodeURI(assetTitleTwentynine);

let assetTitleTwentyseven = document.getElementById("assetTitleTwentyseven").src;
assetTitleTwentyseven = assetTitleTwentyseven.split("/").pop();
document.getElementById("titleFromPhotoTwentyseven").innerHTML = decodeURI(assetTitleTwentyseven);

let assetTitleThirty = document.getElementById("assetTitleThirty").src;
assetTitleThirty = assetTitleThirty.split("/").pop();
document.getElementById("titleFromPhotoThirty").innerHTML = decodeURI(assetTitleThirty);



// Assets 31 to 36

let assetTitleThirtyOne = document.getElementById("assetTitleThirtyOne").src;
assetTitleThirtyOne = assetTitleThirtyOne.split("/").pop();
document.getElementById("titleFromPhotoThirtyOne").innerHTML = decodeURI(assetTitle);

let assetTitleThirtyFour = document.getElementById("assetTitleThirtyFour").src;
assetTitleThirtyFour = assetTitleThirtyFour.split("/").pop();
document.getElementById("titleFromPhotoThirtyFour").innerHTML = decodeURI(assetTitleThirtyFour);

let assetTitleThirtyTwo = document.getElementById("assetTitleThirtyTwo").src;
assetTitleThirtyTwo = assetTitleThirtyTwo.split("/").pop();
document.getElementById("titleFromPhotoThirtyTwo").innerHTML = decodeURI(assetTitleThirtyTwo);

let assetTitleThirtyFive = document.getElementById("assetTitleThirtyFive").src;
assetTitleThirtyFive = assetTitleThirtyFive.split("/").pop();
document.getElementById("titleFromPhotoThirtyFive").innerHTML = decodeURI(assetTitleThirtyFive);

let assetTitleThirtyThree = document.getElementById("assetTitleThirtyThree").src;
assetTitleThirtyThree = assetTitleThirtyThree.split("/").pop();
document.getElementById("titleFromPhotoThirtyThree").innerHTML = decodeURI(assetTitleThirtyThree);

let assetTitleThirtySix = document.getElementById("assetTitleThirtySix").src;
assetTitleThirtySix = assetTitleThirtySix.split("/").pop();
document.getElementById("titleFromPhotoThirtySix").innerHTML = decodeURI(assetTitleThirtySix);



// Assets 37 to 42

let assetTitleThirtySeven = document.getElementById("assetTitleThirtySeven").src;
assetTitleThirtySeven = assetTitleThirtySeven.split("/").pop();
document.getElementById("titleFromPhotoThirtySeven").innerHTML = decodeURI(assetTitle);

let assetTitleForty = document.getElementById("assetTitleForty").src;
assetTitleForty = assetTitleForty.split("/").pop();
document.getElementById("titleFromPhotoForty").innerHTML = decodeURI(assetTitleForty);

let assetTitleThirtyEight = document.getElementById("assetTitleThirtyEight").src;
assetTitleThirtyEight = assetTitleThirtyEight.split("/").pop();
document.getElementById("titleFromPhotoThirtyEight").innerHTML = decodeURI(assetTitleThirtyEight);

let assetTitleFortyOne = document.getElementById("assetTitleFortyOne").src;
assetTitleFortyOne = assetTitleFortyOne.split("/").pop();
document.getElementById("titleFromPhotoFortyOne").innerHTML = decodeURI(assetTitleFortyOne);

let assetTitleThirtyNine = document.getElementById("assetTitleThirtyNine").src;
assetTitleThirtyNine = assetTitleThirtyNine.split("/").pop();
document.getElementById("titleFromPhotoThirtyNine").innerHTML = decodeURI(assetTitleThirtyNine);

let assetTitleFortyTwo = document.getElementById("assetTitleFortyTwo").src;
assetTitleFortyTwo = assetTitleFortyTwo.split("/").pop();
document.getElementById("titleFromPhotoFortyTwo").innerHTML = decodeURI(assetTitleFortyTwo);



// Assets 43 to 48

let assetTitleFortyThree = document.getElementById("assetTitleFortyThree").src;
assetTitleFortyThree = assetTitleFortyThree.split("/").pop();
document.getElementById("titleFromPhotoFortyThree").innerHTML = decodeURI(assetTitle);

let assetTitleFortySix = document.getElementById("assetTitleFortySix").src;
assetTitleFortySix = assetTitleFortySix.split("/").pop();
document.getElementById("titleFromPhotoFortySix").innerHTML = decodeURI(assetTitleFortySix);

let assetTitleFortyFour = document.getElementById("assetTitleFortyFour").src;
assetTitleFortyFour = assetTitleFortyFour.split("/").pop();
document.getElementById("titleFromPhotoFortyFour").innerHTML = decodeURI(assetTitleFortyFour);

let assetTitleFortySeven = document.getElementById("assetTitleFortySeven").src;
assetTitleFortySeven = assetTitleFortySeven.split("/").pop();
document.getElementById("titleFromPhotoFortySeven").innerHTML = decodeURI(assetTitleFortySeven);

let assetTitleFortyFive = document.getElementById("assetTitleFortyFive").src;
assetTitleFortyFive = assetTitleFortyFive.split("/").pop();
document.getElementById("titleFromPhotoFortyFive").innerHTML = decodeURI(assetTitleFortyFive);

let assetTitleFortyEight = document.getElementById("assetTitleFortyEight").src;
assetTitleFortyEight = assetTitleFortyEight.split("/").pop();
document.getElementById("titleFromPhotoFortyEight").innerHTML = decodeURI(assetTitleFortyEight);


// Assets 49 to 54

let assetTitleFortyNine = document.getElementById("assetTitleFortyNine").src;
assetTitleFortyNine = assetTitleFortyNine.split("/").pop();
document.getElementById("titleFromPhotoFortyNine").innerHTML = decodeURI(assetTitle);

let assetTitleFiftyTwo = document.getElementById("assetTitleFiftyTwo").src;
assetTitleFiftyTwo = assetTitleFiftyTwo.split("/").pop();
document.getElementById("titleFromPhotoFiftyTwo").innerHTML = decodeURI(assetTitleFiftyTwo);

let assetTitleFifty = document.getElementById("assetTitleFifty").src;
assetTitleFifty = assetTitleFifty.split("/").pop();
document.getElementById("titleFromPhotoFifty").innerHTML = decodeURI(assetTitleFifty);

let assetTitleFiftyThree = document.getElementById("assetTitleFiftyThree").src;
assetTitleFiftyThree = assetTitleFiftyThree.split("/").pop();
document.getElementById("titleFromPhotoFiftyThree").innerHTML = decodeURI(assetTitleFiftyThree);

let assetTitleFiftyOne = document.getElementById("assetTitleFiftyOne").src;
assetTitleFiftyOne = assetTitleFiftyOne.split("/").pop();
document.getElementById("titleFromPhotoFiftyOne").innerHTML = decodeURI(assetTitleFiftyOne);

let assetTitleFiftyFour = document.getElementById("assetTitleFiftyFour").src;
assetTitleFiftyFour = assetTitleFiftyFour.split("/").pop();
document.getElementById("titleFromPhotoFiftyFour").innerHTML = decodeURI(assetTitleFiftyFour);



// Assets 55 to 60

let assetTitleFiftyFive = document.getElementById("assetTitleFiftyFive").src;
assetTitleFiftyFive = assetTitleFiftyFive.split("/").pop();
document.getElementById("titleFromPhotoFiftyFive").innerHTML = decodeURI(assetTitle);

let assetTitleFiftyEight = document.getElementById("assetTitleFiftyEight").src;
assetTitleFiftyEight = assetTitleFiftyEight.split("/").pop();
document.getElementById("titleFromPhotoFiftyEight").innerHTML = decodeURI(assetTitleFiftyEight);

let assetTitleFiftySix = document.getElementById("assetTitleFiftySix").src;
assetTitleFiftySix = assetTitleFiftySix.split("/").pop();
document.getElementById("titleFromPhotoFiftySix").innerHTML = decodeURI(assetTitleFiftySix);

let assetTitleFiftyNine = document.getElementById("assetTitleFiftyNine").src;
assetTitleFiftyNine = assetTitleFiftyNine.split("/").pop();
document.getElementById("titleFromPhotoFiftyNine").innerHTML = decodeURI(assetTitleFiftyNine);

let assetTitleFiftySeven = document.getElementById("assetTitleFiftySeven").src;
assetTitleFiftySeven = assetTitleFiftySeven.split("/").pop();
document.getElementById("titleFromPhotoFiftySeven").innerHTML = decodeURI(assetTitleFiftySeven);

let assetTitleSixty = document.getElementById("assetTitleSixty").src;
assetTitleSixty = assetTitleSixty.split("/").pop();
document.getElementById("titleFromPhotoSixty").innerHTML = decodeURI(assetTitleSixty);