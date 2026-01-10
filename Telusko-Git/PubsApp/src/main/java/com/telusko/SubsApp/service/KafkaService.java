package com.telusko.SubsApp.service;

import com.telusko.SubsApp.model.Customer;
import com.telusko.SubsApp.util.AppConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaService {

    @Autowired
    private KafkaTemplate<String, Customer> kafkaTemplate;

    public String AddCxMessage(Customer cx){
        kafkaTemplate.send(AppConstants.TOPIC_NAME,cx);
        return "Customer Data added into Kafka server";
    }
}
