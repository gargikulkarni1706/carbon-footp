var canvas
var input, text, button1, button2, greeting, reset;
var q1, q2, q3 ,q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15;
var radio1, radio2, radio3, radio4, radio5, radio6, radio7, radio8, radio9, radio10, radio11, radio12;
var inputq13, inputq14, inputq15;

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    title = createElement('h3');
        input = createInput("");
        text = createElement('h1', "Please enter your name");
        button1 = createButton('Submit');
        button2 = createButton('Calculate my footprint');
        greeting = createElement('h2');
        q1 = createElement('h3', "How many kilometres do you drive your car on a weekday?");
        radio1 = createRadio();
        radio1.option('Less than 30 kilometres');
        radio1.option('More than 30 kilometres');
        radio1.option('More than 60 kilometres');
        q2 = createElement('h3', "How many kilometres do you drive your car on a weekend?");
        radio2 = createRadio();
        radio2.option('Less than 40 kilometres');
        radio2.option('More than 40 kilometres');
        radio2.option('More than 80 kilometres');
        q3 = createElement('h3', "How many vehicles does your family own?");
        radio3 = createRadio();
        radio3.option('0');
        radio3.option('1-3');
        radio3.option('More than 3');
        q4 = createElement('h3', "What kind of fuel do your vehicles run on?");
        radio4 = createRadio();
        radio4.option('Petrol');
        radio4.option('Diesel');
        radio4.option('CNG');
        radio4.option('Biodiesel');
        radio4.option('Electricity');
        radio4.option('Other');
        q5 = createElement('h3', "Do you carpool often?");
        radio5 = createRadio();
        radio5.option('No');
        radio5.option('Yes');
        q6 = createElement('h3', "Does your house have a coal furnace? If yes, how often do you use it?");
        radio6 = createRadio();
        radio6.option('No');
        radio6.option('Yes Use is less than an hour');
        radio6.option('Yes Use is more than an hour');
        q7 = createElement('h3', "Do you use your vehicle to travel to destinations that are less than 3 kilometres away?");
        radio7 = createRadio();
        radio7.option('Yes');
        radio7.option('No');
        q8 = createElement('h3', "Do you burn your waste?");
        radio8 = createRadio();
        radio8.option('Yes');
        radio8.option('No');
        q9 = createElement('h3', "Do you recycle waste?");
        radio9 = createRadio();
        radio9.option('Yes');
        radio9.option('No');
        q10 = createElement('h3', "Do you donate funds to environment protection organisatio");
        radio10 = createRadio();
        radio10.option('Yes');
        radio10.option('No');
        q11 = createElement('h3', "Approximately how many trees do you plant every year?");
        radio11 = createRadio();
        radio11.option('Less than 10');
        radio11.option('More than 10');
        q12 = createElement('h3', "Approxiamtely how much is your monthly cooking gas bill?");
        radio12 = createRadio();
        radio12.option('Less than $50');
        radio12.option('More than $50');
        q13 = createElement('h3', "What efforts do you take to save energy?");
        inputq13 = createInput("");
        q14 = createElement('h3', "Would you term yourself as environment friendly? Why?");
        inputq14 = createInput("");
        q15 = createElement('h3', "What would you do to reduce global warming and excess carbon release?");
        inputq15 = createInput("");
        reset = createButton('Reset')
   }

function draw(){

   }