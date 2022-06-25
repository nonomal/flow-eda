package com.flow.eda.oauth2.user;

import com.flow.eda.common.exception.FlowException;
import com.flow.eda.common.exception.InternalException;
import com.flow.eda.common.exception.MissingPropertyException;
import com.flow.eda.common.http.ApiError;
import com.flow.eda.common.http.Result;
import lombok.extern.slf4j.Slf4j;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@Slf4j
@RestController
public class UserController {
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private OauthUserMapper oauthUserMapper;

    @Value("${flow.oauth2.client_id}")
    private String clientId;

    @Value("${flow.oauth2.client_secret}")
    private String clientSecret;

    @Value("${flow.oauth2.authorities}")
    private String authorities;

    @PostMapping("/oauth/register")
    public Result<String> userRegister(@RequestBody Document request) {
        String username = request.getString("username");
        if (username == null) {
            throw new MissingPropertyException("username");
        }
        String password = request.getString("password");
        if (password == null) {
            throw new MissingPropertyException("password");
        }
        Object exist = oauthUserMapper.existUsername(username);
        if (exist != null) {
            throw new FlowException(
                    HttpStatus.BAD_REQUEST, ApiError.RESOURCE_ALREADY_EXISTS, "用户名已存在");
        }
        // 创建用户，保存
        try {
            OauthUser user = new OauthUser();
            user.setUsername(username);
            user.setPassword(passwordEncoder.encode(password));
            user.setClientId(clientId);
            user.setAuthorities(authorities);
            user.setStatus(true);
            user.setCreateDate(new Date());
            user.setUpdateDate(new Date());
            oauthUserMapper.insert(user);
            log.info("Register user {} success", username);
        } catch (Exception e) {
            log.error("Register user {} failed: {}", username, e.getMessage());
            throw new InternalException(e.getMessage());
        }
        return Result.ok();
    }

    @GetMapping("/oauth/client")
    public Result<Document> getClientInfo() {
        return Result.of(new Document("clientId", clientId).append("clientSecret", clientSecret));
    }
}