package com.stepDefinition;

import org.openqa.selenium.WebDriver;

import com.POManager.PageObjectManager;
import com.baseclass.BaseClass;
import com.testRunner.Test_Runner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends BaseClass {

	public static WebDriver driver = Test_Runner.driver;

	public static PageObjectManager pom = new PageObjectManager(driver);

	@Given("^: user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {

		getUrl("https://adactinhotelapp.com/");

	}

	@When("^: User enter \"([^\"]*)\" in User field$")
	public void user_enter_in_User_field(String username) throws Throwable {
		sendKeystoElement(pom.getHp().getName(), username);
	}

	@When("^: User enter \"([^\"]*)\" in Password field$")
	public void user_enter_in_Password_field(String password) throws Throwable {
		sendKeystoElement(pom.getHp().getPassword(), "12345678");
	}

	@Then("^: User click the login button and navigate to Homepage$")
	public void user_click_the_login_button_and_navigate_to_Homepage() throws Throwable {
		clickOnElement(pom.getHp().getLogin());
	}

	@When("^: User select the \"([^\"]*)\" in location$")
	public void user_select_the_in_location(String location) throws Throwable {
		dropdown("byvalue", pom.getSh().getLocation(), location);
	}

	@When("^: User select the \"([^\"]*)\" in Hotel$")
	public void user_select_the_in_Hotel(String Hotel) throws Throwable {
		dropdown("byvalue", pom.getSh().getHotels(), Hotel);
	}

	@When("^: User select the \"([^\"]*)\" in Roomtype$")
	public void user_select_the_in_Roomtype(String Roomtype) throws Throwable {
		dropdown("byvalue", pom.getSh().getRoom(), Roomtype);

	}

	@When("^: User select the \"([^\"]*)\" in No of Rooms$")
	public void user_select_the_in_No_of_Rooms(String NoofRoom) throws Throwable {
		dropdown("byvalue", pom.getSh().getNumbers(), NoofRoom);
	}

	@When("^: User select the \"([^\"]*)\" in Checkin date$")
	public void user_select_the_in_Checkin_date(String checkindate) throws Throwable {
		clearElement(pom.getSh().getCheckIn());
		sendKeystoElement(pom.getSh().getCheckIn(), checkindate);

	}

	@When("^: User select the \"([^\"]*)\" in Checkout date$")
	public void user_select_the_in_Checkout_date(String checkoutdate) throws Throwable {
		clearElement(pom.getSh().getCheckOut());
		sendKeystoElement(pom.getSh().getCheckOut(), checkoutdate);
	}

	@When("^: User select the \"([^\"]*)\" in Adults per room$")
	public void user_select_the_in_Adults_per_room(String adultperroom) throws Throwable {
		dropdown("byvalue", pom.getSh().getAdult_room(), adultperroom);
	}

	@When("^: User select the \"([^\"]*)\" in Children Per room$")
	public void user_select_the_in_Children_Per_room(String childperroom) throws Throwable {
		dropdown("byvalue", pom.getSh().getChild_room(), childperroom);

	}

	@Then("^: User click on search button and navigate to select hotel$")
	public void user_click_on_search_button_and_navigate_to_select_hotel() throws Throwable {
		clickOnElement(pom.getSh().getSubmit());
	}

	@When("^: User select the hotel$")
	public void user_select_the_hotel() throws Throwable {
		clickOnElement(pom.getSl().getRadio());
	}

	@Then("^: User click on continue Button and navigate to Book a hotel$")
	public void user_click_on_continue_Button_and_navigate_to_Book_a_hotel() throws Throwable {
		clickOnElement(pom.getSl().getSearch());
	}

	@When("^: User enter \"([^\"]*)\" in the Firstname$")
	public void user_enter_in_the_Firstname(String Firstname) throws Throwable {
		sendKeystoElement(pom.getBh().getFname(), Firstname);
	}

	@When("^: User enter \"([^\"]*)\" in the Lastname$")
	public void user_enter_in_the_Lastname(String Lastname) throws Throwable {
		sendKeystoElement(pom.getBh().getLname(), Lastname);

	}

	@When("^: User enter \"([^\"]*)\" in the Billing address$")
	public void user_enter_in_the_Billing_address(String address) throws Throwable {
		sendKeystoElement(pom.getBh().getAddress(), address);
	}

	@When("^: User enter  \"([^\"]*)\" in the Creditcard Number$")
	public void user_enter_in_the_Creditcard_Number(String ccnumbers) throws Throwable {
		sendKeystoElement(pom.getBh().getCc(), ccnumbers);
	}

	@When("^: User select  \"([^\"]*)\" in the Creditcard Type$")
	public void user_select_in_the_Creditcard_Type(String cctypes) throws Throwable {
		dropdown("byvalue", pom.getBh().getCctype(), cctypes);

	}

	@When("^: User select \"([^\"]*)\" in  the expiry month$")
	public void user_select_in_the_expiry_month(String expirymonth) throws Throwable {
		dropdown("byvalue", pom.getBh().getCcmonth(), expirymonth);
	}

	@When("^: User select \"([^\"]*)\" in the expiry year$")
	public void user_select_in_the_expiry_year(String expiryyear) throws Throwable {
		dropdown("byvalue", pom.getBh().getCcyear(), expiryyear);

	}

	@When("^: user enter \"([^\"]*)\" in CVV number$")
	public void user_enter_in_CVV_number(String CVVnumber) throws Throwable {
		sendKeystoElement(pom.getBh().getCvv(), CVVnumber);

	}

	@Then("^: user Click on Booknow Button and Navigate to Booking Confirmation$")
	public void user_Click_on_Booknow_Button_and_Navigate_to_Booking_Confirmation() throws Throwable {
		clickOnElement(pom.getBh().getBook());

		screenshot("cucumber");
	}

}
