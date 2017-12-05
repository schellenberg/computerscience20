
.. qnum::
   :prefix: string-operators-1
   :start: 1


Cascading Style Sheets (CSS)
===============================

.. topic:: Quick Overview of Day

    Experiment with CSS (Cascading Style Sheets).


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CS1** Explore the underlying technology of computing devices and the Internet, and their impacts on society.


What is CSS For?
-----------------------

CSS defines how a webpage should look, and it does this using a set of rules.  We are all used to following certain rules in every day life:  **If** it is raining, **then** take your umbrella.  **If** the light is red, **then** come to a stop at the stoplight.  In html terms we might say, **if** the tag is an ``h1`` **then** color it blue and set the font size to 28 points.

CSS Syntax
----------

To tell the computer about these if/then rules, we need a consistent syntax.  The syntax for CSS has two parts, a selector and a declaration.

.. code-block:: css

   selector {
       declaration;
       declaration;
       }

The declaration itself consists of two parts: a property and a value.  There are many many CSS properties and we willl look at a lot of them, but for now, just think of the property as something like color, font-size, font-family, etc.

Selectors can be as simple as a tag name, or a very complex pattern to match.  We will start with some very simple selectors and work our way up to the more complex.

Without further fuss, lets look at a CSS rule for coloring h1 tags blue, and changing their font to 28 points.

.. code-block:: css

   h1 {
       color: blue;
       font-size: 28pt;
   }


Including CSS in Your Page
--------------------------

There are three ways to include CSS in your html document.

* You can add a style attribute to a tag.  This should not be used very often, if ever!
* You can embed your CSS in your file inside a ``style`` tag.  We'll use this method in this book for convenience.
* You can put all of your CSS in a separate style file and include the style file into your HTML.  This is the method normally used by web developers because it achieves the greatest amount of separation between the content and how the content looks.

Lets now look at a complete example:

.. activecode:: css_rule_1
   :language: html

   <html>
      <head>
         <style>
         h1 {
            color: blue;
            font-size: 28pt;
         }
         </style>
      </head>
      <body>
         <h1>Hello World!!</h1>
         <p>The paragraph text should be unchanged</p>
         <h2>I am not blue!</h2>
         <h1>Hello Again</h1>
      </body>
   </html>


There are several things to notice about the example above.  First the ``h1`` selector matches all of the h1 tags in the document.  But it does not match the ``h2`` or the ``p`` tags.  If you want to change the style of the paragraph you need to add another rule.  Lets try it:  Add a rule to the style tag that colors the paragraph text green.  Then make another rule that makes the h2 tag size 16pt and yellow.

**One thing to be careful about is to remember the semi-colons after the values.  If you forget a semi-colon, then your rule will not work.**


How to Specify a Color
-------------------------------------

There are three different ways to specify the color.

* by name, like blue, red, green.  You can see a complete list of `color names <http://www.w3schools.com/cssref/css_colors.asp>`_ on the w3schools website.
* using an RGB value like ``rgb(255,0,0)``
* using a HEX value like ``#ff0000``

To simplify matters, just search the web for ``color picker``, choose the color you want to use, then copy/paste the RBG or HEX value into your CSS.


Background
----------

CSS has the following properties which we can use to change the background.

* background-color
* background-image
* background-repeat
* background-attachment
* background-position

.. activecode:: css_bkgrd_1
   :language: html

   <html>
      <head>
         <style>
         h1 {
            color: blue;
            font-size: 28pt;
         }
         body {
             background-image: url("https://static.pexels.com/photos/618833/pexels-photo-618833.jpeg")
         }
         </style>
      </head>
      <body>
         <h1>Hello World!!</h1>
         <p>The paragraph text should be unchanged</p>
         <h2>I am not blue!</h2>
         <h1>Hello Again</h1>
      </body>
   </html>


Text
----

* text-color
* text-align
* text-decoration
* text-transformation

