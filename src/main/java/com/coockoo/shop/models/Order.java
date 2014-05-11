package com.coockoo.shop.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Order extends BaseEntity {
	
	@Column(name="district")
	private String district;

	@Column(name="city")
	private String city;
	
	@Column(name="street")
	private String street;

	@Column(name="house")
	private String house;

	@Column(name="apartment")
	private String apartment;
	
	@Column(name="email")
	private String email;
	
	@Column(name="phone")
	private String phone;

	@Column(name="checked")
	private transient Boolean checked;
	
	@Column(name="done")
	private transient Boolean done;
	
	private Set<Product> products = new HashSet<Product>(0);

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "cart", joinColumns = { 
			@JoinColumn (name = "order_id", nullable = false, updatable = false) }, 
			inverseJoinColumns = { @JoinColumn(name = "product_id", 
					nullable = false, updatable = false) })
	public Set<Product> getProducts() {
		return products;
	}

	public void setProducts(Set<Product> products) {
		this.products = products;
	}
	
	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getHouse() {
		return house;
	}

	public void setHouse(String house) {
		this.house = house;
	}

	public String getApartment() {
		return apartment;
	}

	public void setApartment(String apartment) {
		this.apartment = apartment;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Boolean getChecked() {
		return checked;
	}

	public void setChecked(Boolean checked) {
		this.checked = checked;
	}

	public Boolean getDone() {
		return done;
	}

	public void setDone(Boolean done) {
		this.done = done;
	}

}
