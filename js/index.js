
let count =0;

//2. add event listener for 'calculateButton' button :--
const calculateButton = document.getElementById('calculate');
// console.log(calculateButton);
calculateButton.addEventListener('click', function(){
    count += 1;
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




    // history 
    const historyItem = document.createElement('div');
    historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";

    historyItem.innerHTML = `
    <p class="text-xs text-gray-500"> Serial: ${count} </p>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Expenses: $${totalExpenses.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>

    `;
    const historyContainer = document.getElementById('history-list');
    console.log('hitoryContainer');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

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













// history tab function 
const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function(){
    // console.log('history tab is clicked');
    historyTab.classList.add(
        'text-white', 
         'bg-gradient-to-r', 
         'from-blue-500', 
         'to-purple-600')
    historyTab.classList.remove('text-gray-600');

    assistantTab.classList.remove(
        'text-white',  
        'bg-gradient-to-r', 
        'from-blue-500', 
        'to-purple-600'),
    assistantTab.classList.add('text-gray-600');



    document.getElementById('expense-form').classList.add("hidden");
    document.getElementById('history-section').classList.remove("hidden");
});