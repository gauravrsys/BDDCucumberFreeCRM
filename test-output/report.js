$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/media/gaurav/BA92AE4892AE0949/Selenium/Online_Classes/Learning_Java/Module1/FreeCRMBDD2/src/main/java/feature/Contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Contacts module",
  "description": "",
  "id": "contacts-module",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Verify add contacts with valid inputs",
  "description": "",
  "id": "contacts-module;verify-add-contacts-with-valid-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" And click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "page navigates to home page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on new contact menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "add contact form should get open",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters details like \"\u003cfirstname\u003e\" \"\u003clastname\u003e\" and \"\u003cposition\u003e\" And clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "new contact should get added",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "contacts-module;verify-add-contacts-with-valid-inputs;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 13,
      "id": "contacts-module;verify-add-contacts-with-valid-inputs;;1"
    },
    {
      "cells": [
        "gaurava",
        "test@123",
        "Nidhi",
        "Agnihotri",
        "Teacher"
      ],
      "line": 14,
      "id": "contacts-module;verify-add-contacts-with-valid-inputs;;2"
    },
    {
      "cells": [
        "gaurava",
        "test@123",
        "Doli",
        "Agnihotri",
        "Hero"
      ],
      "line": 15,
      "id": "contacts-module;verify-add-contacts-with-valid-inputs;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Verify add contacts with valid inputs",
  "description": "",
  "id": "contacts-module;verify-add-contacts-with-valid-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter valid \"gaurava\" and \"test@123\" And click on submit button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "page navigates to home page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on new contact menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "add contact form should get open",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters details like \"Nidhi\" \"Agnihotri\" and \"Teacher\" And clicks on save button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "new contact should get added",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_login_page()"
});
formatter.result({
  "duration": 10312914468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gaurava",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "Login.enter_valid_username_and_password_And_click_on_submit_button(String,String)"
});
formatter.result({
  "duration": 7360514676,
  "status": "passed"
});
formatter.match({
  "location": "Login.page_navigates_to_home_page()"
});
formatter.result({
  "duration": 14459277,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_new_contact_menu()"
});
formatter.result({
  "duration": 4522973821,
  "status": "passed"
});
formatter.match({
  "location": "Login.add_contact_form_should_get_open()"
});
formatter.result({
  "duration": 164237951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nidhi",
      "offset": 26
    },
    {
      "val": "Agnihotri",
      "offset": 34
    },
    {
      "val": "Teacher",
      "offset": 50
    }
  ],
  "location": "Login.user_enters_details_like_and_And_clicks_on_save_button(String,String,String)"
});
formatter.result({
  "duration": 3203224176,
  "status": "passed"
});
formatter.match({
  "location": "Login.new_contact_should_get_added()"
});
formatter.result({
  "duration": 300518473,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify add contacts with valid inputs",
  "description": "",
  "id": "contacts-module;verify-add-contacts-with-valid-inputs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter valid \"gaurava\" and \"test@123\" And click on submit button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "page navigates to home page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on new contact menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "add contact form should get open",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters details like \"Doli\" \"Agnihotri\" and \"Hero\" And clicks on save button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "new contact should get added",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_login_page()"
});
formatter.result({
  "duration": 4557829155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gaurava",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "Login.enter_valid_username_and_password_And_click_on_submit_button(String,String)"
});
formatter.result({
  "duration": 6930130777,
  "status": "passed"
});
formatter.match({
  "location": "Login.page_navigates_to_home_page()"
});
formatter.result({
  "duration": 17038984,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_new_contact_menu()"
});
formatter.result({
  "duration": 4398906612,
  "status": "passed"
});
formatter.match({
  "location": "Login.add_contact_form_should_get_open()"
});
formatter.result({
  "duration": 796208850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doli",
      "offset": 26
    },
    {
      "val": "Agnihotri",
      "offset": 33
    },
    {
      "val": "Hero",
      "offset": 49
    }
  ],
  "location": "Login.user_enters_details_like_and_And_clicks_on_save_button(String,String,String)"
});
formatter.result({
  "duration": 2396914872,
  "status": "passed"
});
formatter.match({
  "location": "Login.new_contact_should_get_added()"
});
formatter.result({
  "duration": 283206177,
  "status": "passed"
});
});