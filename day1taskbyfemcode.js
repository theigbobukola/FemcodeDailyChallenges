// Input employee's DOB
// Calculate age of employee;
// Age of employee must be greater 18 and less than 50;
// Calculate Bonus for employee
// age 18- 20 => 5% * salary + salary;
// age 21- 30 => 10% * salary + salary;
// age 31- 50 => 20% * salary + salary;

// checks if salary and year inputted by the employee are  valid numbers
const validateInput = (question) => {
  let value;
  while (true) {
    value = question;

    if (value || value === null) {
      break;
    }
  }
  if (value) {
    value = +value;
  }
  return value;
};

const employeeBonus= () => {
  const dateOfBirth = validateInput(prompt('Please enter your date of birth:', ''));
  const salaryEarned = validateInput(prompt('Please enter your monthly income:', ''));

  if (!dateOfBirth || !salaryEarned) {
    return "You are not entitled to a bonus.";
  }

  const age = 2021 - dateOfBirth;
  let bonusGotten;

  if (age >= 18 && age <= 20) {
    bonusGotten = ((5 / 100) * salaryEarned) + salaryEarned;
  } else if (age >= 21 && age <= 30) {
    bonusGotten = ((10 / 100) * salaryEarned) + salaryEarned;
  } else if (age >= 31 && age <= 50) {
    bonusGotten = ((20 / 100) * salaryEarned) + salaryEarned;
  } else {
    return "Dear Sir/Ma, you are ineligible to receive bonus due to your age .";
  }
  return `Your expected bonus is ${bonusGotten}. Congrats`;
};

employeeBonus();
