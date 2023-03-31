package com.booklet.authservice.service;

import com.booklet.authservice.dto.FollowReqDto;
import com.booklet.authservice.dto.GetUserInfoResDto;
import com.booklet.authservice.dto.UserTasteReqDto;
import com.booklet.authservice.entity.*;
import com.booklet.authservice.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final FollowRepository followRepository;
    private final HashtagRepository hashtagRepository;
    private final UserHashtagRepository userHashtagRepository;
    private final BookRepository bookRepository;
    private final BookLikesRepository bookLikesRepository;

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
        if (user == null) {
            System.out.println("유저가 없습니다");
            return false;
        }

        List<UserHashtag> userHashtags = userHashtagRepository.findAllByUser(user);
        if (userHashtags.size()!=0) {
            System.out.println("이미 유저 태그가 있어 삭제합니다.");
            for (UserHashtag userHashtag:userHashtags) {
                userHashtagRepository.delete(userHashtag);
            }
        }

        List<String> tastes = userTasteReqDto.getTastes();
        for (String taste : tastes) {
            Hashtag hashtag = hashtagRepository.findByHashtagName(taste);
            if (userHashtagRepository.existsUserHashtagByUserAndHashtag(user, hashtag) == true)
            {System.out.println("이미 존재하는 태그입니다. : "+taste);continue;}

            System.out.println("이번 등록 취향 : " + taste);
            UserHashtag userHashtag = new UserHashtag();
            userHashtag.setUser(user);
            userHashtag.setHashtag(hashtag);
            System.out.println("유저 : " + user.getUsername());
            System.out.println("태그" + hashtag.getHashtagName());
            userHashtagRepository.save(userHashtag);
        }

        return true;
    }

    @Override
    public HashMap<String, Object> saveUserPreferScore(String username) {
        HashMap result = new HashMap();
        User user = userRepository.findByUsername(username);
        System.out.println("취향점수 저장중입니다 : " + user.getUsername());
        if (user == null) { return null;}

        List<UserHashtag> userHashtags = userHashtagRepository.findAllByUser(user);
        float sumPScore = 0;
        float sumNScore = 0;
        for (UserHashtag userHashtag : userHashtags) {
            System.out.println("작업중인 태그 : "+userHashtag.getHashtag().getHashtagName());
            sumPScore += userHashtag.getHashtag().getHashtagPScore();
            sumNScore += userHashtag.getHashtag().getHashtagNScore();
        }
        System.out.println("긍정점수 총합 : "+sumPScore);
        System.out.println("부정점수 총합 : "+sumNScore);

        if (sumNScore > sumPScore) {user.setPreferType("N"); user.setPreferScore(sumNScore);}
        else {user.setPreferType("P"); user.setPreferScore(sumPScore);}
        userRepository.save(user);

        result.put("message", true);
        result.put("type", user.getPreferType());
        result.put("score", user.getPreferScore());
        return result;
    }

    @Override
    public List<Map> findAllHashtags() {
        List<Hashtag> hashtags = hashtagRepository.findAll();
        List<Map> result = new ArrayList<>();
        for(Hashtag hashtag : hashtags) {
            Map<String, Object> tmp = Map.of(
                    "hashtag_name",hashtag.getHashtagName(),
                    "hashtag_id", hashtag.getHashtagId()
                    );
            result.add(tmp);
        }
        return result;
    }

    @Override
    public HashMap<String, Object> findUserLikeBooks(String username, Pageable pageable) {
        User user = userRepository.findByUsername(username);
        if (user == null) {return null;}

        Slice<BookLikes> bookLikes = bookLikesRepository.findAllByUser(user, pageable);

        return null;
    }


}
