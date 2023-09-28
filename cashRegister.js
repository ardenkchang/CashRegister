function checkCashRegister(price, cash, cid) {
  let hundred = cid[8];
  let twenty = cid[7];
  let ten = cid[6];
  let five = cid[5];
  let one = cid[4];
  let quarter = cid[3];
  let dime = cid[2];
  let nickel = cid[1];
  let penny = cid[0];
  let diff = cash - price;
  let changeArr = [];
  let arr = {};
  let changeInTill = hundred[1] + twenty[1] + ten[1] + five[1] + one[1] + quarter[1] + dime[1] + nickel[1] + penny[1];
  if(diff < changeInTill) {
    while (diff != 0) {
      //check how much is still owed and how much is in register
      if (diff >= 100 && hundred[1] >= 100) {
        let numHundreds = Math.floor(diff/100);
        if ((numHundreds >= 1) && (hundred[1] >= 100 * numHundreds)) {
          diff -= numHundreds * 100;
          diff = diff.toFixed(2);
          changeInTill -= numHundreds * 100;
          changeInTill = changeInTill.toFixed(2);
          hundred[1] -= numHundreds * 100;
          changeArr.push(["HUNDRED", numHundreds * 100]);
        } else {
          let remHundreds = hundred[1]/100; // amount of hundreds left
          diff -= remHundreds * 100;
          diff = diff.toFixed(2);
          changeInTill -= remHundreds * 100;
          changeInTill = changeInTill.toFixed(2);
          hundred[1] -= remHundreds * 100;
          changeArr.push(["HUNDRED", remHundreds * 100]);
        }
      } else if (diff >= 20 && twenty[1] >= 20) {
        let numTwenties = Math.floor(diff/20);
        if((numTwenties >= 1) && (twenty[1] >= 20 * numTwenties)) {
          diff -= numTwenties * 20;
          diff = diff.toFixed(2);
          changeInTill -= numTwenties * 20;
          changeInTill = changeInTill.toFixed(2);
          twenty[1] -= numTwenties * 20
          changeArr.push(["TWENTY", numTwenties * 20]);
        } else {
          let remTwenties = twenty[1]/20;
          diff -= remTwenties * 20;
          diff = diff.toFixed(2);
          changeInTill -= remTwenties * 20;
          changeInTill = changeInTill.toFixed(2);
          twenty[1] -= remTwenties * 20;
          changeArr.push(["TWENTY", remTwenties * 20]);
        }
      } else if (diff >= 10 && ten[1] >= 10) {
        let numTens = Math.floor(diff/10);
        if((numTens >= 1) && (ten[1] >= 10 * numTens)) {
          diff -= numTens * 10;
          diff = diff.toFixed(2);
          changeInTill -= numTens * 10;
          changeInTill = changeInTill.toFixed(2);
          ten[1] -= numTens * 10;
          changeArr.push(["TEN", numTens * 10]);
        } else {
          let remTens = ten[1]/10;
          diff -= remTens * 10;
          diff = diff.toFixed(2);
          changeInTill -= remTens * 10;
          changeInTill = changeInTill.toFixed(2);
          ten[1] -= remTens * 10;
          changeArr.push(["TEN", remTens * 10])
        }
      } else if (diff >= 5 && five[1] >= 5) {
        let numFives = Math.floor(diff/5);
        if((numFives >= 1) && (five[1] >= 5 * numFives)) {
          diff -= numFives * 5;
          diff = diff.toFixed(2);
          changeInTill -= numFives * 5;
          changeInTill = changeInTill.toFixed(2);
          five[1] -= numFives * 5;
          changeArr.push(["FIVE", numFives * 5]);
        } else {
          let remFives = five[1]/5;
          diff -= remFives * 5;
          diff = diff.toFixed(2);
          changeInTill -= remFives * 5;
          changeInTill = changeInTill.toFixed(2);
          five[1] -= remFives * 5;
          changeArr.push(["FIVE", remFives * 5]);
        }
      } else if (diff >= 1 && one[1] >= 1) {
        let numOnes = Math.floor(diff/1);
        if((numOnes >= 1) && (one[1] >= 1 * numOnes)) {
          diff -= numOnes * 1;
          diff = diff.toFixed(2);
          changeInTill -= numOnes * 1;
          changeInTill = changeInTill.toFixed(2);
          one[1] -= numOnes * 1;
          changeArr.push(["ONE", numOnes * 1]);
        } else {
          let remOnes = one[1]/1;
          diff -= remOnes * 1;
          diff = diff.toFixed(2);
          changeInTill -= remOnes * 1;
          changeInTill = changeInTill.toFixed(2);
          one[1] -= remOnes * 1;
          changeArr.push(["ONE", remOnes * 1]);
        }
      } else if (diff >= 0.25 && quarter[1] >= 0.25) {
        let numQuarters = Math.floor(diff/0.25);
        if((numQuarters >= 1) && (quarter[1] >= 0.25 * numQuarters)) {
          diff -= numQuarters * 0.25;
          diff = diff.toFixed(2);
          changeInTill -= numQuarters * 0.25;
          changeInTill = changeInTill.toFixed(2);
          quarter[1] -= numQuarters * 0.25;
          changeArr.push(["QUARTER", numQuarters * 0.25]);
        } else {
          let remQuarters = quarter[1]/0.25;
          diff -= remQuarters * 0.25;
          diff = diff.toFixed(2);
          changeInTill -= remQuarters * 0.25;
          changeInTill = changeInTill.toFixed(2);
          quarter[1] -= remQuarters * 0.25;
          changeArr.push(["QUARTER", remQuarters * 0.25]);
        }
      } else if (diff >= 0.10 && dime[1] >= 0.10) {
        let numDimes = Math.floor(diff/0.10);
        if((numDimes >= 1) && (dime[1] >= 0.10 * numDimes)) {
          diff -= numDimes * 0.10;
          diff = diff.toFixed(2);
          changeInTill -= numDimes * 0.10;
          changeInTill = changeInTill.toFixed(2);
          dime[1] -= numDimes * 0.10;
          changeArr.push(["DIME", numDimes * 0.10]);
        } else {
          let remDimes = dime[1]/0.10;
          diff -= remDimes * 0.10;
          diff = diff.toFixed(2);
          changeInTill -= remDimes * 0.10;
          changeInTill = changeInTill.toFixed(2);
          dime[1] -= remDimes * 0.10;
          changeArr.push(["DIME", remDimes * 0.10]);
        }
      } else if (diff >= 0.05 && nickel[1] >= 0.05) {
        let numNickels = Math.floor(diff/0.05);
        if((numNickels >= 1) && (nickel[1] >= 0.05 * numNickels)) {
          diff -= numNickels * 0.05;
          diff = diff.toFixed(2);
          changeInTill -= numNickels * 0.05;
          changeInTill = changeInTill.toFixed(2);
          nickel[1] -= numNickels * 0.05;
          changeArr.push(["NICKEL", numNickels * 0.05]);
        } else {
          let remNickels = nickel[1]/0.05;
          diff -= remNickels * 0.05;
          diff = diff.toFixed(2);
          changeInTill -= remNickels * 0.05;
          changeInTill = changeInTill.toFixed(2);
          nickel[1] -= remNickels * 0.05;
          changeArr.push(["NICKEL", remNickels * 0.05]);
        }
      } else if (diff >= 0.01 && penny[1] >= 0.01) {
        let numPennies = Math.floor(diff/0.01);
        if((numPennies >= 1) && (penny[1] >= 0.01 * numPennies)) {
          diff -= numPennies * 0.01;
          diff = diff.toFixed(2);
          changeInTill -= numPennies * 0.01;
          changeInTill = changeInTill.toFixed(2);
          penny[1] -= numPennies * 0.01;
          changeArr.push(["PENNY", numPennies * 0.01]);
          break;
        } else {
          let remPennies = penny[1]/0.01;
          diff -= remPennies * 0.01;
          diff = diff.toFixed(2);
          changeInTill -= remPennies * 0.01;
          changeInTill = changeInTill.toFixed(2);
          penny[1] -= remPennies * 0.01;
          changeArr.push(["PENNY", remPennies * 0.01]);
          break;
        }
      }
    }
    if (changeInTill > 0 && diff == 0) {
      arr.status = "OPEN";
      arr.change = changeArr;
    } else if (diff > 0) {
      arr.status = "INSUFFICIENT_FUNDS";
      arr.change = [];
    } 
  } else if (diff == changeInTill) {
    arr.status = "CLOSED";
    arr.change = cid;
  } else {
    arr.status = "INSUFFICIENT_FUNDS";
    arr.change = changeArr;
  }
  return arr;
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
