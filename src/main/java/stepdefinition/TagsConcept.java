package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TagsConcept {

	@Given("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
		
		System.out.println("first");
	    	}

	@When("^user enters valid inputs$")
	public void user_enters_valid_inputs() throws Throwable {
		System.out.println("second");
	}

	@Then("^it should be successful$")
	public void it_should_be_successful() throws Throwable {
		System.out.println("third");
	}

	@When("^user enters invalid inputs$")
	public void user_enters_invalid_inputs() throws Throwable {
		System.out.println("fourth");
	}

	@Then("^it should be failed$")
	public void it_should_be_failed() throws Throwable {
		System.out.println("five");
	}

	@When("^user checks various tabs$")
	public void user_checks_various_tabs() throws Throwable {
		System.out.println("six");
	}

	@Then("^all should get open the respective pages$")
	public void all_should_get_open_the_respective_pages() throws Throwable {
		System.out.println("seven");
	}

	@When("^user checks various menus$")
	public void user_checks_various_menus() throws Throwable {
		System.out.println("eight");
	    	}

	@Then("^all menus should get open$")
	public void all_menus_should_get_open() throws Throwable {
		System.out.println("nine");
	}

	@When("^user checks various headers$")
	public void user_checks_various_headers() throws Throwable {
		System.out.println("ten");
	}

	@Then("^all headers should get open$")
	public void all_headers_should_get_open() throws Throwable {
		System.out.println("eleven");
	}

	@When("^user checks various footers$")
	public void user_checks_various_footers() throws Throwable {
		System.out.println("twelve");   
	}

	@Then("^all footers should get open$")
	public void all_footers_should_get_open() throws Throwable {
		System.out.println("thirteen");
	}

	@When("^user checks various frames$")
	public void user_checks_various_frames() throws Throwable {
		System.out.println("fourteen");
	}

	@Then("^all frames should be present$")
	public void all_frames_should_be_present() throws Throwable {
		System.out.println("fifteen");
	}

	@When("^user clicks on logout button$")
	public void user_clicks_on_logout_button() throws Throwable {
	    System.out.println("sixteen");
	}

	@Then("^page should get logged out$")
	public void page_should_get_logged_out() throws Throwable {
		System.out.println("seventeen");
	}
	
	@Given("^user has valid url$")
	public void user_has_valid_url() throws Throwable {
	    
		System.out.println("Eighteen");
	}

	@When("^user enters the URL$")
	public void user_enters_the_URL() throws Throwable {
	    
		System.out.println("Ninteen");
	}

	@Then("^home page should get open$")
	public void home_page_should_get_open() throws Throwable {
	    
		System.out.println("Twenty");
	}


}
