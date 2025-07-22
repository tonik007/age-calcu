
function getDOB() {
const monthOne = Number(document.getElementById(`monthOne`).value);
const dateOne = document.getElementById(`dateOne`).value;
const yearOne = document.getElementById(`yearOne`).value;
// Two
const monthTwo = Number(document.getElementById(`monthTwo`).value);
const dateTwo = document.getElementById(`dateTwo`).value;
const yaerTwo = document.getElementById(`yaerTwo`).value;


const date = (dateOne > dateTwo) ? dateOne - dateTwo : dateTwo - dateOne;
const month = (monthOne > monthTwo) ? monthOne - monthTwo : monthTwo - monthOne;
const year = yaerTwo - yearOne;


    document.getElementById(`finalOutput`).innerText = `${year} বছর ${month} মাস ${date} দিন`
    // document.getElementById(`finalOutput`).innerHTML = `<label>Enter Your Date of Birth</label><br>
    // <input type="date" id="inputDob" value="2004-05-05">`
}
