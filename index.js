// function getDateTime(targetDate) {
//     const month=targetDate.getMonth();
//     const day=targetDate.getDate();
//     const hour=targetDate.Hours();

//     return {
//         month : month >=10 ? month : '0' + month,
//         day : day >= 10? day : '0' + day,
//         hour : hour >= 10? hour : '0' + hour,
//     }
// }

// function getDateTime() {
//     const currentDateTime = getDateTime(new Date())

//     return {
//         month : currentDateTime.month + '분 전',
//         day : currentDateTime.day + '일 전',
//         hour : currentDateTime.hour + ' 전',
//     }
// }

// getDateTime();


// function getDateTime(targetDate) {
//     let month=targetDate.getMonth();
//     let day=targetDate.getDate();
//     let hour=targetDate.Hours();

//     month = month >=10 ? month : '0' + month;
//     day = day >= 10? day : '0' + day;
//     hour = hour >= 10? hour : '0' + hour;

//     return {
//         month, day, hour
//     }
// }




// function getElements() {
//    const result = {};   // 임시 객체
   
//    result.title= document.querySelector('.title');
//    result.text= document.querySelector('.text');
//    result.value= document.querySelector('.value');

//    return result;
// }

// function getElements() {

//     return {
//      title: document.querySelector('.title'),
//      text: document.querySelector('.text'),
//      value: document.querySelector('.value'),
//     }
//  }



//  var global = 0;

//  function outer() {
//      console.log(global);
//      var global=5;
 
//      function inner() {
//          var global = 10;
 
//          console.log(global);
//      }
 
//      inner();
 
//      global=1;
 
//      console.log(global);
//  }
 
//  outer();

 function duplicatedVar() {
    var a;

    console.log(a);

    var a = 100;

    console.log(a);

}

duplicatedVar();