package com.coockoo.shop.dao;

import org.springframework.stereotype.Component;

import com.coockoo.shop.models.Product;

@Component
public class ProductDAO extends GenericDAO<Product> {
	public ProductDAO () {
		super();
	}
}
