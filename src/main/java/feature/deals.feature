Feature: Deals
Scenario: Verify add deal with valid inputs

Given user is on login page
When enter valid username and password And click on submit button
| gaurava | test@123 |
Then page navigates to home page
When user clicks on new deal menu
Then add deal form should get open
When user enters details like title amount probability and commission And clicks on save button
| test deal1 | 1000 | 40 | 20 |
Then new deal should get added