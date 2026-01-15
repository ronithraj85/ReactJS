package com.fooddelivery.user_service.service;

import com.fooddelivery.user_service.entity.UserProfile;
import com.fooddelivery.user_service.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserProfileService {

    @Autowired
    private UserProfileRepository userRepo;

    public UserProfile saveUser(UserProfile user) {
        return userRepo.save(user);
    }

    public List<UserProfile> getAllUsers() {
        return userRepo.findAll();
    }

    public Optional<UserProfile> getUserById(Long id) {
        return userRepo.findById(id);
    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }

    public Optional<UserProfile> findByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    public List<UserProfile> getUsersByRole(String role) {
        return userRepo.findByRole(role);
    }
}