Font
----

* font-family
* font-style
* font-size


Using an id attribute in a rule
-------------------------------

Another common situation is that you have one particular paragraph that you want to have in a different color.  You cannot just use a selector that matches the p tag as that will match all of the p tags.  So in this case we need to somehow mark a particular paragraph so that we can have a selector that selects that paragraph and only that paragraph.  This is where the ``id`` attribute is used.    Any html tag can have an id attribute, which serves as a **unique identifier** for that tag.  In fact, the value of the id attribute must be unique throughout the file.


In the example below we have two rules.  One that changes the text to blue in all paragraphs.  The second rule changes the font-size to 18pt for the paragraph that has the identifier of "abc456"  The hashtag ``#`` is very important to this rule as it tells the css matcher that what comes after that hashtag must match the id attribute of some element.  So, in fact the p is redundant in this example, and you could remove the p from the beginning of the selector and the rule would still work.  In fact, you should try that now.

.. activecode:: css_ids
   :language: html

   <html>
      <head>
         <style>
         p {
            color: blue;
         }
         p#abc456 {
            font-size: 18pt;
         }
         </style>
      </head>
      <body>
         <h1>Hello World!!</h1>
         <p id="xyz123">The paragraph text should be unchanged</p>
         <h2>I am not blue!</h2>
         <h1>Hello Again</h1>
         <p id="abc456">This is another paragraph with a different identifier.</p>
      </body>
   </html>


What do you think will happen if you change the second rule so that it sets the color to red?   If you said that it will keep the first paragraph's color blue but change the second to red, your are correct.  Why does the second rule over-rule the first?  Because the second rule is more specific.  You might have thought it was because of the order of the rules, but in fact you can change the order of the two rules and try it and you will see that you still get the same result.

Using the class attribute in a rule
-----------------------------------

Sometimes you want to match some elements that are the same tag but not others.  One example of this is when you want to have a "zebra striped" table, where every other line has a slightly different background color then you are going to want to use a ``class`` attribute.  Classes and CSS may be the single most useful combination for styling your web pages.

Unlike the ``id`` attribute, many different tags can have the same value for a class.  Some examples:

You have paragraphs or headings and you want some normal, some are "warnings", some are "errors", and some are "cautions".   Or perhaps you have a list of things, some things one the list are hight priority, some are low, and some are medium.  By using a class you can apply a consistent style to all of the things that belong to that class (have the same value for their class attribute.)

To select any element that matches a particular class you use the ``.`` before the name of the class.  So ``.high`` will match any tags that have the attribute ``class=high``.

Returning to our HTML table example we have some rows that are "odd" and some that are "even".  Lets make a short table and style the odd and even rows differently.

.. activecode:: css_classes
   :language: html

   <html>
      <head>
         <style>
         .odd {
            background-color: #9999ee;
         }
         .even {
            background-color: pink;
         }
         </style>
      </head>
      <body>
           <table>
           <tr class="odd"><td>aapl</td><td>$101.23</td></tr>
           <tr class="even"><td>goog</td><td>$583.10</td></tr>
           <tr class="odd"><td>tsla</td><td>$281.10</td></tr>
           <tr class="even"><td>amzn</td><td>$331.33</td></tr>
           </table>
      </body>
   </html>



Now for some additional practice lets make the table look really nice.  Add a header and have the background of the header be light gray.  Make the text of the header bold and slightly larger.  Overall change the table so its width is 50% of the page and get rid of the page. `This page <http://www.w3schools.com/css/css_table.asp>`_ gives you a complete rundown on how to style tables.


Extra for Experts Information
-------------------------------

.. note:: Although the following information can be really interesting, it can also cause frustration for students. This additional information might be useful for students who are moving quickly through the initial HTML/CSS content.

