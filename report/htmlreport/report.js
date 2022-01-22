$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/featureFile/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking in Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": ": user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": ": User enter \"\u003cusername\u003e\" in User field",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": ": User enter \"\u003cpassword\u003e\" in Password field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": ": User click the login button and navigate to Homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "hotel-booking-in-adactin-application;login;;1"
    },
    {
      "cells": [
        "jancy",
        "12345"
      ],
      "line": 10,
      "id": "hotel-booking-in-adactin-application;login;;2"
    },
    {
      "cells": [
        "sujan",
        "123456"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;login;;3"
    },
    {
      "cells": [
        "sudharsanam",
        "12345678"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Login",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": ": user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": ": User enter \"jancy\" in User field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": ": User enter \"12345\" in Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": ": User click the login button and navigate to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 1808839100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jancy",
      "offset": 14
    }
  ],
  "location": "Step_Definition.user_enter_in_User_field(String)"
});
formatter.result({
  "duration": 110139300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 14
    }
  ],
  "location": "Step_Definition.user_enter_in_Password_field(String)"
});
formatter.result({
  "duration": 77460700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_click_the_login_button_and_navigate_to_Homepage()"
});
formatter.result({
  "duration": 236262200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": ": user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": ": User enter \"sujan\" in User field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": ": User enter \"123456\" in Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": ": User click the login button and navigate to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 204547300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sujan",
      "offset": 14
    }
  ],
  "location": "Step_Definition.user_enter_in_User_field(String)"
});
formatter.result({
  "duration": 69460100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 14
    }
  ],
  "location": "Step_Definition.user_enter_in_Password_field(String)"
});
formatter.result({
  "duration": 85435800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_click_the_login_button_and_navigate_to_Homepage()"
});
formatter.result({
  "duration": 238684900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": ": user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": ": User enter \"sudharsanam\" in User field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": ": User enter \"12345678\" in Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": ": User click the login button and navigate to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 206152800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sudharsanam",
      "offset": 14
    }
  ],
  "location": "Step_Definition.user_enter_in_User_field(String)"
});
formatter.result({
  "duration": 80716900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 14
    }
  ],
  "location": "Step_Definition.user_enter_in_Password_field(String)"
});
formatter.result({
  "duration": 65659300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_click_the_login_button_and_navigate_to_Homepage()"
});
formatter.result({
  "duration": 531114800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": ": User select the \"London\" in location",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": ": User select the \"Hotel Sunshine\" in Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": ": User select the \"Double\" in Roomtype",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": ": User select the \"5\" in No of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": ": User select the \"15/01/2022\" in Checkin date",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": ": User select the \"16/01/2022\" in Checkout date",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": ": User select the \"2\" in Adults per room",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": ": User select the \"1\" in Children Per room",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": ": User click on search button and navigate to select hotel",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 19
    }
  ],
  "location": "Step_Definition.user_select_the_in_location(String)"
});
formatter.result({
  "duration": 130958200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Sunshine",
      "offset": 19
    }
  ],
  "location": "Step_Definition.user_select_the_in_Hotel(String)"
});
formatter.result({
  "duration": 139267800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double",
      "offset": 19
    }
  ],
  "location": "Step_Definition.user_select_the_in_Roomtype(String)"
});
formatter.result({
  "duration": 139111600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 19
    }
  ],
  "location": "Step_Definition.user_select_the_in_No_of_Rooms(String)"
});
formatter.result({
  "duration": 135952900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15/01/2022",
      "offset": 19
    }
  ],
  "location": "Step_Definition.user_select_the_in_Checkin_date(String)"
});
formatter.result({
  "duration": 128981000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16/01/2022",
      "offset": 19
    }
  ],
  "location": "Step_Definition.user_select_the_in_Checkout_date(String)"
});
formatter.result({
  "duration": 130896700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "Step_Definition.user_select_the_in_Adults_per_room(String)"
});
formatter.result({
  "duration": 140553200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "Step_Definition.user_select_the_in_Children_Per_room(String)"
});
formatter.result({
  "duration": 142228100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_click_on_search_button_and_navigate_to_select_hotel()"
});
formatter.result({
  "duration": 382766600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Select Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": ": User select the hotel",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": ": User click on continue Button and navigate to Book a hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_select_the_hotel()"
});
formatter.result({
  "duration": 64313600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_click_on_continue_Button_and_navigate_to_Book_a_hotel()"
});
formatter.result({
  "duration": 527527900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Select Book a Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": ": User enter \"Sudhar\" in the Firstname",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": ": User enter \"Sanam\" in the Lastname",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": ": User enter \"Ashatabujam Road\" in the Billing address",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": ": User enter  \"1212345678901234\" in the Creditcard Number",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": ": User select  \"VISA\" in the Creditcard Type",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": ": User select \"2\" in  the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": ": User select \"2022\" in the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": ": user enter \"123\" in CVV number",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": ": user Click on Booknow Button and Navigate to Booking Confirmation",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sudhar",
      "offset": 14
    }
  ],
  "location": "Step_Definition.user_enter_in_the_Firstname(String)"
});
formatter.result({
  "duration": 89199900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanam",
      "offset": 14
    }
  ],
  "location": "Step_Definition.user_enter_in_the_Lastname(String)"
});
formatter.result({
  "duration": 71668400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ashatabujam Road",
      "offset": 14
    }
  ],
  "location": "Step_Definition.user_enter_in_the_Billing_address(String)"
});
formatter.result({
  "duration": 96064300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1212345678901234",
      "offset": 15
    }
  ],
  "location": "Step_Definition.user_enter_in_the_Creditcard_Number(String)"
});
formatter.result({
  "duration": 100122900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VISA",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_select_in_the_Creditcard_Type(String)"
});
formatter.result({
  "duration": 133175800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "Step_Definition.user_select_in_the_expiry_month(String)"
});
formatter.result({
  "duration": 141739800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 15
    }
  ],
  "location": "Step_Definition.user_select_in_the_expiry_year(String)"
});
formatter.result({
  "duration": 138045400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 14
    }
  ],
  "location": "Step_Definition.user_enter_in_CVV_number(String)"
});
formatter.result({
  "duration": 77486600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_on_Booknow_Button_and_Navigate_to_Booking_Confirmation()"
});
formatter.result({
  "duration": 281204500,
  "status": "passed"
});
});