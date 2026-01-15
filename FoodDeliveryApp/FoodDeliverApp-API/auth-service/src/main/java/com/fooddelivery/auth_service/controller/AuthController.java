package com.fooddelivery.auth_service.controller;

import com.fooddelivery.auth_service.dto.AuthRequest;
import com.fooddelivery.auth_service.dto.AuthResponse;
import com.fooddelivery.auth_service.service.AuthService;
import com.fooddelivery.user_service.entity.UserProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public UserProfile register(@RequestBody UserProfile user) {
        return authService.register(user);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        return authService.login(request);
    }
}
