package com.practice.ngrx.demo.core.service;

import com.practice.ngrx.demo.core.domain.User;
import com.practice.ngrx.demo.core.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> saveUsers(List<User> users) {
        return userRepository.save(users);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
