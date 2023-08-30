# Typing-Speed-Game
A Harry Potter-themed iteration of the popular speed typing game, created as a project during a software engineering bootcamp.
<hr>

## 1. Project Overview
A web-based speed typing game that challenges players' typing speed and accuracy with passages from the libraries of Hogwarts.

While there are many versions of this game, the goal of this particular iteration is to engage players with intriguing excerpts from beloved books, rather than random sentences, enhancing the gameplay experience while honing the player's typing skills.
<br>

### Tech Stack
- HTML
- CSS
- JavaScript
- Git & GitHub

### Deployment
For the best experience, it is recommended to play the game on a PC in full screen. Check it out [here](https://typing-speed-game-darylcty.vercel.app/)!  
**Disclaimer:** This game has not been optimized for mobile devices.
<hr>

## 2. Features and Specifications
### Core Features
- Engaging passages from Harry Potter books for players to type.
- Display of stats such as Words per Minute (WPM), Characters per Minute (CPM), Mistakes, and Accuracy Percentage.
- Timer showcasing the remaining game duration, instrumental in calculating player stats.
<hr>

## 3. Development Stages
1. **Research and Content Gathering**  
During the initial stage of this game's development, I was inspired by various online versions, helping me understand the mechanics and design of such games. The primary focus was on harnessing fundamental JavaScript concepts like variables, arrays, strings, functions, and DOM manipulation.

    While researching, I found that many typing games utilized randomly generated words to create meaningless paragraphs. This might be to counter the advantage players could gain from predicting the next word which, I felt, made these types of games less engaging. Thus, I decided to infuse a fantasy theme. Among options like Lord of the Rings and Cats, Harry Potter was my top pick, given its timeless appeal.

2. **Establishing a MVP Criteria**  
   - At least 1 playable passage.
   - Game starts either by a timer countdown or player input.
   - Game concludes when the time elapses or the player finishes the passage.
   - Displays stats accurately.

3. **Development Process**  
   - **Phase 1: Structure**
     - Create HTML structure and CSS formatting.
     - Pseudocode: Sketch JS structure and set milestones to achieve MVP.
   
   - **Phase 2: Game Logic**
     - Random excerpt retrieval from an array.
     - Text preparation in the string format.
     - Next character highlighting.
     - Counters for WPM, CPM, Mistakes, and Accuracy.
     - Timer initiation on the first input and game halt when time runs out.
   
   - **Phase 3: Play Testing**
     - Manual game testing to identify potential bugs.
   
   - **Phase 4: Launch**
     - Project deployment via the Vercel App.

<hr>

## 4. Extended Features For Future Development
- Functional backspace.
- Leaderboard.
- Special titles for the top 3 typists.
- Multiple difficulty levels.

<hr>

## 5. Challenges
The project presented a few challenges:

- **Character Isolation:** Initially, isolating characters from the excerpt string was problematic. The solution was to wrap each character in individual span tags, which facilitated using the querySelector to compare it against the player's input.

- **Character Highlighting:** Highlighting the upcoming character while removing the highlight from the previous one posed another challenge. By explicitly defining the currentSpan and nextSpan, I achieved the desired effect.

- **Backspace Functionality:** The backspace function didn't operate as expected. Given that the current and subsequent character functions rely on the player's input index, any modification disrupted the highlighting system. This remains a work in progress. Therefore, players are advised against using the backspace for now.

<hr>

## 6. Conclusion
The Typing-Speed-Game, with its unique Harry Potter theme, serves not only as a testament to the skills acquired during my software engineering bootcamp, but also as a delightful fusion of learning and entertainment. Through the development process, I've been reminded of the importance of iterative problem-solving, user experience considerations, and the power of combining creativity with technical knowledge. As a beginner's foray into game development, this project encapsulates fundamental JavaScript, HTML, and CSS concepts, reflecting their application in a real-world context. As I continue my journey in software engineering, feedback on this game and its code is greatly appreciated. It's my hope that players find joy in this game, challenging their typing skills while reminiscing about the magical world of Harry Potter.

<hr>

## 7. References
- [Bookbrowse.com](https://www.bookbrowse.com/search/index.cfm)
- [CodeCreative-YouTube](https://www.youtube.com/watch?v=xww779jG7Hk&t=150s)
- ChatGPT

<hr>
