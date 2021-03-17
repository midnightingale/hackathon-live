## todo:
- fix title overflow -- make it not dependent on vh
- add related events as hyperlinks
- css animation for sidebar
  - transition time
  - left-shift main content
- make day headers
- make login differentiation
  - update events list when logged in
  - pass logged-in info to sidebar


## notes:
- events overlap, so use a 2-column display
- data that won't be displayed: id, permission (public/private)
- use 24-hour clock
- note time zone?? how does that work with unix time
- use login username as time of day to display functionality of "you are here"
  - make sure to check if input time is within bounds of schedule
- should link only work if clicked within bounds of event starting? don't think that's responsiblity of this application, but maybe the link can be greyed out before it starts

## nice to have details:
- "YOU ARE HERE" scrolls out from location tracker icon on hover (desktop)

## questions:
- is there a point in having a break after every case statement in js if each statement returns beforehand for style points
