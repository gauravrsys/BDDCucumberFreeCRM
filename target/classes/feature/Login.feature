Feature: Login	
Scenario: Verify login module for valid inputs
Given user is on login page
When enter valid "gaurava" and "test@123" And click on submit button
Then page navigates to homepage 