package com.practice.ngrx.demo.core.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableJpaRepositories(value = "com.practice.ngrx.demo.core.repository")
@EnableTransactionManagement
@EntityScan("com.practice.ngrx.demo.core.domain")
public class RepositoryConfig {
}
