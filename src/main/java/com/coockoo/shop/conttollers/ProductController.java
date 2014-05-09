package com.coockoo.shop.conttollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.coockoo.shop.models.Product;
import com.coockoo.shop.services.ProductService;

@Controller
@RequestMapping("/products")
public class ProductController {

	@Autowired
	ProductService productService;
	
	@RequestMapping(value = "", method = RequestMethod.GET, produces="application/json")
	public @ResponseBody
	List<Product> getAllProducts () {
		return productService.getAllProducts();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces="application/json")
	public @ResponseBody
	Product getProductById (@PathVariable Long id) {
		return productService.getProductById(id);
	}

	@RequestMapping(value = "", method = RequestMethod.POST, produces="application/json")
	public @ResponseBody
	Product createProduct (@RequestBody Product product) {
		return productService.createOrUpdateProduct(product);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT, produces="application/json")
	public @ResponseBody
	Product updateProduct (@RequestBody Product product) {
		return productService.createOrUpdateProduct(product);
	}
	
	
	
	

}
