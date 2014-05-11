package com.coockoo.shop.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.coockoo.shop.dao.OrderDAO;
import com.coockoo.shop.models.Order;

public class OrderService {

	@Autowired
	OrderDAO orderDAO;

	@Transactional
	public Order getOrderById(Long id) {
		return orderDAO.findByPK(Order.class, id);
	}

	@Transactional
	public Order createOrder(Order order) {
		try {
			orderDAO.save(order);
			return this.getOrderById(order.getId());
		} catch (Exception e) {
			return null;
		}
	}

}
