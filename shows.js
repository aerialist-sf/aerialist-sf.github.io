/* 
 * This file contains the raw data describing the shows. It is in JSONP format;
 * each entry should have (any number of) the following items, using this EXACT
 * punctuation (quotes, commas, colons, braces):


  {"date":"",
   "title":"",
   "content":"",
   "website":{
     "link":"",
     "text":""},
   "img":""},

 * every GROUP (eg everything inside of the curly braces) should have a comma after
 * the second brace except the last one.
 *
 * One more thing -- double quotes (") INSIDE of a quoted string should be escaped
 * like \" (put a backslash in front of it).
 */



loadShows([

 {"title":"The Soiled Dove",
  "content":"Tickets available <a href=\"http://tickets.glittertix.com/events/series/THE+SOILED+DOVE\">HERE</a>",
  "date":"12/4/2014",
  "website":{
    "link":"https://www.facebook.com/events/1465742593679251/",
    "text":"SoiledDove/Facebook"},
  "img":"http://2.bp.blogspot.com/-poV0dNEqRWI/VB36wTfzG7I/AAAAAAAAACE/JMZJLTkakEc/s1600/Screen%2BShot%2B2014-09-20%2Bat%2B3.07.02%2BPM.png"},
 {"date":"10/11/2014",
  "title":"Yerba Buena Artwalk Night",
  "content":"Free public event in downtown San Francisco",
  "website":{
    "link":"https://www.facebook.com/pages/Yerba-Buena-Night/228657957180488",
    "text":"Yerba Buena Night"},
  "img":"http://4.bp.blogspot.com/-jmyL3a292ls/VB35OP-M_OI/AAAAAAAAAB4/iV2oeeHaecA/s1600/Screen%2BShot%2B2014-09-20%2Bat%2B3.00.25%2BPM.png"
 }


]);
