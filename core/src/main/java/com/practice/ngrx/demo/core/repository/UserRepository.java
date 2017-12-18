package com.practice.ngrx.demo.core.repository;

import com.practice.ngrx.demo.core.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
