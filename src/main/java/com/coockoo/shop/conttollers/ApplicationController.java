package com.coockoo.shop.conttollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.coockoo.shop.models.Product;
import com.coockoo.shop.services.ProductService;


@Controller
@RequestMapping("/test")
public class ApplicationController {
	
	@Autowired
	ProductService productService;

	// /api/test
	@RequestMapping(value = "", method = RequestMethod.GET, produces="application/json")
	public @ResponseBody
	List<Product> getTest () {
		return productService.getAllProducts();
	}

}
