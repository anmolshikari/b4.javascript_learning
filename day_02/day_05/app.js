let day = new Date();
const hour = day.getHours();
//const greetings = hour < 12 ? 'good morning' : 'good afternoon';
let greetings;
if (hour < 12) {
  greetings = 'good morning';
} else {
  greetings = 'good afternoon';
}
