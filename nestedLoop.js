/**
 *  *  *  *  *
 *  *  *  *  *
 *  *  *  *  *
 *  *  *  *  *
 */

// let value=""
// for(let i=1;i<=5;i++){
//  for(let j=1;j<=5;j++){
//    value +=' * '
//  }
//  value+='\n'
// }
// console.log(value)

// value=""

// for(let row=1;row<=5;row++){
//     for(let col=1;col<=row;col++){
//       value +=` ${col} `;
//     }
//     value+='\n'
//    }
//    console.log(value)

//    value=""

//    for(let row=1;row<=5;row++){
//        for(let col=1;col<=row;col++){
//          value +=` ${row} `;
//        }
//        value+='\n'
//       }
//       console.log(value)

//       value=''

//       let n=5
//       for(let i=1;i<=n;i++){
//          value=''
//         for(let j=1;j<=n-i;j++){
//            value+=' '
//          }
//         for(let k=1;k<=(i*2-1);k++){
//            value+='*'
//         }
//         console.log(value)
//       }

//       value=''
//        n=5;
//       for(let i=1;i<=n;i++){
//          value=''
//          for(let j=1;j<=i+1;j++){
//            value+=' '
//         }
//         for(let k=1;k<=1;k++){
//           value+='*'
//         }
//         console.log(value)
//       }

let value = "";
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = n; j >= i; j--) {
    value += " * ";
  }
  value += "\n";
}
console.log(value);

value = "";
n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    value += ` ${i} `;
  }
  value += "\n";
}
console.log(value);

value = "";
n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    value += ` ${i} `;
  }
  value += "\n";
}
console.log(value);

value = "";
n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    value += ` ${i} `;
  }
  value += "\n";
}
console.log(value);

value = "";
n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    value += ` ${j} `;
  }
  value += "\n";
}
console.log(value);

value = "";
n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === n || j === 1 || j == n) {
      value += `*`;
    } else {
      value += " ";
    }
  }
  value += "\n";
}
console.log(value);

// value = "";
// n = 9;
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= n - i; j++) {
//     value += " ";
//   }
//   for (k = 1; k <= i * 2 - 1; k++) {
//     value += "*";
//   }
//   value += "\n";
// }
// console.log(value);

// value = "";
n = 9;
for (let i = 1; i <=n; i++) {
  console.log(
     ' '.repeat(n-i)+'* '.repeat(i)
    )
  
  for (let j = n-1; j >=1; j--) {
    console.log(
      ' '.repeat(n-j)+'* '.repeat(j)
      )
  }
  // for (k = 1; k <= i * 2 - 1; k++) {
  //   value += "*";
  // }
  // value += "\n";
}
//console.log(value);
