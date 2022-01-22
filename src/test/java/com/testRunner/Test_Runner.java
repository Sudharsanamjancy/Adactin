package com.testRunner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.baseclass.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)  // cucumber along with Junit
@CucumberOptions(features="src\\test\\java\\com\\featureFile\\Adactin.feature",  // feature path

glue = "com.stepDefinition",  // stepde path

plugin = {"html:report/htmlreport"},  // genreate report

monochrome = true,  // to remove special char removed and give normal english

strict = true, // exception will throw if we have error

dryRun = false)


public class Test_Runner {
		
	public static WebDriver driver; // null

	@BeforeClass
	public static void set_Up() {

		
		driver = BaseClass.browsertype("chrome");
		
		
		}
	@AfterClass
	public static void tear_Down() {
		
		driver.close();

	}
	
}
