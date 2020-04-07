Feature: As a user I visit google and search something

    As a user I want to do a search on google

    Scenario: I do a search on google
      Given I open Google
      When I write Coronavirus in the google field and press enter
      And I want to wait for 2000 seconds
      Then Capture all page
      And I scroll to the Next button
      When I create a Json file 
      

