package com.practice.ngrx.demo.core.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@Setter
@ToString
@Entity
@Table(name = "user")
public class User {
    @Id
    @SequenceGenerator(name = "user_generator", sequenceName = "user_seq_id", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_generator")
    private Long id;

    private String name;

    private Integer age;
}
