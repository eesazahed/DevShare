import { numToColor } from "./Color";
import { randomIntFromInterval } from "@/utils/Numbers";

function getAvatarUrl(name: string) {
  let names = name.split(" ");
  let firstInitial = names[0].substring(0, 1).toUpperCase();
  let lastInitial = names[names.length - 1].substring(0, 1).toUpperCase();
  let num = randomIntFromInterval(1, 5);
  let color = numToColor(num);
  let url = ``;
  if (!lastInitial) {
    url = `https://i2.wp.com/d228am55mqbj0t.cloudfront.net/defaults/${color}-${firstInitial}.png`;
  } else {
    url = `https://i2.wp.com/d228am55mqbj0t.cloudfront.net/defaults/${color}-${
      firstInitial + lastInitial
    }.png`;
  }
  return url;
}

export { getAvatarUrl };
