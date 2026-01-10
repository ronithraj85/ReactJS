package com.telusko.SubsApp.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Customer {
    private Integer id;
    private String name;
    private String city;
}
