
$(document).ready(function () {
    $("#savings-amount").autoNumeric('init', {
        mDec: '0',
        lZero: 'deny',
        wEmpty: 'zero',
        vMax: '50000000',
        vMin: '0'
    });
});

Chart.defaults.global.defaultFontFamily = 'Circular, sans-serif';
Chart.defaults.global.defaultFontSize = 11;

///////////////////////////////
// FUNCTIONS
///////////////////////////////
function getInterestRate(number_of_days) {
    days = parseInt(number_of_days);
    if (days <= 180) {
        return 0.05;
    }
    if (days >= 181 && days <= 270) {
        return 0.055;
    }
    if (days >= 271 && days <= 365) {
        return 0.06;
    }
    if (days >= 366 && days <= 455) {
        return 0.065;
    }
    if (days >= 456 && days <= 635) {
        return 0.065;
    }
    if (days >= 636 && days <= 730) {
        return 0.065;
    }
    if (days > 731) {
        return 0.065;
    }
};

let computeMonthly = (saving, duration) => {
    let interestRate = 0.1;
    // For dynamic interest rates
    // if (duration) {
    //     interestRate = getInterestRate(duration * 30 * 12);
    // }
    // Tracking variables
    let totalPrincipal = 0;
    let totalInterest = 0;
    let balance = 0;
    let savingHistory;
    if (duration <= 12) {
        savingHistory = {
            years: ['0'],
            balance: [0],
            savings: [0]
        }
    } else {
        savingHistory = {
            years: [],
            balance: [],
            savings: []
        }
    }

    for (let month = 0; month < duration; month++) {
        let interest = 0;
        if (month === 0) {
            totalPrincipal = saving;
        } else {
            totalPrincipal += saving;
        }
        interest = totalPrincipal * (interestRate / 12);
        totalInterest += interest;
        balance = totalPrincipal + totalInterest;
        if (month == 0 || month % 12 == 0) {
            savingHistory.years.push(((month / 12) + 1).toString());
            savingHistory.savings.push(Math.round(totalPrincipal));
            savingHistory.balance.push(Math.round(balance));
        }
    }
    balance = totalPrincipal + totalInterest;
    return {
        savings: Math.round(totalPrincipal).toLocaleString(),
        returns: Math.round(totalInterest).toLocaleString(),
        balance: Math.round(balance).toLocaleString(),
        interestRate: interestRate * 100,
        history: savingHistory
    }
}

let computeDaily = (saving, duration) => {
    let interestRate = 0.1;
    // For dynamic interest rates
    // if (duration) {
    //     interestRate = getInterestRate(duration * 30);
    // }
    let totalPrincipal = 0;
    let totalInterest = 0;
    let balance = 0;
    let savingHistory;
    if (duration <= 12) {
        savingHistory = {
            years: ['0'],
            balance: [0],
            savings: [0]
        }
    } else {
        savingHistory = {
            years: [],
            balance: [],
            savings: []
        }
    }

    for (let day = 0; day < duration * 30; day++) {
        let interest = 0;
        if (day === 0) {
            totalPrincipal = saving;
        } else {
            totalPrincipal += saving;
        }
        interest = totalPrincipal * (interestRate / 365);
        totalInterest += interest;
        balance = totalPrincipal + totalInterest;
        if (day == 0 || day % 360 == 0) {
            savingHistory.years.push(((day / 360) + 1).toString());
            savingHistory.savings.push(Math.round(totalPrincipal));
            savingHistory.balance.push(Math.round(balance));
        }
    }
    balance = totalPrincipal + totalInterest;
    return {
        savings: Math.round(totalPrincipal).toLocaleString(),
        returns: Math.round(totalInterest).toLocaleString(),
        balance: Math.round(balance).toLocaleString(),
        interestRate: interestRate * 100,
        history: savingHistory
    }
}

let computeWeekly = (saving, duration) => {
    let interestRate = 0.1;
    // For dynamic interest rates
    // if (duration) {
    //     interestRate = getInterestRate(duration * 30);
    // }
    let totalPrincipal = 0;
    let totalInterest = 0;
    let balance = 0;
    let savingHistory;
    if (duration <= 12) {
        savingHistory = {
            years: ['0'],
            balance: [0],
            savings: [0]
        }
    } else {
        savingHistory = {
            years: [],
            balance: [],
            savings: []
        }
    }

    for (let week = 0; week < duration * 4; week++) {
        let interest = 0;
        if (week === 0) {
            totalPrincipal = saving;
        } else {
            totalPrincipal += saving;
        }
        interest = totalPrincipal * (interestRate / 48);
        totalInterest += interest;
        balance = totalPrincipal + totalInterest;
        if (week == 0 || week % 48 == 0) {
            savingHistory.years.push(((week / 48) + 1).toString());
            savingHistory.savings.push(Math.round(totalPrincipal));
            savingHistory.balance.push(Math.round(balance));
        }
    }
    balance = totalPrincipal + totalInterest;
    return {
        savings: Math.round(totalPrincipal).toLocaleString(),
        returns: Math.round(totalInterest).toLocaleString(),
        balance: Math.round(balance).toLocaleString(),
        interestRate: interestRate * 100,
        history: savingHistory
    }
}

