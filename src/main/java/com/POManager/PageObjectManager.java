package com.POManager;

import org.openqa.selenium.WebDriver;

import com.adacPOM.Book_Hotel;
import com.adacPOM.Home_Page;
import com.adacPOM.Search_Hotel;
import com.adacPOM.Select_Hotel;

public class PageObjectManager {
	public WebDriver driver;
	
	private Home_Page hp;
	private Search_Hotel sh;
	private Select_Hotel sl;
	private Book_Hotel bh;
	
	
	
	public PageObjectManager(WebDriver driver1) {
		this.driver=driver1;
	}
	public Home_Page getHp() {
		hp=new Home_Page(driver);
		return hp;
	}
	public Search_Hotel getSh() {
		sh=new Search_Hotel(driver);
		return sh;
	}
	public Select_Hotel getSl() {
		sl=new Select_Hotel(driver);
		return sl;
	}
	public Book_Hotel getBh() {
		bh=new Book_Hotel(driver);
		return bh;
	}
}
