package com.coockoo.shop.dao;

import org.springframework.stereotype.Component;

import com.coockoo.shop.models.Order;

@Component
public class OrderDAO extends GenericDAO<Order> {
	public OrderDAO() {
		super();
	}
}
