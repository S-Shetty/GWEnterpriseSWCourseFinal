package com.example.devopswebapp;

import jakarta.persistence.*;
import lombok.*;

import static jakarta.persistence.GenerationType.*;

@Entity
@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    int id;
    String name;
    String email;
    boolean active;


    public User(String name, String email, boolean active) {
        this.name = name;
        this.email = email;
        this.active = active;
    }
}
