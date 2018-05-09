
.. qnum::
   :prefix: html
   :start: 1


The HyperText Markup Language
===============================

.. topic:: Quick Overview of Day

    Experiment with HTML (HyperText Markup Language).


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Outcomes Addressed In This Section

    - **CS20-CS1** Explore the underlying technology of computing devices and the Internet, and their impacts on society.


Introduction to HTML
-----------------------

As we noted in the previous chapter, HTML is the language of the web for expressing content. But before we dive into the specifics of HTML, lets look at what we mean by a markup language in general.  A markup language is a language that **annotates** text so that the computer can manipulate it for some purpose.  Most markup languages are readable by humans and are designed to be written with a plain text editor as rather than a fancy word processor like Microsoft Word.

As we learn HTML its important to keep in mind that the job of HTML is to structure the document and provide content.  Making the webpage look good is the job of a different technology called Cascading Style Sheets (CSS).

HTML uses a set of tags to annotate (mark up) the document.  The tags all look like this: ``< tagname >`` and they are balanced so that at the end of the content for that tag there is ``</ tagname >``. Notice that the closing tag contains a slash at the beginning to differentiate itself from an opening tag.

An HTML document then just contains a series of these balanced tags. 

.. note:: 

    When experimenting with HTML, you can simply use a web based environment (like the one you are in right now), but it can be very instructive to experiment with how to do this with files on your computer as well. For any of the examples given below, you can simply create a text file on your computer, type some HTML, then make sure you save the file as ``something.html``. The .html extension is very important, as it allows your computer to identify what type of content is contained within the file. After the file is saved, open it using your web browser of choice (Chrome, Edge, Firefox, etc.).

    When creating the text file on your computer, be sure to use a plain text editor (something like Notepad, not Word!). I recommend using `Atom <https://atom.io/>`_, as it works the same for Windows/Mac/Linux, is free, and doesn't require admin rights to install in a lab setting.



My First Heading
----------------

A simple paragraph of text.

Another paragraph of text.


The HTML for this document is as follows:

.. activecode:: html_1
   :language: html
   
   <html>
       <head>
           <title>Test Page</title>
       </head>
       <body>
           <h1>My First Heading</h1>
           <p>A simple paragraph of text</p>
           <p>Another paragraph of text</p>
       </body>
   </html>



If you click the render button you will see the HTML in the example above in a special output window that mimics your browser.  Try changing the text of one of the paragraphs and click run again.   Try changing the ``h1`` tag to ``h2``  Don't forget to change both the opening and closing tags.   I have indented the HTML for you so you can see the opening and closing tags more clearly.  A web browser does not care about indentation one bit; you can get rid of all of the indentation, or put everything on one line and the page will still look the same.

Before we move on to talk more about specific HTML tags its useful to think about the page that is produced and the structure of the page.  You get a sense of the structure from the indentation I have provided, but its useful to look at this from another perspective.  Figure 2 illustrates a "tree view" of an HTML page.

.. image:: images/tree.svg

   
This tree is upside down with how we usually think of a tree, but in computer science we put the "root" of the tree at the top.  So the root of this tree is the html tag.  The html tag has two **children**, the head and the body.  The head has one child, which is the head tag.  The html tag is the **parent** of the head tag.  The body has three children, the h1 tag and two p tags.  You may also find it helpful to think of this as an outline, although you would have to rotate the picture 90 degrees counter clockwise to get the orientation into outline form.  We will see how this tree structure of an html page is useful later on if/when we start to use CSS and Javascript.


Basic HTML Tags
----------------

Headings
~~~~~~~~~~~~

Like any document HTML documents may have several layers of headings.  In fact you can have heading levels from 1 to 6 in an HTML document.

.. activecode:: html_headings
   :language: html

   <h1>Level one</h1>
   <h2>Level two</h2>
   <h3>Level three</h3>


Now modify the example above to add the next three levels of headings.  What do you notice?  What happens if you add a level 7 heading?   What happens if you close an h2 tag with an h1 or an h3?

.. reveal:: reveal_heading

   As you might expect, the headings continue to get smaller as you go from 1 to 6.  But when you go to level 7 the text gets bigger.  This is because the web browser is written so that it just ignores any tags that it does not know about.  This is somewhat of a disadvantage as you don't get any error messages, things just look wrong, and you have to figure out why.



