package com.revature.data;

import java.util.Set;

import com.revature.beans.User;

public interface UserDAO {
	public int addUser(User user);
	//get
	public User getUserById(int id); 
	public Set<User> getUsersCriteria();
	public Set<User> getUsers();
	public User getUserLogin(String email, String password);
	public void updateUser(User user);
	public void deleteUser(User user);
}
