package com.booklet.authservice.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

//    private final UserRepository userRepository;

//    @GetMapping("/")
//    public ResponseEntity getUserInfo() {
//        HashMap<String, Object> result = new HashMap<>();
//        result =
//    }

//    @PostMapping("/{id}/follow") // 해당 사용자를 팔로우하는 POST 요청
//    public ResponseEntity<?> followUser(@PathVariable Long id, @RequestBody FollowReqDto followReqDto) {
//        Optional<User> optionalUserToFollow = userRepository.findById(id); // 해당 id에 해당하는 사용자를 찾음
//        Optional<User> optionalFollower = userRepository.findByUsername(followReqDto.getUsername()); // 팔로우하는 사용자를 찾음
//
//        if (optionalUserToFollow.isPresent() && optionalFollower.isPresent()) {
//            User userToFollow = optionalUserToFollow.get();
//            User follower = optionalFollower.get();
//            userToFollow.follow(follower);
//            userRepository.save(userToFollow);
//            return ResponseEntity.ok().build();
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//
//        @PostMapping("/{id}/unfollow") // 해당 사용자를 언팔로우하는 POST 요청
//        public ResponseEntity<?> unfollowUser(@PathVariable Long id, @RequestBody Map<String, String> payload) {
//            Optional<User> optionalUserToUnfollow = userRepository.findById(id); // 해당 id에 해당하는 사용자를 찾음
//            Optional<User> optionalFollower = userRepository.findByUsername(payload.get("username")); // 언팔로우하는 사용자를 찾음
//
//            if (optionalUserToUnfollow.isPresent() && optionalFollower.isPresent()) { // 두 사용자가 모두 존재할 경우
//                User userToUnfollow = optionalUserToUnfollow.get();
//                User follower = optionalFollower.get();
//                userToUnfollow.unfollow(follower); // 언팔로우 기능 수행
//                userRepository.save(userToUnfollow); // 데이터베이스에 업데이트
//                return ResponseEntity.ok().build(); // HTTP 200 OK 반환
//            } else {
//                return ResponseEntity.notFound().build(); // HTTP 404 Not Found 반환
//            }
}
