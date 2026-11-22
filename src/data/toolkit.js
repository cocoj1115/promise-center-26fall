// All toolkit content lives here. Edit text, add tools, change order: the site rebuilds from this file.
// Never write a child's name. Use "a 9-year-old", "one boy", etc.

export const SLIDES = {
  1: '1W-x5-7Cf0v347rXQwsBTHrZvdeWajtwFpvLQ7Ige26g',
  2: '1Ozs2c7xC59pb0Fym1SXrE8TghGDcY71shLZMPpG7tBM',
  3: '1aLVwWE7_73aFwehHh61h7BJG_r5QX_N6ICyds-5RX_E',
  4: '1JJpv8n3FtjRdUbFLMDYmU_oPpt1E9rjz-icngYOoOE4',
  5: '1c7HJEptjwSeTxCGF2kn7ePEq7AF3qFbKosJMj9Zm_wc',
  6: '1HMMEpyY5ccKn1iU5844299oHtVfL5llGFDJvp3yQMgg',
};

export const ROUTINES = [
  'Teachers vs. Students points',
  'Think Time signal',
  'Project map opener',
  'Thumbs check to close',
];

export const ZONES = [
  { num: 1, slug: 'listen', name: 'Listen', blurb: 'Find a real need by asking and watching.', map: [160, 110] },
  { num: 2, slug: 'explore', name: 'Explore', blurb: 'Try tools hands-on before choosing one.', map: [430, 160] },
  { num: 3, slug: 'ideate', name: 'Ideate', blurb: 'Narrow to one cause and sketch ways to help.', map: [700, 100] },
  { num: 4, slug: 'prototype', name: 'Prototype', blurb: 'Try the idea cheaply before building it.', map: [690, 300] },
  { num: 5, slug: 'build', name: 'Build', blurb: 'Make the real thing.', map: [420, 400] },
  { num: 6, slug: 'test', name: 'Test + Improve', blurb: 'Let someone else use it, then change one thing.', map: [175, 335] },
  { num: 7, slug: 'share', name: 'Share', blurb: 'Show the work to a real audience.', map: [160, 465] },
];

