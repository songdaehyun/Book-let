package com.booklet.authservice.service;

import com.booklet.authservice.dto.FollowReqDto;
import com.booklet.authservice.dto.GetUserInfoResDto;
import com.booklet.authservice.entity.Follow;
import com.booklet.authservice.entity.User;
import com.booklet.authservice.entity.UserImg;
import com.booklet.authservice.repository.FollowRepository;
import com.booklet.authservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    public String test(){
        return "test";

//    private final UserRepository userRepository;
//    private final FollowRepository followRepository;

//    @Override
//    public HashMap<String, Object> findUserInfo(String username) {
//        User user = userRepository.findByUsername(username);
//
//        if (user == null) {
//            return null;
//        }
//
//        // 팔로우
//        List<Follow> following = followRepository.findAllByFollowing(user.getId());
//        List<Follow> follower = followRepository.findAllByFollower(user.getId());
//
//
//
//        try {
//            HashMap<String, Object> result = new HashMap<>();
//            GetUserInfoResDto getUserInfoResDto = new GetUserInfoResDto().builder()
//                            .imgPath("http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTHA8sTYngrF9FsGFcsv_vq3_ULeEG7DvrsIJLohckJnRPw4XBAx-Z9wQ6XOhMc-pzpaijFkpUWC86SKqE")
//                            .nickname(user.getNickname())
//                            .follower(100)
//                            .following(100)
//                            .build();
//            result.put("data",getUserInfoResDto);
//            return result;
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return null;
    }

//    @Override
//    public boolean following(FollowReqDto followReqDto) {
//        User user = userRepository.findByUsername(followReqDto.getUsername());
//        User following = userRepository.findByUsername(followReqDto.getFollowingUsername());
//
//        // 유저가 있는지 확인
//        if (user == null || following == null) { return false; }
//
//        // 팔로우 정보가 있는지 확인
//        if (followRepository.findByFollowerAndFollowing(user.getId(), following.getId()) == null){ return false; }
//
//        // 팔로우
//        Follow follow = new Follow();
//        follow.setFollowing(following);
//        follow.setFollower(user);
//        followRepository.save(follow);
//        System.out.println("팔로우 완료!");
//
//        return true;
//    }




}
