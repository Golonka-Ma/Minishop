package com.example.minishop.demo.service;

import com.example.minishop.demo.model.Order;
import com.example.minishop.demo.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    public Order updateOrder(Long id, Order orderDetails) {
        return getOrderById(id)
                .map(order -> {
                    // Aktualizacja pól zamówienia
                    // order.set... (aktualizuj pola używając orderDetails)
                    // Na przykład:
                    // order.setStatus(orderDetails.getStatus());
                    // order.setProducts(orderDetails.getProducts());
                    return orderRepository.save(order);
                })
                .orElseThrow(() -> new RuntimeException("Order not found with id " + id));
    }
}
