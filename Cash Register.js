function checkCashRegister(price, cash, cid) {//bao gồm 3 tham số bao gồm giá tiền, tiền khách đưa và tiền trong hộp đựng
  let change= cash*100 - price*100;//tiền thối lại
  let cidTotal=0;//tổng tiền trong hộp đựng
  for(let elem of cid){//duyệt qua từng loại tiền trong hộp đựng
    cidTotal+=elem[1]*100;//tính tổng tiền trong hộp đựng
  }
  if(cidTotal<change){//nếu tổng tiền trong hộp đựng nhỏ hơn tiền thối lại
    return {status: "INSUFFICIENT_FUNDS", change: []};//trả về thông báo không đủ tiền
  }
  else if(cidTotal==change){//nếu tổng tiền trong hộp đựng bằng tiền thối lại
    return {status: "CLOSED", change: cid};//
  }
  else{//nếu tổng tiền trong hộp đựng lớn hơn tiền thối lại
    let answer=[];//mảng chứa tiền thối lại
    cid=cid.reverse();//đảo ngược mảng tiền trong hộp đựng
    let moneyUnits = {//đơn vị tiền
      "ONE HUNDRED": 10000,"TWENTY": 2000,"TEN": 1000,"FIVE": 500,
      "ONE": 100,"QUARTER": 25,"DIME": 10,"NICKEL": 5,"PENNY": 1
    }
    for(let elem of cid){//duyệt qua từng loại tiền trong hộp đựng
      let holder=[elem[0],0];//mảng chứa loại tiền và số lượng tiền thối lại
      elem[1]*=100;//đổi đơn vị tiền từ đơn vị tiền sang xu
      while(change>=moneyUnits[elem[0]] && elem[1]>0){//
        change-=moneyUnits[elem[0]];//tiền thối lại giảm đi đơn vị tiền
        elem[1]-=moneyUnits[elem[0]];//tiền trong hộp đựng giảm đi đơn vị tiền
        holder[1]+=moneyUnits[elem[0]]/100;//
      }
      if(holder[1]>0){//nếu số lượng tiền thối lại lớn hơn 0
        answer.push(holder);//thêm vào mảng tiền thối lại
      }
    }
    if(change>0){//nếu tiền thối lại vẫn còn
      return {status: "INSUFFICIENT_FUNDS", change: []};//trả về thông báo không đủ tiền
    }
      return {status: "OPEN", change: answer};//trả về thông báo đủ tiền và tiền thối lại
    }
  }

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05],
 ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
  ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);