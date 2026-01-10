package com.telusko.PubsApp.controller;

import com.telusko.PubsApp.model.Customer;
import com.telusko.PubsApp.service.KafkaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
