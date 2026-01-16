package com.fooddelivery.order_service.service;

import  com.fooddelivery.order_service.dto.OrderDTO;
import java.util.List;

public interface OrderService {
    OrderDTO createOrder(OrderDTO orderDTO);
    OrderDTO getOrder(Long id);
    List<OrderDTO> getOrdersByCustomer(Long customerId);
    List<OrderDTO> getOrdersByRestaurant(Long restaurantId);
    void updateOrderStatus(Long id, String status);
}
