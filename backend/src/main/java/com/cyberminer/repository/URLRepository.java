package com.cyberminer.repository;

import com.cyberminer.model.URLDescriptor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface URLRepository extends JpaRepository<URLDescriptor, Long> {
}
