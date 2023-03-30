package com.booklet.authservice.service;

import com.booklet.authservice.dto.FollowReqDto;
import com.booklet.authservice.dto.GetUserInfoResDto;
import com.booklet.authservice.dto.UserTasteReqDto;
import com.booklet.authservice.entity.Follow;
import com.booklet.authservice.entity.Hashtag;
import com.booklet.authservice.entity.User;
import com.booklet.authservice.entity.UserHashtag;
import com.booklet.authservice.repository.FollowRepository;
import com.booklet.authservice.repository.HashtagRepository;
import com.booklet.authservice.repository.UserHashtagRepository;
import com.booklet.authservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final FollowRepository followRepository;
    private final HashtagRepository hashtagRepository;
    private final UserHashtagRepository userHashtagRepository;

//    @Override
    public HashMap<String, Object> findUserInfo(String username) {
        User user = userRepository.findByUsername(username);

        if (user == null) {
            return null;
        }

        // 팔로우
        List<Follow> following = followRepository.findAllByFollowing(user);
        List<Follow> follower = followRepository.findAllByFollower(user);


        try {
            HashMap<String, Object> result = new HashMap<>();
            GetUserInfoResDto getUserInfoResDto = new GetUserInfoResDto().builder()
                            .imgPath("http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTHA8sTYngrF9FsGFcsv_vq3_ULeEG7DvrsIJLohckJnRPw4XBAx-Z9wQ6XOhMc-pzpaijFkpUWC86SKqE")
                            .nickname(user.getNickname())
                            .follower(followRepository.findAllByFollower(user).size())
                            .following(followRepository.findAllByFollowing(user).size())
                            .email(user.getEmail())
                            .build();
            result.put("data",getUserInfoResDto);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public boolean following(FollowReqDto followReqDto) {
        log.info("팔로우 진입");
        User user = userRepository.findByUsername(followReqDto.getUsername());
        User following = userRepository.findByUsername(followReqDto.getFollowingUsername());

        // 유저가 있는지 확인
        if (user == null || following == null) {
            log.info("유저없음");
            return false;
        }
        log.info("user : {}", user.getUsername().toString());
        log.info("following : {}", following.getUsername().toString());
        Follow test = followRepository.findByFollowerAndFollowing(user, following);
        // 팔로우 정보가 있는지 확인
        if (followRepository.findByFollowerAndFollowing(user, following) != null) {
            // 팔로우가 있다면 삭제
            Follow follow = followRepository.findByFollowerAndFollowing(user, following);
            followRepository.delete(follow);
            System.out.println("언팔로우 완료!");

            return true;
        } else {
            // 팔로우가 없다면 팔로우
            Follow follow = new Follow();
            follow.setFollowing(following);
            follow.setFollower(user);
            followRepository.save(follow);
            log.info("팔로우 완료!");

            return true;
        }
    }

    @Override
    public boolean saveUserTaste(UserTasteReqDto userTasteReqDto, String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {return false;}

        List<UserHashtag> userHashtaghashtag = userHashtagRepository.findAllByUserHashtagId(user.getId());
        if (userHashtaghashtag.size()!=0) {return false;}

        List<String> tastes = userTasteReqDto.getTastes();
        for (String taste : tastes) {
            Hashtag hashtag = hashtagRepository.findByHashtagName(taste);
            UserHashtag userHashtag = new UserHashtag();
            userHashtag.setUser(user);
            userHashtag.setHashtag(hashtag);
            userHashtagRepository.save(userHashtag);
        }


        return true;
    }

}
