package com.practice.ngrx.demo.config;

import com.practice.ngrx.demo.filter.CORSResponseFilter;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
public class JerseyServerConfig extends ResourceConfig {

    public JerseyServerConfig() {
        packages("com.practice.ngrx.demo.rest");

        Set<Class<?>> configurations = new HashSet<>();
        configurations.add(CORSResponseFilter.class);

        registerClasses(configurations);
    }
}
