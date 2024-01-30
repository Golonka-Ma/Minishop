package com.example.minishop.demo.controller;

import com.example.minishop.demo.model.Product;
import com.example.minishop.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return productService.getProductById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    @RequestMapping(consumes = {"application/json"})
    public Product addProduct(@RequestBody Product product) throws URISyntaxException {
        System.out.println(product);
        return productService.saveProduct(product);
        //return ResponseEntity.created(new URI("/")).body(prod);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        return productService.getProductById(id)
                .map(product -> {
                    product.setName(productDetails.getName());
                    product.setPrice(productDetails.getPrice());
                    product.setImg(productDetails.getImg());
                    return ResponseEntity.ok(productService.saveProduct(product));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
