package com.coockoo.shop.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import java.io.Serializable;
import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class GenericDAO<T> {

	@Autowired
	@Resource
	protected SessionFactory sessionFactory;

	public GenericDAO() {

	}
	protected Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	public void save(T entity) {
	    Session hibernateSession = this.getSession();
	    hibernateSession.saveOrUpdate(entity);
	}

	public void merge(T entity) {
	    Session hibernateSession = this.getSession();
	    hibernateSession.merge(entity);
	}

	public void delete(T entity) {
	    Session hibernateSession = this.getSession();
	    hibernateSession.delete(entity);
	}

	@SuppressWarnings("unchecked")
	public List<T> findMany(Query query) {
		List<T> t;
		t = (List<T>)query.list();
		return t;
	}

	@SuppressWarnings("unchecked")
	public T findOne(Query query) {
		T t;
		t = (T)query.uniqueResult();
		return t;
	}

	@SuppressWarnings({"unchecked", "rawtypes" })
	public T findByPK(Class classname, Serializable pk) {
		Session hibernateSession = this.getSession();
		T t = null;
		t = (T)hibernateSession.get(classname, pk);
		return t;
	}

	@SuppressWarnings("rawtypes")
	public List findAll(Class classname) {
		Session hibernateSession = this.getSession();
		List T = null;
		Query query = hibernateSession.createQuery("from " + classname.getName());
		T = query.list();
		return T;
	}
}
