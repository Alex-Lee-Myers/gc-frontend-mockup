# GameBest
## Redesigned, React 18, and Redux
### [Netlify Link][g]

"GameBest" is a frontend mockup redesigning a team project originally started in 2021 titled ["GameChest"][gc]. Utilizing the API available from [RAWG.io][api], building up animations and user experience incrementally before re-incorporating a backend built with NodeJS, Express and PostgreSQL, just like the [previous project][gc-backend].

## Features

- Attention to detail animations using Framer-Motion paired with Styled-Components
- React-Redux implemented for routing props
- React-Router-Dom-V6 effectively used for client navigation
- Search functionality providing instant results
- (Future versions) Incorporate registered users able to submit their own reviews, comments, as well as game developers ability to submit their own games. This would utilize my own backend built to be paired with the RAWG.io API for accurate and updated game curation.

## Technologies

- React 18
- React-Redux
- React-Router-Dom-V6
- Styled-Components
- Framer-Motion
- Axios

## Log

| Date        | Files, Commits and Comments                                         |
| ----------- | ------------------------------------------------------------------- |
| _06/24/22:_ | Mobile styling optimized for very beginner build. Unfortunately, coding projects will need to be put on hold as I move in the next few days and have to start packing :(. Bug discoverd regarding opening/closing modals and the API not updating quickly enough causing misbehavior. A clever conditional will need put in but nothing like I haven't done before.  |
| _06/22/22:_ | Came back later in the night and added smaller animations to make site feel sother, added platform icons and rating star. Half-store logic built in later. Due to moving in five days, this project (all projects) may be put on hold soon. |
| _06/22/22:_ | React-Router-Dom-V6 implemented and functional, including individual game details pages with their modals opening and closing. Added a file "util.js" to allow different sizing of material. = |
| _06/21/22:_ | At this point, have not discovered that React 18 was not cooperating with Netlify and needed to troubleshoot further. Did basic styling of Game Details page. |
| _06/20/22:_ | API functional and pulling game details. GlobalStyles setup for future use. Redux fully functional at this point as well. Basic layout started for landing page. |
| _06/19/22:_ | Deleted needless React templated code/files. Added folders and images needed. Setup initial API call and acquired key. Implemented initial React-Redux files. |
| _06/19/22:_ | ReadMe implemented. Will update accordingly at later date. |

[gc]: https://github.com/coderap931/teamBluePern-Client
[gc-backend]: https://github.com/coderap931/teamBluePern-Server
[git-repo-url]: https://github.com/Alex-Lee-Myers/Capture-Portfolio-JS
[framer-motion]: https://www.framer.com/motion/
[styled-components]: https://styled-components.com/
[react-intersection-observer]: https://github.com/researchgate/react-intersection-observer
[netlify]: https://www.netlify.com/
[react]: https://reactjs.org/
[react-router-dom-v6]: https://reactrouter.com/
[gamebest]: https://gamechest-frontend-mockup.netlify.app
[api]: https://rawg.io/apidocs
