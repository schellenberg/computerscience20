
.. qnum::
   :prefix: string-operators-1
   :start: 1


The World Wide Web 
===================

.. topic:: Quick Overview of Day

    Learn about how the web works.


.. reveal:: curriculum_addressed
    :showtitle: Curriculum Objectives Addressed In This Section

    - **CS20-CS1** Explore the underlying technology of computing devices and the Internet, and their impacts on society.


Introduction
-------------

You are reading this introduction, probably in a browser of some kind. Maybe on your tablet, maybe on your smartphone, or maybe on a regular old desktop computer.  The key question we want to answer in this chapter is how does this page get to your screen?  It turns out there is an awful lot of computer science involved.  We won't go very deep, this is only the first chapter, in a book that is meant to be introductory in nature after all.


For now we'll start out with a very high level overview and move down a little deeper later in the chapter.   The page you are seeing is the result of a **web browser** communicating with a **web server**.  A number of important things happen during the comversation.

* The browser and the server "talk" to each other using a relatively simple **protocol** called **HTTP**, which stands for the Hyper Text Transfer Protocol.
* If we break down HTTP into its two components we get a little more detail:

  * Hyper Text - The idea of hyper text is that it links you from one page to another (we used to call the links (hyperlinks) but that has been shortened to just links.  However, the concept of Hyper Text is central to this course in that the specific text that is transferred follows a standard called the **Hyper Text Markup Language** (HTML).

  * Transfer Protocol - when two programs want to talk to each other both programs have to "speak the same language."  A protocol is a very specific description of a series of messages that two programs use to communicate.

* The web server sends the HTML to the browser over the internet and the browser **renders** the HTML into the nicely formatted page that you see on your screen.

At the beginning of the World Wide Web there was only HTML, and web pages were a bit drab compared to what we are used to seeing today.  Now modern web pages rely on three technologies, which will be the main focus of this book.

* HTML -- Hyper Text Markup Language -- HTML describes the content of the page, giving the page some sctructure including common things like headings, and sections, and lists of things.
* CSS -- Cascading Style Sheets -- CSS desribes the "look" of the page, the colors, the fonts, the margins, etc.
* Javascript is used to change the behavior of the page.  What happens when  you click on a button, or scroll a scrollbar, or hover over something with your mouse.



History
--------

Tim Berners-Lee invented the World Wide Web in 1989, about 20 years after the first connection was established over what is today known as the Internet. At the time, Tim was a software engineer at CERN, the large particle physics laboratory near Geneva, Switzerland. Many scientists participated in experiments at CERN for extended periods of time, then returned to their laboratories around the world. These scientists were eager to exchange data and results, but had difficulties doing so. Tim understood this need, and understood the unrealized potential of millions of computers connected together through the Internet.

.. figure:: images/Tim-CERN-Britannica.png

   Tim Berners-Lee

Tim documented what was to become the World Wide Web with the submission of a proposal to his management at CERN, in late 1989 (see the proposal.), This proposal specified a set of technologies that would make the Internet truly accessible and useful to people. Believe it or not, Tim’s initial proposal was not immediately accepted. However, Tim persevered. By October of 1990, he had specified the three fundamental technologies that remain the foundation of today’s Web (and which you may have seen appear on parts of your Web browser):

* HTML: HyperText Markup Language. The publishing format for the Web, including the ability to format documents and link to other documents and resources.

* URI: Uniform Resource Identifier. A kind of “address” that is unique to each resource on the Web.

* HTTP: Hypertext Transfer Protocol. Allows for the retrieval of linked resources from across the Web.

Tim also wrote the first Web page editor/browser (“WorldWideWeb”) and the first Web server (“httpd“). By the end of 1990, the first Web page was served. By 1991, people outside of CERN joined the new Web community. Very important to the growth of the Web, CERN announced in April 1993 that the World Wide Web technology would be available for anyone to use on a royalty-free basis.

Since that time, the Web has changed the world. It has arguably become the most powerful communication medium the world has ever known. Whereas only 25% of the people on the planet are currently using the Web (and the Web Foundation aims to accelerate this growth substantially), the Web has changed the way we teach and learn, buy and sell, inform and are informed, agree and disagree, share and collaborate, meet and love, and tackle problems ranging from putting food on our tables to curing cancer.

Tim Berners-Lee and others realized that for the Web to reach its full potential, the underlying technologies must become global standards, implemented in the same way around the world. Therefore, in 1994, Tim founded the `World Wide Web Consortium (W3C) <http://w3c.org>`_ as a place for stakeholders to reach consensus around the specification and guidelines to ensure that the Web works for everyone and that it evolves in a responsible manner. W3C standards have enabled a single World Wide Web of information and people, and an increasingly-rich set of capabilities: Web 2.0 (personal and dynamic), Web 3.0 (a semantic Web of linked data), Web services, voice access, mobile access, accessibility for people with disabilities and for people speaking many languages, richer graphics and video, etc. The Web Foundation supports the work of W3C to ensure that the Web and the technologies that underpin it remain free and open to all.

With over 1 trillion public pages (in 2008) and 1.7 billion people on the Web (in 2009), we do not really understand how these pieces work together and how to best improve the Web into the future. In 2005, Tim and colleagues started the Web Science Trust (WST). WST is building an international, multidisciplinary research community to examine the World Wide Web as “humanity connected by technology”. WST brings together computer scientists, sociologists, mathematicians, policy experts, entrepreneurs, decision makers and many others from around the world to better understand today’s Web and to develop solutions to guide the use and design of tomorrow’s Web. The Web Foundation believes the discipline of Web Science is critically important to advancing the Web, and supports WST‘s efforts to build and coordinate this new field of study.

Most of the history of the Web is ahead of us. The Web is far from reaching its full potential as an agent of empowerment for everyone in the world. Web access through the world’s 4+ billion mobile phones is an incredible opportunity. New Web technologies will enable billions of people currently excluded from the Web community to join it. We must understand the Web and improve its capabilities. We must ensure that Web technologies are free and open for all to leverage. The work of the Web Foundation aims to have a substantial, positive impact on all of these factors, and on the future history of the Web.

References

* `A Little History of the World Wide Web <http://www.w3.org/History.html>`_
* `W3C’s 10th Anniversary <http://www.w3.org/2004/09/W3C10.html>`_ (`timeline <http://www.w3.org/2005/01/timelines/timeline-2500x998.png>`_)
* `“Weaving the Web” by Tim Berners-Lee <http://www.w3.org/People/Berners-Lee/Weaving/Overview.html>`_


.. admonition:: World Wide Web Foundation

   The source for this history section is used under a Creative Commons 4.0 license.  Attribution is given to the world wide web foundation:  https://webfoundation.org/about/vision/history-of-the-web/


The Technology of the Web
---------------------------

We now return to the question of how a page gets from the server to your browser.   Lets use the idea of a URI as our starting point for this section.  In fact lets start by addressing a very common point of confusion  What is a URI and what is URL, you probably more commonly think of URL's.

* URL - Uniform Resource Locator
* URI - Uniform Resource Identifier

All locators are also identifiers, so all URLs are URI's. Think about it this way, Bradley Miller is an identifier, it identifies me, but does not tell you how to locate me or how to contact me. 321 Olin Hall, Luther College, Decorah IA, is a locator and an identifier for a specific place in the world.  On the web URL's have three main pieces, lets look at one and identify the parts:

::

    http://interactivepython.org/runestone/static/webfundamentals/index.html

This is a common URL with three parts:

* ``http``  This part identifies the protocol that will be used for communication.  It seems a bit redundant when we are always thinking about the web, but in fact there are severl common protocols that are used in URL's including ``https`` for secure http communication, ``mailto`` to indicate that we are going to use a mail protocol, ``ftp`` the file transfer protocol.

* ``interactivepython.org`` This is the name of a host on the web.  Host names must be unique, there is only one interactivepython.org on the entire internet.  If you dig more deeply you can find out that this name translates to a numeric address.  If you have ever tried to configure your home router, or looked at the settings on your computer or phone you have undoubtedly come across these numeric addresses before.  In the case of interactivepython.org the numeric address is 108.168.242.153.  This numerica address is also unique in all of the internet, and  identifies a specific server running in a server room in Dallas TX.

* ``runestone/static/webfundamentals/index.html`` identifies a particular file on the server.  The server has a runestone folder, and inside that folder is another folder called static, which contains another folder called webfundamentals which finally contains a file called index.html.  This is no different than how you probably organize your own files on your own computer.

This URL contains **a lot** of information.  When you type this into the address bar of your browser you have given your browser enough information to get the specific page you wanted.  A diagram will help with the next part of this discussion.

.. image:: images/SimpleRequest.png

Lets suppose we continue with the URL above.  You, the user, type in the URL to your browser, The browser knows that the host name is the part that comes after the first two slashes, but before the next slash.  So it is able to extract that part of the URL.  Using patterns like this occurs frequently in Computer Science.  The name is then passed on to another server called the Domain Name Service (DNS) in the diagram above.  The DNS is actually very large and complex network of servers, but we'll just take it for granted that it works and gives us back the IP address correctly.  With the address in hand, the browser establishes a connection to the server through a mechansim known as a **socket**.  This socket allows the browser and the server to reliably communicate over the internet.

An HTTP Request
~~~~~~~~~~~~~~~~

With the connection established the browser sends the following message::

     GET runestone/static/webfundamentals/index.html HTTP/1.1
     Host: myname.luther.edu
     User-Agent: Mozilla/6.0
     Accept-Language: en
     _

The format of this message is defined by HTTP.  Remember a protocol is a well defined set of rules for how one program communicates with another.  Let us break down this message into its component parts.

* ``GET``  -- HTTP defines several commands, but the most common are GET and POST.  As you might imagine, GET is a request to retrieve some resource from the server.
* ``runestone/static/webfundamentals/index.html``  This is the URI for the resource that we want to get.  Recall that this will correspond to a file on the disk drive of the server.
* ``HTTP/1.1`` tells the server that the browser is "speaking" the 1.1 version of the HTTP protocol.

This is all of the information that can be contained on the first line of the message.  If there is anything else on the line it may confuse the server, or the server may just ignore it.  This line is called the **request line**.

What follows the request line are a series of lines called the **headers**  There may be just one header or there may be many.  However, there can only be one header per line and they all follow the pattern of ``name : value``.  So the first line the name is ``host`` and the value is ``myname.luther.edu`` this lets the server know the name of the namchine that is contacting it.  The ``User-Agent`` header tells the server that the user is running version 6.0 of the mozilla browser.

Finally the last line is blank.  The server knows that there are no more headers when it gets a blank line.

An HTTP Response
~~~~~~~~~~~~~~~~~

The server extracts the URI from the request line and goes out to its disk to locate the file.  Assuming the file is there it will make the following response through the socket back to the browser::

    HTTP/1.1 200 OK
    Date: Tues, 2 Sept 2014 15:39:21
    Server: Apache/1.4.1
    Content-Type: text/html

    <html>
    <head>
    </head>
    <body>
    <h1>Hello World</h1>
    </body>
    </html>


Just like the request, the format of the response is spelled out by the HTTP.  The first line again has three parts ``HTTP/1.1`` tells the browser that the server is following the HTTP 1.1 protocol.  the ``200`` is the response code that tells the browser that everything is fine and the OK is a descriptive message:  Some other common response lines are:

* HTTP/1.1 404 Not Found   -- you may have seen a 404 if you've every mistyped a URL
* HTTP/1.1 500 Internal Server Error  -- The server itself has crashed for some reason
* HTTP/1.1 302 Resource Moved

Following the response line are the headers from the server.  Most of these are self explanator, but the ``Content-Type`` header is particularly important.  This tells the browser that what follows is going to be some HTML.  Another common ``Content-type`` is ``image/jpg`` this tells the browser that what comes next is going to be an image.  Note that each image in a page will require its own request / response from the browser to the server.

Finally, notice the blank line followed by the contents of the web page itself expressed in HTML, which is the subject of the next chapter.