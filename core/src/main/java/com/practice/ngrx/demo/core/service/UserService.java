package com.practice.ngrx.demo.core.service;

import com.practice.ngrx.demo.core.domain.User;

import java.util.List;

public interface UserService {
    List<User> saveUsers(List<User> users);
    List<User> getUsers();
}
