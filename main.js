const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const btn = document.querySelector('#new-quote');

const quotes = 
[
  {
    quote: '"Some people want it to happen, some wish it wuld happen, others make it happen."',
    person: 'Michael Jordan'
  },
  {
    quote: '"If you talk to man in a language he understand, that goes to his head. If you talk to him in his language, that goes to his heart."',
    person:'Nelson Mandela'
  },
  {
    quote: '"Since you get more joy but of giving joy to others, you should put a good deal of thought into the happines that you are able to give."',
    person: 'Eleanor Roosesvelt'
  },
  {
    quote: '"I hate every minute of training but I said... Dont quit. Suffer now and live the rest of your life as a Champion."',
    person: 'Muhammad Ali'
  },
];

btn.addEventListener('click', function(){

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})