let computeAnnual = (saving, duration, interestRate) => {
    let openingBal = 0;
    let totalInterest = 0;
    let closingBal = 0;
    let totalSavings = 0;
    let savingHistory = {
        years: [],
        interest: [],
        balance: [],
        savings: []
    }
    for (let year = 0; year < duration; year++) {
        let interest = 0;
        if (year === 0) {
            openingBal += saving;
            interest = 0;
        } else {
            openingBal = saving + closingBal;
            interest = closingBal * interestRate;
        }
        closingBal = openingBal + interest;
        totalSavings += saving;
        totalInterest += interest;
        savingHistory.years.push((year + 1).toString());
        savingHistory.interest.push(Math.round(interest));
        savingHistory.savings.push(Math.round(totalSavings));
        savingHistory.balance.push(Math.round(closingBal));
    }
    return {
        savings: Math.round(totalSavings).toLocaleString(),
        returns: Math.round(totalInterest).toLocaleString(),
        balance: Math.round(closingBal).toLocaleString(),
        history: savingHistory
    }
}

let replaceMiddleMonths = (data) => {
    let newData = [];
    for (let i = 0; i < data.length; i++) {
        if (i === data.length - 1 || i === 0) {
            newData.push(`${data[i]}`);
        } else {
            newData.push("");
        }
    }

    return newData;
}

let addYear = (data) => {
    let newData = [];
    for (let i = 0; i < data.length; i++) {
        newData.push('Year ' + data[i]);
    }

    return newData;
}

let drawChart = (timeline, savingsData, balanceData, xLabel, ctx) => {
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: addYear(timeline),
            datasets: [
                {
                    label: 'Savings',
                    data: savingsData,
                    backgroundColor: 'rgba(128, 191, 242, 1)',
                    borderColor: 'rgba(128, 191, 242, 1)',
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: 'Returns',
                    data: balanceData,
                    type: 'line',
                    backgroundColor: 'rgba(188, 229, 247, 1)',
                    borderColor: 'rgba(188, 229, 247, 1)',
                    borderWidth: 2,
                    pointRadius: 0
                }]
        },
        options: {
            legend: {
                display: false,
                position: 'bottom'
            },
            scales: {
                yAxes: [{
                    display: false,
                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        autoSkip: true,
                        autoSkipPadding: 15,
                        maxRotation: 0
                    },
                    gridLines: {
                        display: false
                    }
                }]

            },
        }
    });
}

let getSavingsFrequency = (value) => {
    if (value === "0") {
        return "Monthly";
    }
    else if (value === "1") {
        return "Weekly";
    }
    else if (value === "2") {
        return "Daily";
    }
}

///////////////////////////////
// INTEREST CALCULATOR
///////////////////////////////
// Input
let savingsAmount = document.querySelector("#savings-amount");
let savingsDuration = document.querySelector("#savings-duration");
let savingsFrequency = document.querySelector('#savings-frequency');
let frequencyHelper = document.querySelector("#frequency-helper");

// Output
let amountHelper = document.querySelector("#amount-input-helper");
let durationHelper = document.querySelector("#duration-input-helper");
let savingsRequired = document.querySelector("#savings-required");
let summary = document.querySelector("#summary");
let totalSavings = document.querySelector("#total-savings");
let totalReturns = document.querySelector("#total-returns");
let interestChart = document.getElementById("chart").getContext('2d');

let displayResult = () => {
    let results;

    // Taking out comma seperators introduced by autoNumeric
    let principalValue = savingsAmount.value;
    let months = parseInt(savingsDuration.value) * 12;
    principalValue = principalValue.replace(/,/g, '');

    let selectedFrequency = getSavingsFrequency(savingsFrequency.value);
    frequencyHelper.innerHTML = `${selectedFrequency} Amount`;

    if (principalValue > 0) {
        if (parseInt(savingsDuration.value) >= 1 && parseInt(savingsDuration.value) <= 50) {
            switch (parseInt(savingsFrequency.value)) {
                case 0:
                    results = computeMonthly(parseInt(principalValue), months);
                    break;
                case 1:
                    results = computeWeekly(parseInt(principalValue), months);
                    break;
                case 2:
                    results = computeDaily(parseInt(principalValue), months);
                    break;
                default:
                    break;
            }

            amountHelper.setAttribute("style", "opacity:0;");
            durationHelper.setAttribute("style", "opacity:0;");

            savingsRequired.innerHTML = `₦${results.balance}`;
            summary.innerHTML = `Saving ₦${Math.round(principalValue).toLocaleString()} ${selectedFrequency} for ${savingsDuration.value} ${savingsDuration.value > 1 ? `years`: `year` } will result in a balance of ₦${results.balance}.`;

            totalSavings.innerHTML = `₦${results.savings}`;
            totalReturns.innerHTML = `₦${results.returns}`;

            let chartData = results.history;
            drawChart(chartData.years, chartData.savings, chartData.balance, 'Year', interestChart);
        } else {

            savingsRequired.innerHTML = '0.00';
            summary.innerHTML = '';
            totalSavings.innerHTML = '₦0.00';
            totalReturns.innerHTML = '₦0.00';
            durationHelper.setAttribute("style", "opacity:1;");
            drawChart([], [], [], 'Year', interestChart);

        }

    } else {
        savingsRequired.innerHTML = '0.00';
        summary.innerHTML = '';
        totalSavings.innerHTML = '₦0.00';
        totalReturns.innerHTML = '₦0.00';
        amountHelper.setAttribute("style", "opacity:1;");
        drawChart([], [], [], 'Year', interestChart);
    }
}

displayResult();
$("#savings-amount").on('change', displayResult);
savingsDuration.addEventListener('change', displayResult);
savingsFrequency.addEventListener('change', displayResult);
