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

const clientList = document.getElementsByClassName("clientList");
const getListAllVal = () => {
    let str = "";
    for(let i = 0; i < clientList.length; i++) {
        str = str + (i + 1);
    }
    const clientListArr = [...str];
    return clientListArr;
};
console.log(getListAllVal());