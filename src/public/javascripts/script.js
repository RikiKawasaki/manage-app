

// 並び替え機能
// const clientIdAll = document.getElementsByClassName("clientId");
// const getIdAll = () => {
//     let str = "";
//     for(let i = 0; i < clientIdAll.length; i++) {
//         str = str + (i + 1);
//     };
//     const clientIdArr = [...str];
//     return clientIdArr;
// };
// const ascendingOrder = (a, b) => {
//     return a - b;
// };
// const descendingOrder = (a, b) => {
//     return b - a;
// };
// const sort = document.querySelector("#sort");
// sort.addEventListener("change", (event) => {
//     if(event.target.value === "largestTo") {
//         for(let i = 0; i < clientIdAll.length; i++) {
//             const ascendingOrderId = getIdAll().sort(ascendingOrder)[i];
//             clientIdAll[i].textContent = ascendingOrderId;
//             // let clientIdHtml = clientIdAll[i].textContent;
//             // clientIdAll.textContent = clientIdHtml;
//             // clientIdHtml.textContent = clientIdAll[i].textContent;
//         }
//     } else if(event.target.value === "smallestTo") {
//         for(let i = 0; i < clientIdAll.length; i++) {
//             const descendingOrderId = getIdAll().sort(descendingOrder)[i];
//             clientIdAll[i].textContent = descendingOrderId;
//         }
//     };
// });

// 同上
// const clientLi = document.getElementsByClassName("clientList");
// const clientId = document.getElementsByClassName("clientId");
// const getSort = document.querySelector(".sort");
// console.log(clientId[0]);

// const getListNumArr = () => {
//     let str = "";
//     for(let i = 0; i < clientLi.length; i++) {
//         str +=  i;
//     }
//     const clientLiNumArr = [...str];
//     return clientLiNumArr;
// };
// const getIdNumArr = () => {
//     let str = "";
//     for(let i = 0; i < clientId.length; i++) {
//         str += clientId[i].textContent;
//     }
//     const clientIdNumArr = [...str];
//     return clientIdNumArr;
// }
// const ascendingOrder = (a, b) => {
//     return a - b;
// };
// const descendingOrder = (a, b) => {
//     return b - a;
// };

// getSort.addEventListener("change", (event) => {
//     if(event.target.value === "largestTo") {
//         for(let i = 0; i < clientId.length; i++) {
//             let ascendingOrderId = getIdNumArr().sort(ascendingOrder);
//             getIdNumArr()[i] = ascendingOrderId;
//             clientId[i].textContent = getIdNumArr()[i];
//         }
//     } else if(event.target.value === "smallestTo") {
//         for(let i = 0; i < clientId.length; i++) {
//             let descendingOrderId = getIdNumArr().sort(descendingOrder);
//             console.log(descendingOrder);
//             getIdNumArr()[i] = descendingOrderId;
//             clientId[i].textContent = getIdNumArr()[i];
//             console.log(clientId[i].textContent);
//         }
//     };
// });

