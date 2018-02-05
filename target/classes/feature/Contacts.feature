Feature: Contacts module
Scenario Outline: Verify add contacts with valid inputs

Given user is on login page
When enter valid "<username>" and "<password>" And click on submit button
Then page navigates to home page
When user clicks on new contact menu
Then add contact form should get open
When user enters details like "<firstname>" "<lastname>" and "<position>" And clicks on save button
Then new contact should get added

Examples:
		| username | password | firstname | lastname | position |
		| gaurava  | test@123 | Nidhi     | Agnihotri | Teacher |
		| gaurava  | test@123 | Doli      | Agnihotri | Hero    |