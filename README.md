# Project writeup

**Structure, Design and Tools**
I began by wireframing the app out on graph paper, and then translated it into a mockup as follows:

![hgi mockup](https://i.imgur.com/LAHWLZW.png "hgi mockup")

I felt that each event would be best represented as a React component, so I used a React app to build it out. As there were several states that I wanted to keep track of (the event currently being shown in the sidebar, whether the user was logged in, whether the sidebar was open, etc.) I decided to use a class component for the main App component, so that the states were clearer and easier to manage. 

If this schedule were part of a larger application, I would of course have built all of the above in a page component in the "pages" folder instead.

**Roadblocks**


**Points of pride**


**Given additional time, how would you extend your application to become a fully functional product?**

Although in my initial submission I did not fully implement the sidebar components pictured in the mockup, I am working on that now and can easily make it happen, as the sidebar component is already receiving all of the information necessary. (Sorry, I ran out of time today!)

I would definitely like to implement headers for events on different days (i.e. a "January 12th" header for all events on that date), as well as the timeline pictured in the mockup. 

I initially wanted the "location tracker" on the timeline of the mockup to represent the time of day at which the schedule was being viewed, but seeing as the events in the sample data were either on top of each other or spaced very far apart, I feel that a layout similar to my initial draft would work better for a schedule with events spaced fairly consistently over a day or two (like an MLH Local Hack Day perhaps)!
