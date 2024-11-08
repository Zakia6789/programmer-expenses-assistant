


//2. add event listener for 'calculateButton' button :--
const calculateButton = document.getElementById('calculate');
// console.log(calculateButton);
calculateButton.addEventListener('click', function(){
    //1. getting all the input fields's value 
const income = parseFloat (document.getElementById('income').value);
const software = parseFloat(document.getElementById('software').value);
const courses = parseFloat(document.getElementById('courses').value);
const internet = parseFloat(document.getElementById ('internet').value);
// console.log(typeof income);
// console.log({income, software, courses, internet});
// console.table({income, software, courses, internet});


// calculattion:
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    // console.table({totalExpenses, balance});
    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);
     const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    //##** remove hidden class from result 
    const result = document.getElementById('results');
    result.classList.remove('hidden');
})


//3. add event listener for 'calculate-savings' button 
const calculateSavingsButton = document.getElementById('calculate-savings');
calculateSavingsButton.addEventListener('click', function(){

    const savingPercentage = parseFloat(document.getElementById('savings').value);
    const income = parseFloat (document.getElementById('income').value);
const software = parseFloat(document.getElementById('software').value);
const courses = parseFloat(document.getElementById('courses').value);
const internet = parseFloat(document.getElementById ('internet').value);
    // console.log (typeof savingPercentage);


    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingsAmmount = (savingPercentage * balance) / 100;
    // console.log(savingsAmmount);

    const savingsElement = document.getElementById('savings-amount');
    savingsElement.innerText = savingsAmmount.toFixed(2);

    const remainingBalance = balance - savingsAmmount;
    // console.log(ramainingBalance);

    const remainingElement = document.getElementById('remaining-balance');
    remainingElement.innerText = remainingBalance.toFixed(2);

  
})