import fetch from 'node-fetch';
import{config} from "dotenv";

config();

const URL = process.env.URL || "https://sber.ru/";

(async () => {
  let i = 1;
  while (i < 10) {
    i++;
    if (i % 1000 === 0) {
      console.log(i)
      await new Promise((res) => {
        setTimeout(res, 1000)
      })
    }
    
    fetch(URL).then(() => console.log("🚀")).catch((e) => e)
  }
})();