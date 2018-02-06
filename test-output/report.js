$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/media/gaurav/BA92AE4892AE0949/Selenium/Online_Classes/Learning_Java/Module1/FreeCRMBDD2/src/main/java/feature/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deals",
  "description": "",
  "id": "deals",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Verify add deal with valid inputs",
  "description": "",
  "id": "deals;verify-add-deal-with-valid-inputs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter valid username and password And click on submit button",
  "rows": [
    {
      "cells": [
        "gaurava",
        "test@123"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "page navigates to home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on new deal menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "add deal form should get open",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters details like title amount probability and commission And clicks on save button",
  "rows": [
    {
      "cells": [
        "test deal1",
        "1000",
        "40",
        "20"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "new deal should get added",
  "keyword": "Then "
});
formatter.match({
  "location": "deal.user_is_on_login_page()"
});
formatter.result({
  "duration": 18233154389,
  "status": "passed"
});
formatter.match({
  "location": "deal.enter_valid_username_and_password_And_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 9908866048,
  "status": "passed"
});
formatter.match({
  "location": "deal.page_navigates_to_home_page()"
});
formatter.result({
  "duration": 33341563,
  "status": "passed"
});
formatter.match({
  "location": "deal.user_clicks_on_new_deal_menu()"
});
formatter.result({
  "duration": 4666467971,
  "status": "passed"
});
formatter.match({
  "location": "deal.add_deal_form_should_get_open()"
});
formatter.result({
  "duration": 186931211,
  "status": "passed"
});
formatter.match({
  "location": "deal.user_enters_details_like_title_amount_probability_and_commission_And_clicks_on_save_button(DataTable)"
});
formatter.result({
  "duration": 3278300903,
  "status": "passed"
});
formatter.match({
  "location": "deal.new_deal_should_get_added()"
});
formatter.result({
  "duration": 277968058,
  "status": "passed"
});
});