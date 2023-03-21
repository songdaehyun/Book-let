package com.booklet.paragraphservice.repository;

import com.booklet.paragraphservice.entity.Paragraph;
import com.booklet.paragraphservice.entity.Scrap;
import com.booklet.paragraphservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface ScrapRepository extends JpaRepository<Scrap, Long> {
    @Query("select s.user from Scrap s, UserImage ui where s.paragraph.paragraphId = :paragraphId")
    public ArrayList<User> findTop3ScrapUserImages(Long paragraphId);
    @Query("select count(*) from Scrap s where s.paragraph.paragraphId = :paragraphId")
    public int countByParagraphId(Long paragraphId);
    public Optional<Scrap> findByUserAndParagraph(User user, Paragraph paragraph);
    @Query("select s from Scrap s where s.paragraph.paragraphId=:paragraphId and s.user.userId=:userId")
    public Optional<Scrap> findByUserIdAndParagraphId(Long userId, Long paragraphId);
}
