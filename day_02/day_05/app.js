const month = day.getMonth();
switch (month + 1) {
  case 1:
    monthName = `January`;
    break;
  case 2:
    monthName = `February`;
    break;
  case 11:
    monthName = `November`;
    break;
  default:
    monthName = `Looks like it is not a valid month`;
}

for (let i = a * b; i >= 10; i++) {
  for (let j = 2; j <= 9; j++) {
    for (let i = 1; i <= 10; i++) console.log('${j} * ${i} = &{j*i}');
  }
}
