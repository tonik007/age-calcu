function getDOB () {
    const dobInput = document.getElementById(`inputDob`).value;
    const currentDateInput = document.getElementById(`cdate`).value;
    const dob = new Date(dobInput);
    const currentDate = new Date (currentDateInput);

    // calculate age

    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDiference = (currentDate.getMonth() - dob.getMonth());
    
    const hours = currentDate.getMinutes();


    const dayDifference = (currentDate.getDate() > dob.getDate()) ? currentDate.getDate() - dob.getDate() : dob.getDate() - currentDate.getDate();

    // if (monthDiference < 0 || monthDiference === 0 && currentDate.getDate() < dob.getDate()) {
    //     age --;
    // }

    document.getElementById(`currentAgebd`).textContent = `Your Age is ${age} years and ${monthDiference} month ${dayDifference} Days` 
}



