
Orders.forEach(order =>{
const tr = document.createElement('tr')
const trData = `
<td>${order.productName}</td>
<td>${order.productNumber}</td>
<td>${order.paymentStatus}</td>
<td class="${order.status === 'Delivered' ? 'primary' : order.status === 'Processing' ? 'warning' : 'danger' }">${order.status}</td>
<td class= "primary"> Details </td>

`;

tr.innerHTML = trData;
document.querySelector('table tbody').appendChild(tr);
})