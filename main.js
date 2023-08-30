// import "./style.css";

//* declaring dom variables
const browserTextField = document.querySelector(".text-field p");
const browserInputField = document.querySelector("#input-field");
//! const backspace = document.getElementById("playerBackSpace");
const mistake = document.querySelector("#mistakeCounter");
const acc = document.querySelector("#accuracyPercentage");
const domTimer = document.querySelector("#countDown");
const words = document.querySelector("#wpmCounter");
const char = document.querySelector("#cpmCounter");

//* storing excerpts for use -> excerpts taken from https://www.bookbrowse.com/search/index.cfm
const excerpts = [
  "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step, but Privet Drive had hardly changed at all. The sun rose on the same tidy front gardens and lit up the brass number four on the Dursleys' front door; it crept into their living room, which was almost exactly the same as it had been on the night when Mr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time had passed. Ten years ago, there had been lots of pictures of what looked like a large pink beach ball wearing different-colored bonnets - but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first bicycle, on a carousel at the fair, playing a computer game with his father, being hugged and kissed by his mother. The room held no sign at all that another boy lived in the house, too.",
  "Dudley's birthday - how could he have forgotten? Harry got slowly out of bed and started looking for socks. He found a pair under his bed and, after pulling a spider off one of them, put them on. Harry was used to spiders, because the cupboard under the stairs was full of them, and that was where he slept.",
  "Perhaps it had something to do with living in a dark cupboard, but Harry had always been small and skinny for his age. He looked even smaller and skinnier than he really was because all he had to wear were old clothes of Dudley's, and Dudley was about four times bigger than he was. Harry had a thin face, knobbly knees, black hair, and bright green eyes. He wore round glasses held together with a lot of Scotch tape because of all the times Dudley had punched him on the nose. The only thing Harry liked about his own appearance was a very thin scar on his forehead that was shaped like a bolt of lightning. He had had it as long as he could remember, and the first question he could ever remember asking his Aunt Petunia was how he had gotten it.",
  "Harry had never been inside Filch's office before; it was a place most students avoided. The room was dingy and windowless, lit by a single oil lamp dangling from the low ceiling. A faint smell of fried fish lingered about the place. Wooden filing cabinets stood around the walls; from their labels, Harry could see that they contained details of every pupil Filch had ever punished. Fred and George Weasley had an entire drawer to themselves. A highly polished collection of chains and manacles hung on the wall behind Filch's desk. It was common knowledge that he was always begging Dumbledore to let him suspend students by their ankles from the ceiling.",
  "The passageway leading to Nearly Headless Nick's party had been lined with candles, too, though the effect was far from cheerful: These were long, thin, jet-black tapers, all burning bright blue, casting a dim, ghostly light even over their own living faces. The temperature dropped with every step they took. As Harry shivered and drew his robes tightly around him, he heard what sounded like a thousand fingernails scraping an enormous blackboard.",
  "But Aunt Marge suddenly stopped speaking. For a moment, it looked as though words had failed her. She seemed to be swelling with inexpressible anger - but the swelling didn't stop. Her great red face started to expand, her tiny eyes bulged, and her mouth stretched too tightly for speech - next second, several buttons had just burst from her tweed jacket and pinged off the walls - she was inflating like a monstrous balloon, her stomach bursting free of her tweed waistband, each of her fingers blowing up like a salami.",
  "The villagers of Little Hangleton still called it 'the Riddle House,' even though it had been many years since the Riddle family had lived there. It stood on a hill overlooking the village, some of its windows boarded, tiles missing from its roof, and ivy spreading unchecked over its face. Once a fine-looking manor, and easily the largest and grandest building for miles around, the Riddle House was now damp, derelict, and unoccupied.",
];

let typedCharactersIndex = 0;

