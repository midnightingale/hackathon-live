# A Hackathon Global Inc.™ Events Calendar

### Notes
The login username is `htn`, and the password is `2021`. I made all additional assets from scratch in Adobe Illustrator.

### Structure, Design and Tools
I began by wireframing the app out on graph paper, and then translated it into a mockup as follows:

![hgi mockup](https://i.imgur.com/LAHWLZW.png "hgi mockup")

I felt that each event would be best represented as a React component, so I used a React app to build it out. As there were several states that I wanted to keep track of (the event currently being shown in the sidebar, whether the user was logged in, whether the sidebar was open, etc.), I decided to use a class component for the main App component, so that the states were clearer and easier to manage. With that being said, in hindsight it may have been cleaner to use React hooks with functional components entirely, as I could then rerender specific parts of the app as needed.

### Roadblocks
Figuring out how to call various state-updating functions from child components was a big challenge for me, and navigating React's syntactic quirks to get there definitely took the longest time of all.

### Parts I like
I was quite proud of the degree to which I could follow my initial plan with the mockup, as well as all the new skills I learned from React and debugging with it!

### Given additional time, how would you extend your application to become a fully functional product?

I would like to add a custom scrollbar to the sidebar to avoid the stacked-scrollbar look, and I'd also like to create a far better login experience. There are many accessibility features that I ran out of time to implement, such as keyboard accessibility and intuitive tab-ordering.

Given more time, I would've reimplemented the events container as a separate component for tidiness, which could've helped with the rerendering frequency. If this schedule were part of a larger application, I would also definitely have built all of the above in a page component in the "pages" folder instead.

I would definitely like to implement headers for events on different days (i.e. a "January 12th" header for all events on that date), as well as the timeline pictured in the mockup. 

I initially wanted the "location tracker" on the timeline of the mockup to represent the time of day at which the schedule was being viewed, but seeing as the events in the sample data were either on top of each other or spaced very far apart, I feel that a layout similar to my initial draft would work better for a schedule with events spaced fairly consistently over a day or two (like an MLH Local Hack Day perhaps)!

Last of all, I would like to improve the reusability and portability of my components and code, as I had to sacrifice a bit of clarity for a working product in a short amount of time. If you have any feedback, please let me know :) 

