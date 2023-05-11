Feature: Api register user
    In order to know the form register
    Write email and password
    I want create a new user

    Scenario: validate register not exist
        Given I send a POST request to "/register" with body:
        """
          {
              "email": "mail@mail.com",
              "password": "12345"
          }
        """
        When the response status code should be 201
        Then the response should be empty