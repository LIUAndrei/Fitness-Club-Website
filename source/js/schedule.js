

/* расписание описано ниже */

// массив типов тренировок

const workoutArry = ['CrossFit', 'Aerostretching', 'Hot Iron', 'Pilates', 'Stretching', 'Functional', 'Body Sculpt'];
const weekdays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let timeSlots = ['08', '12', '18', '20'];

const mainTable = document.querySelector('table.calendar__table');

function addTabHeader() {
    let headerRow = mainTable.querySelector('.table__header');
    for (var i = 0; i < 8; i++) {
        let newCell = document.createElement('th');
        newCell.classList.add('table__cell-' + (i-1));
        if (i !== 0) {
            newCell.textContent = weekdays[i - 1];
        }
        headerRow.appendChild(newCell);
    }
}

function addTimeSlots() {
    for (var i = 0; i < timeSlots.length; i++) {
        let nextRow = mainTable.querySelector('.table__row-' + i);
        let newCell = document.createElement('td');
        newCell.classList.add('table__cell');
        newCell.classList.add('table__time-cell');
        newCell.textContent = timeSlots[i] + ':00';
        nextRow.appendChild(newCell);
    }
}

function addTabCols() {
    for (var k = 0; k < timeSlots.length; k++) {
        let nextRow = mainTable.querySelector('.table__row-' + k);
        for (var i = 0; i < workoutArry.length; i++) {
            let newCell = document.createElement('td');
            newCell.classList.add('table__cell-' + i);
            newCell.classList.add('table__cell');
            newCell.classList.add('table__workout-type');
            newCell.textContent = workoutArry[i];
            nextRow.appendChild(newCell);
    }
    let lastWorkout = workoutArry[workoutArry.length - 1];
    workoutArry.pop();
    workoutArry.unshift(lastWorkout);
}
}


addTabHeader();
addTimeSlots();
addTabCols();

let cellsWorkoutType = Array.from(document.querySelectorAll('.table__workout-type'));

cellsWorkoutType.forEach(function(cell) {
    cell.addEventListener('click', function() {
        cell.classList.toggle('table__cell-clicked');
        console.log(cell);
    });
    cell.addEventListener('mouseover', function() {
        console.log(cell.classList[0]);
        let headerCell = document.querySelector('th.' + cell.classList[0]);
        headerCell.classList.toggle('table__header-cell-hover');
    })
    cell.addEventListener('mouseout', function() {
        console.log(cell.classList[0]);
        let headerCell = document.querySelector('th.' + cell.classList[0]);
        headerCell.classList.toggle('table__header-cell-hover');
    })
})



