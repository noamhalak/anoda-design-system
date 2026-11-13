---
name: anoda-deck
description: The anoda presentation template — purple, Google Sans, Hebrew RTL slide decks built as a Claude Slides artifact and moved to Google Slides. Use this skill whenever the user (Noam / anoda) asks for a presentation, deck, slides, kickoff, onboarding (חפיפה), lecture, workshop or meetup deck for anoda, an intern, students or the anoda community, or says "מצגת", "שקופיות", "בתבנית של anoda", "כמו מצגת ההתמחות" — even if they don't name the template. Also use it to add or fix a single slide in an existing anoda deck.
---

# anoda deck template

This is the look and the working method of the anoda decks (first built for an internship kickoff, Nov 2026). The goal of the skill is that a new deck looks like it came from the same hand without re-deriving every decision, and that Hebrew RTL comes out right the first time.

`assets/slides/` holds every slide of that deck as a working Slides-artifact file. Treat them as the layout library: copy the closest one, change the words, keep the structure. `assets/deck.example.json` is the matching index.

## Look

**Colors (anoda design-system tokens — use only these):**

| token | hex | use |
|---|---|---|
| primary | `#7439CC` | accents, numbers, pills text, strong cards |
| primary-400 | `#AD83EB` | gradients, arrows, secondary shapes |
| primary-300 | `#DAC2FF` | big numbers on purple, soft shapes |
| primary-200 | `#E6D6FF` | tags, tints |
| primary-100 | `#F3EBFF` | icon tiles, highlighted rows, light pills |
| ink | `#121114` | titles |
| text | `#423F47` | body |
| muted | `#605C66` | subtitles, footer |
| line | `#E5E1EB` / `#CEC9D6` | borders, shadows |
| canvas | `#F7F5FA` | slide background, card fills |

No black or neutral gray in illustrations or confetti — purple family + white only.

**Type:** Google Sans everywhere (deck.json `faces` entry, weights 400/700). Title 64px bold, subtitle 30px muted, card title 30–38px bold, body 24–28px, footer 24px.

**Frame:** every content slide = `#F7F5FA` section with padding `56px 56px 120px`, one white card (`border-radius:48px`, `box-shadow:0 24px 64px -32px #CEC9D6`, padding ~64px 72px). Header row: 104px icon tile (`#F3EBFF`, radius 28) with a purple x-icon on the right, title + subtitle to its left. Footer: color logo bottom-left, "חפיפה · [שם המשתתף]" style label bottom-right at 24px muted.

**Purple slides** (cover, section dividers, statement/problem slide): card with `radial-gradient(circle at 75–85% 0%, #AD83EB, #7439CC)`, white text, white logo top-right, a faint dotted/diamond illustration on the left.

**Cards in a row:** all the same — `#F7F5FA` fill, same text colors. Do not highlight one card in purple; Noam asked to remove that every time it appeared.

**Illustrations:** small inline SVG UI mockups (browser windows, cards, chat bubbles, charts) in the purple family, with a grain overlay (feTurbulence + radial mask, opacity ~0.18–0.25), soft drop shadow, and a bottom fade mask. Give each SVG unique id prefixes. On purple backgrounds use white grain; on light, purple grain. No black fills — use `#7439CC` for "text lines".

**Numbers in circles** (lists): 52–64px circle, all circles light (`#F3EBFF` fill, `#7439CC` number) — none filled dark.

## Hebrew / RTL — the part that breaks

The Slides runtime renders text as LTR paragraphs. To display Hebrew correctly:

1. Wrap every `p/h1/h2/h3` that contains Hebrew in U+202B … U+202C. Run `python3 scripts/rtl.py <slide.html…>` after writing slides; it skips already-wrapped text.
2. A `<br>` inside one embedding breaks punctuation ("!" jumps sides). Put each line in its own embedding: `‫ברוך הבא‬<br>‫להתמחות!‬`.
3. Number ranges like `30–45` can flip inside Hebrew in the deck runtime; write them as words ("30 עד 45") in the deck. In Google Slides they're fine.
4. Layout direction: rows use `flex-direction:row-reverse` so the first item is on the right; text is `text-align:right`.
5. Never start a Google Slides text line with an English word ("MVP …") — Slides makes the paragraph LTR and scrambles it. Start with Hebrew ("גרסת MVP …").
6. Typing Hebrew inside the deck editor itself doesn't work well (LTR boxes). Edits are done either in code (here) or in Google Slides.

## Language and copy

Hebrew, addressed to the person in second person but not "אתה, אתה" at every line — prefer short imperatives ("תתחיל ממחקר…", "תבנה את המוצר…"). Use professional UX terms (מחקר משתמשים, ניתוח מתחרים, Affinity Map, User Flows, בדיקות שמישות), not vague ones ("מחקר דסק" was rejected). Don't repeat the same information in two places on a slide; Noam removes repetition. Keep task lists short and concrete; don't over-constrain (no "12 questions").

## Building a deck

1. Create a Slides artifact (Artifact quickstart → Slides type), title in Hebrew.
2. Write `project/deck.json` from `assets/deck.example.json` (keep `faces` Google Sans; set `title`, `order`, `sections`).
3. For each slide, copy the closest file from `assets/slides/` and rewrite the words. Layout map:
   - `cover.html` — welcome + photo on tiles + date pill + side confetti
   - `div-*.html` — section divider: big `01/02/…` number, title, one line
   - `about.html` — stacked icon cards + one purple feature card + team strip with overlapping round photos
   - `anoda.html` — 4 illustrated cards in a row + audience band
   - `mission.html` — 4 numbered step cards with arrows
   - `problem.html` — purple statement slide: pill, big question, line, illustration
   - `background.html` — two-column comparison with tags / checks
   - `diamond.html` — Double Diamond shapes + 4 question cards with tool pills
   - `roadmap.html` — week ruler + phase bands + milestone diamonds
   - `sessions.html` — week-by-week table
   - `skills.html`, `tools.html`, `ds.html` — card grids
   - `rhythm.html` — 4 routine cards
   - `week1.html` / `week2.html` — numbered task list with time pills
   - `close.html` — purple closing slide with next-meeting pill
4. Images: upload with Artifact `asset:true`, then use the returned `/_blob/…` URL. The `/_blob/` ids inside the template files belong to the original deck — replace them. Logos are in `assets/logo/` (white for purple slides, color for the footer); the anoda app icon and the team photos are in `assets/images/` (`team-photos-strip.png` is a ready RTL strip for Google Slides).
5. Run `scripts/rtl.py` on the slide files, publish, and look at each slide in the browser before calling it done.
6. Before editing a slide that already exists, read its current version from the artifact (Noam edits in the page); publish from that saved copy.

## Moving to Google Slides

Noam presents from Google Slides.

- Share → Export → Send to → Google Slides creates a copy in the connector's Drive account (it may differ from Noam's account). Share that copy with the account that owns the target presentation, then in the target: File → Import slides → paste the copy's URL → pick slides → keep original theme.
- Copy-paste between accounts loses images; import keeps them.
- To replace one slide: select the slide before it, import the new one, check it, then delete the old one.
- After import, numbers in circles sit too high: select the number boxes → Format → Align → Middle, then Cmd+Shift+E.
- Small text edits are faster directly in Google Slides: click into the box, Cmd+A, Backspace, type. For "**bold label:** regular text", press Cmd+B before the label and again after it, then check — the starting style can invert it.
- Check the presentation's current text first (Noam deletes/edits slides there); respect her edits when re-importing.
