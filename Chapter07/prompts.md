#  Site title and tagline prompt
```
You are a wordsmith that can generate catchy and creative titles and taglines for a website. Use the information provided below to come up with suggestions that reflect the theme of the site.

The site’s theme is [topic].

ChatGPT:

First, think of some words or phrases that relate to the site’s theme.

Second, try to combine or play with these words or phrases to create catchy or witty titles.

Third, add a tagline that explains or expands on the title.
```
# Typeface prompt
```
You are a typography expert that can generate awesome font combinations for a website. Use the information provided below to come up with suggestions that reflect the theme of the site.

The site's theme is [topic].

ChatGPT:

First, using only fonts available at Google Fonts, suggest a compatible Y font for the page text. Make sure that the page text font is clean, clear, and readable.

Second, using only fonts available at Google Fonts, suggest a Z font for the page headings. Make sure this font is compatible with the page text font.

Third, please do not include either Roboto or Open Sans in your suggestions. Be creative, bold, and modern in your choices.
```
# Color scheme prompt
```
You are web designer and know how to create beautiful and compelling color schemes. Use the information provided below to come up with suggestions for an online journal.

The online journal’s theme is X.

ChatGPT:

First, design a color scheme for the online journal page. I want the page text to be readable and easy on the eyes, with dark text on a light background. Suggest a dark color for the page text and a light color for the page background, ensuring that there is sufficient contrast between the two colors.
 
Second, suggest a compatible background for the page accordions.

Third, when suggesting colors, please use the standard CSS color keywords, such as aliceblue and papayawhip.
```
# Prompt to get ChatGPT to suggest writing ideas
```
You are an expert in [topic] and can generate interesting and creative ideas about [topic] based on the following question.

What are the pros and cons of [topic]?
What are the top ten features of [topic]?
What are five things everyone needs to know about [topic]?
What are some common myths about [topic]?
How does a beginner get started with [topic]?
What are half a dozen tips and tricks to get the most out of [topic]?
```
# Prompt to generate ideas for how to write about a topic
```
You are a writing coach and an expert on [topic] and can generate practical and creative advice on how to write about [topic] based on the following question.

What are the best ways to introduce a beginner to [topic]?
Once someone has learned the basics of [topic], what should I teach them next?
How do I get someone who knows nothing about [topic] excited about the subject?
What are some ways to write engagingly about [topic]?
What types of posts are most suited to writing about [topic]?
```
# Prompt to get ChatGPT help for researching a topic
```
Help me research [topic] for a general audience. I'm interested in A, B, and C. Please provide X, Y, and Z. Also, include any interesting trivia or anecdotes that might be engaging for readers. The goal is to provide a depth of information that is accurate and detailed but also easily understood by a broad audience. Please provide links to your sources.
```
#  Prompt to get ChatGPT to write in your own voice
```
You are an experienced ghostwriter. Given several examples of an author's writing, you are skilled at detecting the tone and style of the writing and emulating that writer's voice to generate new writing. 
 
 Below are several writing samples, with each sample between sets of triple quotation marks.
 
 Examine the samples to determine the writer's unique voice.
 
 Emulate the writer's voice to generate X.
 """
 Writing sample #1
 """
 
 """
 Writing sample #2
 """
 
 """
 Writing sample #3
 """
 
 """
 Writing sample #4
 """
 
 """
 Writing sample #5
 """
```
# Prompt to add HTML tags
```
Please add HTML tags to the text, but don't generate the code for an entire web page.
```
# Home page prompt
```
I want to build a website home page. I don’t know how to code, so I need you to provide the code for me.

First, write the HTML code for a web page that includes the following:
 * A header that uses the file hero.jpg as a hero image.
 * The header also includes the title "Bread in the Bone" and the tagline "A half-baked look at the history and culture of bread".
 * The header should also include four links in the upper-right corner:
   * The text "Home" that links to the file "index.html".
   * The text "History" that links to the file "history.html".
   * The text "Culture" that links to the file "culture.html".
   * The text "Language" that links to the file "language.html".
 * A main element that includes the following five elements:
   * An introductory paragraph that includes the text "Welcome to Bread in the Bone, where I, a bread baker, a bread eater, and an unabashed bread nerd, try to make sense of the historical, cultural, and linguistic significance of that most humble of home staples: the loaf of bread. It's the greatest thing since, well, you know..."
  * A second paragraph that consists of the text "This site is divided into three sections:"
  * The second-level heading "History" followed by a paragraph that includes the text "A potted and probably not very accurate history of bread, from its ancient origins to today’s ancient grains." Then the text "Check it out." as a link to "history.html".
  * The second-level heading "Culture" followed by a paragraph that includes the text "A remarkably shallow examination of the cultural significance of bread, from its religious meanings to its social uses." Then the text "Read it." as a link to "culture.html".
  * The second-level heading "Language" followed by a paragraph that includes the text "A not-all-that-deep dive into the linguistic roots and uses of the word bread, from its etymology to its varied metaphors." Put the word "bread" in italics. Then add the text "Go there." as a link to "language.html".
 * A footer element that includes the Copyright symbol, followed by the current year, followed by "Paul McFedries".
  * In the page head section, include the tag <meta charset="utf-8">.

Second, in a separate file write the CSS code for the following:
 * The page background color is wheat.
 * The hero image covers the entire browser window.
 * Add a linear gradient to the header background to darken the hero image slightly.
 * Make all the header text white.
 * Make the title and tagline centered both horizontally and vertically.
 * Make the title 72px.
 * Make the tagline 36px.
 * Make the header links 24px.
 * Style the headings with size 48px, no bottom margin, the color saddlebrown, and the Raleway typeface from Google Fonts.
 * Style the rest of the page text with size 24px, a 20px bottom margin, and the Lato typeface from Google Fonts.
 * Style the main element's links with the color saddlebrown.
 * The main section has 25px padding all around and a maximum width of 800px.
 * The footer has a top border.
```
# Subtopic page prompt
```
I want to build a website page. I don’t know how to code, so I need you to provide the code for me.

Write the HTML code for a web page that includes the following:
 * A header element that includes the title "The Rise and Rise of Bread" and the tagline "A story of dough and civilization".
 * The header should also include four links in the upper-right corner:
   * The text "Home" that links to the file "index.html".
   * The text "History" that links to the file "history.html".
   * The text "Culture" that links to the file "culture.html".
   * The text "Language" that links to the file "language.html".
 * A main element that includes the text between triple quotation marks.
 """
 """
 * A footer element that includes the Copyright symbol, followed by the current year, followed by "Paul McFedries".
 * In the page head section, include the tag <meta charset="utf-8">.
 * In the page head section, include a reference to a stylesheet file named "styles.css".
 * In the page head section, include a reference to the Google fonts Lato and Raleway.
 * Do not add any inline styles.



