# Improbable Beef - Bellybutton Biodiversity Interactive Dashboard

![logo](images/module12-logo.png)

## Overview

Roza has a partially completed her dashboard that she needs to finish. She has a completed panel for demographic information and now needs to visualize the bacterial data for each volunteer. Specifically, her volunteers should be able to identify the top 10 bacterial species in their belly buttons. That way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, Roza's volunteers will be able to identify whether that species is found in their navel.

I am to help Roza complete her dashboard by presenting the Top 10 bacteria of each of her volunteers in the following ways.
* A *Horozontial Bar Chart* listing the Top 10 Bacteria (OTU Species) found in their Belly Button
* A *Bubble Chart* showing all of the Bacteria cultures found in the samples given by the Volunteer
* A *Gauge Chart* showing the number of weekly scrubbings the volunteer performs on their Belly Button

## Resources
* Data Sources: samples.json
* Software: Visual Basic Studio, JavaScript, Chrome Web Browser, HTML5, CSS, Plotly

## Application Link
<a href="https://jillibus.github.io/BellyButton/">BellyButton Biodiversity Interactive Dashboard</a>

## RESULTS

## Application Startup

The applications startup will initialize with all 3 graphs initialized with the sample Volunteer ID 940.

<img src="static/images/AppStartup.png" width=50% height=50% />

## Interactive Options
                                       
Now the user has an opportunity to search the Volunteers by using the dropdown on the left, and choosing any of the Volunteer ID's.  Once chosen, the charts will all change to represent the new Volunteer's results from the study.  
                                       
<img src="static/images/NewVolunteer.png" width=50% height=50% />

## Hover Feature on Bubble Chart

On the Bubble Chart, the user can use their mouse and hover over any one of the 'bubbles' and the data information will appear.  This will give the user more information on which exact bacteria is represented by the bubble presented.

<img src="static/images/bubble.jpg" width=50% height=50% />

### Summary

This project was a great learning experience and the module work was easy to follow along and progress to get to the end result, with buttons to run the application and clear the filters.  

Once going into the challenge, to remove these buttons and allow the application to dynamically work once a mouse click chose a text field, or a user hit enter, and removed all buttons, was definitely an advanced step for me to see how to eliminiate all of my steps and variables into an object and let it determine what was happening.  But this method did make for a streamlined application, clean code and an application that is very responsive to the users input, immediately upon a keystroke, so that was very cool to see.

A few things I would like to add to this application:
* One would be to put back the "clear button" I had during the module work.  That really helped in resetting my filters when I wanted to change out some values.  I was testing and chose a state, then a city and and then another city - and I ended up with a combination of 2 different cities in my filter.  The last city was of course the one that "won" the fight - but both showed up in my console.log as still in the object.
* The other would be a drop down menu for the text boxes, it was hard to determine what dates, cities, states, countries or shapes were available to you.  So as to not enter something incorrectly, a drop down menu of "unique" values in those columns, would be a preferred way to choose what to search for easier.

Jill Hughes