export const TOOLS = [
  // ---------- Zone 1: Listen ----------
  {
    slug: 'common-ground-game', zone: 1, name: 'Common Ground Game', session: 1, time: '10–15 min', group: 'Whole group',
    what: 'Kids take turns: “My name is __ and I __.” Anyone with a match calls “Connection!” The class aims for 10.',
    intro: 'A first-day warm-up that gets kids talking to each other, not just to you. Every match or follow-up question earns the whole class a point.',
    materials: ['A four-square sheet per kid', 'Pencils or markers', 'A visible counter or timer (we used classroomscreen.com)'],
    steps: [
      ['Warm up on paper', 'Each kid writes or draws in every box of a four-square sheet. Give them three minutes.'],
      ['Take turns sharing', 'Each kid says: “My name is ____, and I ____.”'],
      ['Call connections', 'Same or similar answer? Raise a hand and say “Connection!” for one point. No match? Ask one follow-up question, which also earns a point.'],
      ['Chase a class goal', 'Aim for 10 connections and keep the count where everyone can see it.'],
    ],
    note: { label: 'From our session · Session 1', text: 'Kids quickly found connections in food and sports. This was one of the most engaged moments of the first day.' },
  },
  {
    slug: 'light-up-name-tag', zone: 1, name: 'Light-up name tag', session: 1, time: '25 min', group: 'Each kid',
    what: 'Each kid lights an LED with a coin battery on their own name tag: making tech in minutes.',
    intro: 'Opens up what “technology” means. Kids make something they can hold and wear in one sitting, and learn the three parts of a circuit.',
    materials: ['Card stock and markers', 'One LED per kid', 'One coin cell battery per kid', 'Conductive tape or foil', 'Clear tape'],
    steps: [
      ['Watch how electricity works', 'Show a short video on batteries, conductors and LEDs (we used the virtual circuit on makerspaces.com).'],
      ['Name the parts', 'Battery, conductor, LED: ask kids what each one does.'],
      ['Build the tag', 'Kids decorate their name, then connect the LED legs to both sides of the battery and tape it in place.'],
      ['Check what they learned', 'Next session, ask: What must touch? What happens if there is a gap?'],
    ],
    note: { label: 'What went awry · Session 1', text: 'We had not sorted the materials ahead of time, so setup ate into making time.', next: 'Pre-pack one small kit per kid before class.' },
  },
  {
    slug: 'ask-listen-look-find', zone: 1, name: 'Ask, listen, look, find', session: 2, time: '15 min', group: 'Pairs',
    what: 'A four-step routine, four follow-up questions and an “I heard you say…” frame.',
    intro: 'Kids learn to understand a person before they suggest anything. The routine is ask, listen, look, find, and the rule is: no solutions yet.',
    materials: ['The four questions on a slide or card', 'Paper for notes'],
    steps: [
      ['Introduce the routine', 'ASK a question, LISTEN to remember, LOOK to notice, FIND a possible need. Say it out loud: no solutions yet.'],
      ['Model it', 'Use a real idea, such as “I want a robot to call my internet company for me.” Teachers ask; kids watch first.'],
      ['Kids pick one question', 'When would you use this? What would it help you do? What do you do now without it? What makes this important to you?'],
      ['Close the loop', 'The asker says: “I heard you say ____. Did we understand correctly?” The other person says yes or helps fix it.'],
    ],
    note: { label: 'What went awry · Session 2', text: 'Kids needed an adult prompt for almost every step and rarely asked follow-up questions on their own.', next: 'Rehearse one question and one follow-up per pair before they try it for real.' },
  },
  {
    slug: 'evidence-card', zone: 1, name: 'Evidence card', session: 2, time: '25 min', group: 'Teams of 3–4',
    what: 'Teams investigate, then fill four boxes: we heard, we saw, we think, we still need to ask.',
    intro: 'Teams investigate a real place, then fill four boxes: what they heard, what they saw, what they think someone needs, and what they still need to ask. It keeps kids on evidence before anyone jumps to “let’s build a robot.”',
    evidenceCard: true,
    materials: ['One printed card per team', 'Pencils', 'One iPad per team, for photos', 'A visible 10-minute timer'],
    steps: [
      ['Model it first', 'Play the interviewee yourself and walk through one full round: ask, listen, then “I heard you say…”. Kids copy what they see.'],
      ['Give out roles before teams leave', 'Photographer (up to 3 photos), Observer, Question Asker, Reporter and timekeeper. With three kids, combine the Asker and Reporter. Don’t negotiate roles on the spot.'],
      ['Investigate for 10 minutes', 'Each team asks one staff member: “What is one small thing here you have to remind, check, find, move or fix again and again?” Then: “What do you do now?” Bring back one thing heard and one thing seen.'],
      ['Fill the card together', 'One card per team. Keep the sentence frames as written; kids fill frames more easily than blank boxes.'],
      ['Share in one minute per team', 'Show one photo, say what you heard, say what you saw, explain what might need to be better. Evidence first: no solution ideas yet.'],
    ],
    lookFor: ['Wait', 'Search', 'Remember', 'Repeat', 'Carry', 'Clean', 'Ask for help', 'Move around'],
    note: { label: 'What went awry · Session 2', text: 'Kids walked into the investigation without knowing how to interview someone, so they needed an adult prompt for almost every step. We also ran out of time, and teams never compared what they found.', next: 'Model one full interview first, have each team rehearse one question before leaving, and keep five minutes for sharing.' },
  },

  // ---------- Zone 2: Explore ----------
  {
    slug: 'need-or-want', zone: 2, name: 'Need or want?', session: 3, time: '10 min', group: 'Whole group',
    what: 'Sort statements into needs and wants, then turn a want (“a robot guide”) into the need behind it.',
    intro: 'Kids love to suggest the coolest thing they can imagine. This sort helps them find the real need hiding underneath.',
    materials: ['Statement cards or a slide with the statements'],
    steps: [
      ['Read the statements', 'For example: “Kids can get help quickly when they feel sick.” “A robot dances in the lobby because robots are my favorite.” “Visitors can find the right room without getting lost.”'],
      ['Vote: need or want?', 'Kids decide together and say why.'],
      ['Turn a want into a need', 'Take “a robot guide” and ask why: Who needs help? What is hard? What should improve? The need: people need help finding the right room.'],
      ['Name the habit', 'Good designers start with people. Listen first, design technology later.'],
    ],
    note: { label: 'What went awry · Session 3', text: 'Kids competed to answer first and argued about whose answer was right. Some raised hands before they had thought.', next: 'Use Think Time: ask, ten quiet seconds with hands down, tell a partner, then call on someone.' },
  },
  {
    slug: 'one-problem-three-ideas', zone: 2, name: 'One problem, three ideas', session: 3, time: '10 min', group: 'Whole group',
    what: 'Compare a $5 reminder sign, a $30 timer light and a $600 robot for the same problem.',
    intro: 'Shows that more technology is not always a better answer. Kids weigh cost, time and difficulty against the same everyday problem.',
    materials: ['A slide or three cards with the ideas and their costs'],
    steps: [
      ['Pose the problem', '“We sometimes forget to clean up after an activity.”'],
      ['Show three ideas', 'A reminder picture (about $5, 15–30 minutes, easy). A timed reminder light (about $30, 1–2 hours). A cleanup robot (about $600, 40+ hours, hard).'],
      ['Ask the key question', 'Would a simple reminder be enough? Why or why not?'],
      ['Come back to it', 'After the tech playground, ask how each tool could help with the same problem.'],
    ],
  },
  {
    slug: 'tech-playground', zone: 2, name: 'Tech playground', session: '3–4', time: '30–40 min', group: 'Pairs',
    what: 'A QR treasure hunt, Quick, Draw!, AI for Oceans and Blockly Maze in driver–navigator pairs.',
    intro: 'Kids can only choose among tools they have actually used. Four short, free stations give them a feel for QR codes, AI and code.',
    materials: ['2 laptops and 2 iPads for about 5 kids', 'Printed QR clue cards', 'quickdraw.withgoogle.com', 'Code.org AI for Oceans', 'blockly.games/maze'],
    steps: [
      ['QR treasure hunt', 'Kids scan clues to find a secret word. Ask: what information did the QR code open?'],
      ['Quick, Draw!', 'Kids take turns drawing and watch the AI guess. Ask: what did it recognize?'],
      ['AI for Oceans', 'Kids label pictures “fish” or “not fish”, then watch the AI sort new ones. Point out that training does not make it always right.'],
      ['Blockly Maze', 'One driver at the keyboard, one navigator giving directions. Swap every three minutes.'],
      ['Connect back', 'After each station: how could this help with our problem, and what would it still need?'],
    ],
    note: { label: 'What went awry · Session 3', text: 'Quick, Draw! kept misreading one boy’s drawings; he got upset and stopped. Others called the AI “stupid”.', next: 'Turn it into a question: what did the AI misunderstand? Did we explain it clearly, or did it read it wrong?' },
  },
  {
    slug: 'toolbox-cards', zone: 2, name: 'Toolbox cards', session: 4, time: '15 min', group: 'Teams',
    what: 'One card per technology: what it can do, what it can’t, how hard and how costly.',
    intro: 'A simple card for each tool kids have tried, so they can compare and rank them before choosing what to build.',
    materials: ['One printed card per technology: circuit, QR code, code with a robot, AI system'],
    steps: [
      ['Hand out the cards', 'One per tool kids have used, with “It can” and “It can’t” filled in together.'],
      ['Show one finished example', 'Circuit: lights up when the loop is closed; can’t work without power; hard ★; about $5.'],
      ['Teams rank the rest', 'How hard is each tool to make? How much does it cost?'],
      ['Talk about disagreements', 'Kids may rank differently from you, often for good reasons.'],
    ],
    note: { label: 'From our session · Session 4', text: 'A 13-year-old argued that a QR code could be expensive, because you need a website and a device to scan it. He was right, and it led to a good talk about cheaper ways to use QR codes.' },
  },

  // ---------- Zone 3: Ideate ----------
  {
    slug: 'stuck-kid-case-cards', zone: 3, name: 'Stuck-kid case cards', session: 4, time: '10 min', group: 'Whole group',
    what: 'Five kids stuck on homework for different reasons. Groups sort out why each one is stuck.',
    intro: 'Narrows a big need (“kids need help with math”) down to one cause the group can actually design for.',
    materials: ['Five case cards or a slide'],
    steps: [
      ['Recall what you heard', 'From the staff interviews: peers at the center need help with math.'],
      ['Meet five kids', 'Sam: “I learned 7 × 8 before, but now I forgot.” Maya: “What does remainder mean?” Leo: “This question is so long.” Jada: “Every adult is busy.” Tom: “It’s so noisy.”'],
      ['Ask why', 'Why is ___ stuck? What makes you say that?'],
      ['Group the reasons', 'Doesn’t know or forgot a math idea; can’t understand the question; no one to help; hard to focus. Pick one to design for.'],
    ],
  },
  {
    slug: 'sams-storyboard', zone: 3, name: 'Sam’s storyboard', session: '4–5', time: '15 min', group: 'Each kid',
    what: 'Kids draw the missing frame: what could help Sam remember 7 × 8 when every adult is busy?',
    intro: 'Drawing is easier than writing, and a story keeps the problem concrete. Every kid gets a voice, whatever their reading level.',
    materials: ['A printed storyboard with the third frame blank', 'Pencils'],
    steps: [
      ['Set the scene', 'Homework time. Sam is stuck on 7 × 8. “I learned this before, but I forgot!” Everyone is busy.'],
      ['Draw the missing frame', 'What could help Sam learn or remember it? Kids can draw it or tell a partner.'],
      ['Show the ending', '“7 × 8 = 56! And I can do 7 × 9 too!” Sam solves the next one by himself.'],
      ['Share every idea', 'Each kid points to their drawing and explains it.'],
    ],
    note: { label: 'From our session · Session 5', text: 'Ideas went everywhere: use an iPad, train an AI, search Google, or just teach Sam directly. Kids brought up budget and resources themselves when we asked which ideas we could actually build.' },
  },
  {
    slug: 'budget-and-time-check', zone: 3, name: 'Budget and time check', session: 5, time: '10 min', group: 'Whole group',
    what: 'Hold every idea up to the real limits: about $50, three hours and the materials on hand.',
    intro: 'Kids suggest what they already know. This step widens the options with one buildable idea they have not seen, and still leaves the real choices to them.',
    materials: ['A slide with the limits and four options'],
    steps: [
      ['Put the limits on screen', 'Need: help kids learn math. Budget: about $50. Time: 3–4 classes. Materials: what the center already has.'],
      ['Check the drawings', 'Which parts of your ideas fit our time and money?'],
      ['Compare four options', 'Light-up math board (★★, 1–3 hours, $5–10 a board). QR math hints (★, 1–2 hours, under $1 a card plus a device). Math robot (★★★, 40+ hours, about $430). AI hint helper (★★★, 40+ hours).'],
      ['Show one buildable option', 'Demo a finished light-up quiz board, then let kids choose the math and design their own.'],
    ],
  },

  // ---------- Zone 4: Prototype ----------
  {
    slug: 'paper-match-cards', zone: 4, name: 'Paper match cards', session: 5, time: '15 min', group: 'Two teams',
    what: 'Sort, match and explain question–answer pairs on paper before any wiring.',
    intro: 'The cheapest prototype: kids test their math content on paper so mistakes cost minutes, not materials.',
    materials: ['Four printed card pairs per team', 'An anchor chart for each math topic'],
    steps: [
      ['Split into two teams', 'Team A, operations: (2 + 3) × 5 matches (2 × 5) + (3 × 5). Team B, geometry: 3 rows of 5 squares matches 3 × 5 square units.'],
      ['Sort', 'Questions on the left, answers on the right.'],
      ['Match', 'Match all four pairs with a partner, checking the anchor chart.'],
      ['Explain', 'Each pair says: “These match because ___.”'],
    ],
    note: { label: 'What went awry · Session 5', text: 'One team copied the example and finished very fast. In the other, one boy wanted his own design, which took a lot of time and attention.', next: 'Let kids go their own way, with a time limit and a short checklist of what the board needs.' },
  },
  {
    slug: 'tell-the-ai-prompts', zone: 4, name: 'Tell-the-AI prompts', session: '5–6', time: '15 min', group: 'Teams',
    what: 'Sentence frames for describing a board to an AI tool, then checking one match and one mismatch.',
    intro: 'Kids turn their paper board into a playable digital version by telling an AI coding tool what they want, then checking whether it did it right.',
    materials: ['A laptop with an AI coding tool', 'Photos of the front and back of the paper board', 'A backup board in case the AI is slow'],
    steps: [
      ['Take two photos', 'The front (questions and touch points) and the back (the circuit map).'],
      ['Say it to the AI', '“Call our board ___.” “Arrange the cards like this.” “Light up only when ___.”'],
      ['Check the board', 'Try a match and a mismatch. When should the light turn on? Compare the screen with your drawing.'],
      ['Have a backup', 'If the AI takes more than about three minutes, switch to the backup board and keep going.'],
    ],
    note: { label: 'From our session · Session 6', text: 'The AI flagged a mismatch in one board’s math. Talking it through, we found the boy who wrote it had never learned the distributive property, so we worked through examples together and the team fixed the board.' },
  },
  {
    slug: 'circuit-map', zone: 4, name: 'Circuit map', session: 6, time: '20 min', group: 'Teams',
    what: 'A drawing of the back of the board: which contacts connect to each LED.',
    intro: 'Before any wiring, kids plan every connection on paper. A matching pair closes the loop; a mismatch leaves a gap.',
    materials: ['Paper and colored pencils', 'PhET Circuit Construction Kit (free, in a browser)'],
    steps: [
      ['Predict', 'In PhET, build an open and a closed circuit. Will the bulb light? Find the battery’s + and − ends.'],
      ['Split each pair', 'One side of every correct match is positive (+), the other negative (−).'],
      ['Draw the back', 'Show every matching pair and the battery, as seen from behind the board.'],
      ['Trace one loop', 'Give each pair its own color and trace one full loop with a finger.'],
    ],
  },

  // ---------- Zone 5: Build ----------
  {
    slug: 'light-up-quiz-board', zone: 5, name: 'Light-up quiz board', session: 6, time: '2–3 sessions', group: 'Teams',
    what: 'Six steps from sketch to working board. Adapted from the MIT Edgerton Center K-12 Maker Lab.',
    intro: 'Kids build a board where touching a question and its correct answer lights an LED. No soldering. Adapted from the MIT Edgerton Center K-12 Maker Lab’s LED quiz board project.',
    materials: ['Thick cardboard or foam board', 'Paper fasteners', 'LEDs', '3V coin cell batteries', 'Stranded wire, red and black', 'Wire nuts', 'Paper clips and craft sticks', 'Clear tape', 'A push pin'],
    steps: [
      ['Sketch a design', 'Choose the content and plan where the LEDs and paper fasteners go.'],
      ['Plan the circuitry', 'Draw the circuit map for the back of the board.'],
      ['Illustrate the front', 'Add graphics and decoration.'],
      ['Check and install the parts', 'The longer LED leg is positive. Poke holes with a push pin and insert the LEDs and fasteners.'],
      ['Wire the circuits', 'Red wire for +, black for −. Strip about ¾ inch, wrap around the fastener, and join to the LED with a wire nut.'],
      ['Make the styluses', 'Loop a wire through a paper clip, tape it to a craft stick, and tape the other ends to the battery.'],
    ],
    credit: { text: 'MIT Edgerton Center K-12 Maker Lab: LED Quiz Boards', url: 'https://k12maker.mit.edu/project/led-quiz-boards' },
    note: { label: 'What went awry · Session 6', text: 'One group split into individual designs, and pickup interruptions cut building time. One child mostly watched the tutorial video and left early.', next: 'Prepare boards with layouts and contact points ready, build alongside the kids, and give each child a specific job: trace a path, attach a wire, or test a pair.' },
  },

  // ---------- Zone 6: Test + Improve ----------
  {
    slug: 'swap-test', zone: 6, name: 'Swap test', session: 'Planned', time: '20 min', group: 'Two teams',
    what: 'Teams play each other’s boards and explain each match. Designers pick one thing to change.',
    intro: 'Someone else using your work shows what you missed. Explaining to a peer shows what you understood.',
    materials: ['Each team’s board', 'The “Save what you found” sheet'],
    steps: [
      ['Predict, then play', 'Players try one match and one mismatch on the other team’s board.'],
      ['Ask the player', '“How did you know these go together?”'],
      ['Trace the back', 'Designers flip the board and trace where the path connects or stops.'],
      ['Change one thing', 'Keep or change one thing, then test again.'],
    ],
  },
  {
    slug: 'save-what-you-found', zone: 6, name: 'Save what you found', session: 'Planned', time: '5 min', group: 'Teams',
    what: 'The pair we tested, what the tester did, what we’ll keep or change.',
    intro: 'A short sheet so the swap test turns into a real change, not just a fun round.',
    materials: ['One printed sheet per team'],
    steps: [
      ['The pair we tested was…', 'Write the question and answer.'],
      ['Our tester did or said…', 'One thing the player did or said.'],
      ['We’ll keep or change…', 'Finish the sentence with “because…”.'],
    ],
  },

  // ---------- Zone 7: Share ----------
  {
    slug: 'showcase-roles', zone: 7, name: 'Showcase roles', session: 'Planned', time: '45 min', group: 'Whole group',
    what: 'Every kid gets a job at the family showcase: explain, demo or show the drawings.',
    intro: 'A real audience gives the work a reason to be finished.',
    materials: ['The finished boards', 'A printed QR code linking to each team’s work'],
    steps: [
      ['Give every kid a role', 'Explain, demo, or show the drawings.'],
      ['Rehearse one sentence', 'Each kid says in their own words who the board is for and how it works.'],
      ['Let families play', 'Families try the boards while kids explain.'],
      ['Send it home', 'A printed QR code links to the team’s work so kids can show it again.'],
    ],
  },
];

export const toolsInZone = (num) => TOOLS.filter((t) => t.zone === num);
export const zoneOf = (tool) => ZONES.find((z) => z.num === tool.zone);
export const sessionLabel = (s) => (typeof s === 'number' ? `Session ${s}` : /^\d/.test(String(s)) ? `Sessions ${s}` : s);
