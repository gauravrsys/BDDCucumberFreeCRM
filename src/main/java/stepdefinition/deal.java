package stepdefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class deal {
	
	WebDriver driver;

	@Given("^user is on login page$")
	public void user_is_on_login_page() {
	    
		System.setProperty("webdriver.chrome.driver", "/home/gaurav/Downloads/chromedriver");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.freecrm.com/index.html");
	}

	@When("^enter valid username and password And click on submit button$")
	public void enter_valid_username_and_password_And_click_on_submit_button(DataTable table1)  {
		
		List<List<String>>credentials= table1.raw();
		
		driver.findElement(By.name("username")).sendKeys(credentials.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(credentials.get(0).get(1));
		
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

	@When("^user clicks on new deal menu$")
	public void user_clicks_on_new_deal_menu() throws InterruptedException {
		driver.switchTo().frame("mainpanel");
	    WebElement deals= driver.findElement(By.xpath("//a[text()='Deals']"));
	    
	    Actions a = new Actions(driver);
	    a.moveToElement(deals).build().perform();
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//a[text()='New Deal']")).click();
	    driver.switchTo().defaultContent();
	}

	@Then("^add deal form should get open$")
	public void add_deal_form_should_get_open() {
		
		driver.switchTo().frame("mainpanel");
		WebElement dealno= driver.findElement(By.xpath("//*[text()='Deal No.']"));
		Assert.assertTrue(dealno.isDisplayed());
		System.out.println("Deal form gets open");
		driver.switchTo().defaultContent();
	}

	@When("^user enters details like title amount probability and commission And clicks on save button$")
	public void user_enters_details_like_title_amount_probability_and_commission_And_clicks_on_save_button(DataTable table2) {
	    
		List<List<String>>dealData= table2.raw();
		driver.switchTo().frame("mainpanel");
		driver.findElement(By.id("title")).sendKeys(dealData.get(0).get(0));
		driver.findElement(By.id("amount")).sendKeys(dealData.get(0).get(1));
		driver.findElement(By.id("probability")).sendKeys(dealData.get(0).get(2));
		driver.findElement(By.id("commission")).sendKeys(dealData.get(0).get(3));

		driver.findElement(By.xpath("//input[@value='Save and Create Another']/preceding-sibling::input[position()=1]")).click();

	}

	@Then("^new deal should get added$")
	public void new_deal_should_get_added() {
		
		System.out.println("New deal has been added");
	    driver.quit();
	}


}