Another aspect of the heading tag is that it is what we call a **block** tag.  Notice that each heading appears on its own line.  Thats pretty much what we would expect for a heading.  But not necessarily for other tags.  shortly, we will see some **inline** tags that do not each appear on their own line.


Paragraphs
~~~~~~~~~~~~

Paragraphs are another funamental element of documents.  Paragraphs are also another example of a block element in that each paragraph gets its own space and is separated from other html elements by blank lines in the document.


.. activecode:: html_paragraph
   :language: html

   <p>This is a short sentence.</p>
   <p>This is a paragraph.  What happens when we have a really really really long line that takes up more than one line of the browser? </p>
   <p>Level this is a short sentence</p>


What happens when you put a paragraph inside another paragraph?  What about a header inside a paragraph?


Images
~~~~~~~~~~~~

Images are another common element of a document or a web page.  To include an image in a document you must use an ``img`` tag.  Image tags are an example of an **inline** element because they just flow in with the surrounding text.  They do not force a new block to be created in the rendering of the html.  

The image tag has a new component to it called an attribute.  In general tags can have many attributes in the case of an image we can inlude it by using a ``src`` attribute that contains the URL to the image we want to embed.  We can embed any image on the internet in our own document by referring to it by its URL in the ``src`` attribute.

.. activecode:: html_img1
   :language: html

   <h1>Embedded Images</h1>
   <p>Images are inline elements they fit in the flow
   <img src="/_static/skflag.png">
   of a paragraph without causing extra line breaks.</p>
   <p>This image uses a <em>relative path</em>, which means
   that there isn't a http:// at the start of the path.</p>

.. activecode:: html_img2
   :language: html

   <p>
   <img src="http://cs20.ca/_static/skflag.png">
   of a paragraph without causing extra line breaks.</p>
   <p>This image uses an <em>absolute path</em>, which means
   that there is a http:// at the start of the path.</p>


Try modifying the example above so that shows a different image. You will want to use a search engine to find the URL of an image file, then copy/paste it into the example above.

You can also change the height and width of  an image by using a ``height=`` attribute or a ``width=`` attribute.  Try changing the size of the image in the example above.  Notice what it does to the flow.  Try changing just one of height or width and then try changing both at the same time.  You can stretch your image in all kinds of crazy ways.

There are several other attributes of the image tag as well.  You can read about them `here <http://www.w3schools.com/tags/tag_img.asp>`_.


Links
~~~~~~~~~~~~

The last basic tag to cover in this section is the link tag ``a``.  In fact the last sentence of the previous section used a link to send you to the w3schools website to learn more about the attributes of an ``img`` tag.  Links are what made the web so popular in the first place.  Today we call them links, but in earlier years they were usually referred to as Hyperlinks. You can provide a link to any URL on the web using the ``href`` attribute on the ``a`` tag.   The text that you will click on goes between the opening ``a`` tag and the closing ``a`` tag.


.. activecode:: html_link
   :language: html

   <h1>Links make the web!</h1>
   <p>Links are another inline element.  You can read about links and their attributes
   <a href="http://www.w3schools.com/tags/tag_a.asp">Here</a> on the w3schools website.</p>


Try clicking on the link in the example above.  What happens?  How do you get back?   Don't worry, you can always just reload this page.

Links can also be used to navigate within the same page.  to do this you use one ``a`` tag to create
an anchor point on the page using the name attribute like this:  ``<a name="target">I am a target</a>``  You can create
a link that will jump to the target anywhere else on the page using ``<a href="#target">Go to Target</a>``


Simple Text Formatting
----------------------

Making text bold or italic and other formatting is easy in HTML as well.  The following example illustrates the basic text formatting tags.

.. activecode:: html_fmt
   :language: html

   <html>
   <body>

   <p><b>This text is bold</b></p>
   <p><strong>This text is strong</strong></p>
   <p><i>This text is italic</i></p>
   <p><em>This text is emphasized</em></p>
   <p><code>This is computer output</code></p>
   <p>This is<sub> subscript</sub> and <sup>superscript</sup></p>
   <p>This <br /> forces <br /> a <br /> line break </p>
   </body>
   </html>

