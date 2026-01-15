package com.fooddelivery.user_service.controller;

import com.fooddelivery.user_service.entity.UserProfile;
import com.fooddelivery.user_service.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserProfileController {

    @Autowired
    private UserProfileService userService;

    @PostMapping
    public UserProfile createUser(@RequestBody UserProfile user) {
        return userService.saveUser(user);
    }

    @GetMapping
    public List<UserProfile> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<UserProfile> getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @GetMapping("/role/{role}")
    public List<UserProfile> getUsersByRole(@PathVariable String role) {
        return userService.getUsersByRole(role);
    }
}
