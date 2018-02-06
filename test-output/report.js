$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/media/gaurav/BA92AE4892AE0949/Selenium/Online_Classes/Learning_Java/Module1/FreeCRMBDD2/src/main/java/feature/Tasks.feature");
formatter.feature({
  "line": 1,
  "name": "Tasks",
  "description": "",
  "id": "tasks",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Verify add task with valid inputs",
  "description": "",
  "id": "tasks;verify-add-task-with-valid-inputs",
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
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "gaurava",
        "test@123"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "page navigates to home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on new task menu",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "add task form should get open",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters details like title completion and selects status And clicks on save button",
  "rows": [
    {
      "cells": [
        "title",
        "completion",
        "status"
      ],
      "line": 13
    },
    {
      "cells": [
        "test task1",
        "70",
        "Open"
      ],
      "line": 14
    },
    {
      "cells": [
        "test task2",
        "100",
        "Complete"
      ],
      "line": 15
    },
    {
      "cells": [
        "test task3",
        "50",
        "Open"
      ],
      "line": 16
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "new task should get added",
  "keyword": "Then "
});
formatter.match({
  "location": "Tasks.user_is_on_login_page()"
});
formatter.result({
  "duration": 16247169876,
  "status": "passed"
});
formatter.match({
  "location": "Tasks.enter_valid_username_and_password_And_click_on_submit_button(DataTable)"
});
formatter.result({
  "duration": 6986318682,
  "status": "passed"
});
formatter.match({
  "location": "Tasks.page_navigates_to_home_page()"
});
formatter.result({
  "duration": 16367542,
  "status": "passed"
});
formatter.match({
  "location": "Tasks.user_clicks_on_new_task_menu()"
});
formatter.result({
  "duration": 3912371417,
  "status": "passed"
});
formatter.match({
  "location": "Tasks.add_task_form_should_get_open()"
});
formatter.result({
  "duration": 139625300,
  "status": "passed"
});
formatter.match({
  "location": "Tasks.user_enters_details_like_title_completion_and_selects_status_And_clicks_on_save_button(DataTable)"
});
formatter.result({
  "duration": 19435369043,
  "status": "passed"
});
formatter.match({
  "location": "Tasks.new_task_should_get_added()"
});
formatter.result({
  "duration": 1561448379,
  "status": "passed"
});
});