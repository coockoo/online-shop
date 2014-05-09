package com.coockoo.shop.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User extends BaseEntity {

	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;

}
