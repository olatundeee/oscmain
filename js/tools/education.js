
Chart.defaults.global.defaultFontFamily = 'Circular, sans-serif';
Chart.defaults.global.defaultFontSize = 11;

///////////////////////////////
// FUNCTIONS
///////////////////////////////
function getInterestRate(number_of_days) {
    days = parseInt(number_of_days);
    if (days <= 180) {
        return 0.1;
    }
    if (days >= 181 && days <= 270) {
        return 0.105;
    }
    if (days >= 271 && days <= 365) {
        return 0.11;
    }
    if (days >= 366 && days <= 455) {
        return 0.115;
    }
    if (days >= 456 && days <= 635) {
        return 0.12;
    }
    if (days >= 636 && days <= 730) {
        return 0.125;
    }
    if (days > 731) {
        return 0.15;
    }
};

let computeAnnual = (saving, startYear, interestRate) => {
    let openingBal = 0;
    let totalInterest = 0;
    let closingBal = 0;
    let totalSavings = 0;
    let currentYear = new Date().getFullYear();
    let savingHistory = {
        years: [],
        interest: [],
        balance: [],
        savings: []
    }
    for (let year = currentYear; year < startYear; year++) {
        let interest = 0;
        if (year === currentYear) {
            openingBal += saving;
            interest = 0;
        } else {
            openingBal = saving + closingBal;
            interest = closingBal * interestRate;
        }
        closingBal = openingBal + interest;
        totalSavings += saving;
        totalInterest += interest;
        savingHistory.years.push((year).toString());
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

let drawChart = (timeline, savingsData, balanceData, xLabel, ctx) => {
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeline,
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

// Input
let educationUniversity = document.querySelector("#education-university");
let educationYear = document.querySelector("#education-year");
let universityFees = [420000, 27000, 350000, 690000, 500000, 350000, 1590000, 1584000, 416000, 800000, 505000, 411000, 713000, 500000, 480000, 65000, 341500, 480000, 1074000, 436000, 115000, 550000, 399500, 491000, 45000, 400000, 19700, 190000, 164000, 107536, 300000, 575000, 325000, 66500, 37200, 23650, 30000, 19500, 45000, 500000, 213750];

let computeEducation = (fees, startYear) => {
    const inflationRate = 0.1;
    const interestRate = 0.1;

    let currentYear = new Date().getFullYear();
    yearToGo = startYear - currentYear;

    let feesToday = fees;
    let fourYearsFeesToday = feesToday * 4;

    let feesAtStartDate = feesToday * Math.pow((1 + inflationRate), yearToGo);
    let fourYearsFeestAtStartDate = 4 * feesAtStartDate;

    let requiredSaving = fourYearsFeestAtStartDate * (interestRate / (Math.pow(1 + interestRate, yearToGo) - 1));
    let otherDetails = computeAnnual(requiredSaving, startYear, interestRate);

    return {
        startYear: startYear,
        completeFees: Math.round(fourYearsFeestAtStartDate).toLocaleString(),
        requiredSaving: Math.round(requiredSaving).toLocaleString(),
        totalSavings: otherDetails.savings,
        totalReturns: otherDetails.returns,
        history: otherDetails.history
    }
}

// Output
let displayEducationResult = () => {
    let presentFee = universityFees[parseInt(educationUniversity.value)];
    let helper = document.querySelector("#input-helper");
    let savingsRequired = document.querySelector("#savings-required");
    let summary = document.querySelector("#summary");
    let totalSavings = document.querySelector("#total-savings");
    let totalReturns = document.querySelector("#total-returns");
    let educationChart = document.getElementById("chart").getContext('2d');

    if (parseInt(educationYear.value) > 2019 && parseInt(educationYear.value) < 2071) {
        let results = computeEducation(presentFee, parseInt(educationYear.value));
        savingsRequired.innerHTML = `₦${results.requiredSaving}`;
        summary.innerHTML = `By ${results.startYear}, ${educationUniversity.options[educationUniversity.selectedIndex].text} fees for 4 years will be ₦${results.completeFees}. All you need to save is ₦${results.requiredSaving} annually, starting today.`;

        totalSavings.innerHTML = `₦${results.totalSavings}`;
        totalReturns.innerHTML = `₦${results.totalReturns}`;

        helper.setAttribute("style", "opacity:0;");
        let chartData = results.history;
        drawChart(chartData.years, chartData.savings, chartData.balance, 'Year', educationChart);
    } else {
        savingsRequired.innerHTML = '0.00';
        summary.innerHTML = '';

        totalSavings.innerHTML = '₦0.00';
        totalReturns.innerHTML = '₦0.00';

        helper.setAttribute("style", "opacity:1;");

        drawChart([], [], [], 'Year', educationChart);
    }
}

displayEducationResult();
educationYear.addEventListener('change', displayEducationResult);
educationUniversity.addEventListener('change', displayEducationResult);