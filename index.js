// let dat = Date('2014-05-11');
// let r = dat.split(' ');
// console.log(r[3] + ' ' + r[1] + ' ' + r[2]);

let c = [
  '2021 Dec 13',
  '2021 Dec 14',
  '2021 Dec 15',
  '2022 Dec 16',
  '2022 Dec 17',
  '2022 Dec 18',
  '2022 Dec 19',
  '2022 Dec 20',
];
let e = [];
// let counter = 0;
for (let i = 0; i < c.length; i++) {
  let d = c[i].split(' ');
  // console.log(d);
  for (let j = 0; j < d.length; d++) {
    //  console.log(d[0])
    e.push(parseInt(d[0]));
    e.push(d[1] + ' ' + d[2]);
    //  console.log(e)
    //  console.log(d[0].indexOf(d[0]) > -1)
  }

  // console.log(e.indexOf(e) > -1);
  // let counter = 0;
  // console.log(e.length-1);
  // let temp = '';
  // for (let m = 0; m < e.length; m++) {
  //   for (let n = m + 1; n < e.length; n++) {
  //     if (e[m] == e[n]) {

  //       console.log('m '+ e[m])
  //     }else{
  //       console.log('n '+e[n])
  //     }
  //   }
  // }
  // console.log(temp);
  // console.log(counter)
}
// console.log(e);
// let array = ['Item 1', 'Item 2', 'Item 3'];

// array.forEach(item => {
// 	console.log(item); // Logs each 'Item #'
// });
// for (let m = 0; m < e.length; m++) {
//   for (let n = m + 1; n < e.length; n++) {
//     if (e[m] == e[n]) {
//       console.log('m ' + e[m]);
//       // }else{
//       //   console.log('n '+e[n])
//     }
//   }
// }
// let counter = 0;
// let i = 1;
// console.log(e[i-1])
// while(e[i] == e[i-1]){
//   console.log(true)
//   i++
//   counter++
// }
// console.log(i)
// console.log(counter)
var arr = [];
for (let k = 2; k < e.length; k += 2) {
  // console.log('1 ' + k);
  if (e[k] == e[k - 2]) {
    //  e.push( e[i]);
    // e.replace(e[i],"")
    // let p = k;
    arr.push(k); 


  }

}

// console.log(arr)


arr.forEach(val => {
  e[val] =" ";
})

console.log(e)

// let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// let str = '';

// for(let i = 0; i < a.length; i++){
// str = a[i];
// // console.log(str.join(""));
// for(let j = 0; j < str.length; j++){
// // newStr = str[j];
// console.log("row" + i + " " + a[i][j]);

// }

// }

let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

a.forEach((item, index) => {
    console.log(`row ${index}`)
    for (let value of item) {
        console.log(value);
    }
});

