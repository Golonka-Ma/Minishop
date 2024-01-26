package com.example.minishop.demo.repository;

import com.example.minishop.demo.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    // Możliwe dodatkowe metody specyficzne dla zamówień
}
