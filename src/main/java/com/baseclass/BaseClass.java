package com.baseclass;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.lang.String;
import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class BaseClass {

	public static WebDriver driver;
	public static String value;

	public static WebDriver browsertype(String type) {
		if (type.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir") + "\\Driver\\chromedriver_win32 (1)\\chromedriver.exe");
			 driver = new ChromeDriver();
		}

		else if (type.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver",
					System.getProperty("user.dir") + "\\Chrome\\chromedriver_win32\\geckodriver.exe");
			 driver = new FirefoxDriver();
		} else {
			System.setProperty("webdriver.ie.driver",
					System.getProperty("user.dir") + "\\Chrome\\chromedriver_win32\\IEDriverServer.exe");
			 driver = new InternetExplorerDriver();
		}
		return driver;

	}
	
		public static void clickOnElement(WebElement element) {
		element.click();
	}

		public static void sendKeystoElement(WebElement element, String value) {
		element.sendKeys(value);
	}

		public static void clearElement(WebElement element) {
		element.clear();

	}

		public static void getUrl(String url) {
			driver.get(url);
			driver.manage().window().maximize();
	}
	
		public static void closeCurrenttab() {
		driver.close();
		}
		
		
		public static void closeBrowser() {
		driver.quit();
	}
		
		public static void navigateTo(String url) {
		driver.get(url);
		}
		
		public static void navigateBack() {
		driver.navigate().back();
		}
		
		public static void navigateForward() {
		driver.navigate().forward();
		}
		
		public static void refresh() {
		driver.navigate().refresh();
		}
		
		public static void alertToaccept() {
			driver.switchTo().alert().accept();
		}
		
		public static void alertTodismiss() {
			driver.switchTo().alert().dismiss();
		}
		
		public static void getText() {
			System.out.println(driver.switchTo().alert().getText());
		}
		
		
		public static void sendkeysToalert(String value) {
			driver.switchTo().alert().sendKeys(value);
		}
		
		
		
		public static void mouseClick() {
			Actions a = new Actions(driver);
			a.click().build().perform();	
			
		}
		
			
		public static void rightClick() {
			Actions a = new Actions(driver);
			a.contextClick().build().perform();
		}
		
		public static void doubleClick() {
			Actions a = new Actions(driver);
			a.doubleClick().build().perform();
		}
		
		public static void moveToelement(WebElement target) {
			Actions a = new Actions(driver);
			a.moveToElement(target).build().perform();;
		}
			
		public static void dragAnddrop(WebElement source, WebElement target) {
			Actions a = new Actions(driver);
			a.dragAndDrop(source, target).build().perform();
		}
		
		public static void release() {
			Actions a = new Actions(driver);
			a.release().build().perform();
		}
		
		public static void clickAndhold(WebElement target) {
			Actions a = new Actions(driver);
			a.clickAndHold(target).build().perform();
			}
		
			public static void dropdown(String type, WebElement element, String value) {
				Select s = new Select(element);
				if (type.equalsIgnoreCase("byvalue")) {
					s.selectByValue(value);
				} else if (type.equalsIgnoreCase("byvisibletext")) {
					s.selectByVisibleText(value);
				} else if (type.equalsIgnoreCase("byindex")) {
					int data = Integer.parseInt(value);
					s.selectByIndex(data);
				}}
			public static void screenshot(String name) throws IOException {
				TakesScreenshot ts = (TakesScreenshot) driver;
				File source = ts.getScreenshotAs(OutputType.FILE);
				File destination = new File("E:\\User\\CucumberAdactin\\Screenshot\\" + name+".png");
				FileUtils.copyFile(source, destination);
			}
		public static String DataDriven(String path,int sheet,int index_row,int index_cell) throws IOException {
			File f=new File(path);
			FileInputStream fis=new FileInputStream(f);
			Workbook wb=new XSSFWorkbook(fis);
			Sheet sheetAt = wb.getSheetAt(sheet);
			Row row = sheetAt.getRow(index_row);
			Cell cell = row.getCell(index_cell);
			CellType cellType = cell.getCellType();
			if (cellType.equals(CellType.STRING)) {
				 value = cell.getStringCellValue();
			} else if (cellType.equals(CellType.NUMERIC)) {
				double numericCellValue = cell.getNumericCellValue();
				int val = (int) numericCellValue;
				value =String.valueOf(val);
			}
			return value;
			}
			
			
			
			
		}
		

		
		
		
		
		
		
		
		
	


















