package com.example.backproject.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//0808 김가영 새로고침시 404에러방지
@Controller
public class ErrorController implements org.springframework.boot.web.servlet.error.ErrorController {
    // url 직접 접근할 경우 대체 경로 추가
    private final String ERROR_PATH = "/error";

    @GetMapping(ERROR_PATH)
    public String redirectRoot(){
        return "forward:/index.html";
    }

    public String getErrorPath(){
        return null;
    }
}