You can mix and match these styles in all kinds of ways.  Try making a superscript inside a superscript.  Try making the subscript bold or italic.


**Check your Understanding**

.. clickablearea:: blockelem
   :question: Click on the beginning tag for all block elements in the example.
   :iscode:
   :feedback: Block elements start on a new line and take up the full width available.

   &lt;html&gt;
   :click-incorrect:&lt;body&gt;:endclick:

   :click-correct:&lt;h1&gt;:endclick:Welcome to my Page&lt;/h1&gt;
   :click-correct:&lt;p&gt;:endclick:Hello World!   This is :click-incorrect:&lt;b&gt;:endclick:me&lt;/b&gt; :click-incorrect:&lt;img src="me.jpg"&gt;:endclick: &lt;/p&gt;
   :click-correct:&lt;p&gt;:endclick:This is my second paragraph
   :click-incorrect:&lt;a href="home.html"&gt;:endclick:Click here for my homepage&lt;/a&gt;
   :click-incorrect:&lt;/p&gt;:endclick:
   &lt;/body&gt;
   &lt;/html&gt;


.. clickablearea:: inlineelem
   :question: Click on the beginning tag for all inline elements in the example.
   :iscode:
   :feedback: Inline elements do not start on a new line and only take as much width as needed.

    &lt;html&gt;
    &lt;body&gt;
    :click-incorrect:&lt;h1&gt;:endclick:Welcome to my Page&lt;/h1&gt;
    &lt;p&gt;Hello World!  This is :click-correct:&lt;b&gt;:endclick:me&lt;/b&gt; :click-correct:&lt;img src="me.jpg"&gt;:endclick: &lt;/p&gt;

    :click-incorrect:&lt;p&gt;:endclick:This is my second paragraph
    :click-correct:&lt;a href="home.html"&gt;:endclick:Click here for my homepage&lt;/a&gt;
    &lt;/p&gt;
    &lt;/body&gt;
    &lt;/html&gt;


Advanced HTML Tags
---------------------


Unordered Lists
~~~~~~~~~~~~~~~~~~~~~~~

.. activecode:: advhtml_ul
   :language: html

   <ul>
   <li>This is an unordered list</li>
   <li>The <code>li</code> tags come between two <code>ul</code> tags
   </ul>


Ordered Lists
~~~~~~~~~~~~~~~~~~~~~~~

.. activecode:: advhtml_ol
   :language: html

   <ol>
   <li>This is an ordered list</li>
   <li>The <code>li</code> tags come between two <code>ol</code> tags
   <li>Notice that the <code>li</code> tags are used for both.
   </ol>

The ``ol`` tag can also have a type attribute.  The type attribute can be one of the following values

* 1 This will cause the list to be numbered with numbers
* A This will cause the list to be ordered with upper case letters
* a This will cause the list to be ordered with lower case letters
* I This will cause the list to be ordered with upper case roman numerals
* i This will cause the list to be ordered with lower case roman numerals

Try it yourself.


Nesting Lists
~~~~~~~~~~~~~~~~~~~~~~~

Lists can be inside of other lists. Too.  This is very much true of most HTML tags.

.. activecode:: advhtml_nested
   :language: html

   <ol>
   <li>This is an ordered list</li>
   <li>The <code>li</code> tags come between two <code>ol</code> tags
   <li>Notice that the <code>li</code> tags are used for both.
   <ul>
   <li>This is an unordered list</li>
   <li>The <code>li</code> tags come between two <code>ul</code> tags</li>
   </ul>
   <li>You can mix and match lists like this as deeply as you want.</li>
   </ol>


Tables
~~~~~~~~~~~~~~~~~~~~~~~

Tables are used when we need to show information in a traditional grid format. Here is a complete example that illustrates the use of the following table specific tags

* table  -- This is the main tag for a table
* tr  -- every row in a table starts with a tr tag
* td -- every column in a row is delineated by a ``td`` tag
* th -- You can use the ``th`` tag in place of the ``td`` tag in the first row to make headings