Using a separate css file is the preferred way to organize your CSS. This allows you to use the same style in multiple web pages, and in a group setting makes it easy for one person to work on the style while another focuses on the content.  CSS stylesheets are included in a web page by using the ``link`` tag in the ``head`` section of your page as follows:

.. code-block:: html

   <link rel="stylesheet" href="mystyle.css" type="text/css">


The CSS Box Model
-----------------

Before we go any further it is important to stop and think a bit about how the browser renders the html into the browser window.  As the browser reads each html tag, it must figure out where on the page it belongs.  For the most part, the browser flows each tag from top to bottom and from left to right.  As we have mentioned, block elements start on a new line, and inline elements flow from left to right, fitting within the horizontal size of the page or else going on to the next line. 

All HTML elements can be thought of simply as boxes.  In fact that is exactly how the browser thinks of them as it begins the process of rendering the page.  When doing web page design and layout it is very common to hear designers talk about the CSS box model.  Figure 1 illustrates the different components that go into the box model.

.. figure:: images/box-model.gif

   Figure used in accordance with w3schools fair use policy

The different parts of the box model are defined as follows:

* Content:  The actual text or image content of an html tag
* Padding:  The space between the content and the border.
* Border:  This can be an actual drawn border or it can be invisible
* Margin: The space outside the border between this box and the boxes next to it in each direction.

Lets try a simple example:

.. activecode:: css_boxmodel
   :language: html

   <html>
      <head>
         <style>
         section {
              width: 250px;
              background-color: green;
              padding: 25px;
              border: 10px solid blue;
              margin: 25px;
              }
         </style>
       </head>
   <body>

      <section>Hello World</section>
      <section id=b>Hello World</section>

   </body>
   </html>

As a bit of review, add a rule to the example above to make the margin for the second Hello world to be 5px.  What does this tell you about how margins work?


The size of content area itself can also be controlled using the following properties:

* height
* max-height
* min-height
* width
* max-width
* min-width

Each of these properties can be specified in terms of pixels (px), points (pt), or as a percentage.  In addition the auto keyword can be used, which is the default and allows the browser to figure out the proper height and width.


When you use height and width with a **container** element, such as one of the semantic elements, it is very useful to know about the overflow property.  What if you set your height so small that the content does not fit?  The `overflow <http://www.w3schools.com/cssref/pr_pos_overflow.asp>`_ property tells you how to handle that.

Here is an example activecode for you to experiment with:

.. activecode:: css_overflow
   :language: html

   <html>
      <head>
         <style>
         section {
              width: 250px;
              background-color: green;
              padding: 25px;
              border: 10px solid blue;
              margin: 25px;
              height: 100px;
              }
         </style>
       </head>
   <body>

      <section>
      <p>Ea dolore do irure aliquip id qui dolor do in aliquip irure anim id. Adipisicing qui
       incididunt consectetur veniam cupidatat dolor. Aliquip irure labore elit ipsum officia non
       culpa consequat et voluptate. Officia nisi nostrud exercitation quis amet ipsum incididunt.
       Et incididunt eu laborum velit dolore laborum. Esse id mollit fugiat nostrud non ex occaecat
       culpa. Adipisicing quis excepteur voluptate commodo minim aliqua excepteur occaecat
       eu ipsum nisi duis amet. Duis proident fugiat velit elit esse cillum minim laborum elit.
      </p>

      </section>
   </body>
   </html>

The possible values for the overflow property are:

* visible
* hidden
* scroll
* auto

Give them a try in the example above and see what happens.

.. admonition:: Greeking

   You may be wondering about the use of latin words in the example paragraph.  This is an old tradition in typesetting, to use a bunch of latin words, many of the sentences start with "Lorum Ipsum," so sometimes it is called Lorum Ipusum as well.  The idea is to fill the space with words that obviously have no relationship to the actual webpage.  This helps reviewers focus on the style rather than the content.  Why do they call it greeking when the words are latin?  Its Greek to me.  Obviously they skipped Paideia that day.
