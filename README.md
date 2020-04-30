# Take home test ICF
Hello and welcome to my take home test application. To test it out just follow the setup instructions.
You can read below the decisions I have made.

## Setup instructions
#### Prerequisites
You should have `node.js` installed on your machine.

#### How to start the app
1. Clone the repo: `git clone https://github.com/latobibor/icf-homework.git`
1. `npm i` to install the dependencies
1. `npm start` to run the application

## UX changes compared to the specification
1. I have removed "Send" button from the quiz UI, because I have felt clicking on the answer and automatically sending it was more natural
1. Originally the "Add questions" panel should be under the questions, but on a big screen it felt more natural to show it on the right side. On mobile devices the panel is under the questions.

## Things to note
1. **Responsiveness:** I have used an algorithmic layout approach to scale the screen. Therefore the application should look and feel usable in both a retina Mac screen and on an average phone (I have tested the latter)
1. **Bundling:** I haven't imported the entire `bootstrap` library just to use a couple of buttons from it.
1. **Using `flexbox` over `bootstrap`:** `Bootstrap` is great, but since `flexbox` arrived I have found it is better to use it or `CSS grid` for layouts; with this approach I can explicitly express my intention over overwriting or adding lots of utility classes. See the detailed rationale behind it on [Every Layout => Too many utility classes](https://every-layout.dev/rudiments/global-and-local-styling/).
1. **Using local storage:** I have used poor man's database to save the questions. Hope it's not a problem.

## Known issues
If you test the application on mobile sometimes the answers in the quiz must be pressed twice.

## Missing but important: testing
Since I have run out of time I set for myself for this task I have not done testing. I am planning to add tests to this repository later tonight.
However if you want to check out how I write tests you can take a look at this file: https://github.com/latobibor/esys-homework/blob/master/src/date-utils.test.ts 
