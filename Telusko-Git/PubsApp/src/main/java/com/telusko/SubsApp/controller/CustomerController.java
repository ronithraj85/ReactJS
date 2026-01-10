package com.telusko.SubsApp.controller;

import com.telusko.SubsApp.model.Customer;
import com.telusko.SubsApp.service.KafkaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {

    @Autowired
    private KafkaService kafkaService;

    @PostMapping("/add-customer")
    public String addCx(@RequestBody Customer customer){
        return kafkaService.AddCxMessage(customer);
    }
}
