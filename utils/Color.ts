function numToColor(num: number) {
  let color = "blue";
  switch (num) {
    case 1:
      color = "red";
      break;
    case 2:
      color = "yellow";
      break;
    case 3:
      color = "green";
      break;
    case 4:
      color = "blue";
      break;
    case 5:
      color = "purple";
      break;
  }
  return color;
}

export { numToColor };
