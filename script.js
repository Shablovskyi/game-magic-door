"use strict";

function openDoor(key, code) {
  if (key === true && code > 100) {
    console.log("Двері магічно відчиняються!");

  } else if (key === false || code <= 100) {
    console.log("Двері залишаються закритими міцно.");

  } else {
    console.log("Хм... Нічого не відбувається.");

  }

  switch (code) {
    case 42:
      console.log("Відповідь на все! Двері розкриваються широко");
      break;

    case 7:
      console.log("Щасливий номер 7! Двері скриплячи відчиняються");
      break;

    case 13:
      console.log("Нещасливе число 13! Двері захлопуються.");
      break;

    default:
      console.log("Хм... Нічого не відбувається з цим кодом.");
      break;
  }
}

openDoor(true, 101);

openDoor(false, 100);
openDoor(false, 101);
openDoor(true, 100);

openDoor();

openDoor(false, 13);
openDoor(false, 7);
openDoor(false, 42);
