package com.fooddelivery.order_service.controller;

import com.fooddelivery.order_service.dto.OrderDTO;
import com.fooddelivery.order_service.service.OrderService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

    @PostMapping
    public OrderDTO createOrder(@RequestBody OrderDTO dto) {
        return service.createOrder(dto);
    }

    @GetMapping("/{id}")
    public OrderDTO getOrder(@PathVariable Long id) {
        return service.getOrder(id);
    }

    @GetMapping("/customer/{customerId}")
    public List<OrderDTO> getOrdersByCustomer(@PathVariable Long customerId) {
        return service.getOrdersByCustomer(customerId);
    }

    @GetMapping("/restaurant/{restaurantId}")
    public List<OrderDTO> getOrdersByRestaurant(@PathVariable Long restaurantId) {
        return service.getOrdersByRestaurant(restaurantId);
    }

    @PutMapping("/{id}/status")
    public void updateStatus(@PathVariable Long id, @RequestParam String status) {
        service.updateOrderStatus(id, status);
    }
}
