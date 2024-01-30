package com.example.minishop.demo.model;
import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String img;
    @Column(nullable = false)
    private String price;

    public Product(String name, String price, String img) {
        this.name = name;
        this.img = img;
        this.price = price;
    }

    public Product() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImg() { return img; }

    public void setImg(String img) {
        this.img = img;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() { return price;}

    public void setPrice(String price) {
        this.price = price;
    }
}


