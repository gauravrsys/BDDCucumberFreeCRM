@FunctionalTest
Feature: Home page module

@FirstCase
Scenario: Verify home page for valid inputs
Given user is on home page
When user enters valid inputs
Then it should be successful

@SecondCase
Scenario: Verify home page for invalid inputs
Given user is on home page
When user enters invalid inputs
Then it should be failed

@ThirdCase
Scenario: Verify home page for various tabs
Given user is on home page
When user checks various tabs
Then all should get open the respective pages

@FourthCase
Scenario: Verify home page for various menus
Given user is on home page
When user checks various menus
Then all menus should get open 


Scenario: Verify home page for various headers
Given user is on home page
When user checks various headers
Then all headers should get open 


Scenario: Verify home page for various footers
Given user is on home page
When user checks various footers
Then all footers should get open 


Scenario: Verify home page for various frames
Given user is on home page
When user checks various frames
Then all frames should be present


Scenario: Verify logout from home page
Given user is on home page
When user clicks on logout button
Then page should get logged out


Scenario: Verify home page opening
Given user has valid url
When user enters the URL 
Then home page should get open




