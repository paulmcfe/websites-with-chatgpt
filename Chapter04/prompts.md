#  Site title and tagline prompt
```
You are a wordsmith that can generate catchy and creative titles and taglines for a book club web page. Use the information provided below to come up with suggestions that reflect the focus of the book club.

The book club is focused on [topic].

First, think of some words or phrases that relate to the book club’s focus.

Second, try to combine or play with these words or phrases to create catchy or witty titles.

Third, add a tagline that explains or expands on the title.
```
# Typeface prompt
```
You are a typography expert that can generate awesome font combinations for a book club page. Use the information provided below to come up with suggestions that reflect the focus of the book club.

The book club is focused on [topic].

First, using only fonts available at Google Fonts, suggest a [serif|sans serif|monospace] font for the page headings.

Second, using only fonts available at Google Fonts, suggest a compatible [serif|sans serif|monospace] font for the page text.

Third, please do not include either Roboto or Open Sans in your suggestions. Be creative, bold, and modern in your choices.
```
# Color scheme prompt
```
You are web designer and know how to create beautiful and compelling color schemes. Use the information provided below to come up with suggestions that reflect the theme of the book club.

The book club is focused on [topic].

First, design a color scheme for the book club page. I want the page to be visually appealing and easy on the eyes. I’m thinking of using [primary color] as the dominant hue. Suggest two other colors that would go well with [primary color].

Second, suggest ways that I can use each color in the web page.

Third, when suggesting colors, please use the standard CSS color keywords, such as aliceblue and papayawhip.
```
# Book club web page prompt
```
I want to build a web page for a book club. I don’t know how to code, so I need you to provide the code for me.

First, write the HTML code for a web page that includes the following:
 * A header element that includes an image named [logo filename], the title "[page title]", and the tagline "[page tagline]".
 * A main element that contains three sections.
 * The first section contains the second-level heading "Welcome!", followed by a paragraph that contains the text between the triple quotation marks: 
"""
[section text]
"""
 * A second section that begins with the second-level heading "What We're Reading".
 * In the second section, include the image named [book cover image filename], followed by the text between the triple quotation marks, where each word or phrase before a colon is bold:
"""
Title: [title]
Author: [author]
Pages: [pages]
Summary: [summary]
"""
 * A third section that begins with the second-level heading "Next Meetup".
 * In the third section, include the text between the triple quotation marks, where each word or phrase before a colon is bold:
"""
Date: [date]
Time: [time]
Location: [location]
Questions to ponder: [questions]
"""
 * A footer element that includes the text "Copyright" (spelled out, do not include the Copyright symbol), followed by the current year, followed by "[page title]". In a separate paragraph, the footer also includes [number] links to social media accounts: one for Facebook (username: [username]), Instagram (username: [username]), and X (username: [username]).

Second, in a separate file write the CSS code for the following:
 * The header background color is [primary color] with [size]px padding all around. Float the logo to the left and right-align the title and tagline.
 * The title font size is [size]px with color [lightest color].
 * The tagline font size is [size]px with color [lightest color] and formatted as italic.
 * The second-level heading font size is [size]px with color [primary color] and a top margin of [size]px.
 * The main element font size is [size]px.
 * In the second and third sections, the bold text should use the color [accent color].
 * The image named [logo filename] should be floated to the right.
 * For the title and headings, use the [heading font name] font from Google Fonts. For the rest of the text, use the [text font name] font from Google Fonts.
 * The footer background color is [primary color] with [size]px padding all around and a [size]px top margin. The text color is [lightest color]. Center the text and social media links.
 * For the social media links, use the corresponding Font Awesome icons.
 * The entire page is centered in the browser window.
 * The page is responsive with a maximum width of [size]px.
 ```