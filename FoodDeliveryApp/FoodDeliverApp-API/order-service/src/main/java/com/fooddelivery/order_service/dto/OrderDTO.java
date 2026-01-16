package com.fooddelivery.order_service.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDTO {
    private Long id;
    private Long customerId;
    private Long restaurantId;
    private String item;
    private int quantity;
    private String status;
}
