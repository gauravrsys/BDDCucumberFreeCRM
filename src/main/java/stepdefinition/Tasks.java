package stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Tasks {

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
		
		List<Map<String,String>>credentials = table1.asMaps(String.class, String.class);
		
		
		for(Map<String, String>credential: credentials){
		driver.findElement(By.name("username")).sendKeys(credential.get("username"));
		driver.findElement(By.name("password")).sendKeys(credential.get("password"));
		}
		
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

	@When("^user clicks on new task menu$")
	public void user_clicks_on_new_task_menu() throws InterruptedException {
		driver.switchTo().frame("mainpanel");
	    WebElement tasks= driver.findElement(By.xpath("//a[text()='Tasks']"));
	    
	    Actions a = new Actions(driver);
	    a.moveToElement(tasks).build().perform();
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//a[text()='New Task']")).click();
	    driver.switchTo().defaultContent();
	}

	@Then("^add task form should get open$")
	public void add_task_form_should_get_open() {
		
		driver.switchTo().frame("mainpanel");
		WebElement taskno= driver.findElement(By.xpath("//*[text()='Task No.']"));
		Assert.assertTrue(taskno.isDisplayed());
		System.out.println("Task form gets open");
		driver.switchTo().defaultContent();
	}

	@When("^user enters details like title completion and selects status And clicks on save button$")
	public void user_enters_details_like_title_completion_and_selects_status_And_clicks_on_save_button(DataTable table2) throws InterruptedException {
	    
		List<Map<String,String>>taskDatas= table2.asMaps(String.class, String.class);
		
		for(Map<String,String>taskData : taskDatas){
			
		
		driver.switchTo().frame("mainpanel");
		Select s= new Select(driver.findElement(By.name("status")));
		driver.findElement(By.id("title")).sendKeys(taskData.get("title"));
		driver.findElement(By.id("completion")).sendKeys(taskData.get("completion"));
		
		s.selectByVisibleText(taskData.get("status"));
		
		driver.findElement(By.xpath("//input[@value='Save']")).click();
		
		//driver.switchTo().frame("mainpanel");
	    WebElement tasks= driver.findElement(By.xpath("//a[text()='Tasks']"));
	    
	    Actions a = new Actions(driver);
	    a.moveToElement(tasks).build().perform();
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//a[text()='New Task']")).click();
	    driver.switchTo().defaultContent();
		}

	}

	@Then("^new task should get added$")
	public void new_task_should_get_added() {
		
		System.out.println("New task has been added");
	    driver.quit();
	}

}

