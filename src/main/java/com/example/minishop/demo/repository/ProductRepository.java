package com.example.minishop.demo.repository;

import com.example.minishop.demo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Tutaj możesz dodać dodatkowe metody wyszukiwania, jeśli są potrzebne
}
