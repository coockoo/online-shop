package com.coockoo.shop.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.coockoo.shop.dao.ProductDAO;
import com.coockoo.shop.models.Product;

public class ProductService {

	@Autowired
	ProductDAO productDAO;
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List<Product> getAllProducts() {
		return productDAO.findAll(Product.class);
	}

	@Transactional
	public Product getProductById(Long id) {
		return productDAO.findByPK(Product.class, id);
	}
	
	@Transactional
	public Product createOrUpdateProduct(Product product) {
		productDAO.save(product);
		return this.getProductById(product.getId());
	}

}
