package com.fooddelivery.order_service.service;

import com.fooddelivery.order_service.dto.OrderDTO;
import com.fooddelivery.order_service.entity.Order;
import com.fooddelivery.order_service.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository repository;

    public OrderServiceImpl(OrderRepository repository) {
        this.repository = repository;
    }

    @Override
    public OrderDTO createOrder(OrderDTO dto) {
        Order order = Order.builder()
                .customerId(dto.getCustomerId())
                .restaurantId(dto.getRestaurantId())
                .item(dto.getItem())
                .quantity(dto.getQuantity())
                .status("PENDING")
                .createdAt(LocalDateTime.now())
                .build();
        return toDTO(repository.save(order));
    }

    @Override
    public OrderDTO getOrder(Long id) {
        return repository.findById(id).map(this::toDTO).orElse(null);
    }

    @Override
    public List<OrderDTO> getOrdersByCustomer(Long customerId) {
        return repository.findByCustomerId(customerId).stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public List<OrderDTO> getOrdersByRestaurant(Long restaurantId) {
        return repository.findByRestaurantId(restaurantId).stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public void updateOrderStatus(Long id, String status) {
        repository.findById(id).ifPresent(order -> {
            order.setStatus(status);
            repository.save(order);
        });
    }

    private OrderDTO toDTO(Order order) {
        return OrderDTO.builder()
                .id(order.getId())
                .customerId(order.getCustomerId())
                .restaurantId(order.getRestaurantId())
                .item(order.getItem())
                .quantity(order.getQuantity())
                .status(order.getStatus())
                .build();
    }
}
