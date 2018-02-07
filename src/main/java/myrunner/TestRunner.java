package myrunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


		@RunWith(Cucumber.class)
		@CucumberOptions(
				dryRun= false,
				features= "/media/gaurav/BA92AE4892AE0949/Selenium/Online_Classes/Learning_Java/Module1/FreeCRMBDD2/src/main/java/feature/TaggedHook.feature",
				glue= {"stepdefinition"},
				monochrome= true,
				format= {"pretty", "html:test-output"},
				strict= true
				
				
				
				)
		
		public class TestRunner {
	}


