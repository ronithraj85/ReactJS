package com.fooddelivery.auth_service.service;

import com.fooddelivery.auth_service.dto.AuthRequest;
import com.fooddelivery.auth_service.dto.AuthResponse;
import com.fooddelivery.auth_service.util.JwtUtil;
import com.fooddelivery.user_service.entity.UserProfile;
import com.fooddelivery.user_service.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserProfileRepository userRepo;

    @Autowired
    private JwtUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserProfile register(UserProfile user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    public AuthResponse login(AuthRequest request) {
        Optional<UserProfile> userOpt = userRepo.findByEmail(request.getEmail());
        if (userOpt.isPresent()) {
            UserProfile user = userOpt.get();
            if (passwordEncoder.matches(request.getPassword(), user.getPassword())) {
                String token = jwtUtil.generateToken(user.getEmail(), user.getRole());
                return new AuthResponse(token);
            }
        }
        throw new RuntimeException("Invalid credentials");
    }
}
