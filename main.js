// import "./style.css";

//* declaring dom variables
const browserTextField = document.querySelector(".text-field p");
const browserInputField = document.querySelector("#input-field");
const resetButton = document.querySelector("#reset");

let typedCharactersIndex = 0;

//* storing exercpts for use -> exercpts taken from https://www.bookbrowse.com/search/index.cfm
const excerpts = [
  "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step, but Privet Drive had hardly changed at all. The sun rose on the same tidy front gardens and lit up the brass number four on the Dursleys' front door; it crept into their living room, which was almost exactly the same as it had been on the night when Mr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time had passed. Ten years ago, there had been lots of pictures of what looked like a large pink beach ball wearing different-colored bonnets - but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first bicycle, on a carousel at the fair, playing a computer game with his father, being hugged and kissed by his mother. The room held no sign at all that another boy lived in the house, too.",
  "Dudley's birthday - how could he have forgotten? Harry got slowly out of bed and started looking for socks. He found a pair under his bed and, after pulling a spider off one of them, put them on. Harry was used to spiders, because the cupboard under the stairs was full of them, and that was where he slept.",
  "Perhaps it had something to do with living in a dark cupboard, but Harry had always been small and skinny for his age. He looked even smaller and skinnier than he really was because all he had to wear were old clothes of Dudley's, and Dudley was about four times bigger than he was. Harry had a thin face, knobbly knees, black hair, and bright green eyes. He wore round glasses held together with a lot of Scotch tape because of all the times Dudley had punched him on the nose. The only thing Harry liked about his own appearance was a very thin scar on his forehead that was shaped like a bolt of lightning. He had had it as long as he could remember, and the first question he could ever remember asking his Aunt Petunia was how he had gotten it.",
  "Harry had never been inside Filch's office before; it was a place most students avoided. The room was dingy and windowless, lit by a single oil lamp dangling from the low ceiling. A faint smell of fried fish lingered about the place. Wooden filing cabinets stood around the walls; from their labels, Harry could see that they contained details of every pupil Filch had ever punished. Fred and George Weasley had an entire drawer to themselves. A highly polished collection of chains and manacles hung on the wall behind Filch's desk. It was common knowledge that he was always begging Dumbledore to let him suspend students by their ankles from the ceiling.",
  "The passageway leading to Nearly Headless Nick's party had been lined with candles, too, though the effect was far from cheerful: These were long, thin, jet-black tapers, all burning bright blue, casting a dim, ghostly light even over their own living faces. The temperature dropped with every step they took. As Harry shivered and drew his robes tightly around him, he heard what sounded like a thousand fingernails scraping an enormous blackboard.",
  "But Aunt Marge suddenly stopped speaking. For a moment, it looked as though words had failed her. She seemed to be swelling with inexpressible anger - but the swelling didn't stop. Her great red face started to expand, her tiny eyes bulged, and her mouth stretched too tightly for speech - next second, several buttons had just burst from her tweed jacket and pinged off the walls - she was inflating like a monstrous balloon, her stomach bursting free of her tweed waistband, each of her fingers blowing up like a salami.",
  "The villagers of Little Hangleton still called it 'the Riddle House,' even though it had been many years since the Riddle family had lived there. It stood on a hill overlooking the village, some of its windows boarded, tiles missing from its roof, and ivy spreading unchecked over its face. Once a fine-looking manor, and easily the largest and grandest building for miles around, the Riddle House was now damp, derelict, and unoccupied.",
];

function chooseRandomExcerpt() {
  //* preparing a random exercpt by choosing a random index
  const randomExercptIndex = Math.floor(Math.random() * excerpts.length);

  //* split exercpt string into individual characters
  indiChar = excerpts[randomExercptIndex].split("");

  //* add span tags to each individual character using `template literals`, used later to compare input & text
  const spanWrappedCharacters = indiChar.map((char) => `<span>${char}</span>`);

  //* join spanWrappedCharacters to remove "," from the string
  const joinedSpanWrappedExcerpt = spanWrappedCharacters.join("");

  //* replacing text in html to joinedSpanWrappedExcerpt
  browserTextField.innerHTML = joinedSpanWrappedExcerpt;

  //? test to see if new excerpt is selected every refresh
  // console.log(randomExercptIndex);
  // console.log(joinedSpanWrappedExcerpt);
  // console.log(browserTextField);
}

function focusToInput() {
  //* allow player to input characters when typing or clicking on excerpt -> code inspired from https://www.youtube.com/watch?v=xww779jG7Hk&t=150s
  document.addEventListener("keydown", () => browserInputField.focus());
  // document.addEventListener("click", () => browserInputField.focus());
}

function playerTyping() {
  //* creating a function that compares input with text
  const textCharacters = browserTextField.querySelectorAll("span");

  //* define what player typed with a variable to get the first letter of the string, string[0]
  const typedInput = browserInputField.value;

  //* initializing the current & next span of the text
  const currentSpan = textCharacters[typedCharactersIndex];
  const nextSpan = textCharacters[typedCharactersIndex + 1];
  const prevSpan = textCharacters[typedCharactersIndex - 1];

  //* if typed character is same as text character, add 'correct' class to span. otherwise,
  //* add 'wrong' class to span.
  if (
    typedInput[typedCharactersIndex] ===
    textCharacters[typedCharactersIndex].textContent
  ) {
    currentSpan.classList.add("correct");
  } else {
    currentSpan.classList.add("wrong");
  }
  typedCharactersIndex++;

  //* making a 'current letter' indicator
  currentSpan.classList.remove("current");
  nextSpan.classList.add("current");

  //* creating backspace function
  //   const backSpace = document.getElementById("playerBackSpace");
  //   backSpace.document.addEventListener("keydown", function (event) {
  //     const keyID = event.key;
  //     if (keyID === "Backspace") {
  //     typedCharactersIndex--;
  //     currentSpan.classList.remove("correct", "wrong", "current");
  //     console.log(keyID);
  //     } else {
  //       prevSpan.classList.add("current");
  //     }
  //   });
}

//* function execution
chooseRandomExcerpt();
focusToInput();
browserInputField.addEventListener("input", playerTyping);

// backspace, cancel last entry

// set up timer

// set up wpm

// set up cpm

//highlight green is entry is correct and red if entry is wrong
