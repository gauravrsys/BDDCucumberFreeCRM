Feature: Tasks
Scenario: Verify add task with valid inputs

Given user is on login page
When enter valid username and password And click on submit button
| username | password |
| gaurava | test@123 |

Then page navigates to home page
When user clicks on new task menu
Then add task form should get open
When user enters details like title completion and selects status And clicks on save button
| title | completion | status |
| test task1 | 70 | Open |
| test task2 | 100 | Complete |
| test task3 | 50 | Open |
Then new task should get added