.. activecode:: advhtml_table
   :language: html

    <table>
    <caption>Table of Scores</caption>
    <tr>
      <th>Number</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Points</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Russell</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
    <tr>
      <td>2</td>
      <td>John</td>
      <td>Deere</td>
      <td>80</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Nikola</td>
      <td>Tesla</td>
      <td>100</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Richard</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    </table>

There are many attributes you can use with the various table tags.

* ``table``
  * begins the table element

* ``td``
  * colspan  -- if you have a particular table where you need an extra wide column in some rows you can make a cell of your table span more than one column using the colspan attribute.  Its value is the number of columns.

* ``tr``
  * rowspan -- If you have a particular table where you need an column to span multiple rows you can make a cell of your table span more than one row using the rowspan attribute.  Its value is the number of rows.


Experiment with a table.  What kinds of tags can you include inside each ``td``?  Can you make a table inside another table?


Audio
~~~~~~~~~~~~~~~~~~~~~~~

Embedding audio in your webpage allows you to link to various files containing music or speech.  The audio tag looks like the following:

.. code-block:: html

    <audio controls>
        <source src="horse.ogg" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>

The ``controls`` attribute provides start/stop/fast-forward/rewind buttons for the listener.  The ``source`` tags inside the ``audio`` tag allow you to provide several different audio formats.  This is because different browsers support different kinds of audio The browser will go through the list, in order, until it finds a format it understands, or else, it will replace the controller with the message at the end.


Video
~~~~~~~~~~~~~~~~~~~~~~~

Embedding video in your webpage allows you to link to various files containing movies.

.. activecode:: video_demo
   :language: html

    <video height=300 width=400 controls>
        <source src="/_static/run-cycle.mp4" type="video/mp4">
        <source src="/_static/run-cycle.ogg" type="video/ogg">
        Your browser does not support the video element.
    </video>

The ``controls`` attribute provides start/stop/fast-forward/rewind buttons for the listener.  The ``source`` tags inside the ``video`` tag allow you to provide several different video formats.  This is because different browsers support different kinds of video The browser will go through the list, in order, until it finds a format it understands, or else, it will replace the controller with the message at the end.


IFrames
~~~~~~~~~~~~~~~~~~~~~~~

IFrames allow you to embed a webpage within another webpage.  The activecode examples in this book use an iframe to allow you to experiment with the html, by creating a page within a page. If you wanted to embed a YouTube video onto a webpage, you would copy/paste the iframe element from YouTube into your HTML.


.. activecode:: iframe_example
   :language: html

    Open up YouTube, find a video, then copy/paste the iframe embed code here!




Practice Problems
------------------


1. Make a little webpage to tell me a little about yourself.  Use at least three levels of headings and some paragraphs.

.. activecode:: ex_html_1
   :language: html
   :nocodelens:

   <html>

   </html>

2.  You can copy the URL of almost any image in a browser by right clicking on the image and choosing "copy image URL"  or something similar.  Write an html page in the activecode window for this exercise that includes a header element giving a title to some image you find,  then include the image in the page, sized appropriately,  and a paragraph that describes the image.

.. activecode:: ex_html_2
   :language: html
   :nocodelens:

   <html>

   </html>

3.  Make an outline that has capital roman numerals at the highest level of the outline.  and lower case roman numerals for the second level items.  List three new concepts we have covered in this class at the first level, and for each of those list two or three key points.

.. activecode:: ex_html_3
   :language: html
   :nocodelens:

   <html>

   </html>


4. Make a webpage that links to four of your favorite websites.

.. activecode:: ex_html_4
   :language: html
   :nocodelens:

   <html>

   </html>

5. Make a webpage with a link at the bottom that when clicked will jump you all the way to the top of the page.

.. activecode:: ex_html_5
   :language: html
   :nocodelens:

   <html>

   </html>

6. Make a webpage with a link at the top of it that when clicked will jump all the way to the bottom of the page. At the bottom of the page there should be a link to jump back to the top of the page.

.. activecode:: ex_html_6
   :language: html
   :nocodelens:

   <html>

   </html>


7.  Make a webpage with five different images. Each image should have a title.

.. activecode:: ex_html_7
   :language: html
   :nocodelens:

   <html>

   </html>

8.  Make a webpage with an image that when clicked will link to a search engine of your choice

.. activecode:: ex_html_8
   :language: html
   :nocodelens:

   <html>

   </html>