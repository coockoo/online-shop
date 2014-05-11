package com.coockoo.shop.services;

import java.sql.Timestamp;

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
			System.out.println("Before: " + order.getId());
			java.util.Date date= new java.util.Date();
			Timestamp ts = new Timestamp(date.getTime());
			order.setCreatedAt(ts);
			order.setUpdatedAt(ts);
			orderDAO.save(order);
			System.out.println("After: " + order.getId());
			return this.getOrderById(order.getId());
		} catch (Exception e) {
			return null;
		}
	}

}
