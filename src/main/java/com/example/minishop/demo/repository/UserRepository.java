package com.example.minishop.demo.repository;

import com.example.minishop.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Możesz dodać metody do wyszukiwania użytkowników, np. po adresie email
}