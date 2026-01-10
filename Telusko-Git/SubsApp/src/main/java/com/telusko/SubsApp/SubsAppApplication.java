package com.telusko.SubsApp;

import com.telusko.SubsApp.util.AppConstants;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.KafkaListener;

@SpringBootApplication
public class SubsAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SubsAppApplication.class, args);
	}

	@KafkaListener(topics = AppConstants.TOPIC_NAME,groupId="group_telusko_customer")
	public void subscribeMessage(String cxData){
		System.out.println("Message received from Kafka server.");
		System.out.println(cxData);
	}
}
