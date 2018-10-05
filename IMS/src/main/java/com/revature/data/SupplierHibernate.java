package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Supplier;
import com.revature.utils.HibernateUtil;

@Component
public class SupplierHibernate implements SupplierDAO {
	@Autowired
	private HibernateUtil hu;

	@Override
	public int addSupplier(Supplier sup) {
		int sa = 0;
		Session ss = hu.getSession();
		Transaction tx = ss.beginTransaction();
		try {
			sa = (int)ss.save(sup);
			tx.commit();
			return sa;
		} catch (Exception e) {
			tx.rollback();
		} finally {
		}
		return sa;
	}

	@Override
	public Supplier getSupplierById(int id) {
		Session ss = hu.getSession();
		return ss.get(Supplier.class, id);
	}

	@Override
	public List<Supplier> getSuppliersCriteria(Supplier sup) {
		Session ss = hu.getSession();
		Query<Supplier> que = ss.createQuery("SELECT s FROM Supplier AS s WHERE sup LIKE s");
		que.setParameter("sup", sup);
		List<Supplier> result = que.getResultList();
		return result;
	}

	@Override
	public Set<Supplier> getSuppliers() {
		Session ss = hu.getSession();
		String hql = "FROM com.revature.beans.Supplier";
		Query<Supplier> que = ss.createQuery(hql, Supplier.class);
		List<Supplier> supplierList = que.getResultList();
		return new HashSet<Supplier>(supplierList);
	}

	@Override
	public void updateSupplier(Supplier sup) {
		Session ss = hu.getSession();
		Transaction tx = ss.beginTransaction();
		try {
			ss.update(sup);
			tx.commit();
		} catch (Exception e) {
			tx.rollback();
		} finally {

		}

	}

	@Override
	public void deleteSupplier(Supplier sup) {
		Session ss = hu.getSession();
		Transaction tx = ss.beginTransaction();
		try {
			ss.delete(sup);
			tx.commit();
		} catch (Exception e) {
			tx.rollback();
		}
	}

	@Override
	public void deleteSupplierById(int id) {
		Session ss = hu.getSession();
		Transaction tx = ss.beginTransaction();
		try {
			ss.delete(ss.get(Supplier.class, id));
			tx.commit();
		} catch (Exception e) {
			tx.rollback();
		}
	}

}
