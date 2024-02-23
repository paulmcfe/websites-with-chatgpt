
# Course catalog page prompt
```
I want to build a web page for a school course catalog. I don’t know how to code, so I need you to provide the code for me.

First, write the HTML code for a web page that includes the following:
 * A header element that includes the image named "header.png", the title "University of the Future", the subtitle, "Where tomorrow starts today", and an image named "logo.png". Both images are stored in the "images" subdirectory
 * A nav element with the following four items:
  * A drop-down list with the ID "Department" and the initial value "Department (All)".
  * A drop-down list with the ID "Instructor" and the initial value "Instructor (All)".
  * A drop-down list with the ID "Sort" and the values: "Sort by Department" and "Sort by Title".
  * A text box with the ID "Search" and the placeholder "Search".
  * A main element that begins with an article element.
 * A footer element that includes the Copyright symbol, followed by "University of the Future".
 * In the page head section, include the tag <meta charset="utf-8">.
 * In the page head section, include the tag <meta name="viewport" content="width=device-width, initial-scale=1">.
* Do not add inline styles to the tags. Include a link tag for the styles.css file, instead.

Second, in a separate file write the CSS code for the following:
 * The page has background color white and no margin.
 * The page text uses font size 20px, the color black, and the Roboto font from Google Fonts.
 * The header has a maximum height of 200px.
 * Make the header a Flexbox container with space-between justified content.
 * The "header.png" image is flush left and takes up the full height of the header.
 * The title is 48px and the subtitle is 28px, italic. The title is centered and subtitle is centered under the title.
 * The "logo.png" image is flush right and has a maximum height of 150px.
 * The nav element is a Flexbox container with wrapping turned on and space-between justified content; the background is lightgray.
 * The article element has a margin of 20px and is a Flexbox container with wrapping turned on, a gap of 20px, and flex-start justified content.
 * Make each section element a column-based Flexbox container with space-between justified content, a flex-grow value of 1, and a flex basis of 200px. Make the maximum width 300px.
 * Third-level headings should be 24px. 
 * The footer has background color navy, 24px padding, and centered text.

Third, in a separate file, write the JavaScript code for the following:
 * Fetch the contents of the file college_courses.json.
 * Extract all the unique "Department" values and use them to populate the "Department" drop-down list.
 * Extract all the unique "Instructor" values and use them to populate the "Instructor" drop-down list.
 * For each record fetched from the JSON file, add a section element to the article element and populate the section element with the following three elements:
   * A third-level heading that includes the record's "Title" text.
   * A div element with the text "Course ID: ", the record's "Course ID" value, a line break, the text "Instructor: ", the record's "Instructor" value, a line break, the text "Department: ", the record's "Department" value, a line break, the text "Semester: ", the record's "Semester" value, and a line break.
   * A paragraph element that includes the record's "Description" value. 
 * When the user selects an item from the "Department" list, repopulate the article element with just the records that match the selected department. If the user selects the first item in the list, repopulate the article element with every record that was imported from the JSON file.
 * When the user selects an item from the "Instructor" list, repopulate the article element with just the records that match the selected instructor. If the user selects the first item in the list, repopulate the article element with every record that was imported from the JSON file.
 * When the user selects "Sort by Title" from the "Sort" list, sort the displayed records on the "Title" field and then repopulate the article element with the sorted records. When the user selects "Sort by Department" from the "Sort" list, sort the displayed records on the "Department" field and then repopulate the article element with the sorted records.
 * When the user types text in the "Search" text box, repopulate the article element with just the records that include the search text in any field, except the "Semester" field. If the user deletes all the Search text, repopulate the article element with every record that was imported from the JSON file.