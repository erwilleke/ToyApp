AppTemplate for Rally SDK
=========================

## Overview

This application is Eric's initial journey from "I haven't touch Rally's SDK" 
to "I have a functioning, somewhat useful application".

## Usage
If you review the committ history you'll see my exploration of a number of key
features of the Rally SDK. As such, I believe this serves as a fairly useful
tutorial of the different things a person should learn coming into developing
apps against the Rally SDK. The only two steps that aren't clear in the history
are the very first two. For the first commit, I created an empty repository
and copied the content from the empty [template application](https://github.com/RallyApps/AppTemplate)
into the new, empty repository and then committed it. For the second one, I 
ran Rake new["EricToyApp"] and committed it. After that, everything progresses
per the comments, and the extended comments may have conversational notes around
the challenges I encountered and web resources I found useful.

## Environment
The entirety of the explorations took place in one two environments.
1) Windows 7, Notepad++, Chrome w/ Developer tools, Ruby, GitHub for Windows
2) [Cloud 9 IDE](https://c9.io/) connected to GitHub, in Chrome, using "Preview" to see progress
In both cases, I had my Rally account open in a different Chrome tab and authenticated to my main account.
The app development when looking at App-debug.html picks up the project scoping from there.

## Background context on my own perspective
I started this from a context of having a lot of experience as a 
developer and architect in a variety of languages and deep experience with the 
Rally product, but no specific experience with ExtJS, limited JavaScript 
experience (I last used JQuery-based code about 5 years ago to shim 
Silverlight), and extremely limited use of the RallyAPI.

