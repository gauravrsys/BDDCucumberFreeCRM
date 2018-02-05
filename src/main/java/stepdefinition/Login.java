package stepdefinition;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	
	WebDriver driver;
	
	@Given("^user is on login page$")
	public void user_is_on_login_page() {
	    
		System.setProperty("webdriver.chrome.driver", "/home/gaurav/Downloads/chromedriver");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.freecrm.com/index.html");
	}

	@When("^enter valid \"(.*)\" and \"(.*)\" And click on submit button$")
	public void enter_valid_username_and_password_And_click_on_submit_button(String username, String password) {
	    
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		
		WebElement sbmt_button= driver.findElement(By.xpath("//input[@type='submit']"));
		
		JavascriptExecutor js= (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click()", sbmt_button);
	}

	@Then("^page navigates to home page$")
	public void page_navigates_to_home_page() {
		String hptitle= driver.getTitle();
		Assert.assertEquals("CRMPRO", hptitle);
		System.out.println("First test case has been passed");
	}

	@When("^user clicks on new contact menu$")
	public void user_clicks_on_new_contact_menu() throws Exception {
		
		driver.switchTo().frame("mainpanel");
	    WebElement contacts= driver.findElement(By.xpath("//a[text()='Contacts']"));
	    
	    Actions a = new Actions(driver);
	    a.moveToElement(contacts).build().perform();
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//a[text()='New Contact']")).click();
	    driver.switchTo().defaultContent();
	}
	
	@Then("^add contact form should get open$")
	public void add_contact_form_should_get_open() {
	    
		driver.switchTo().frame("mainpanel");
		WebElement load= driver.findElement(By.xpath("//input[@value='Load From Company']"));
		Assert.assertTrue(load.isDisplayed());
		System.out.println("Contact form gets open");
		driver.switchTo().defaultContent();
		
	}
	
	@When("^user enters details like \"(.*)\" \"(.*)\" and \"(.*)\" And clicks on save button$")
	public void user_enters_details_like_and_And_clicks_on_save_button(String firstname, String lastname, String position) {
	    
		driver.switchTo().frame("mainpanel");
		driver.findElement(By.id("first_name")).sendKeys(firstname);
		driver.findElement(By.id("surname")).sendKeys(lastname);
		driver.findElement(By.id("company_position")).sendKeys(position);
		driver.findElement(By.xpath("//input[@value='Load From Company']/following-sibling::input[position()=1]")).click();
	}
	
	@Then("^new contact should get added$")
	public void new_contact_should_get_added() {
	    System.out.println("New Contact has been added");
	    driver.quit();
	}

}