function main() {
  let numOfChars;
  let mistakeCount = 0;
  let gameTime = 60;
  let totalTime = 60;
  let activeTyping = 0;
  let timerInterval;

  function chooseRandomExcerpt() {
    //* preparing a random excerpt by choosing a random index
    const randomExcerptIndex = Math.floor(Math.random() * excerpts.length);
    const excerptSelected = excerpts[randomExcerptIndex];

    //* split excerpt string into individual characters
    indiChar = excerptSelected.split("");

    //* add span tags to each individual character using `template literals`, used later to compare input & text
    const spanWrappedCharacters = indiChar.map(
      (char) => `<span>${char}</span>`
    );

    //* join spanWrappedCharacters to remove "," from the string
    const joinedSpanWrappedExcerpt = spanWrappedCharacters.join("");

    //* replacing text in html to joinedSpanWrappedExcerpt
    browserTextField.innerHTML = joinedSpanWrappedExcerpt;

    //* get the total number of chars in the excerpt for calculation use later
    numOfChars = spanWrappedCharacters.length;
    return numOfChars;
  }

  function playerTyping() {
    //* when player types, change state to activate timer
    if (!activeTyping) {
      timerInterval = setInterval(timerCountDown, 1000);
      activeTyping = 1;
    }
    //* creating a function that compares input with text
    const textCharacters = browserTextField.querySelectorAll("span");

    //* define what player typed with a variable to get the first letter of the string, string[0]
    const typedInput = browserInputField.value;

    //* initializing the current & next span of the text
    const currentSpan = textCharacters[typedCharactersIndex];
    const nextSpan = textCharacters[typedCharactersIndex + 1];

    //! backspace, cancel last entry
    //!document.addEventListener("keydown", function (event) {
    //!   const keyPress = event.key;

    //!   if (keyPress === "Backspace" && typedCharactersIndex > 0) {
    //!     typedCharactersIndex--;
    //!     currentSpan.classList.remove("correct", "wrong", "current");
    //!     mistakeCount--;
    //!   } else

    //* if typed character is same as text character, add 'correct' class to span. otherwise,
    //* add 'wrong' class to span and increase mistake counter by 1
    if (
      typedInput[typedCharactersIndex] ===
      textCharacters[typedCharactersIndex].textContent
    ) {
      currentSpan.classList.add("correct");
      typedCharactersIndex++;
    } else {
      currentSpan.classList.add("wrong");
      typedCharactersIndex++;
      mistakeCount++;
    }

    //* making a 'current letter' indicator
    currentSpan.classList.remove("current");
    nextSpan.classList.add("current");

    //* setting up the mistake counter
    mistake.innerText = mistakeCount;

    //* setting up cpm <- only accurate if timer = 60s
    let cpm = typedCharactersIndex - mistakeCount;
    char.innerText = cpm;

    //* calculating accuracy percentage to 2 decimal places
    let accuracyCal = (cpm / typedCharactersIndex) * 100;
    let accuracyRounded = accuracyCal.toFixed(2);
    accuracyPercentage.innerText = accuracyRounded + "%";

    //* setting up wpm
    const wpm = Math.round((cpm / 5 / (totalTime - gameTime)) * 60);
    words.innerHTML = wpm;
  }

  //* setting up timer as soon as player types and alerts play at the end of the timer to restart
  function timerCountDown() {
    if (gameTime > 0) {
      gameTime--;
      domTimer.innerText = gameTime;
    } else {
      clearInterval(timerInterval);
      alert("GGWP, click 'OK' and 'Retry' to play again!");
      return 0;
    }
  }

  chooseRandomExcerpt();
  browserInputField.addEventListener("input", playerTyping);
  // timerCountDown();
}

function focusToInput() {
  //* allow player to input characters when typing or clicking on excerpt -> code inspired from https://www.youtube.com/watch?v=xww779jG7Hk&t=150s
  document.addEventListener("keydown", () => browserInputField.focus());
  document.addEventListener("click", () => browserInputField.focus());
}

//* function execution
main();
focusToInput();

// set up timer

// set up wpm

// set up cpm
