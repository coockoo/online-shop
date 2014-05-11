package com.coockoo.shop.conttollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.coockoo.shop.models.Order;
import com.coockoo.shop.services.OrderService;

@Controller
@RequestMapping("/orders")
public class OrderController {

	@Autowired
	OrderService orderService;

	@RequestMapping(value = "", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody
	Order createOrder (@RequestBody Order order) {
		Order newOrder = orderService.createOrder(order);
		return newOrder;
	}
	

}
