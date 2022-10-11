# Simple HTML tags

There are many tags available in HTML. Here you will learn about common tags that you'll use as a developer.

## Headings

- Headings allow you to display titles and subtitles on your webpage.
```
<body>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</body>
```


<body>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</body>


---


## Paragraphs

- Paragraphs contain text content.
```
<p>
   This paragraph
   contains a lot of lines
   but they are ignored.
</p>
```

The following displays in the web browser:


<p>
   This paragraph
   contains a lot of lines
   but they are ignored.
</p> 

Note that putting content on a new line is ignored by the web browser.

---


Line Breaks

As you've learned, line breaks in the paragraph tag line are ignored by HTML. Instead, they must be specified using the <br> tag. The <br> tag does not need a closing tag.
5

The following displays in the web browser: 
Line breaks displayed in browser 
Strong

Strong tags can be used to indicate that a range of text has importance.
3

The following displays in the web browser: 
Text with strong tag displayed in browser 
Bold

Bold tags can be used to draw the reader's attention to a range of text.
1
2
3

The following displays in the web browser: 
Bold text displayed in browser 

The following displays in the web browser: 
Text with strong tag displayed in browser 

Bold tags should be used to draw attention but not to indicate that something is more important. Consider the following example:
1

The following displays in the web browser: 
Bold text displayed in browser 
Emphasis

Emphasis tags can be used to add emphasis to text.
1
2
3

The following displays in the web browser: 
Text with emphasis tag displayed in browser 
Italics

Italics tags can be used to offset a range of text.
3

The following displays in the web browser: 
Italic text displayed in browser 
Emphasis vs. Italics

By default both tags will have the same visual effect in the web browser. The only difference is the meaning.

Emphasis tags stress the text contained in them. Let's explore the following example:
1

The following displays in the web browser: 
Text with emphasis tag displayed in browser. 

Italics represent off-set text and should be used for technical terms, titles, a thought or a phrase from another language, for example:
1

The following displays in the web browser: 
Italic text displayed in browser

Screen readers will not announce any difference if an italics tag is used.
Lists

You can add lists to your web pages. There are two types of lists in HTML.

Lists can be unordered using the <ul> tag. List items are specified using the <li> tag, for example:
6

This displays in the web browser as:
Bullet style displayed in the browser img10

Lists can also be ordered using the <ol> tag. Again, list items are specified using the <li> tag.
5

This displays as the following in the web browser.
Numbered list style displayed in browser img11
Div tags

A <div> tag defines a content division in a HTML document. It acts as a generic container and has no effect on the content unless it is styled by CSS.

The following example shows a <div> element that contains a paragraph element:
1
2
3

This displays as the following in the web browser.
Div displayed in browser img12

It can be nested inside other elements, for example:
5

This displays in the web browser as:
Div inside a dive displayed in browser 

As mentioned, the div has no impact on content unless it is styled by CSS. Let’s add a small CSS rule that styles all divs on the page.

Don't worry about the meaning of the CSS just yet, you'll explore CSS further in a later lesson. In summary, you're applying a rule that adds a border and some visual spacing to the element.
3
4
5
6
7
8
9
10
11
1
2

This displays in the web browser as:
Paragraph in stylized div displayed in browser img13

Div elements are an important part of building webpages. More advanced usage of div elements will be explored in another course.
Comments

If you want to leave a comment in the code for other developers, it can be added as:

<!-- This is a comment --> 

The comment will not be displayed in the web browser.
