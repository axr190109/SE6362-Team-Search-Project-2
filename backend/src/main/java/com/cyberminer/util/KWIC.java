package com.cyberminer.util;

import java.util.ArrayList;
import java.util.List;

public class KWIC {
    public static List<String> generateCircularShifts(String descriptor) {
        List<String> shifts = new ArrayList<>();
        String[] words = descriptor.split(" ");
        for (int i = 0; i < words.length; i++) {
            shifts.add(String.join(" ", words));
            String first = words[0];
            System.arraycopy(words, 1, words, 0, words.length - 1);
            words[words.length - 1] = first;
        }
        return shifts.stream()
                .sorted()
                .filter(shift -> !shift.matches("^(a|the|of)\\b.*"))
                .toList();
    }
}
