const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('number'));
// console.log(myInfo.get('email'));
// console.log(myInfo.get('grade'));
// console.log(myInfo.get('method'));
// console.log(myInfo.get('subject'));
// console.log(myInfo.get('Description'));
// console.log(myInfo.get('timeStamp'));

function formattedPhoneNumber(phoneInput) {
    // 1. Remove all non-numeric characters
    let cleaned = phoneInput.replace(/\D/g, '');

    // 2. If it has 11 digits and starts with '1', trim the '1'
    if (cleaned.length === 11 && cleaned.startsWith('1')) {
        cleaned = cleaned.slice(1);
    }
    // 3. Extract parts using .slice(start, end)
    const area = cleaned.slice(0, 3); // First 3 digits
    const prefix = cleaned.slice(3, 6); // middle 3 digits
    const line = cleaned.slice(6, 10); // Last 4 digits

    // 4. Join them using "."
    return `${area}-${prefix}-${line}`;
}
// Call the function and save it to a variable first
const phoneInput = myInfo.get('number');
const formattedPhone = formattedPhoneNumber(phoneInput);

document.querySelector('#results').innerHTML = 
    `
    <p><b>Please review the information we received from you.</b></p>
    <p><b>Name:</b> ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p><b>Phone Number:</b> ${formattedPhone}</p>
    <p><b>Your email:</b> ${myInfo.get('email')}</p>
    <p><b>Student's grade:</b> ${myInfo.get('grade')}</p>
    <p><b>Your preferred method of studying: </b> ${myInfo.get('method')}</p>
    <p><b>Subject(s) needed:</b> ${myInfo.get('subject')}</p>
    <p><b>How can we help: </b> ${myInfo.get('Description')}</p>
    <p><b>Application Date: </b> ${myInfo.get('timeStamp')}</p>
    `